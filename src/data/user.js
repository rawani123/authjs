const users=[
    {
        email:"aniruddha@gmail.com",
        password:"aniruddha"
    },
    {
        email:"test@gmail.com",
        password:"test"
    }

]

export const getUserByEmail=(email)=>{
    const found = users.find(user=>user.email===email);
    return found;
}