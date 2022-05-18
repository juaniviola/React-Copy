/** @jsxRuntime classic */
/** @jsx ReactCopy.createElement */
import { ReactCopy } from './library';

function App(props) {
  return (
    <div id="foo">
      <h1>Hey {props.name}</h1>
      <a href="https://google.com/">something</a>
    </div>
  );
}

const element = <App name="you" />;
const container = document.getElementById('root');
ReactCopy.render(element, container);
