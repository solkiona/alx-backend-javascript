import {uploadPhoto,createUser} from "./utils.js"

export default function handleProfileSignup(){
    // let photoResult;
    return Promise
    .all([uploadPhoto(), createUser()])
    .then((result) => {
        console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
    .catch(() => console.log("Signup system offline"))
}