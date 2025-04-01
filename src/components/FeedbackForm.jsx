
import Card from "../shared/Card.jsx";
import Button from "../shared/Button.jsx";
import {useContext, useEffect, useState} from "react";
import RatingSelect from "./RatingSelect.jsx";
import FeedbackContext from "../context/FeedbackContext.jsx";


const FeedbackForm = () => {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('');
    const [rating, setRating] = useState(5);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if(feedbackEdit.edit === true){

            console.log(feedbackEdit)

            setBtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(+feedbackEdit.item.rating)
        }
    },[feedbackEdit])


    const handleTextChange = (e) => {


        if (text === ''){
            setBtnDisabled(true)
            setMessage(null);
        } else if (text !== '' && text.trim().length < 9){
            setMessage('Текст повинен містити щонайменше 10 символів')
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length >0){
            const newFeedback = {
                rating,
                text: text.trim(),
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }

            setText('')

        }


    }
    return (
        <Card>
            <form onSubmit={handleSubmit} >
                <div className="card-title justify-center text-2xl">Дайте оцінку нашому курсу</div>
                <RatingSelect select={setRating} />
                <div className="flex flex-row items-center border border-gray-300 px-2.5 py-2 rounded-md">
                    <input
                        onChange={handleTextChange}
                        type={"text"}
                        value={text}
                        placeholder="Введіть відгук..."
                        className="flex-grow border-none text-base focus:outline-none bg-transparent"
                    />
                    <Button type={'submit'} isDisable={btnDisabled}>Надіслати</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
