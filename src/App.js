import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Header>
        <h1>Homepage</h1>
      </Header>
      <Nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </Nav>
      <Main>
        <p> Welcome to the homepage. Here is some main content.</p>
      </Main>
      <Footer>
        <p>&cpoy; 2024 Little Lemon</p>
      </Footer>
    </>
  );
}

export default App;
