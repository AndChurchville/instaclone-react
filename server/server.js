let { ApolloServer, gql } = require("apollo-server");

const photos = [
    {
        author: "Jade",
        url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80",
        comments: [
            {
            author: "Aqua",
            text: "Whoa!"
            },
            {
                author: "Pewter",
                text: "Nice"
                },
        ]
    },
    {
        author: "Scarlett",
        url: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=986&q=80",
        comments: [
            {
            author: "Aqua",
            text: "Whoa!"
            },
            {
                author: "Pewter",
                text: "Nice"
                },
        ]
    }
]

const typeDefs = gql`
type Comment {
    author: String
    text: String
}

type Photo {
    author: String
    url: String
    comments: [Comment]
}

type Query {
    photos: [Photo]
}
`;

const resolvers = {
    Query: {
        photos: () => photos
    }
};

const server = new ApolloServer({typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});