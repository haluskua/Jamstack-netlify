const GET_LINKS = `
# Write your query or mutation here
query{
    allLinks{
        data {
            name
            _id
            url
            description
            archived
        }
    }
}
`
const CREATE_LINK = `
    mutation($name: String!, $url: String!, $description: String! ) {
        createLink( data: { name:$name, url: $url, description: $description, archived: false }) {
            name
            _id
            url
            description
            archived
        }
    }
`;

module.exports = {
    GET_LINKS,
    CREATE_LINK
}