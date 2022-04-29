import { useEffect, useState } from 'react';
import styles from './Scroll.module.scss';
import Content from './components/Content';
import TextInput from './components/TextInput';

const Scroll = () => {
  const [isFocused, setIsForcused] = useState(false);
  const [userAgent, setUserAgent] = useState('pc');
  const [browser, setBrowser] = useState('safari');
  const [count, setCount] = useState(1);
  const userAgentIs = (agent) => {
    return userAgent === agent;
  };
  const browserIs = (b) => {
    return browser === b;
  };

  useEffect(() => {
    document
      .getElementsByClassName(styles.content)[0]
      .addEventListener('click', () => {
        setIsForcused(false);
      });
    const ua = window.navigator.userAgent.toLowerCase();
    // 使用しているブラウザの判定
    // ブラウザによって、バーチャルキーボードの挙動が若干異なる
    if (ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
      setBrowser('ie');
    } else if (ua.indexOf('edg') != -1 || ua.indexOf('edge') != -1) {
      setBrowser('edge');
    } else if (ua.indexOf('crios') != -1 || ua.indexOf('chrome') != -1) {
      setBrowser('chrome');
    } else if (ua.indexOf('fxios') != -1 || ua.indexOf('firefox') != -1) {
      setBrowser('firefox');
    } else if (ua.indexOf('opt') != -1 || ua.indexOf('opera') != -1) {
      setBrowser('opera');
    } else if (ua.indexOf('safari') != -1) {
      setBrowser('safari');
    } else {
      setBrowser('unknown');
    }
    if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0) {
      setUserAgent('ios');
    } else if (
      ua.indexOf('ipad') > 0 ||
      (ua.indexOf('macintosh') > -1 && 'ontouchend' in document)
    ) {
      setUserAgent('ios_tab');
    } else {
      setUserAgent('pc');
    }
  }, []);
  return (
    <div className={styles.root}>
      <Modal message="modal" />
      <div
        className={styles.wrapper}
        style={
          isFocused && userAgentIs('ios') && !browserIs('firefox')
            ? browserIs('safari')
              ? { bottom: '270px' }
              : { bottom: '300px' }
            : { bottom: '0' }
        }
      >
        <div className={styles.content}>
          <Content num={count} />
        </div>
        <div className={styles.message_input}>
          <TextInput
            setIsForcused={setIsForcused}
            setCount={setCount}
            count={count}
          />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
