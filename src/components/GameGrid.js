import styles from '../styles/GameGrid.module.css';
import GameButton from './GameButton';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleClickGameElement,
  hideGameElementsVisibility,
  changePlayerTurn,
  setGameFinished,
  resetLastTwoMoves,
  disableElementsActiveState,
  updatePairs,
} from '../store/gameSlice';
import { toggleModalGameEndVisibility } from '../store/modalsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GAME_GRID_SIZES, GAME_THEMES, ICONS_ARR } from '../constants';