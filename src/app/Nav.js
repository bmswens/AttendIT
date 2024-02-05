'use client'
// React
import React from 'react'

// MUI
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// next
import Link from 'next/link'

// local
import { useDarkMode } from 'usehooks-ts'

// custom
import SideDrawer from './SideDrawer'
import MenuIcon from '@mui/icons-material/Menu'


function TopNav(props) {

    const [open, setOpen] = React.useState(false)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Tooltip
                            title="Open Side Menu"
                        >
                            <IconButton
                                onClick={() => setOpen(true)}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Link href="/" style={{ textDecoration: "none", color: "inherit"}}>
                            <Typography variant="h6">
                                AttendIT
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
            </Box>
            <SideDrawer
                open={open}
                close={() => setOpen(false)}
            />
        </>
    )
}



function Nav(props) {
    const { isDarkMode } = useDarkMode(true)
    const darkTheme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <TopNav />
            {props.children}
        </ThemeProvider>
    )
}

export default Nav