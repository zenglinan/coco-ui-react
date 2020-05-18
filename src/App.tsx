import React from 'react';
import logo from './logo.svg';
import Hello from './Hello'

interface Themes {
  [key: string]: { color: string, background: string }
}
const themes: Themes = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)

function App() {
  return (
      <div className="App">
        <ThemeContext.Provider value={themes.light}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Hello/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
