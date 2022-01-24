const axios = require("axios");
require("dotenv").config();

exports.handler = async (event) => {
  const GET_LINKS = `
    # Write you query or mutation here 
    query {
        allLinks {
            data {
                name 
                _id
                url
                description 
                archived
            }
        }
    }`;
    //pass in axios request
    const {data} = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
        },
        data: {
            query: GET_LINKS,
            variables: {}
        }
    })
    console.log(data);
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
};
