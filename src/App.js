import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="app">
      <div className='container'>
      <header className="app-header">
        <img src={logo} className="img-fluid app-logo" alt="logo" />
      </header>
      <main className='text-center'>
      <Dictionary/>
      </main>
      <footer className='app-footer'>
        Coded by Kairos Quin
      </footer>
      </div>
    </div>
  );
}

export default App;
