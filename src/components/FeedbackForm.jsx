
import Card from "../shared/Card.jsx";

const FeedbackForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('form submitted');
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Дайте оцінку нашому курсу</h2>

                <div className="input-group">
                    <input/>
                    <button type={'submit'}>НАДІСЛАТИ</button>
                </div>

            </form>
        </Card>
    );
};

export default FeedbackForm;
