import { useGlobalContext } from "../Context"

const Home = () => {
    const { closeDropdown } = useGlobalContext()
    
    return <h1  onClick={closeDropdown}>home</h1>
}


export default Home