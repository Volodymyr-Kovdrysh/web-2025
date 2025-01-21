
const FeedbackList = ({feedbacks}) => {

    if (!feedbacks || feedbacks.length === 0) {
        return <p>Ще немає відгуків</p>
    }

    return (
        <div className={'feedback-list'}>
            {JSON.stringify(feedbacks, null, 2)}
        </div>
    );
};

export default FeedbackList;
