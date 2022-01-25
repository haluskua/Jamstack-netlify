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
module.exports = {
    GET_LINKS
}