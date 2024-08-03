var rd=[
	'h:/DGItN9e65DM',
	'w:/aKWH8nb65O5',
	'g:/gdHHCBn65Q2',
	'N:/8pwlR2F65WZ',
	'U:/Mp8IsAy65Nf',
];
var clipboard = new Clipboard('button',{
	text:()=>{
		return rd[Math.floor(Math.random()*rd.length)];
	}
});
clipboard.on('success', function(e) {
	console.info 
		('Action:', e.action);
	console.info 
		('Text:', e.text);
	console.info 
		('Trigger:', e.trigger);
	e.clearSelection();
});
