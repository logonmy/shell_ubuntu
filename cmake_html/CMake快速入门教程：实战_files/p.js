var debug = false;
var has_effect=true;//$(".class_effect").size()>0;
var every_action_do_effect=true;
function fix_product_img(img)
{
	var adjust_target=img.parent();
	var p=img.parents("div").eq(0);
	var w=p.width();
	var h=p.height();
	
	var iw=img.width();
	var ih=img.height();
	if(iw/ih==w/h)
	{
		
	}
	else 
	{
		adjust_target.css("position","absolute").css("display","block");
		img.removeClass("height").removeClass("width");
		
		if(iw/ih>w/h)
		{
			
			var rh=h;
			var rw=iw/ih*rh;
			delta=(rw-w)/2;
			adjust_target.css("left",-delta+"px");
			img.css("height",rh+"px");
		}
		else
		{
			var rw=w;
			var rh=rw*ih/iw;
			delta=(rh-h)/2;
			adjust_target.css("top",-delta+"px");
			img.css("width",rw+"px");
		}
	}
}
function set_opacity(tars, opacity) {

	tars.each(function() {
		
		
		
		tar=$(this);
		if (opacity == null) {
			opacity = tar.attr("last_opacity");
		}
		if (opacity == null) {
			opacity = 1;
		}

		var last_opacity = tar.css('opacity');

		if (last_opacity != null && last_opacity > 0) {
			tar.attr('last_opacity', last_opacity);
		}
		
	

		tar.css("opacity", opacity);
		var v = "alpha(opacity=" + (opacity * 100) + ");";
		if (opacity == "") {
			v = "";
		}
		
		edit_css(tar, "filter", v);

	});
}
function get_fujia()
{
	var tar= $(".parent_add_1_inner");
	tar.addClass("before_show");
	return tar;
}

function edit_css(tar, attr, value) {
	var style = tar.attr("style");
	if (style == null) {
		style = "";
	}
	var r = new RegExp(attr + ":[^;]+?;", "g");
	if (style.match(r)) {
		style = style.replace(r, "");
	}
	if (value != "" && value != null) {
		style = style + ";" + attr + ":" + value + ";";
	}
	tar.attr("style", style);
}

function bind_class_product_show() {
	if ($(".parent_add_1_inner").size() > 0 && fujia_add!=1) {
		$(".parent_add_1_inner").get(0).onmouseleave = function() {
			$(this).hide();
		};
	}

	$(".class_mouse_effect").hover(function() {

		var pid = get_pid($(this));
		var product_id = get_now_id($(this));
		var target_attr = $(this).attr("effect_target");
		var target = $(this);

		if (target_attr == "fujia") {
			target = $(".parent_add_1_inner");
		} else if (target_attr == "self") {
			target = $(this);
		} else {
			target = $("div[group='" + target_attr + "']");
		}
		
		target.each(function() {
			
			put_data_into_html($(this), $(this), product_id);
			
		});
		var effect_in = $(this).attr("myeffect_in");
	
		eval(effect_in);
		
		// $(".class_product_show").show().removeClass("class_hide1");
		//
		// // alert("size="+$(".class_product_show_one[pid='"+pid+"']").size());
		// $(".class_product_show_one[pid='"+pid+"']").show().removeClass("class_hide1");

	}, function() {

		var target_attr = $(this).attr("effect_target");
		var target = $(this);

		if (target_attr == "fujia") {
			target = $(".parent_add_1_inner");
			return;
		} else if (target_attr == "self") {
			target = $(this);
		} else {
			target = $("div[group='" + target_attr + "']");
		}

		var effect_out = $(this).attr("myeffect_leave");
		eval(effect_out);

		// var pid=get_pid($(this));
		// // alert(pid);
		// $(".class_product_show").hide().addClass("class_hide1");
		// $(".class_product_show_one[pid='"+pid+"']").hide().addClass("class_hide1");
	});
}

function bind_class_product_show_old() {
	$(".product_a").hover(function() {
		var pid = get_pid($(this));
		var product_id = get_now_id($(this));
		put_data_into_html($(".class_product_show"), $(".class_product_show"), product_id);
		$(".class_product_show").show().removeClass("class_hide1");

		// alert("size="+$(".class_product_show_one[pid='"+pid+"']").size());
		$(".class_product_show_one[pid='" + pid + "']").show().removeClass("class_hide1");

	}, function() {
		var pid = get_pid($(this));
		// alert(pid);
		$(".class_product_show").hide().addClass("class_hide1");
		$(".class_product_show_one[pid='" + pid + "']").hide().addClass("class_hide1");
	});
}

function get_pid(tar) {
	var pid = parseInt(tar.attr("pid"));
	if (isNaN(pid)) {
		pid = parseInt(tar.parents("div").eq(0).attr("pid"));
	}
	if (isNaN(pid)) {
		pid = 1;
	}
	return pid;
}

function get_products_num() {
	var h = $("#set_div").html();
	if (h == null) {
		return 0;
	}
	var m = h.match(/<!--products_num_area start-->([\s\S]*?)<!--products_num_area end-->/);
	return m[1];
}

function get_now_id_for_pid(pid)
{
	var product_num = get_products_num();
	var page = swiper1.get_now_page();
	var now_id = parseInt(page * product_num) + pid - 1;
	return now_id;
}
function get_now_id(tar) {
	var pid = get_pid(tar);
	return get_now_id_for_pid(pid);
}
var d1=null;
var d2=null;

function put_data_into_html(source, target, product_id) {
	var base_html = get_base_html(source);
	if (debug) {
		d1=base_html;
	}

	var h = base_html;
	if (h == null) {
		return;
	}
	h = h.replace(/\&amp;/g, "&");
	h = h.replace(/\&gt;/g, ">");
	h = h.replace(/\&lt;/g, "<");
	h = h.replace(/\[lng\[/g, "{{");
	h = h.replace(/\]lng\]/g, "}}");
	
	
	if (product_id != -1) {
		h = h.replace(/lists\[([\s\S]*?)\]/g, "lists[" + product_id + "]");
	}
	if (debug) {
		d2=h;
	}
	// h=h.replace(/lists\[i/g,"lists["+pid);
	// h=h.replace(/\{\{i\}\}/g,"{{"+pid+"}}");

	var rand = Math.floor(Math.random(0, 1000000000) * 1000000000);
	var put_id = "put_html_" + rand;
	
	$("body").append("<script type='text/html'  id='" + put_id + "' style='display:none;' >"+h+"</script>");
	//alert($("#" + put_id).size());

	//$("#" + put_id).append(h);

	var h1 = template(put_id, data);
	h1=h1.replace(/(src|SRC|href|HREF)[ ]*?=[ ]*?('|")([^'"]+?)(https|HTTPS|http|HTTP)(:\/\/)/g,"$1=$2$4$5");
	
	$("#" + put_id).remove();

	if (debug) {
		alert("h1=" + h1);
	}
	
	// $(id1).html(h1);
	var put = h1 + "<div class='inner_html'>" + base_html + "</div>";
	target.html(put);
}

function get_base_html(tar) {
	if (tar.find(".inner_html").size() == 0) {
		var h=tar.html();
		tar.html("<script type='text/html' class='inner_html'>"+h+"</script>");
	}
	
	var a= tar.find(".inner_html").html();
	
	return a;
}

function show_add_lay_by_pid(pid)
{
	var pruducts_num=get_products_num();
	if(pid==null)
	{
		pid=1+ Math.floor(Math.random()*(pruducts_num-1));
		if(pid==0)
		{
			pid=1;
		}
	}
	var product_id=get_now_id_for_pid(pid);
	var add=1;
	var id = ".parent_add_" + add + "_inner";

	// var id1 = id + "_show";
	//alert($(id).html());
	put_data_into_html($(id), $(id), product_id);
	//alert($(id).html());
	
	$(id).show();
	swiper1.clear_time();
	// $(id1).fadeIn(300);
	// // $(id1).hover(function(){},
	// // function(){
	// // $(id1).fadeOut(300);
	// //
	// // }
	// // );
	// $(id1).get(0).onmouseleave = function(event) {
// 
		// event.stopPropagation();
		// event.preventDefault();
		// // event.stopPropagation();
		// $(id1).fadeOut(300);
		// return false;
	// };
}
function show_add_lay(add, tar) {
	var pid = get_pid(tar);
	show_add_lay_by_pid(pid);
	// var h=$(id).html();
	// h=h.replace(/\[\[/g,"{{");
	// h=h.replace(/\]\]/g,"}}");
	// if(now_id!=-1)
	// {
	// h=h.replace(/lists\[([\s\S]*?)\]/g,"lists["+now_id+"]");
	// }
	// // h=h.replace(/lists\[i/g,"lists["+pid);
	// // h=h.replace(/\{\{i\}\}/g,"{{"+pid+"}}");
	// var rand=Math.floor(Math.random(0,1000000000)*1000000000);
	// var put_id="put_html_"+rand;
	// $("body").append("<div id='"+put_id+"' style='display:none;' ></div>");
	// $("#"+put_id).html(h);
	// var h1 = template(put_id, data);
	// $("#"+put_id).remove();
	// $(id1).html(h1);

}

function hide_add_lay(add) {
	get_fujia().fadeOut(1000);
}

function do_effect_in_one(target,clazz,direct,set_duration)
{
	var attrs = ["opacity", "translateX", "translateY", "translateZ", "scale", "rotateX", "rotateY"];

	var pres = {
		"class_effect" : "e",
		"class_every_action_effect":"e",
		"class_ehover" : "eh"
	};
	

	var pre = pres[clazz];
		
	var data = {};
			for (var i in attrs) {
				var attr = attrs[i];
				var value = target.attr(pre + '_' + attr);
				if (value == null) {
					continue;
				}

				if (attr == "translateX" || attr == "translateY" || attr == "translateZ") {
					value += 'px';
				} else if (attr == "rotateX" || attr == "rotateY" || attr == "rotateZ") {
					value += 'deg';
				}
				data[attr] = value;
			}

			var duration1 = target.attr(pre + '_duration');
			var duration=null;
			if(set_duration==null)
			{
				duration=duration1;
			}
			else
			{
				duration=set_duration;
			}
			var delay = $(this).attr(pre + '_delay');
			if (duration == null) {
				duration = 0;
			}
			if (delay == null) {
				delay = 0;
			}

			var ori_data = {
				opacity : 1,
				translateX : '0px',
				translateY : '0px',
				translateZ : '0px',
				rotateY : 0,
				rotateX : 0,
				rotateZ : 0,
				scale : 1
			};


			// alert("direct="+direct);
			// alert("duration="+duration);
			// alert("data[translateY]="+data["translateY"]);
			
				if(direct=="out")
				{
					target.velocity(data, {
					duration : duration
					});
				}
				else
				{
					target.velocity(ori_data, {
					duration : duration,
					delay : delay
					});
				}
				return parseInt(duration)+parseInt(delay);
}
function do_effect_in(clazz,direct,duration)
{
	var spend_time=0;
		$("." + clazz).each(function() {
			var spend_time1=do_effect_in_one($(this),clazz,direct,duration);
			if(spend_time1>spend_time)
			{
				spend_time=spend_time1;
			}
		});
		return spend_time;
}
function bind_effect() {
	
	var classes = ["class_effect", "class_ehover"];
	do_effect_in("class_effect","out",0);
	do_effect_in("class_effect","in");
	
	
	$(".class_ehover").each(function(){
		$(this).hover(function(){
			do_effect_in_one($(this),"class_effect","out");
		},
		function(){
			do_effect_in_one($(this),"class_effect","in");
		}
		);
	});
	
	return;
	var attrs = ["opacity", "translateX", "translateY", "translateZ", "scale", "rotateX", "rotateY"];

	var classes = ["class_effect", "class_ehover"];
	var pres = {
		"class_effect" : "e",
		"class_ehover" : "eh"
	};

	for (var clazz in pres) {
		var pre = pres[clazz];

		$("." + clazz).each(function() {
			var data = {};
			for (var i in attrs) {
				var attr = attrs[i];
				var value = $(this).attr(pre + '_' + attr);
				if (value == null) {
					continue;
				}

				if (attr == "translateX" || attr == "translateY" || attr == "translateZ") {
					value += 'px';
				} else if (attr == "rotateX" || attr == "rotateY" || attr == "rotateZ") {
					value += 'deg';
				}
				data[attr] = value;
			}

			var duration = $(this).attr(pre + '_duration');
			var delay = $(this).attr(pre + '_delay');
			if (duration == null) {
				duration = 0;
			}
			if (delay == null) {
				delay = 0;
			}

			var ori_data = {
				opacity : 1,
				translateX : '0px',
				translateY : '0px',
				translateZ : '0px',
				rotateY : 0,
				rotateX : 0,
				rotateZ : 0,
				scale : 1
			};

			if (pre == "e") {
				$(this).velocity(data, {
					duration : 0
				});
				$(this).velocity(ori_data, {
					duration : duration,
					delay : delay
				});
			} else if (pre == "eh") {
				$(this).hover(function() {
					$(this).velocity(data, {
						duration : duration,
						delay : delay
					});
				}, function() {
					if ($(this).hasClass("class_ehover_remove")) {
						$(this).velocity(ori_data, {
							duration : duration
						});
					}
				});
			}
		});
	}

	// $(".class_effect").each(function(){
	// var data={};
	// for(var i in attrs)
	// {
	// var attr=attrs[i];
	// var value=$(this).attr('e_'+attr);
	// if(value==null)
	// {
	// continue;
	// }
	//
	// if(attr=="translateX"||attr=="translateY"
	// ||attr=="translateZ"
	// )
	// {
	// value+='px';
	// }
	// else if(attr=="rotateX"||attr=="rotateY"||
	// attr=="rotateZ"
	// )
	// {
	// value+='deg';
	// }
	// data[attr]=value;
	// }
	//
	// var duration=$(this).attr('e_duration');
	// var delay=$(this).attr('e_delay');
	// if(duration==null)
	// {
	// duration=0;
	// }
	// if(delay==null)
	// {
	// delay=0;
	// }
	//
	//
	// $(this).velocity(data,{duration:0});
	// $(this).velocity({opacity:1,translateX:'0px',translateY:'0px',
	// translateZ:'0px',rotateY:0,rotateX:0,rotateZ:0,
	// scale:1},{duration:duration,delay:delay});
	//
	// });

}

function swiper(tar, style, time, move_time) {
	this.tar = tar;
	this.baselock = false;
	this.now_id = -1;
	this.lock = false;
	this.stop_time=29;
	this.style = style;
	if (time == null) {
		time = 3500;
	}
	if (move_time == null) {
		move_time = 500;
	}
	this.time = time;
	this.move_time = move_time;
	if (this.move_time < 10) {
		this.fade = 1;
	}
	this.time_ids = [];
}

function fixPNG(myImage) {
	var arVersion = navigator.appVersion.split("MSIE");
	var version = parseFloat(arVersion[1]);
	if ((version >= 5.5) && (version < 7) && (document.body.filters)) {
		var imgID = (myImage.id) ? "id='" + myImage.id + "' " : "";
		var imgClass = (myImage.className) ? "class='" + myImage.className + "' " : "";
		var imgTitle = (myImage.title) ? "title='" + myImage.title + "' " : "title='" + myImage.alt + "' ";
		var imgStyle = "display:inline-block;" + myImage.style.cssText;
		var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\"" + "width:" + myImage.width + "px; height:" + myImage.height + "px;" + imgStyle + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + myImage.src + "\', sizingMethod='scale');\"></span>";
		myImage.outerHTML = strNewHTML;
	}
}

swiper.prototype.init = function() {
	
	var w = $("#parent").width();
	var h = $("#parent").height();
	var container = this.get_container();
	var children = this.get_children();
	var size = children.size();
	var style = this.style;
	
	var mok = this;
	setTimeout(function(){
		mok.baselock=true;
	},mok.stop_time*1000);
	// container.hover(function() {
		// mok.baselock = true;
		// mok.clear_time();
	// }, function() {
		// setTimeout(function() {
			// mok.baselock = false;
			// mok.lock = false;
		// }, 1000);
	// });

	// container.get(0).onmouseout=function(){
	// setTimeout(function(){mok.lock=false;mok.next();},1000);
	// };

	//this.clear_time();

	if (style == "vertical") {
		container.css("width", w + "px").css("height", h * size + "px");
		children.css("width", w + "px").css("height", h + "px");
	} else if (style == "horizon") {
		container.css("width", w * size + "px").css("height", h + "px");
		children.css("width", w + "px").css("height", h + "px").css("float", "left");
	}
	container.css("position", "absolute");

	if (style == "vertical") {
		this.move_vertical();
	} else if (style == "horizon") {
		this.move_horizon();
	}

	$("#next,#down").click(function() {
		mok.next();
	});
	$("#prev,#up").click(function() {
		mok.prev();
	});
};
swiper.prototype.get_container = function() {
	return this.tar.children("#slider");
};
swiper.prototype.get_children = function() {
	return this.tar.children("#slider").children(".group-item");
};
swiper.prototype.clear_time = function() {
	for (var i in this.time_ids) {
		time_id = this.time_ids[i];
		clearTimeout(time_id);
	}
	this.time_ids = [];
};
swiper.prototype.next = function() {
	if (this.style == "vertical") {
		this.move_vertical(1, 0);
	} else if (this.style == "horizon") {
		this.move_horizon(1, 0);
	}
};

swiper.prototype.prev = function() {
	if (this.style == "vertical") {
		this.move_vertical(-1, 0);
	} else if (this.style == "horizon") {
		this.move_horizon(-1, 0);
	}
};

swiper.prototype.get_now_page = function() {
	var container = this.get_container();
	var h = this.get_children().eq(0).height();

	var move = null;
	var unit = null;
	if (this.style == "horizon") {
		move = parseInt(container.css("left"));
		unit = this.get_children().eq(0).width();
	} else {
		move = parseInt(container.css("top"));
		unit = this.get_children().eq(0).height();
	}
	if (isNaN(move)) {
		move = 0;
	}
	var ind = Math.round(Math.abs(move / unit));
	return ind;
};
swiper.prototype.before_action=function()
{
	var re_spend_time=0;
	
	
	var fujia_spend_time=0;
	if(fujia_add==1)
	{
		show_add_lay_by_pid();
		fujia_spend_time=2500;
	}
	
	var spend_time=do_effect_in("class_every_action_effect","out");
	var fade_time=0;
	
	if(spend_time!=null&&spend_time>0)
	{
	}
	else if (this.fade) {
			this.get_container().animate({
				"opacity" : 0
			}, 500);
			fade_time=500;
	}
	
	re_spend_time=fujia_spend_time+spend_time+fade_time;
	return re_spend_time;
};
swiper.prototype.after_action=function()
{
	if(fujia_add==1)
	{
		hide_add_lay();
	}
	
	var spend_time=	do_effect_in("class_effect","in");
	
	if (this.fade) {
			this.get_container().animate({
				"opacity" : 1
			}, 500);
		}
	
};
swiper.prototype.move_vertical = function(direct, time) {
	if (this.baselock || this.lock) {
		return;
	}
	
	this.lock = true;
	this.clear_time();
	var container = this.get_container();
	var children = this.get_children();

	var top = isNaN(parseInt(container.css("top"))) ? 0 : parseInt(container.css("top"));

	var size = children.size();
	if(size<=1)
	{
		return;
	}
	var height = parseInt(this.tar.css("height"));
	var mok = this;
	if (time == null) {
		time = this.time;
	}
	var tid = setTimeout(function() {
		var new_top = null;
		if (direct == -1) {

			if (Math.abs(top) < 10) {
				new_top = 0;
			} else {
				new_top = top + height;
			}
		} else {
			if ((top + container.height() - height) < 10) {
				new_top = 0;
			} else {
				new_top = top - height;
			}
		}
		
		var delay=mok.before_action();
		container.delay(delay).animate({
			top : new_top + "px"
		}, mok.move_time);
		
		var tid1 = setTimeout(function() {
			mok.after_action();
			mok.lock = false;
			mok.move_vertical();
		}, mok.move_time +delay+ 10);
		mok.time_ids.push(tid1);
	}, time);
	this.time_ids.push(tid);
};
swiper.prototype.move_horizon = function(direct, time) {
	if (this.baselock || this.lock) {
		return;
	}
	this.lock = true;
	this.clear_time();
	var container = this.get_container();

	var children = this.get_children();
	var size = children.size();
	if(size<=1)
	{
		return;
	}
	if (time == null) {
		time = this.time;
	}
	var mok = this;

	var tid = setTimeout(function() {
		var left = isNaN(parseInt(container.css("left"))) ? 0 : parseInt(container.css("left"));
		var size = children.size();
		var width = parseInt(mok.tar.css("width"));
		var new_left = null;
		if (direct == -1) {
			if (Math.abs(left) < 10) {
				new_left = 0;
			} else {
				new_left = left + width;
			}
		} else {
			if ((left + container.width() - width) < 10) {
				new_left = 0;
			} else {
				new_left = left - width;
			}
		}

		var delay=mok.before_action();
		
		container.delay(delay).animate({
			left : new_left + "px"
		}, mok.move_time);

		var tid1 = setTimeout(function() {
			// if (mok.fade) {
				// container.animate({
					// "opacity" : 1
				// }, 500);
			// }
			mok.after_action();
			mok.lock = false;
			mok.move_horizon();
		}, mok.move_time + delay+10);
		mok.time_ids.push(tid1);
	}, time);
	this.time_ids.push(tid);
};