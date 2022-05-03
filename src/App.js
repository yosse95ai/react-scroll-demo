import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetAlert } from './features/Alert/AlertSclice';

function App() {
  const dispatch = useDispatch();
  const mAlert = (title, message) =>
    dispatch(SetAlert({ title: title, message: message }));
  useEffect(() => {
    mAlert(
      'アラートを発生させます',
      'Appコンポーネントからアラートを発生させました。'
    );
  }, []);
  return (
    <div>
      {[...Array(10)].map((_, e) => (
        <p key={e} style={{ paddingLeft: '10px' }}>
          background text {e}
        </p>
      ))}
    </div>
  );
}

export default App;
