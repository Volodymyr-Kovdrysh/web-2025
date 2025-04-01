import PropTypes from 'prop-types';



const Header = ({
                    text='Опитувальник UI',
                    bgColor='rgba(0,0,0,0.4)',
                    textColor = '#ff6095'}) => {


    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={headerStyle} className="h-[70px] w-full flex justify-between items-center mb-8 text-3xl font-bold italic">
         <div className="max-w-xl mx-auto px-5">
             <h2> {text} </h2>
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
