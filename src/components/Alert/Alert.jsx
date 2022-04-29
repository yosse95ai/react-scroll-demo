import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styles from './Alert.module.scss';

const Alert = ({ title = 'アラート', message = 'メッセージ' }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.root} style={open ? {} : { display: 'none' }}>
      <div className={styles.bg} onClick={handleClose}></div>
      <Box className={styles.box} sx={{ width: { xs: 350, sm: 400 } }}>
        <div className={styles.content_wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.discription}>{message}</p>
        </div>
        <button className={styles.button} onClick={handleClose}>
          とじる
        </button>
      </Box>
    </div>
  );
};
export default Alert;
