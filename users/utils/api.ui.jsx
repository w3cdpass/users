import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Info from "../src/component/cards.ui";
import { API_URL_GIVE } from "./conts.ui";

const Card = () => {
    const { resID } = useParams();  // Get dynamic param from URL
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserInfo();
    }, []);  

    async function getUserInfo() {
        const data = await fetch(`${API_URL_GIVE +resID}`);
        const json = await data.json();
        setUser(json);
    }

    return (
        <>
            <h1>User Details</h1>
            {user ? <Info {...user} /> : <p>Loading...</p>}
        </>
    );
};


export default Card