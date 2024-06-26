
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav /> 
      <Routes> 
       <Route path ="/"    element={<h1> Product listing  Component </h1>}/> 
       <Route path ="/add" element ={ <h1> Add Product Component </h1>}/>
       <Route path ="/update" element = { <h1> Update Product Component </h1>}/>
       <Route path ="/logout" element ={ <h1> Logout Sucessfully </h1>} />
       <Route path ="/profile" element ={<h1> Your Profile Page Component </h1>} /> 
       <Route path = "/SignUp" element = {<SignUp />} />

      </Routes>
     
     </BrowserRouter>
     <Footer/> 
    </div>
  );
}

export default App;
