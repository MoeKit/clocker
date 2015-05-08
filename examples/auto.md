# 模板执行

---

````html
<div style="position:relative;">
	<img src="timeout.png" alt="">
	<div style="position:absolute;left:95px;bottom:-5px;" id="clock3" class="clocker-box"><span>%_D1</span><span class="d2">%_D2</span><span class="h1">%_H1</span><span class="h2">%_H2</span><span class="m1">%_M1</span><span class="m2">%_M2</span></div>
</div>
<br/>
<div style="position:relative;">
	<img src="pic.png" alt="">
	<div style="" id="clock4" class="clocker-box"><span>%_D1</span><span class="d2">%_D2</span><span class="h1">%_H1</span><span class="h2">%_H2</span><span class="m1">%_M1</span><span class="m2">%_M2</span></div>
</div>
<style>
#clock3,#clock4 {display:none;}
#clock3 span, #clock4 span {
	font-size:60px;
	color:#fff;
	font-weight:bold;
}

#clock4 span {
	font-size:46px;
}
#clock4 {
	position:absolute;
	left:197px;
	bottom:0px;
}
#clock3 .d2 {
	margin-left:25px;
}
.h1 {
	margin-left:84px;
}
.h2 {
	margin-left:30px;
}
.m1 {
	margin-left:75px;
}
.m2 {
	margin-left:28px;
}

#clock4 .d2 {
	margin-left:37px;
}
#clock4 .h1 {
	margin-left:87px;
}
#clock4 .h2 {
	margin-left:38px;
}
#clock4 .m1 {
	margin-left:81px;
}
#clock4 .m2 {
	margin-left:39px;
}
</style>
````

````javascript
seajs.use(['index','jquery'], function(Clocker,$){
    var clockers = $('.clocker-box');
    var tpls = clockers.map(function(index,one){
        return $(one).html();
    }).get();
 	var cl =  new Clocker('2015/05/20').on('tick',function(event){
        clockers.each(function(index,one){
            $(one).html(event.strftime(tpls[index])).show();
        });
 	});
});
````
