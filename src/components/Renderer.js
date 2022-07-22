class Renderer {
  constructor({renderer, projectsListSelector}) {
    this._renderer = renderer;
    this._container = document.querySelector(projectsListSelector);

  }

  addItem(element) {
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element);
  }

  rendererItems(items) {

    items.forEach((item, index) => {
      this._renderer(item, index)
    });
  }
}

export default Renderer