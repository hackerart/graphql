const
    express = require('express'),
    colors = require('colors'),
    GraphQLExpress = require('express-graphql'),
    app = express();

const schema = require('./schema/schema');

const server = {
    port: 3000
};

app.use('/graphql', GraphQLExpress({
    schema,
    graphiql: true
}));

app.listen(server.port, () => {
    console.log(`Server is listening on port ${server.port}`.green);
});
