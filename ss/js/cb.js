var rd=[
	'c:/EynggQR65mh',
	'b:/h3aSPxS65Jx',
	'b:/lGr36s465HL',
	'K:/ZeO9CjX65wQ',
	'E:/ldgM1Mp65r4',
];
var vl = document.getElementById('cb').getAttribute('data-vl');
new ClipboardJS(vl,{
	text:()=>{
		return rd[Math.floor(Math.random()*rd.length)];
	}
}).on('success', function(e) {
	console.info('Action:', e.action);
	console.info('Text:', e.text);
	console.info('Trigger:', e.trigger);
});
