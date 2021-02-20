import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Button autoFocus onClick={(e) => {console.log('click', e.currentTarget, e.target)}}>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello Primary</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello Danger</Button>
      <Button btnType={ButtonType.Default}>Hello Default</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>Hello</Button>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
