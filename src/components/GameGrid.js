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
const GameGrid = () => {
    const gridSize = useSelector((state) => state.game.gridSize);
    const gridTheme = useSelector((state) => state.game.gridTheme);
    const gameElements = useSelector((state) => state.game.gameElements);
    const lastTwoMoves = useSelector((state) => state.game.lastTwoMoves);
    const numOfPlayers = useSelector((state) => state.game.numOfPlayers);
    const dispatch = useDispatch();
  
    const canPlay = lastTwoMoves.length !== 2;
  
    useEffect(() => {
      let timeout;
      if (!canPlay) {
        timeout = setTimeout(() => {
          if (lastTwoMoves[0].value !== lastTwoMoves[1].value) {
            dispatch(
              hideGameElementsVisibility([lastTwoMoves[0], lastTwoMoves[1]])
            );