var rd=[
	'ΔΔMQacRo1out8ё',
	'ÊÊUJAxa98out8ÄÄ',
	'ΔΔEG2FZJbout8ΦΦ',
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
