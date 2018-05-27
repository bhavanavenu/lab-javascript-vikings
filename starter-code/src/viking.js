// Soldier
function Soldier(healthArg, strengthArg) {
    this.health=healthArg
    this.strength=strengthArg
}
//attack method
Soldier.prototype.attack=function(){
    return this.strength;
}
//receiveDamage method
Soldier.prototype.receiveDamage= function(damage){
this.health -= damage;
}

// Viking
function Viking(nameArg,healthArg,strengthArg) {
 
  Soldier.call(this,healthArg,strengthArg);
  this.name=nameArg;
} 
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

//receiveDamage method
function receiveDamage(damage){
  this.health-=damage;

  if(this.health>0)
  {
    return this.name + "has received " + damage + " points of damage";
  }
  return this.name + " has died in act of combat ";

}
//battle cry method 
 
Viking.prototype.battlecry = function () {
  return "Odin Owns You All!"
}

// Saxon
function Saxon(healthArg,strengthArg) {

Soldier.call(this.healthArg,strengthArg);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

//receive receiveDamage
function receiveDamage(damage){
this.health-=damage;
  if(this.health>0)
  {
    return  "A Saxon has received DAMAGE points of damage";
  }
  return "A Saxon has died in combat"

}

// War
//function War() {}
