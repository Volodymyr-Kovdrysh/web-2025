import {motion} from "framer-motion"
import FeedbackItem from "./FeedbackItem.jsx";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import Spinner from "../shared/Spinner.jsx";


const FeedbackList = () => {

    const {isLoading, feedbacks} = useContext(FeedbackContext)

    if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
        return <p>Ще немає відгуків</p>
    }

    return isLoading ? <Spinner /> : (
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
