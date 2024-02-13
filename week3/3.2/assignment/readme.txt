let people sign up to your website, only allow signed in users to see people(create a dummy people list)

let user put username and password and then only he can see the people data

POST/signin 
body-{
    username:string
    password : string 
}

returns a json web token with username encrypted

GET / user
headers - authorization headers
returns an array of all users if user sis signed in(token is correct)
returns 403 status code if not