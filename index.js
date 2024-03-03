class Kits {
    constructor(name, color) {
      this.name = name || 'Kitty';
      this.color = color || 'Gray';
      this.energyLevel = 100;
    }
  
    play() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} the Kitty is playing with a ball of yarn!`);
        this.energyLevel -= 15;
      } else {
        console.log(`${this.name} is too tired to play.`);
      }
      this.displayEnergy();
    }
  
    sleep() {
      console.log(`${this.name} the Kitty is taking a catnap.`);
      this.energyLevel = 100;
      this.displayEnergy();
    }
  
    displayEnergy() {
      console.log(`${this.name}'s energy level: ${this.energyLevel}`);
    }
  }
  
  // Example usage
  const cuteKitty = new Kits('Whiskers', 'Orange');
  const playfulKitty = new Kits('Mittens', 'White');
  
  cuteKitty.play();
  playfulKitty.sleep();
  