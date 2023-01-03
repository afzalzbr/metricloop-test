import ThemeProvider from './theme';
import './App.css';
import Router from './routes';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
