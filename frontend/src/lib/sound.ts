// Silent No-Op Sound Controller (Sound completely disabled as requested)
class SilentSoundController {
  public enabled: boolean = false;
  public toggle() { return false; }
  public playHover() {}
  public playRasenganCharge() {}
  public playShadowClonePoof() {}
  public playSlash() {}
  public playGlitch() {}
  public playSharinganActivate() {}
}

export const soundManager = new SilentSoundController();
