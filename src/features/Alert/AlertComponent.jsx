import React from 'react';
import Box from '@mui/material/Box';
import styles from './Alert.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  CloseAlert,
  selectAlertMessage,
  selectAlertTitle,
  selectVisible,
} from './AlertSclice';

const AlertComponent = () => {
  const visible = useSelector(selectVisible);
  const alertTitle = useSelector(selectAlertTitle);
  const alertMessage = useSelector(selectAlertMessage);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(CloseAlert());

  return visible ? (
    <div className={styles.root} style={open ? {} : { display: 'none' }}>
      <div className={styles.bg} onClick={handleClose}></div>
      <Box className={styles.box} sx={{ width: { xs: 350, sm: 400 } }}>
        <div className={styles.content_wrapper}>
          <h2 className={styles.title}>{alertTitle}</h2>
          <p className={styles.discription}>{alertMessage}</p>
        </div>
        <button className={styles.button} onClick={handleClose}>
          とじる
        </button>
      </Box>
    </div>
  ) : null;
};
export default AlertComponent;
