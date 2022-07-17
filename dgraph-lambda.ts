// You can type/paste your script here

const domainResolver = () => `api.lorem.space`

const pathResolver = () => `image/face`

async function newUserResolver({args, graphql}) {
    // lets give every new author a reputation of 3 by default
    const results = await graphql(`mutation MyMutation {
      addUser(input: {username: ${args.username}, profile_image_hash: "a", password: "aaaaaa", thirdParty: {domain: "a", path: "a"}}) {
        user {
          id
        }
      }
    }`)
    console.log(JSON.stringify(results));
    console.log("-----------------------------------");

    return results
}

self.addGraphQLResolvers({
  "ImageObjectStorage.domain": domainResolver,
  "Mutation.newUser": newUserResolver
})

// -----------------------------------------------------------

async function addUserWebhook({event, dql, graphql, authHeader}) {
    // execute what you want on addition of an user
    // maybe send a welcome mail to the user
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(event.add.input ));

    console.log("-----------------------------------");

}

async function updateUserWebhook({event, dql, graphql, authHeader}) {
    // execute what you want on updation of an user
    // maybe send a mail to the user informing that few details have been updated

}

self.addWebHookResolvers({
    "User.add": addUserWebhook,
    "User.update": updateUserWebhook,
})
