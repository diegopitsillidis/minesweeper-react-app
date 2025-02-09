import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org">Learn React</Link>
      </Header>
    </div>
  );
}

interface HeaderProps {
  children?: React.ReactNode,
  logo?: string;
}

const Header: FC<HeaderProps> = ({children, logo}) =>
  <header className="App-header">
    {Boolean(logo) ? <img src={logo} className="App-logo" alt="logo" /> :  "No logo found!"}
    {children}
  </header>;

interface LinkProps {
  children: React.ReactNode,
  href: string,
  target?: "_blank" | "_self" | "_parent" | "_top",
  rel?: string,
}

const Link: FC<LinkProps> = ({children, target = "_blank", rel = "noopener noreferrer", ...restProps}) =>
  <a 
    className="App-link"
    target={target}
    rel={rel}
    { ...restProps}
  >
    {children}
  </a>;

// Removed defaultProps assignment as default values are set in the function signature
export default App;
