const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Dynamic CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:4173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        return callback(null, true);
      }
      return callback(null, true); // Permissive for easy hosting
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json());

// Request logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Pranay Ogale Portfolio API',
    theme: 'Naruto Uzumaki // Kurama Sage Edition',
    endpoints: {
      health: '/api/health',
      contact: 'POST /api/contact',
    },
  });
});

// Health check endpoint (for Render / Railway / UptimeRobot / AWS)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

const fs = require('fs');
const path = require('path');
const TRANSMISSIONS_FILE = path.join(__dirname, 'transmissions.json');

// Helper to save transmission locally
const saveTransmissionLocally = (transmission) => {
  try {
    let existing = [];
    if (fs.existsSync(TRANSMISSIONS_FILE)) {
      const data = fs.readFileSync(TRANSMISSIONS_FILE, 'utf-8');
      existing = JSON.parse(data || '[]');
    }
    existing.unshift({ id: Date.now(), timestamp: new Date().toISOString(), ...transmission });
    fs.writeFileSync(TRANSMISSIONS_FILE, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error('Could not save transmission locally:', err);
  }
};

// Contact transmission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, role, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, and message are required.',
      });
    }

    console.log('--- NEW TRANSMISSION RECEIVED ---');
    console.log(`Sender: ${name} <${email}>`);
    console.log(`Role / Intent: ${role || 'Not specified'}`);
    console.log(`Message: ${message}`);
    console.log('---------------------------------');

    // Save locally
    saveTransmissionLocally({ name, email, role, message });

    // Optional Nodemailer dispatch if SMTP configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: process.env.SMTP_SERVICE || 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${process.env.SMTP_USER}>`,
          to: process.env.RECIPIENT_EMAIL || 'pranayogale7@gmail.com',
          replyTo: email,
          subject: `⚡ Portfolio Transmission: ${name} (${role || 'Recruitment'})`,
          text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0f0a06; color: #f8fafc; border-radius: 8px;">
              <h2 style="color: #f97316; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">⚡ New Portfolio Inquiry</h2>
              <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
              <p><strong>Opportunity / Role:</strong> ${role || 'General Inquiry'}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #1c140e; border-left: 4px solid #f97316; border-radius: 4px;">
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
            </div>
          `,
        });
        console.log('Email sent successfully via SMTP.');
      } catch (smtpErr) {
        console.error('SMTP delivery warning (logged payload to console):', smtpErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Transmission successfully received and processed.',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Transmission error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while processing transmission.',
    });
  }
});

// View all saved transmissions endpoint (Private)
app.get('/api/transmissions', (req, res) => {
  try {
    if (fs.existsSync(TRANSMISSIONS_FILE)) {
      const data = fs.readFileSync(TRANSMISSIONS_FILE, 'utf-8');
      return res.json({ success: true, count: JSON.parse(data).length, transmissions: JSON.parse(data) });
    }
    return res.json({ success: true, count: 0, transmissions: [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`⚡ Portfolio Server active on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
});
