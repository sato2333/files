var rd=[
	'1960943592',
	'8925196065',
	'17410527397725',
	'X9XcafC2bngOAmv',
	'4082af11-c623-4d43-9f70-ae5df4c8358a',
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
