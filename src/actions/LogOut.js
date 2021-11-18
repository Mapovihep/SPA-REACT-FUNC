
export const logOut = () => {
    let token=localStorage.getItem('token');
    return( {action:{type:'LOG_OUT'}, token: token})
}