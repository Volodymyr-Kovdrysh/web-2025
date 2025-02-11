import {NavLink, useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <>
            <h1>Oops!</h1>

            <p>
                <p>{error && error.error.message}</p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
<NavLink to={'/'}> На головну</NavLink>
        </>
    );
};

export default ErrorPage;
