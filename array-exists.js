function megaFriend(friends) {

    // checking array ---------------------------------------------------------
    if (Array.isArray(friends) == false) {
        return 'please input an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['satu', 'robin', 'sohel', 'sanat', 'mahmudul'];
const bigFriend = megaFriend(friends);
// console.log(bigFriend);

// index of()--------------------------------------------------------------------------
if (friends.indexOf('sohel') != -1) {
    // console.log('sohel exists');
}

// includes()--------------------------------------------------------------------------
if (friends.includes('satu')) {
    // console.log('satu exists');
}

// concat() --------------------------------------------------------------------------
const first = [1, 2, 4, 5];
const second = [7, 8, 9];
const combined = first.concat(second);
console.log(combined);
