import React from 'react';
import Button from './components/Button'
import { Menu, MenuItem } from './components/Menu'

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
          <h1>Button</h1>
          <Button btnType="primary" autoFocus>Hello React</Button>
          <Button btnType="link" href="www.baidu.com">Hello TS</Button>

          <h1>Menu</h1>
          <Menu mode={'vertical'} onSelect={() => {alert(1)}}>
            <MenuItem index={0}>123</MenuItem>
            <MenuItem index={1} disabled>456</MenuItem>
            <MenuItem index={2}>789</MenuItem>
          </Menu>
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
