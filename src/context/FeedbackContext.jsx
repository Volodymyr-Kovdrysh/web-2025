import {createContext} from "react";


const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {
    const greet="Hello from FeedbackProvider";



    return <FeedbackContext.Provider value={{
        greet,
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext
