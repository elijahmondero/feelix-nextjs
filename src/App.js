import WelcomeMessage from "./WelcomeMessage";
import ReactDOMServer from "react-dom/server";

function App() {
  return (
    <div className="App">
      {ReactDOMServer.renderToStaticMarkup(<WelcomeMessage />)}
    </div>
  );
}

export default App;
