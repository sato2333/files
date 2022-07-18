var rd=[
	'ΦΦpQwAto7B5u8ξ',
	'ζdEZikM9B5u8ё',
	'ζ6ijbLpaB5u8￠￠',
];
var clipboard = new Clipboard('a',{
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
