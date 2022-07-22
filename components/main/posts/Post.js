import { Card, CardContent, Typography, Grid, Avatar, Button } from '@mui/material'
import moment from 'moment'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
 

export default function Post({ post: { content, timestamp, user, alias, avatar} }) {
    
    const styles = {
        cardContainer: {
            width: "100%",
            marginBottom: 10,
            backgroundColor: "#000000"
        },
        text: {
            color: "white"
        }
    }
    return (
        <Card elevation={10} style={styles.cardContainer}>
            <CardContent>
                <Grid container style={styles.text}>
                    <Grid item style={{marginRight: 0}}>
                        <Avatar style={{  marginRight: 10}} src={avatar}></Avatar>
                    </Grid>
                    <Grid item  style={{marginLeft: 0}}>
                        <Typography sx={{fontWeight: "bold", display: 'inline'}} style={{marginRight: 4}}>{alias}</Typography>
                        <Typography style={{ marginTop: 3 }} color="#9493a6" sx={{ fontSize: 13, display: 'inline' }}>@{user} · {moment.unix(timestamp.seconds).startOf('second').fromNow()}</Typography>
                        <Typography sx={{ fontSize: 15, fontWeight: 'light' }}>{content}</Typography>
                        
                        
                    </Grid>
                    
                    
                    
                </Grid>
                
                
            </CardContent>
            
        </Card>
    )
}