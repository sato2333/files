var rd=[
	'1 b:/ 每苦河弟且然河但桒',
	'3 u:/ 神知星忽类然河但柡',
	'7 q:/ 急算岁戴种然河但耉',
	'8 z:/ 世结收哪才走河但揑',
	'7 t:/ 立块类破张走河但并',
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
