import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/uzimbra.png" alt="Rodrigo A. Silva"/>
      <div>
      <strong>Rodrigo A. Silva</strong>
      <p>
        <img src="icons/level.svg" alt="Level"/>
        Level 1
      </p>
    </div>
    </div>
    
  )
}