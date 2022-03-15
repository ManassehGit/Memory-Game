import styles from '../styles/GameEndInfo.module.css';

import GameInfoContainer from './GameInfoContainer';
import RestartGameButton from './RestartGameButton';
import StartNewGameButton from './StartNewGameButton';
import {
  toggleModalGameEndVisibility,
  toggleModalMenuSettigsVisibility,
} from '../store/modalsSlice';
import { useDispatch } from 'react-redux';