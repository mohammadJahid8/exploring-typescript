"use strict";
// ternary
// nullish coalescing operator
const isAuthenticating = null;
const userName = isAuthenticating !== null && isAuthenticating !== void 0 ? isAuthenticating : "Guest";
console.log(userName);
