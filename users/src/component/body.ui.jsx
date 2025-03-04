import {  useEffect, useState } from "react";
import Shimmer from "./shimmer.ui";
import { API_URL_GIVE } from "../../utils/conts.ui";
import { Link } from "react-router";
import { filterUsersBySearchText } from "../../utils/helper.ui";
import useOnline from "../../utils/useOnline.ui";
const User = ({ id, image, firstName, lastName, gender, }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="w-72 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-xl font-semibold text-gray-800 mb-2">ID: {id}</div>
      <div className="flex items-center space-x-4 mb-4">
          <img className="w-20 h-20 rounded-full object-cover" src={image} alt="User Avatar" loading="lazy" />
          <div className="text-lg font-medium text-gray-700">
              {firstName} {lastName}
          </div>
      </div>
      <div className="text-sm text-gray-600">{gender}</div>
  </div>

  <div className="w-72 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-xl font-semibold text-gray-800 mb-2">ID: {id}</div>
      <div className="flex items-center space-x-4 mb-4">
          <img className="w-20 h-20 rounded-full object-cover" src={image} alt="User Avatar" loading="lazy" />
          <div className="text-lg font-medium text-gray-700">
              {firstName} {lastName}
          </div>
      </div>
      <div className="text-sm text-gray-600">{gender}</div>
  </div>

  <div className="w-72 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-xl font-semibold text-gray-800 mb-2">ID: {id}</div>
      <div className="flex items-center space-x-4 mb-4">
          <img className="w-20 h-20 rounded-full object-cover" src={image} alt="User Avatar" loading="lazy" />
          <div className="text-lg font-medium text-gray-700">
              {firstName} {lastName}
          </div>
      </div>
      <div className="text-sm text-gray-600">{gender}</div>
  </div>

  <div className="w-72 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-xl font-semibold text-gray-800 mb-2">ID: {id}</div>
      <div className="flex items-center space-x-4 mb-4">
          <img className="w-20 h-20 rounded-full object-cover" src={image} alt="User Avatar" loading="lazy" />
          <div className="text-lg font-medium text-gray-700">
              {firstName} {lastName}
          </div>
      </div>
      <div className="text-sm text-gray-600">{gender}</div>
  </div>
</div>

            
        </>
    )
};


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [serchTxt, setSerchTxt] = useState("");
    // users.filter((wrd) => console.log(wrd.firstName))
    useEffect(() => {
        getUserInfo()
    }, [])
    async function getUserInfo() {
        const data = await fetch(API_URL_GIVE);
        const json = await data.json()
        setUsers(json.users)
    }


    const off = useOnline();
    if (!off) {
        return (
            
            <h1>You are Offline please help to connect the internet !!</h1>
        )
    }

    // filter 
    const filterUsers = filterUsersBySearchText(users, serchTxt);
    // const filterUsers = users.filter((user) => user?.firstName?.toLowerCase()?.includes(serchTxt?.toLowerCase()));
    return users?.length == 0 ? (<Shimmer key={filterUsersBySearchText.id} />) : (
        <>
            <div className="bg-blue-400 p-5 my-1">
                <input className="border-2 p-2 rounded-2xl" type="text" placeholder="sech here..." value={serchTxt}
                    onChange={(e) => setSerchTxt(e.target.value)}
                />
            </div>
            
            {
                filterUsers?.length == 0 ? <h1>Not found</h1> :
                    filterUsers.map(user =>
                        <Link to={"/card/" + user.id}>
                            <User {...user} key={user.id} />
                        </Link>
                    )
                
            }
        </>
    )
}


const Body = () => {
    return (
        <>
            <div className="cardContainer ">
                <UserList />
            </div>
        </>
    )
};

export default Body

/**
 * {users.length > 0 ? (
                users.map(({ id, firstName, lastName, gender }) => (
                    <User 
                        key={id} 
                        id={id} 
                        firstName={firstName} 
                        lastName={lastName} 
                        gender={gender} 
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
 */