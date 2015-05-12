# Clocker


[![MoeKit](https://moekit.timo.today/badge/clocker)](https://moekit.timo.today/package/clocker)  [![Build Status](https://travis-ci.org/MoeKit/clocker.svg?branch=master)](https://travis-ci.org/MoeKit/clocker)  [![Coverage Status](https://coveralls.io/repos/MoeKit/clocker/badge.svg)](https://coveralls.io/r/MoeKit/clocker)
---


## 使用

构造器的时间参数可以为

+ Date 对象
+ 毫秒数
+ 格式化的时间字符串如 `YYYY/MM/DD` ,`MM/DD/YYYY`,`YYYY/MM/DD hh:mm:ss`,`MM/DD/YYYY hh:mm:ss`

```javascript
var Clocker = require('clocker');
var ck = new Clock('2016-06-01');
ck.on('tick',function(event){
	// do what you want
});
```

## API

### 函数

+ `getOffset` 获取时间差，一般用于不需要实时计数时

```
var Clocker = require('clocker');
var offset = new Clock('2016-06-01').getOffset();

```

+ `pause` 暂停

+ `start` 开始

+ `stop` 结束

+ `resume` 重新开始

### 事件

+ `tick` 定时触发，按照时间精度的设置间隔触发,默认interval时间间隔为`100ms`

+ `finish` 计时结束

+ `stop` 停止


事件的参数`event`说明：

```json
{
    type:           '{String} The namespaced event type {update,finish,stop}.countdown',
    strftime:       '{Function} The formatter function',
    finalDate:      '{Date} The parsed final date native object',
    offset: {
        seconds:    '{int} Seconds left for the next minute',
        minutes:    '{int} Minutes left for the next hour',
        hours:      '{int} Hours left until next day',
        days:       '{int} Days left until next week',
        totalDays:  '{int} Total amount of days left until final date',
        weeks:      '{int} Weeks left until the final date',
        months:     '{int} Months left until final date' ,
        years:      '{int} Year left until final date'
    }
}
```

通过event的offset可以获取当前的时间差,通过strftime函数可以直接格式化文本。

如

```javascript
var Clocker = require('index');
var ck = new Clock('2016-06-01');
ck.on('tick',function(event){
	var html = event.strftime('%W weeks %D days %H h %M min %S sec');
    // => 1 week 2days 3h 04 min 05 sec
});
```

## 格式化Directives说明
| 字符 | 说明   |
|---|---|
|%Y|	Years left *|
|%m	|	Monts left * |
|%w |	Weeks left |
|%d |	Days left (taking away weeks) |
|%D |	Total amount of days left |
|%H	|	Hours left |
|%M	|	Minutes left |
|%S	|	Seconds left |



## 感谢

该模块Fork自:http://hilios.github.io/jQuery.countdown/ , 但去除了`jQuery`依赖,同时用`Eventor`修改了事件机制。