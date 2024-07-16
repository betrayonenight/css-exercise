import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PageCSS1 from './page/page_css_1/page_css_1';
import PageCSS2 from './page/page_css_2/page_css_2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pagecss_1" element={<PageCSS1/>} />
        <Route path="/pagecss_2" element={<PageCSS2/>} />
      </Routes>
    </Router>
  );
}

export default App;
