import {useState, useEffect} from "react"
import {Grid, Typography} from '@mui/material'
import Posts from "./posts";
import Search from "./Search"


export default function Main () {

    const [searchTerm, setSearchTerm] = useState("")

    
    return (
        <Grid container>
            <Grid item xs={12}>
                <Search setSearchTerm={setSearchTerm} />
                {searchTerm != "" ? <Typography>Search Term: {searchTerm}</Typography> : null}
            </Grid>
            <Grid item xs={12}>
                <Posts searchTerm={searchTerm}/>
            </Grid>
    
            
        </Grid>
        
    )
}