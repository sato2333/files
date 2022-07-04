var rd=[
	'ÄÄrUCB9HjaIt8▽▽',
	'ωωUia62vlaIt8ΘΘ',
	'ÑÑl53yy8naIt8▽▽',
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
