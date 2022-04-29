import React, { useEffect } from 'react';
import styles from './TextInput.module.scss';

const TextInput = ({ setIsForcused, setCount, count }) => {
  useEffect(() => {}, []);
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
      />
      <button
        className={styles.button}
        onClick={() => {
          setCount(count + 10);
          setIsForcused(false);
        }}
      >
        SEND
      </button>
    </div>
  );
};

export default TextInput;
