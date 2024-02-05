'use client'
// React
import React from 'react'

// MUI
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from '@mui/material'

// MUI icons
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PostAddIcon from '@mui/icons-material/PostAdd';
import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// next
import Link from 'next/link'

// local
import { useDarkMode } from 'usehooks-ts'

// custom
import NewListDialog from './NewListDialog';

function SideDrawer(props) {

    const { open, close } = props
    const [newOpen, setNewOpen] = React.useState(false)

    function handleNewListClick() {
        close()
        setNewOpen(true)
    }

    // dark mode
    const { isDarkMode, toggle } = useDarkMode(true)
    const tooltip = isDarkMode ? "Switch To Light Mode" : "Switch To Dark Mode"
    const icon = isDarkMode ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize='large' />

    return (
        <>
            <Drawer
                anchor="left"
                open={open}
                onClose={close}
                sx={{
                    width: 240,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                }}
            >
                <Typography variant="h4" align="center">
                    AttendIT
                </Typography>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <Link href="/" style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
                            <ListItemButton
                                onClick={close}
                            >
                                <ListItemIcon
                                >
                                    <HomeIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link href="/lists" style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
                            <ListItemButton
                                onClick={close}
                            >
                                <ListItemIcon>
                                    <ListIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary="Lists" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={handleNewListClick}
                        >
                            <ListItemIcon>
                                <PostAddIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary="New List" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Box sx={{ flexGrow: 1 }} />
                <Divider />
                <Stack direction="row" justifyContent="center" >
                    <Tooltip
                        title="View Source Code"
                    >
                        <Link href="https://github.com/bmswens/AttendIT" target="_blank">
                            <IconButton>
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip
                        title="Report An Issue"
                    >
                        <Link href="https://github.com/bmswens/AttendIT/issues/new" target="_blank">
                            <IconButton>
                                <BugReportIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip
                        title="FAQs & Info"
                    >
                        <Link href="/#FAQs">
                            <IconButton
                                onClick={close}
                            >
                                <HelpIcon fontSize="large" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip
                        title={tooltip}
                    >
                        <IconButton
                            onClick={toggle}
                        >
                            {icon}
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Drawer>
            <NewListDialog
                open={newOpen}
                close={() => setNewOpen(false)}
            />
        </>
    )
}

export default SideDrawer