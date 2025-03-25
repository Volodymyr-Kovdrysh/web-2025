
import {Outlet, NavLink} from "react-router";
import {ImEnter, ImExit} from "react-icons/im";
import FeedbackContext from "../context/FeedbackContext.jsx";
import {useContext} from "react";

const RootPage = () => {
    const {user, logout} = useContext(FeedbackContext)
    const handleExit = () =>{
        logout()
    }
    return (
        <div>

            <div className="navbar bg-grey-200 shadow-sm">
                <div className="navbar-start">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">WEB</a>
                    </div>
                </div>

                <div className="navbar-center flex justify-between">
                    <NavLink to={'/'} activeclassname={'acive'}>Home</NavLink>
                    <NavLink to={'/app'}>App</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/params'}>Демо параметрів</NavLink>
                </div>

                <div className="navbar-end">
                    {user.login ? <div onClick={handleExit}> <ImExit /> </div> : <NavLink to={'/login'}><ImEnter /></NavLink>}

                </div>


            </div>

            <Outlet />
        </div>
    );
};

export default RootPage;
