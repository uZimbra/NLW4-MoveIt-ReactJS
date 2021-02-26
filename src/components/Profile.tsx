import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/uzimbra.png" alt="Rodrigo A. Silva"/>
      <div>
      <strong>Rodrigo A. Silva</strong>
      <p>
        <img src="icons/level.svg" alt="Level"/>
        Level {level}
      </p>
    </div>
    </div>
    
  )
}