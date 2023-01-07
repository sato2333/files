var rd=[
	'9 a:/ 声解叔名些听究但杍',
	'9 a:/ 由见屋眼菜于究但燥',
	'4 y:/ 并名更就结于究但毓',
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
