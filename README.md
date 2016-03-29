# jv-is-arguments

###Description
判断给定的对象是否是一个arguments对象

``` js
var jvIA = require('jv-is-argument')

log = console.log
log(jvIA(arguments))
log(jvIA({}))
log(jvIA())
log(jvIA([1, 2, 3]))

//output
// true, false, false, false

```
