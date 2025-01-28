import Card from "../shared/Card.jsx";
import {FaTimes} from "react-icons/fa";

const FeedbackItem = ({feedback, deleteFeedback}) => {
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className="close" onClick={() => deleteFeedback(feedback.id)}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
};

export default FeedbackItem;
