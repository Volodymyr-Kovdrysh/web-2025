import Card from "../shared/Card.jsx";
import {Outlet, NavLink} from "react-router-dom";

const RootPage = () => {
    return (
        <div>

            <Card>
                <NavLink to={'/'} activeclassname={'acive'}>Home</NavLink>
                <NavLink to={'/app'}>App</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/params'}>Демо параметрів</NavLink>
            </Card>
            <Outlet />
        </div>
    );
};

export default RootPage;
