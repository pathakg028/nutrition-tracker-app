import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchBox from '../search/SearchBox'
import Typography from '@material-ui/core/Typography'
const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Nutrition Tracker App
                </Typography>
                <SearchBox className="searchbox"/>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;