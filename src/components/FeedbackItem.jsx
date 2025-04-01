import Card from "../shared/Card.jsx";
import {FaEdit, FaTimes} from "react-icons/fa";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";

const FeedbackItem = ({feedback}) => {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
    return (
        <Card>
            {/*<div className="num-display">{feedback.rating}</div>*/}
            <div className="absolute -top-[10px] -left-[10px] bg-[#ff6a95] w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold border border-[#fff] text-[#fff]">
                {feedback.rating}
            </div>

            <button
                className="absolute top-[10px] right-[20px] cursor-pointer"
                onClick={() => deleteFeedback(feedback.id)}
            >
                <FaTimes color="purple" />
            </button>

            <button className="absolute top-[10px] right-[40px] cursor-pointer" onClick={()=>{editFeedback(feedback)}}>
                <FaEdit color={'purple'} />
            </button>
            <div className="card-body text-base">{feedback.text}</div>
        </Card>
    );
};

export default FeedbackItem;
