'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-04768615.js');

const AppRoot = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("my-first-component", { name: "Julia" }));
    }
};

const MyComponent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("p", null, "My name is ", this.name));
    }
};

exports.app_root = AppRoot;
exports.my_first_component = MyComponent;
