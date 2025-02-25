import {createContext, useEffect, useState} from "react";



const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {

    const [feedbacks, setFeedbacks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
        fetchTheme()
    },[])

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:3000/feedbacks')
        const data = await response.json();
        console.log(data)
        setFeedbacks(data)
        setIsLoading(false)
    }

    const fetchTheme = async () => {
        const response = await fetch('http://localhost:3000/theme')
        const data = await response.json();
        console.log(data)

    }



    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:3000/feedbacks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();

        // newFeedback.id = uuidv4()
         setFeedbacks([data, ...feedbacks])
    }

    const deleteFeedback = async (id) => {
        if(window.confirm("Ви впевнені, що хочете зробити це ??")){

            const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
                method: 'DELETE',
            })
            const data = await response.json();

            console.log('DELETE', data)
            setFeedbacks(feedbacks.filter(feedback => feedback.id !== id))
        }

    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json();
        console.log('UPDATE', data)

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
        isLoading,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext
