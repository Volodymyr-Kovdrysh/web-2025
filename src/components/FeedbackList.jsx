import FeedbackItem from "./FeedbackItem.jsx";

const FeedbackList = ({feedbacks}) => {

    if (!feedbacks || feedbacks.length === 0) {
        return <p>Ще немає відгуків</p>
    }

    return (
        <div className={'feedback-list'}>
            {feedbacks.map(item=>(<FeedbackItem key={item.id} feedback={item}/>))}
        </div>
    );
};

export default FeedbackList;
