import { r as registerInstance, h } from './core-92768382.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("my-first-component", { name: "Julia" }));
    }
};

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("p", null, "My name is ", this.name));
    }
};

export { AppRoot as app_root, MyComponent as my_first_component };
