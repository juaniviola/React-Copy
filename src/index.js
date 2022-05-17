/** @jsxRuntime classic */
/** @jsx ReactCopy.createElement */
import { ReactCopy } from './library';

const element = (
  <div id="foo">
    <h1>hola</h1>
    <a href="https://google.com/">something</a>
  </div>
);
const container = document.getElementById('root');
ReactCopy.render(element, container);
