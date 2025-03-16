const {User} = require('./utils/model.js');

async function createUser (name, age) {
    try {
        const user = await User.create({
            name: name,
            age: age
        });
        return 200;
    }
    catch (error){
        return 500
    }
}

async function fetchUsers () {
    try {
        const users = await User.find();
        return users;
    }
    catch (error) {
        console.error('Error: ', error);
        return 500
    }
}



// setTimeout(() => {
//     createUser('Rayota', 36).then(result => {
//         if(result === 200) {
//             console.log('User created!');
//         } else {
//             console.error('Error: ', result)
//         }
//     })
// }, 1500)

const userNames = await fetchUsers().then(users => users.map(item => item.name))

console.log(userNames)