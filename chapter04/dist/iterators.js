"use strict";
let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};
for (let n of numbers) {
    console.log(n);
}
//# sourceMappingURL=iterators.js.map