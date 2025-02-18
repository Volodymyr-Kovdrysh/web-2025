
import {FaQuestion} from "react-icons/fa";
import {Link} from "react-router";

const AboutIconLink = () => {
    return (
        <div className='about-link'>
            <Link to={'/about'}>
                <FaQuestion size={32} color={'red'}/>
            </Link>
        </div>
    );
};

export default AboutIconLink;
