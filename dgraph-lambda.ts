// You can type/paste your script here

async function newUserResolver({args, graphql}) {
    let validationError = ""
    if(!(/^([A-Za-z0-9._]{1,})$/.test(args.username))) validationError += "invalid username, "
    if(!(/^([a-z0-9._]{10,})$/.test(args.password))) validationError += "invalid password, "
    if(!(/^([a-z0-9._]{8,})$/.test(args.profile_image_hash))) validationError += "invalid profile_image_hash, "

    if(!validationError){
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
    }else{
      throw `validation fail code : ${validationError}`
    }
}

self.addGraphQLResolvers({
  "Mutation.newUser": newUserResolver
})
