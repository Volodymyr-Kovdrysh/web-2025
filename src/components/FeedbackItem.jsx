import Card from "../shared/Card.jsx";

const FeedbackItem = ({feedback}) => {
    return (
        <Card>
            <div className="num-display">11</div>
            <button className="close">X</button>
            <div className="text-display">Text</div>
            {JSON.stringify(feedback, null, 2)}
        </Card>
    );
};

export default FeedbackItem;
