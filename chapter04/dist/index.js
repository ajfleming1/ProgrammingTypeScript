"use strict";
let f = (array, f) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
console.log(f([1, 2, 3], _ => _ < 3));
console.log(f(['drew', 'rosie'], _ => _.startsWith('r')));
let m = (arr, f) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(f(arr[i]));
    }
    return result;
};
console.log(m([1, 2, 3], _ => _ * 3));
//# sourceMappingURL=index.js.map