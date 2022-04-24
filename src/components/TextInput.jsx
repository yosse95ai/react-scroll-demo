import React from 'react';
import styles from './TextInput.module.scss';

const TextInput = ({ setIsForcused }) => {
  return (
    <div className={styles.root}>
      <input
        type="text"
        className={styles.input}
        placeholder="入力欄"
        onFocus={() => {
          setIsForcused(true);
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 200);
        }}
        onBlur={() => setIsForcused(false)}
      />
      <button className={styles.button}>SEND</button>
    </div>
  );
};

export default TextInput;
