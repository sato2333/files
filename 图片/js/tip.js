﻿$(function(){
	setTimeout(function(){
		$("#box").show();
		setTimeout(function(){
			$("#box").hide();
		},5000);
		$("#tip").show();
		setTimeout(function(){
			$("#tip").hide();
		},5000);
	},1000);
});