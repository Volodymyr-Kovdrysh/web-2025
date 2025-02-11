import {motion} from "framer-motion"
import FeedbackItem from "./FeedbackItem.jsx";


const FeedbackList = ({feedbacks, deleteFeedback}) => {

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
                    deleteFeedback={deleteFeedback} />

                </motion.div>
                    ))}
        </div>
    );
};

export default FeedbackList;
