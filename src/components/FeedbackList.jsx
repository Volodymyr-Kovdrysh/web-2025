import {motion} from "framer-motion"
import FeedbackItem from "./FeedbackItem.jsx";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";


const FeedbackList = () => {

    const {feedbacks} = useContext(FeedbackContext)

    if (!feedbacks || feedbacks.length === 0) {
        return <p>Ще немає відгуків</p>
    }

    return (
        <div className={'feedback-list'}>
            {feedbacks.map(item=>(
                <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >

                    <FeedbackItem
                    feedback={item}
                     />

                </motion.div>
                    ))}
        </div>
    );
};

export default FeedbackList;
