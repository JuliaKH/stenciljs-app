import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {

  render() {
    return (
          <my-first-component name="Julia"></my-first-component>
    );
  }
}
