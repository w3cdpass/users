

# User List with Infinite Scroll and Search

This project is a React application that fetches user data from an API and implements **infinite scrolling** using the `IntersectionObserver` API. It loads users dynamically as you scroll and allows searching through the list.

---

## Features 🚀

✅ Fetch users in **batches of 30** instead of all at once.\
✅ **Infinite scrolling**: Loads more users when the user reaches the bottom of the page.\
✅ **Search bar** to filter users dynamically.\
✅ **Shimmer effect** while loading new users.\
✅ **Lazy loading images** for better performance.\
✅ **Routing**: Clicking on a user redirects to `/card/:id`.

---

## Installation & Setup ⚙️

Make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

```sh
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Navigate to the project folder
cd your-repo

# Install dependencies
npm install

# Start the development server
npm start
```

The app will be running at `http://localhost:3000/`.

---

## Code Example 📌

### **1️⃣ User Component (Card UI)**

```jsx
import { Link } from "react-router-dom";

const User = ({ id, image, firstName, lastName, gender }) => {
    return (
        <Link to={`/card/${id}`} className="userCard">
            <div className="cardInfo">
                <div className="userId">ID: {id}</div>
                <img className="userImage" src={image} alt="User Avatar" loading="lazy" />
                <div className="userName">{firstName} {lastName}</div>
                <div className="userGender">{gender}</div>
            </div>
        </Link>
    );
};
export default User;
```

### **2️⃣ UserList Component (Infinite Scrolling & Filtering)**

```jsx
import { useEffect, useState, useRef } from "react";
import User from "./User";
import Shimmer from "./shimmer.ui";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        getUserInfo();
    }, [page]);

    async function getUserInfo() {
        if (loading) return;
        setLoading(true);
        try {
            const res = await fetch(`https://dummyjson.com/users?limit=30&skip=${(page - 1) * 30}`);
            const data = await res.json();
            setUsers((prevUsers) => [...prevUsers, ...data.users]);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
        setLoading(false);
    }

    const filteredUsers = users.filter((user) =>
        user?.firstName?.toLowerCase().includes(searchTxt.toLowerCase())
    );

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading) {
                setPage((prevPage) => prevPage + 1);
            }
        });
        if (observerRef.current && document.getElementById("loadMoreTrigger")) {
            observerRef.current.observe(document.getElementById("loadMoreTrigger"));
        }
        return () => observerRef.current?.disconnect();
    }, [loading]);

    return (
        <>
            <input type="text" placeholder="Search here..." value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
            {filteredUsers.length === 0 ? <h1>No results found</h1> : filteredUsers.map((user) => <User key={user.id} {...user} />)}
            {loading && <Shimmer />}
            <div id="loadMoreTrigger" style={{ height: "10px" }}></div>
        </>
    );
};

export default UserList;
```

### **3️⃣ Main Body Component**

```jsx
import UserList from "./UserList";

const Body = () => {
    return (
        <div className="cardContainer">
            <UserList />
        </div>
    );
};

export default Body;
```

### **4️⃣ App Component (Routes Setup)**

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./component/header.ui";
import Footer from "./component/footer.ui";
import Body from "./component/body.ui";
import Card from "./component/card.ui";

const App = () => {
    return (
        <Router>
            <Head />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/card/:resID" element={<Card />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
```

---

## **How It Works** 🛠️

1️⃣ **Fetching Users in Batches:** The API provides only 30 users per request, so we fetch more users when scrolling.\
2️⃣ **Infinite Scroll:** The `IntersectionObserver` watches a `div` at the bottom of the page and loads more users when it comes into view.\
3️⃣ **Dynamic Search:** Users can search for any first name in real-time.\
4️⃣ **Lazy Loading Images:** Images are loaded only when needed to improve performance.

---

## **Customization & Improvements** 🎨

- 🔹 Add a "Load More" button instead of infinite scroll.
- 🔹 Improve UI with better CSS styles.
- 🔹 Implement a "Back to Top" button.

---

## **License** 📜

This project is open-source and available under the [MIT License](LICENSE). Feel free to contribute! 🚀

# users
