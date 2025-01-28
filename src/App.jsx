import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header.jsx";
import {useState} from "react";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";


function App() {

const [feedbacks, setFeedbacks] = useState(FeedbackData)

const deleteFeedback = (id) => {
    if(window.confirm("Ви впевнені, що хочете зробити це ??")){
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
    }

}

  return (
      <>
          <Header />
          <div className="container">
              <FeedbackForm />
              <FeedbackStat feedbacks={feedbacks} />
              <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
          </div>


      </>
  )
}



export default App
