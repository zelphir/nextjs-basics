import React from 'react';

import styles from './Div.module.css';

export default function Div({ children }) {
  return <div className={styles.theDiv}>{children}</div>;
}
