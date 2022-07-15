import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import "./index.css";
import {useState} from "react";
import feedBackData from "./data";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter , Route  , Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIcon";
import AboutPage from "./Pages/AboutPage";

function App() {

   const [feedBack,setFeedBack] = useState(feedBackData);
   const addFeedback=({text,rating})=>{
    console.log(text,rating);
      setFeedBack((prev)=>{
     
        return [...prev, {id:uuidv4(), text,rating}];
      });
   }
  return (
  <BrowserRouter>
      <Header></Header>
      <div className="container">
      <Routes>
      <Route exact path="/" element={( <> 
        <FeedbackForm addFeedback={addFeedback}></FeedbackForm>
        <FeedbackList feedBackList={feedBack}></FeedbackList>  </>)} />


        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
      </div>
     <AboutIconLink />
     </BrowserRouter>
  )
}

export default App