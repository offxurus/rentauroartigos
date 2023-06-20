import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Lancamentos from './components/pages/Lancamentos';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router> 
        <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Lancamentos" element={<Lancamentos />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;