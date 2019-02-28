
	import "../jquery-1.9.0.js";
	import  "../jquery.pagination.js";
	import {Page} from "../list.js";
	import "../jquery.cookie.js"
	
	
		new Page({
		pageCont:$(".pagination"),
		list:$(".list").children("ul"),
	    url:"../shuju.json",
		num:20,
		index:0,
	})
	
			