const Shimmer = () => {
    return (
        <>
            {Array(15).fill("").map(() => <div className="cardContainer">
                <div className="cardInfo">
                <div className="userId"></div>
                <img className="userImage" alt="" loading="lazy" />
                <div className="userName"></div>
                <div className="userGender">loading..</div>
            </div></div>)}
        </>
    )
};

export default Shimmer