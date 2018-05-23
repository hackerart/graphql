const
    graphql = require('graphql'),
    axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLID,
    GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString }
    }
});

const CompanyType = new GraphQLObjectType({
    name: 'company',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:4000/users/${args.id}`)
                    .then(res => res.data);
            }
        },
        //company: {}
    }
});
module.exports = new GraphQLSchema({ query: RootQuery });