function wellcomUser(UserName, hiUser) {
    UserName.forEach(user => {
        hiUser(user);
    });
}
function hiUser(user) {
    console.log(`Hello ${user}`);
}
const UserName = ['A', 'B', 'C'];
wellcomUser(UserName, hiUser);