import {Component, Element, h, Prop} from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrls: ['my-app.css', 'styles.less'],
  shadow: true
})
export class MyApp {
    @Element() el: HTMLElement;

    @Prop() imgSrc: string;  private observer: IntersectionObserver;  componentDidLoad() {
        const img: HTMLImageElement =
            this.el.shadowRoot.querySelector('img');

        if (img) {
            this.observer = new IntersectionObserver(this.onIntersection);
            this.observer.observe(img);
        }
    }

    private onIntersection = async (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                if (this.observer) {
                    this.observer.disconnect();
                }

                if (entry.target.getAttribute('data-src')) {
                    entry.target.setAttribute('src',
                        entry.target.getAttribute('data-src'));
                    entry.target.removeAttribute('data-src');
                }
            }
        }
    };
  render() {
    return (
      <div>
        <header >
          <h1 class="heading">Todo List with Stencil</h1>
        </header>

        <main>
          <todo-app />
        </main>
          <img data-src={this.imgSrc}/>
      </div>
    );
  }
}
