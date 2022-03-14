import GameSpace from "./components/GameSpace";
import Heading from "./components/Heading";
import GameDetails from "./components/GameDetails";


const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'space-around'
}

function App() {
  return (
    <div style={appStyle} className="App">
      <Heading />
      <GameSpace />
      <GameDetails />
    </div>
  );
}

export default App;
