import Card from "../shared/Card.jsx";
import {Outlet, NavLink} from "react-router";

const RootPage = () => {
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


            </div>

            {/*<Card>*/}
            {/*    <NavLink to={'/'} activeclassname={'acive'}>Home</NavLink>*/}
            {/*    <NavLink to={'/app'}>App</NavLink>*/}
            {/*    <NavLink to={'/about'}>About</NavLink>*/}
            {/*    <NavLink to={'/params'}>Демо параметрів</NavLink>*/}
            {/*</Card>*/}
            <Outlet />
        </div>
    );
};

export default RootPage;
