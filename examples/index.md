# 演示文档

---
````html
<span id="clock"></span>
````

````javascript
seajs.use('index', function($){
    $('#clock').countdown('2014/06/05', function(event) {
     $(this).html(event.strftime('<span>%D</span> 天 %H时%M分%S秒'));
    });
});
````
