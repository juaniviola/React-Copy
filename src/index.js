/** @jsxRuntime classic */
/** @jsx ReactCopy.createElement */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object'
          ? child
          : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom = element.type === 'TEXT_ELEMENT'
    ? document.createTextNode("")
    : document.createElement(element.type);

  const isProp = (key) => key !== 'children';
  Object.keys(element.props)
    .filter(isProp)
    .forEach((propName) => {
      dom[propName] = element.props[propName];
    });

  element.props.children.forEach((child) => {
    return render(child, dom);
  });

  container.appendChild(dom);
}

const ReactCopy = {
  createElement,
  render,
};

const element = (
  <div id="foo">
    <h1>hola</h1>
    <a href="https://google.com/">something</a>
  </div>
);
const container = document.getElementById('root');
ReactCopy.render(element, container);
