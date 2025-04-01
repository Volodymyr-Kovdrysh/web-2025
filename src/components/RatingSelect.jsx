import {useContext, useEffect, useState} from 'react';
import FeedbackContext from "../context/FeedbackContext.jsx";


const RatingItem = ({nmbr, handlCh, selected}) => {
    return (
        <li className="relative">
            <input
                type="radio"
                id={`num${nmbr}`}
                value={`${nmbr}`}
                onChange={handlCh}
                className="sr-only peer"
                checked={selected === nmbr}
            />
            <label htmlFor={`num${nmbr}`} className="w-[50px] h-[50px] p-[10px] rounded-full text-[19px] flex items-center justify-center text-gray-800 bg-gray-100 border border-gray-200
        transition-all duration-300 cursor-pointer
        peer-checked:bg-pink-500 peer-checked:text-white
        hover:bg-pink-500 hover:text-white">{nmbr}</label>
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
        <ul className="flex items-center justify-around flex-wrap gap-3 my-[30px] mb-[40px]">
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
