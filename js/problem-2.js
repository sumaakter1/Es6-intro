// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result

const friends = ['priya', 'maria', 'kona', 'borsha'];

const favouriteFriends = (friends)=> {
    const evenFriends = [];
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length % 2 === 0){
            evenFriends.push(friends[i]);
        }
    }
    return evenFriends
};
console.log(favouriteFriends(friends))
