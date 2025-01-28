import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header.jsx";
import {useState} from "react";
import FeedbackList from "./components/FeedbackList.jsx";


function App() {

const [feedbacks, setFeedback] = useState(FeedbackData)



  return (
      <>
          <Header />
          <div className="container">
              <FeedbackList feedbacks={feedbacks} />
          </div>


      </>
  )
}



export default App
