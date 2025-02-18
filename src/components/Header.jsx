import PropTypes from 'prop-types';
import FeedbackContext from "../context/FeedbackContext.jsx";
import {useContext} from "react";



const Header = ({
                    text='Опитувальник UI',
                    bgColor='rgba(0,0,0,0.4)',
                    textColor = '#ff6095'}) => {
    const {greet} = useContext(FeedbackContext);

    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={headerStyle}>
         <div className="container">
             <h2> {text} {greet}</h2>
         </div>
        </header>
    );
};

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;
