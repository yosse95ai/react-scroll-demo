import React, { useEffect } from 'react';
import styles from './Content.module.scss';

const Content = () => {
  useEffect(() => {
    const content_root = document.getElementsByClassName(styles.root)[0];
    content_root.scrollTop = 1;

    content_root.addEventListener('scroll', () => {
      if (content_root.scrollTop === 0) {
        content_root.scrollTop = 1;
      } else if (
        content_root.scrollTop + content_root.clientHeight ===
        content_root.scrollHeight
      ) {
        content_root.scrollTop = content_root.scrollTop - 1;
      }
    });
  }, []);
  return (
    <div className={styles.root}>
      {[...Array(100)].map((_, i) => (
        <div key={i} className={styles.message}>
          test message {i}
        </div>
      ))}
    </div>
  );
};

export default Content;
