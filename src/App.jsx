import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header.jsx";
import {useState} from "react";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";

import { v4 as uuidv4 } from 'uuid';


function App() {

const [feedbacks, setFeedbacks] = useState(FeedbackData)

const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbacks([newFeedback, ...feedbacks])
}

const deleteFeedback = (id) => {
    if(window.confirm("Ви впевнені, що хочете зробити це ??")){
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }

}

  return (
      <>
          <Header />
          <div className="container">
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStat feedbacks={feedbacks} />
              <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
          </div>


      </>
  )
}



export default App
