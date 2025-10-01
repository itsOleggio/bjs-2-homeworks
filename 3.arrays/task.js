function compareArrays(arr1, arr2) {
  return arr1.every((element) => arr1[element] === arr2[element] && arr1.length === arr2.length)
}

function getUsersNamesInAgeRange(users, gender) {
    return users
        .filter(user => user.gender === gender)
        .map(user => user.age)
        .reduce((acc, val, index, user) => acc + val / user.length, 0);
}
