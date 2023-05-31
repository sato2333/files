var rd=[
	'7:/ ΔΔlSxAFlDOLC8ㄍㄍ',
	'0:/ ππc7SuHMgQOLC8ÑÑ',
	'1:/ ΔΔxTY1W4lPLC8ππ',
	'5-:/ ▽▽l8NHSsypPLC8ŠŠ',
	'5-Y-:/ ΔΔLOAiDowPLC8ηη',
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
