import React, { useEffect, useState } from 'react';
import styles from './Content.module.scss';

const Content = ({ num }) => {
  const [cannotScroll, setCannotScroll] = useState(true);
  useEffect(() => {
    const content_root =
      document.getElementsByClassName(styles.wrap)[0] ??
      document.getElementsByClassName(styles.wrap_no)[0];
    if (content_root.scrollTop < 1) content_root.scrollTop = 1;
    content_root.scrollTop += 1000;

    if (content_root.clientHeight >= content_root.parentElement.clientHeight) {
      setCannotScroll(false);
    } else {
      setCannotScroll(true);
    }

    content_root.addEventListener('scroll', () => {
      if (
        content_root.clientHeight >= content_root.parentElement.clientHeight
      ) {
        setCannotScroll(false);
      } else {
        setCannotScroll(true);
      }
      if (content_root.scrollTop === 0) {
        content_root.scrollTop = 1;
      } else if (
        content_root.scrollTop + content_root.clientHeight ===
        content_root.scrollHeight
      ) {
        content_root.scrollTop = content_root.scrollTop - 1;
      }
    });
  }, [num]);
  return (
    <div className={cannotScroll ? styles.wrap_no : styles.wrap}>
      <h2 style={{ position: 'fixed', right: 0 }}>
        {cannotScroll ? 'cannot scroll' : 'can scroll'}
      </h2>
      {[...Array(num)].map((_, i) => (
        <div
          key={i}
          className={styles.message}
          style={{ color: `#${Math.random().toString(10).slice(-6)}` }}
        >
          test message {i}
        </div>
      ))}
    </div>
  );
};

export default Content;
