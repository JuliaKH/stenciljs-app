import { h } from "@stencil/core";
export class MyComponent {
    render() {
        return (h("p", null,
            "My name is ",
            this.name));
    }
    static get is() { return "my-first-component"; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        }
    }; }
}
