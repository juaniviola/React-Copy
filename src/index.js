/** @jsxRuntime classic */
/** @jsx ReactCopy.createElement */
import { ReactCopy } from './library';

function App(props) {
  const [state, setState] = ReactCopy.useState(0);

  return (
    <div id="foo">
      <h1>Hey, {props.name}</h1>
      <p>Counter: {state}</p>
      <button onClick={() => setState((s) => s + 1)}>Increment</button>
      <br />
      <a href="https://google.com/">something</a>
    </div>
  );
}

const element = <App name="you" />;
const container = document.getElementById('root');
ReactCopy.render(element, container);
