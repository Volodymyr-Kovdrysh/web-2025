import {createContext, useEffect, useState} from "react";
import getDataFromGoogleAppScripts from "../data/Utils.js";
import {v4 as uuidv4} from "uuid";


const FeedbackContext = createContext()

const googleUrl = import.meta.env.VITE_apiURL

export const FeedbackProvider = ({ children }) => {
    const [user, setUser] = useState({login: true});
    const [feedbacks, setFeedbacks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
        // fetchTheme()
    },[])

    const fetchFeedback = async () => {

        getDataFromGoogleAppScripts(`${googleUrl}?method=GET`).then(data => {
            console.log('Data from GoogleApp', data)
            setFeedbacks(data.feedbacks)
            setIsLoading(false)
            }
        )
    }

    const fetchTheme = async () => {
        const response = await fetch('http://localhost:3000/theme')
        const data = await response.json();
        console.log(data)

    }



    const addFeedback = async (newFeedback) => {


        newFeedback.id = uuidv4()
        setIsLoading(true)
        getDataFromGoogleAppScripts(`${googleUrl}?method=POST&id=${newFeedback.id}&rating=${newFeedback.rating}&text=${newFeedback.text}`).then(data => {
            setFeedbacks(data.feedbacks)
            setIsLoading(false)
        })
    }

    const deleteFeedback = async (id) => {
        if(window.confirm("Ви впевнені, що хочете зробити це ??")){
            setIsLoading(true)
            getDataFromGoogleAppScripts(`${googleUrl}?method=DELETE&id=${id}`).then(data => {
                setFeedbacks(data.feedbacks)
                setIsLoading(false)
            })



        }

    }

    const updateFeedback = async (id, updItem) => {
        setIsLoading(true)
        getDataFromGoogleAppScripts(`${googleUrl}?method=PUT&id=${id}&rating=${updItem.rating}&text=${updItem.text}`).then(data => {
            setFeedbacks(data.feedbacks)
            setIsLoading(false)
        })

        // const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(updItem)
        // })
        // const data = await response.json();
        // console.log('UPDATE', data)
        //
        // setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...updItem} : item))
        // setFeedbackEdit({
        //     item: {},
        //     edit: false,
        // })
    }

    const editFeedback = (item) => {

        setFeedbackEdit({item, edit: true})
    }

    const login = () => {
        setUser(prevState => ({...prevState, login: true}))
    }

    const logout = () => {
        setUser(prevState => ({...prevState, login: false}))
    }

    const register = (obj) => {

        alert(JSON.stringify(obj))
    }




    return <FeedbackContext.Provider value={{
        feedbacks,
        feedbackEdit,
        isLoading,
        user,
        login,
        logout,
        register,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext
