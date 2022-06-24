var rd=[
	'ŠŠYW9ebd2Dqt8ΦΦ',
	'ηηi95FyBaEqt8ΨΨ',
	'дSWj3FncEqt8ζ',
	'ЮkGYE5nfEqt8ㄍㄍ',
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
