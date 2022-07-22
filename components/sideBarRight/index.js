import { Typography, Avatar, Grid, Button } from "@mui/material"
import {useEffect, useState} from 'react'

let users = [
    {
        avatar: 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
        user: 'jshnayder',
        alias: 'John'
    },
    {
        avatar: 'https://pbs.twimg.com/profile_images/1458503273539850248/bszLIMcp_400x400.jpg',
        user: 'GoDaddy',
        alias: 'GoDaddy Support'
    }
]

export default function Main({ setFunc }) {
    
    const [user, setUser] = useState({})
    
    useEffect(() => {
        setUser(users[0])
        setFunc(users[0])
    },[])

    const changeUser = () => {
        if (users[0] == user) {
            setUser(users[1])
            setFunc(users[1])
        } else {
            setUser(users[0])
            setFunc(users[0])
        }
    }

    
       
    

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4">Profile</Typography>
            </Grid>
            <Grid  style={{background: "#47475f", marginTop: 10, padding: 10}} container item xs={12}>
                
                <Avatar style={{ marginRight: 10}} src={user.avatar}>J</Avatar>
                <Grid item >
                    <Typography>{user.alias}</Typography>
                    <Typography color="#9493a6" variant="caption">@{user.user}</Typography>
                </Grid>
            </Grid>
            
            <Button onClick={changeUser}>Switch User</Button>
            
        </Grid>
        
        
        
        
    )
}