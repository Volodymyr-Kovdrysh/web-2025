import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header.jsx";
import {useState} from "react";
import FeedbackList from "./components/FeedbackList.jsx";


function App() {

const [feedbacks, setFeedback] = useState(FeedbackData)



  return (
      <>
          <Header />
          <FeedbackList feedbacks={feedbacks} />

      </>
  )
}



export default App
