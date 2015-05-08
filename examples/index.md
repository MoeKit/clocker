# 演示文档

---
````html
<span id="clock"></span>
````

````javascript
seajs.use(['index','jquery'], function(Clocker,$){
 	var cl =  new Clocker('2015/05/20',function(event){
 		$('#clock').html(event.strftime('<span>%D</span> 天 %H时%M分%S秒'));
 	});

 	setTimeout(function(){
		//cl.stop();
 	},5000);
});
````
