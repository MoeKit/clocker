# 演示文档

---

## 获取时间差

````javascript
var Clocker = require('clocker');
var offset = new Clocker('2016-06-01').getOffset();
console.log(offset);
// {"seconds":37,"minutes":37,"hours":7,"days":385,"weeks":55,"months":12,"years":1}
````


## tick

````html
<span id="clock1"></span>
<br/>
<span id="clock2"></span>
<br/>
<div style="position:relative;">
	<img src="timeout.png" alt="">
	<div style="position:absolute;left:95px;bottom:-5px;" id="clock3"></div>
</div>
<br/>
<div style="position:relative;">
	<img src="pic.png" alt="">
	<div style="" id="clock4"></div>
</div>
<style>
#clock3 span, #clock4 span {
	font-size:60px;
	color:#fff;
	font-weight:bold;
	font-family:"Microsoft YaHei ";
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
#clock3 .h1 {
	margin-left:84px;
}
#clock3 .h2 {
	margin-left:30px;
}
#clock3 .m1 {
	margin-left:75px;
}
#clock3 .m2 {
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
var Clocker = require('clocker');
var $ = require('jquery');
var cl =  new Clocker('2015/05/20').start().on('tick',function(event){
	//console.log(event);
	$('#clock1').html(event.strftime('<span>%D</span> 天 %H时%M分%S秒'));
	$('#clock2').html(event.strftime('<span>%_D1%_D2</span> 天 %_H1%_H2时%_M1%_M2分%_S1%_S2秒'));
	$('#clock3').html(event.strftime('<span>%_D1</span><span class="d2">%_D2</span><span class="h1">%_H1</span><span class="h2">%_H2</span><span class="m1">%_M1</span><span class="m2">%_M2</span>'));
	$('#clock4').html(event.strftime('<span>%_D1</span><span class="d2">%_D2</span><span class="h1">%_H1</span><span class="h2">%_H2</span><span class="m1">%_M1</span><span class="m2">%_M2</span>'));
});
setTimeout(function(){
//cl.stop();
},5000);
````
