import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import "./index.css";
import {useState} from "react";
import feedBackData from "./data";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from 'uuid';

function App() {

   const [feedBack,setFeedBack] = useState(feedBackData);
   const addFeedback=({text,rating})=>{
    console.log(text,rating);
      setFeedBack((prev)=>{
     
        return [...prev, {id:uuidv4(), text,rating}];
      });
   }
  return (
    <>
        <Header></Header>
        <div className="container">
        <FeedbackForm addFeedback={addFeedback}></FeedbackForm>
        <FeedbackList feedBackList={feedBack}></FeedbackList>
        </div>
     </>
  )
}

export default App