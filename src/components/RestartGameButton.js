import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleModalGameEndVisibility,
  toggleModalMenuVisibility,
} from '../store/modalsSlice';

const RestartGameButton = () => {
    const dispatch = useDispatch();
  const isModalGameEndVisible = useSelector(
    (state) => state.modals.isModalGameEndVisible
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

export default RestartGameButton;