import React from 'react';
import styles from "./Logo.module.css"

const Logo = () => (
    <div className={styles.sky}>
        <div className={styles.circle}/>
        <div className={styles.cloud1} />
        <div className={styles.cloud2} />
        <div className={styles.cloud3} />
    </div>
)

export default Logo;