const Info = ({ id, image, firstName, lastName, gender, age, phone, username, password, birthDate, bloodGroup, height, weight, eyeColor }) => {
    return (
        <div className="cardInfo">
            <div className="userId">ID: {id}</div>
            <img className="userImage" src={image} alt="User Avatar" loading="lazy" />
            <div className="userName">{firstName} {lastName}</div>
            <div className="userGender">{gender}</div>
            <div className="userGender">{age}</div>
            <div className="userGender">{phone}</div>
            <div className="userGender">{username}</div>
            <div className="userGender">{password}</div>
            <div className="userGender">{birthDate}</div>
            <div className="userGender">{bloodGroup}</div>
            <div className="userGender">{height}</div>
            <div className="userGender">{weight}</div>
            <div className="userGender">{eyeColor}</div>
            
        </div>
    )
};
export default Info;
