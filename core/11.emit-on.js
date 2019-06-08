function Girl() {
    this._events = {};
}
Girl.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};
Girl.prototype.emit = function (eventName, ...args) {
    if (this._events[eventName]) {
        this._events[eventName].forEach(cb => cb(...args));
    }
}
let girl = new Girl();
let cry = (who)=>{console.log(who+'哭');};
let shopping = (who) => {console.log(who+'购物');};
let eat = (who) => {console.log(who+'吃')};
girl.on('失恋',cry);
girl.on('失恋',shopping);
girl.on('失恋',eat);
girl.emit('失恋','我','你');