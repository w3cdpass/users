export const filterUsersBySearchText = (users, searchTxt) => {
    return users.filter((user) =>
        user?.firstName?.toLowerCase()?.includes(searchTxt?.toLowerCase())
    );
};