export const getCurrentPages = (currentPage,numberOfPages, users) => {
    const lastUser = currentPage * numberOfPages;
    const firstUser = lastUser - numberOfPages;
    const currentUsers = users.slice(firstUser, lastUser);
    return currentUsers;
}

export const getListPages = (users, numberOfPages) => {
    const listPages = [];
    for (let i = 1; i <= Math.ceil(users.length / numberOfPages); i++) {
        listPages.push(i);
    }
    return listPages
} 