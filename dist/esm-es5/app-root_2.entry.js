import { r as registerInstance, h } from './core-92768382.js';
var AppRoot = /** @class */ (function () {
    function AppRoot(hostRef) {
        registerInstance(this, hostRef);
    }
    AppRoot.prototype.render = function () {
        return (h("my-first-component", { name: "Julia" }));
    };
    return AppRoot;
}());
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.render = function () {
        return (h("p", null, "My name is ", this.name));
    };
    return MyComponent;
}());
export { AppRoot as app_root, MyComponent as my_first_component };
