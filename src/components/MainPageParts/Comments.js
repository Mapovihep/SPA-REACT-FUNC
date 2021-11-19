import { Button, Card, CardActions, CardContent, FormControl, IconButton, Input, List, ListItem, ListItemText, Typography, Form } from "@mui/material"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Comments = props => {
    const [comments, setComments] = useState([...props])
    console.log(comments)
    const setUp = comments;
    let mass = setUp.map(newComment=><Typography>{newComment.title}</Typography>);
    console.log(mass)
    return(
        <Button>Нажми, если посмеешь</Button>
    )

}