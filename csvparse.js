const csv = require('csv');
const fs = require('fs');

var allStars = [
	'LeBron James\\jamesle01',
	'DeMarcus Cousins\\couside01',
	'Anthony Davis\\davisan02',
	'Kevin Durant\\duranke01',
	'Kyrie Irving\\irvinky01',
	'LaMarcus Aldridge\\aldrila01',
	'Bradley Beal\\bealbr01',
	'Goran Dragic\\dragigo01',
	'Andre Drummond\\drumman01',
	'Paul George\\georgpa01',
	'Kevin Love\\loveke01',
	'Victor Oladipo\\oladivi01',
	'Kristaps Porzingis\\porzikr01',
	'Kemba Walker\\walkeke02',
	'John Wall\\walljo01',
	'Russell Westbrook\\westbru01',
	'Giannis Antetokounmpo\\antetgi01',
	'Stephen Curry\\curryst01',
	'DeMar DeRozan\\derozde01',
	'Joel Embiid\\embiijo01',
	'James Harden\\hardeja01',
	'Jimmy Butler\\butleji01',
	'Draymond Green\\greendr01',
	'Al Horford\\horfoal01',
	'Damian Lillard\\lillada01',
	'Kyle Lowry\\lowryky01',
	'Klay Thompson\\thompkl01',
	'Karl-Anthony Towns\\townska01'
];

var ret = []
fs.readFile('2018playerdata.csv', 'utf8', (err, data) => {
	csv.parse(data, {columns: true}, (err, data) => {
		ret = data.map((obj) => {
			if (allStars.includes(obj.Player)) {
				return {
					input:{
						fgpercent: obj['FG%'],
						threept: obj['3P'],
						effectiveFG: obj['eFG%'],
						ft: obj['FT%'],
						reb: obj.TRB,
						ast: obj.AST,
						stl: obj.STL,
						blk: obj.BLK,
						to: obj.TOV,
						pts: obj['PS/G']
					},
					output:{allStar: 1}
				};
			} else {
				return {
					input:{
						fgpercent: obj['FG%'],
						threept: obj['3P'],
						effectiveFG: obj['eFG%'],
						ft: obj['FT%'],
						reb: obj.TRB,
						ast: obj.AST,
						stl: obj.STL,
						blk: obj.BLK,
						to: obj.TOV,
						pts: obj['PS/G']
					},
					output:{allStar: 0}
				};
			}
		}); 
		fs.writeFile('revised.js', JSON.stringify(ret), 'utf8', (err) => {
				if (err) console.log(err);
				console.log('file is done')
		})
	});
});
