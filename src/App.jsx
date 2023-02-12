import Alert from "./functionalComponents/Alert/Alert";
import Header from "./functionalComponents/Header/Header";
import Main from "./functionalComponents/Main/Main";
import Footer from "./functionalComponents/Footer/Footer";

// API INTEGERATION
import Youtubeapi from './APIIntegration/youTube/youTubeAPI';

// For Router
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Iphone from "./Pages/Iphone/iphone" 

function App() {
  return (
<BrowserRouter> 
  <div>
    <Alert/>
    <Header/>
    <Routes>
      <Route path="/" exact element={<Main/>} />
      <Route path ="/Mac"  element={<Mac/>}/>
      <Route path ="/iphone"  element={<Iphone/>}/>
      <Route path ="*"  element={<Four04/>}/>
    </Routes>
    <Youtubeapi/>
    <Footer/>
  </div>
</BrowserRouter>
);
}

export default App;
