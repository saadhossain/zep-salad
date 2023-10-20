import { UserProps } from '../interfaces/interfaces';

export const saveUsersToDatabase = async (user: UserProps) => {
    const userInfo = {
        userName: user.displayName,
        email: user.email,
        profileImage: user.photoURL,
        userId: user.uid
    }
    //Save user to database
    const res = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    return data;
}