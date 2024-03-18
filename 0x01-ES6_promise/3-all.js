import {uploadPhoto,createUser} from "./utils.js"

export default function handleProfileSignup(){
    let photoResult;
    uploadPhoto()
    .then(result => {
       photoResult = result.body;
        return createUser();
    })
    .then(result => {
        console.log(photoResult + " " + result.firstName + " " + result.lastName);
    })
    .catch(error => console.error("Signup system offline", error))
}