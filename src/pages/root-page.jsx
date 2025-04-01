
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
        <div className="min-h-screen font-roboto bg-gray-600 text-white leading-relaxed">

            <div className="navbar bg-gray-600 shadow-sm">
                <div className="navbar-start">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">WEB</a>
                    </div>
                </div>

                <div className="navbar-center flex gap-4">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Home</NavLink>
                    <NavLink to={'/app'} className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>App</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>About</NavLink>
                    <NavLink to={'/params'} className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Демо параметрів</NavLink>
                </div>

                <div className="navbar-end pr-4">
                    {user.login ? <div onClick={handleExit} className="btn btn-ghost hover:bg-transparent text-xl"> <ImExit /> </div> : <NavLink to={'/login'} className="btn btn-ghost text-xl hover:bg-transparent"><ImEnter /></NavLink>}

                </div>


            </div>

            <Outlet />
        </div>
    );
};

export default RootPage;
