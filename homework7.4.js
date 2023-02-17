//Задание 4.

function ElectricalAppliance(name) {
	this.device = 'household electrical appliance',
	this.name = name
}
ElectricalAppliance.prototype.getPowerConsumption = function (power, t, on) {
	let turnOn = on;
	if(on === 1){
		turnOn = 'Вкл';
	}else{
		turnOn = 'Выкл';
	};
	console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
};
function Characteristic(name, color) {
	this.name = name,
	this.color = color
}
Characteristic.prototype = new ElectricalAppliance();
const teapot = new Characteristic ('PC', 'Colorful');
const fridge = new Characteristic ('Lamp', 'Whitr');
const luminaire = new Characteristic ('Conditioner', 'green');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(1450, 2);
fridge.getPowerConsumption(125, 6, 1);
luminaire.getPowerConsumption(1280, 5, 1);
