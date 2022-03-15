import GameGrid from './components/GameGrid';


function App() {
  const isModalMenuSettingsVisible = useSelector(
    (state) => state.modals.isModalMenuSettingsVisible
  );
  const isModalGameEndVisible = useSelector(
    (state) => state.modals.isModalGameEndVisible
  );
  const isModalMenuVisible = useSelector(
    (state) => state.modals.isModalMenuVisible
  );
  const gameStarted = useSelector((state) => state.game.gameStarted);
  const isGameFinished = useSelector((state) => state.game.isGameFinished);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isGameFinished || isModalMenuVisible) return;

    dispatch(generateGameElements());
    const timer = setInterval(() => {
      dispatch(updateTimer());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [gameStarted, isGameFinished, isModalMenuVisible, dispatch]);

  return (
    <>
      {isModalMenuSettingsVisible && (
        <Modal>
          <Backdrop type='dark' />
          <Logo color='#fcfcfc' />
          <ModalWindow>
            <GameSettingsMenu />
          </ModalWindow>
        </Modal>
      )}
      {isModalGameEndVisible && (
        <Modal>
          <Backdrop type='light' />
          <ModalWindow>
            <GameEndInfo />
          </ModalWindow>
        </Modal>
      )}
      {isModalMenuVisible && (
        <Modal>
          <Backdrop type='light' />
          <ModalWindow>
            <RestartGameButton type='primary'>Restart</RestartGameButton>
            <StartNewGameButton type='secondary'>New Game</StartNewGameButton>
            <OpenCloseMenuButton type='secondary'>
              Resume Game
            </OpenCloseMenuButton>
          </ModalWindow>
        </Modal>
      )}
      <Header />
      <GameGrid />
      <GameInfoContainer layout='horizontal' />
    </>
  );
}

export default App;
