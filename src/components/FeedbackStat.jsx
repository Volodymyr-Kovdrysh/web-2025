

const FeedbackStat = ({feedbacks}) => {

    let msgcount;
    if (feedbacks.length === 1) { msgcount = 'відгук'}
    else{
        if (feedbacks.length < 5) { msgcount = 'відгуки'}
        else{
            msgcount = 'відгуків'
        }
    }

    let average = feedbacks.reduce((sum, cur)=> sum + +cur.rating, 0) / feedbacks.length
    average = average.toFixed(1).replace(/[.,]0$/,"")


    return (
        <div className="feedback-stats">
            <h4>{`${feedbacks.length} ${msgcount}`}</h4>
            <h4>Сер. рейтинг: {isNaN(average) ? 0: average}</h4>
        </div>
    );
};

export default FeedbackStat;
