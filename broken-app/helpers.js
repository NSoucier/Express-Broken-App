const axios = require('axios');

// function to handle asychronous API request 
async function getProfile(data) {
    let result = [];

    for (let i in data) {
        let info = await axios.get(`https://api.github.com/users/${data[i]}`);
        result.push({bio: info.data.name, name: info.data.bio})
    }
    
    return result
}

module.exports = getProfile;
