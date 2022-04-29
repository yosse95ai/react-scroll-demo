import Alert from './components/Alert/Alert';

function App() {
  return (
    <div>
      <Alert />
      {[...Array(10)].map((_, e) => (
        <p key={e} style={{ paddingLeft: '10px' }}>
          background text {e}
        </p>
      ))}
    </div>
  );
}

export default App;
