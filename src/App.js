import GameSpace from "./components/GameSpace";
import Heading from "./components/Heading";
import GameDetails from "./components/GameDetails";
import { store } from "./store/store";
import { Provider } from "react-redux";

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'space-around'
}

function App() {
  return (
    <Provider store={store}>
    <div style={appStyle} className="App">
      <Heading />
      <GameSpace />
      <GameDetails />
    </div>
    </Provider>
  );
}

export default App;
