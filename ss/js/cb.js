var rd=[
	'0:/ㄍㄍ4wrD9ZBXKMdD8ŠŠ',
	'0:/ÑÑ2vCvXB5rFXMdD8ππ',
	'0:/ΔΔgjPiqvvWTgNdD8ΦΦ',
	'5:/ΔΔLGaRnfZcpcNdD8ÑÑ',
	'2:/̀￠￠ZXaHzt0qNdD8ΘΘ',
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
