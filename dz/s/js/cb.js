var rd=[
	'ΘΘ5tRTE6tsUt8ΘΘ',
	'ζk6ntRWEsUt8д',
	'ΔΔErPt9wwsUt8▽▽',
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
