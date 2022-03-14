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