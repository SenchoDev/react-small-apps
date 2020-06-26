import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://apollo-share-music.herokuapp.com/v1/graphql'
})

export default client;