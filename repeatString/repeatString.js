const repeatString = function (hello, num) {
    if (num < 0) return "ERROR"
    let str = "";
    for (let i = 0; i < num; i++) {
        str += hello;
    }
    return str;
}
console.log(str)
module.exports = repeatString
