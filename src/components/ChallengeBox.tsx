import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber desafios</strong>
        <p>
          <img src="icons/level-up.svg" alt="level up"/>
          Avance de level completando desafios.
        </p>
      </div>
    </div>
  )
}
