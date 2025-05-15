// ModuleCss.js
import React from 'react';
import styles from './Style.module.css';

const ModuleCss = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Wireless Headphones</h3>
      <p className={styles.price}>$199</p>
    </div>
  );
};

export default ModuleCss;