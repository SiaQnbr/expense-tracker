import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Layout/Header';

import Sidebar from './components/Layout/Sidebar';
import ContentContainer from './components/Layout/ContentContainer';
import OverviewPage from './pages/overview';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="et-app">
          <Header />

          <div className="et-body">
            <div className="et-body__center">
              <Sidebar />
              <ContentContainer>
                <Routes>
                  <Route path="/" element={<OverviewPage />}></Route>

                  <Route path="/contact" element={<ContactPage />}></Route>
                  <Route path="/about" element={<AboutPage />}></Route>
                </Routes>
              </ContentContainer>
            </div>
          </div>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
