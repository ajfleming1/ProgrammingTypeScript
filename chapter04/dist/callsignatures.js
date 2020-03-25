"use strict";
let g = (name) => {
    return `"Hello ${name}"`;
};
let l = (message, userId = "Unknown User") => {
    console.log(userId, message);
};
let s = (...numbers) => {
    let tot = 0;
    for (let n of numbers) {
        tot += n;
    }
    return tot;
};
l(g("Drew"));
l("Logging", "Rosie");
l(s(1, 2, 3, 4, 5).toString(), "Sum");
//# sourceMappingURL=callsignatures.js.map