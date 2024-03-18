import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default async function handleProfileSignup(firstName, lastName, fileName){
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => (
        result.map((o) => ({
           status: o.status,
           value: o.status === 'fulfilled' ? o.value : String(o.value)
        }))
    ));
}