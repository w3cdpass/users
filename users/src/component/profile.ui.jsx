// let's make the class based component 
import { useState } from "react";
const Profile = (props) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>This is my profile</h1>
            <p>{props.name}</p>
            <p>Count { count}</p>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </>
    )
};

export default Profile;

