import {createContext, useState} from "react";
import FeedbackData from "../data/FeedbackData.js";
import {v4 as uuidv4} from "uuid";


const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {

    const [feedbacks, setFeedbacks] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedbacks([newFeedback, ...feedbacks])
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Ви впевнені, що хочете зробити це ??")){
            setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
        }

    }

    const updateFeedback = (id, updItem) => {
        setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...updItem} : item))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    const editFeedback = (item) => {

        setFeedbackEdit({item, edit: true})
    }




    return <FeedbackContext.Provider value={{
        feedbacks,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext
