import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
    try{
        const [photoUrl,user] = await Promise.all([uploadPhoto(),createUser()])
        console.log(`${photoUrl.body} ${user.firstName} ${user.lastName}`)
    }catch(e){
        console.log('Signup system offline')
    }
}