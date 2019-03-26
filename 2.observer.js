let obj = {
    name: 'jw',
    // age: 18
    age: {
        age: 18
    }
};
// vue数据劫持 Object.defineProperty
function observer(obj){
    if (typeof obj == 'object') {
        for (let key in obj) {
            defineReactive(obj,key,obj[key]);
        }
    }
}
function defineReactive(obj, key, value) {
    observer(value);
    Object.defineProperty(obj, key, {
        get(){
            return value;
        },
        set(val){
            observer(val);
            console.log('数据更新了');
            value = val;
        }
    });
}
observer(obj);
// obj.name = 'zf';
// obj.age.age = '33';

obj.age = {
    name: 1
};
obj.age.name = 2;
// console.log(obj.name);
// console.log(obj.age.age);
// 1.如果属性不存在，默认后增加的内容，并不会刷新视图
// 2.数组调用push是无效的， Object.defineProperty不支持数组
// obj.a = 'xxx';
obj.age= [1,2,3,4];

// let oldPush = Array.prototype.psuh;
// Array.prototype.push = function (value) {
//     console.log('数据更新了！');
//     oldPush.call(this,value);
// }

// vue把这个数组上的所有方法都重写了
let arr = ['push','slice','shift','unshift'];
arr.forEach(method=>{
    let oldPush = Array.prototype[method];
    Array.prototype[method] = function(value){
        console.log('数据更新了');
        oldPush.call(this,value);
    }
});

obj.age.push(5);

// 3.数组不能通过长度修改，也不能通过数组的索引进行更改
obj.age.length --;