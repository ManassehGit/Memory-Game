import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleModalGameEndVisibility,
  toggleModalMenuSettigsVisibility,
  toggleModalMenuVisibility,
} from '../store/modalsSlice';
import { setGameSettings, startNewGame } from '../store/gameSlice';


const StartNewGameButton = () => {
    const dispatch = useDispatch();
  const isModalGameEndVisible = useSelector(
    (state) => state.modals.isModalGameEndVisible
  );
  const isModalMenuSettingsVisible = useSelector(
    (state) => state.modals.isModalMenuSettingsVisible
  );
  const isModalMenuVisible = useSelector(
    (state) => state.modals.isModalMenuVisible
  );
  
  return (
    <>
        <Button>

        </Button>
    </>
  )
}

export default StartNewGameButton