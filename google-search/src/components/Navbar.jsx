import { Link } from "react-router-dom"

export const Navbar  = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/result" style={{margin: "0px 10px"}}>Results</Link>
        </div>
    );
};