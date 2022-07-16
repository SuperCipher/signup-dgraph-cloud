#Signup Backend
This using Dgraph cloud to generate GraphQL API

GraphQL endpoint
https://green-feather-500032.ap-south-1.aws.cloud.dgraph.io/graphql

GraphQL API documentation
https://spectaql.leiden.capital

## Architecture

## example signup data
``` json
{
	"id": "usercl5m8y0l8000b2e622yp8dgnm",
	"username": "Dane_Hintz78",
	"password": "oooqwao3ki",
	"profile_image": "https://api.lorem.space/image/face?w=150&h=150&hash=hueo4s2b",
	"joined_date": "2022-01-16T14:05:26.230Z"
}

{
	"id": "usercl5nhj2tt000c2e62wd7gdatf",
	"username": "Adolph10",
	"password": "x2v14outpr",
	"profile_image": "https://api.lorem.space/image/face?w=150&h=150&hash=3rmrd5e0",
	"joined_date": "2019-12-28T12:02:05.049Z"
}

{
	"id": "usercl5nhllbc000d2e623ot5g3hw",
	"username": "Yvette_Gutmann",
	"password": "rpl90f1c0o",
	"profile_image": "https://api.lorem.space/image/face?w=150&h=150&hash=6pfa9ro6",
	"joined_date": "2021-07-25T16:58:43.997Z"
}
```
## API Design Specification
### Add user
https://spectaql.leiden.capital/#mutation-addUser

**All fields are required**

`id` is hexadecimal auto generate from backend prefixed with `0x` e.g. `0xf58e960ca`

`username` A-Z a-z 0-9 . _

`password` a-z 0-9

`profile_image_hash` a-z 0-9 length==8

`joined_date` Autogenerated from backend following ISO 8601 standard according to this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString Immutable once created.

> *Dgraph do not support ordered list*

`domain` Sub-domain + Root Domain e.g. `api.lorem.space`

`path` url path separate by slash no leading / e.g. `image/face`


### List all users
https://spectaql.leiden.capital/#query-queryUser

*Do not return password field*

have pagination capability

## Database setup instructions


## docs
https://spectaql.leiden.capital