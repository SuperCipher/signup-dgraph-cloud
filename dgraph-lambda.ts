// You can type/paste your script here

async function newUserResolver({args, graphql}) {
    // lets give every new author a reputation of 3 by default
    const results = await graphql(`mutation customMutation {
      addUser(input: {username: "${args.username}", profile_image_hash: "${args.profile_image_hash}", password: "${args.password}", thirdParty: {domain: "api.lorem.space", path: "image/face"}, joined_date:"${(new Date).toISOString()}"}) {
        user {
          id
        }
      }
    }`)
    console.log(JSON.stringify(results));
    console.log("-----------------------------------");

    return results.data.addUser.user[0].id
}

self.addGraphQLResolvers({
  "Mutation.newUser": newUserResolver
})
