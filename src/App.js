import './App.css';
import AppRouter from './AppRouter';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { styled } from 'styled-components';

function App() {
  return (
    <AppStyled className="App">
        <AppRouter/>
        {/* <Footer/> */}
    </AppStyled>
  );
}

const AppStyled = styled.div`
`;

export default App;
