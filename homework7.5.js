//Задание 5.
class ElectricalAppliance {
	constructor(name) {
		this.device = 'household electrical appliance';
		this.name = name;
	}
	getPowerConsumption (power, t, on) {
		let turnOn = on;
		if(on === 1){
			turnOn = 'Вкл';
		}else{
			turnOn = 'Выкл';
		};
		console.log(`Расход эл. энергии ${this.name} - (${this.color}) за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
	}
}
class Characteristic extends ElectricalAppliance {
	constructor (name, color) {
		super(name);
		this.color = color;
	}
}
const teapot = new Characteristic ('PC', 'colorful');
const fridge = new Characteristic ('Lamp', 'white');
const luminaire = new Characteristic ('Conditioner', 'black');
console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(1450, 2);
fridge.getPowerConsumption(125, 6, 1);
luminaire.getPowerConsumption(1280, 5, 1):
