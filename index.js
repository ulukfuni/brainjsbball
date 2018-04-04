// import brain from 'brain.js';
const brain = require('brain.js');
const data = require('./revised');
const net = new brain.NeuralNetwork();

net.train(data, {
	log: true,
	iterations: 1000
});

var lonzoBall = {
	fgpercent: '.360',
	threept: '1.7',
	effectiveFG: '.440',
	ft: '0.6',
	reb: '6.9',
	ast: '7.2',
	stl: '1.7',
	blk: '0.8',
	to: '2.6',
	pts: '10.2'
};
var justiceWinslow = {
	fgpercent: '.422',
	threept: '0.8',
	effectiveFG: '.476',
	ft: '0.9',
	reb: '5.4',
	ast: '2.1',
	stl: '0.8',
	blk: '0.5',
	to: '1.1',
	pts: '7.5'
};
var devinBooker = {
	fgpercent: '.432',
	threept: '2.7',
	effectiveFG: '.501',
	ft: '5.4',
	reb: '4.5',
	ast: '4.7',
	stl: '0.9',
	blk: '0.3',
	to: '3.6',
	pts: '100.9'
};
var output = net.run(lonzoBall)

console.log('lonzoBall', output);