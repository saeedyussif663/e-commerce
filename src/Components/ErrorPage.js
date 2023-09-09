import { useNavigate } from "react-router"

import "./ErrorPage.css"

const ErrorPage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <section className="error-page-container">
            <h1>404</h1>
            <h1>Page Not Found</h1>
            <button onClick={navigateToHome}> Back To Home</button>
        </section>
    )
}

export default ErrorPage