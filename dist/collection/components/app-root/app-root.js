import { h } from "@stencil/core";
export class AppRoot {
    render() {
        return (h("my-first-component", { name: "Julia" }));
    }
    static get is() { return "app-root"; }
}
