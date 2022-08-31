import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
 import About from './page/about'
 import Home from './page/home'
//  import Category from './page/category'
 import Contact from './page/contact'
 import Header from './component/header'
 import Footer from "./component/footer";
 import './App.css'
import Signup from "./component/signup";
import { createContext } from "react";
import NoteState from "./context/note";


function App() {
  
  // const PetDataContext = createContext();


  // var comment = JSON.parse(localStorage.getItem('newData'));
  //  console.log(comment,"data")

  return (
    <NoteState>

   <div className="container">
   <Router>
   <Header/>
    <Routes>
  
    <Route path="/" element={<About/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    {/* <Route path="/category" element={<Category/>}></Route> */}
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>

   
    </Routes>
    <Footer/>
   </Router>

  
   </div>
   </NoteState>
  );
}

export default App;
