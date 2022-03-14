import styles from '../styles/GameInfoContainer.module.css';

import GameInfo from './GameInfo';
import { useSelector } from 'react-redux';
import { useMemo, useRef } from 'react';

const GameInfoContainer = (props) => {
  const minutesElapsed = useSelector((state) => state.game.minutesElapsed);
  const secondsElapsed = useSelector((state) => state.game.secondsElapsed);
  const moves = useSelector((state) => state.game.moves);
  const pairs = useSelector((state) => state.game.pairs);
  const numOfPlayers = useSelector((state) => state.game.numOfPlayers);
  const activePlayerIndex = useSelector(
    (state) => state.game.activePlayerIndex
  );
  let gameEndTitle = useRef('');
  let gameEndSubtitle = useRef('');
  const generateGameInfos = useMemo(() => {
    const gameInfoElements = [];

    if (numOfPlayers === 1) {
      gameInfoElements.push(
        <GameInfo
          key={1}
          value={`${minutesElapsed}:${secondsElapsed
            .toString()
            .padStart(2, '0')}`}
        >{`Time ${props.gameEnd ? 'Elapsed' : ''}`}</GameInfo>
      );
      gameInfoElements.push(
        <GameInfo
          key={2}
          value={moves[activePlayerIndex]}
          {...(props.gameEnd ? { showMovesString: true } : {})}
        >{`Moves ${props.gameEnd ? 'Taken' : ''}`}</GameInfo>
      );
