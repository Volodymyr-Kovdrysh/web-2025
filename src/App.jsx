import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";



function App() {

  return (
      <>
          <Header />
          <div className="max-w-3xl mx-auto px-5">
              <FeedbackForm />
              <FeedbackStat />
              <FeedbackList />

              <AboutIconLink />
          </div>


      </>
  )
}



export default App
