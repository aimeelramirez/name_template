;(function () {
  const _shadows = new WeakMap()
  class MyWebComponent extends HTMLElement {
    constructor() {
      super()
      _shadows.set(this, this.attachShadow({ mode: "closed" }))
    }
    connectedCallback() {
      _shadows.get(this).innerHTML = `
            <p>I'm in the closed Shadow Root!</p>
        `
    }
  }

  window.customElements.define("my-web-component", MyWebComponent)
})()
