import { useParams } from "react-router"

const SingleProduct = () => {
    const { id } = useParams();

    return (
        <h1>{ id }</h1>
    )
}

export default SingleProduct