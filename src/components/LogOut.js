import React, { useState } from 'react'


export const LogOut = props => {
    console.log(props.logOutflag);
    const [state, setLogOutState] = useState(props.logOutflag);
    state||localStorage.clear();
    return(
        <div>{state ? 'filled localStorage' : 'cleared localStorage'}</div>
    )
}