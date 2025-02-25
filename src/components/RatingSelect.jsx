import {useContext, useEffect, useState} from 'react';
import FeedbackContext from "../context/FeedbackContext.jsx";


const RatingItem = ({nmbr, handlCh, selected}) => {
    return (
        <li>
            <input
                type="radio"
                id={`num${nmbr}`}
                value={`${nmbr}`}
                onChange={handlCh}
                checked={selected === nmbr}
            />
            <label htmlFor={`num${nmbr}`}>{nmbr}</label>
        </li>
    )
}


const RatingSelect = ({select}) => {
    const {feedbackEdit} = useContext(FeedbackContext);
    const [selected, setSelected] = useState(5)

    useEffect(() => {
         setSelected(+feedbackEdit.item.rating)
    }, [feedbackEdit]);

    const handleChange = (e) =>{
        console.log(e.currentTarget.value, typeof e.currentTarget.value)
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    return (
        <ul className="rating">
            {[1,2,3,4,5,6,7,8,9,10].map(i => <RatingItem key={i}
                                                         nmbr={i}
                                                         selected={selected}
                                                         handlCh={handleChange} />)}
            {/*<li>*/}
            {/*    <input*/}
            {/*    type={"radio"}*/}
            {/*    id={'num1'}*/}
            {/*    value={'1'}*/}
            {/*    onChange={handleChange}*/}
            {/*    checked={selected === 1}*/}
            {/*    />*/}
            {/*    <label htmlFor="num1">1</label>*/}
            {/*</li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
            {/*<li></li>*/}
        </ul>
    );
};

export default RatingSelect;
