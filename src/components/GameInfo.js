import styles from '../styles/GameInfo.module.css';

const GameInfo = (props) => {
  return (
    <div
      className={`${styles['game-info']} ${
        styles[`${props.isActive ? 'game-info--active' : ''}`]
      } ${styles[`${props.isWinner ? 'game-info--winner' : ''}`]}`}
    >
      <p>
        <span
          className={
            props.children.startsWith('Player')
              ? `${styles['game-info__player--long']}`
              : ''
          }