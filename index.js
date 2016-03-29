"use strict"

/**
 * 如何判断一个对象是否是arguments对象呢？ 
 * 1. 现代浏览器中 
    Object.prototype.toString.call(arguments) == '[object Arguments]'
   2. 不支持的浏览器
 * 是对象
 * 有`length`属性
 * 有`callee`属性
 * `callee`不可迭代
 */


