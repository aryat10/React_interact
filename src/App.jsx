import "./App.css";
import Parent from "./Parent";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to kvuk
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Hello 👋🏼 let`s hit for a useImperativeHook 👨🏻‍💻👽</h1>
      <p>
        Here we can see a parent and a child model and we can make a reference
        between those two using useImperativeHook
      </p>
      <Parent />
      {/* <Child /> */}
    </>
  );
}

export default App;
