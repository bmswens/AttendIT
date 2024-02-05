'use client'
// React
import React from 'react'

// MUI
import { Box, Card, CardActions, CardContent, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'

// MUI Icon
import SearchIcon from '@mui/icons-material/Search';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

// local storage
import { useLocalStorage } from 'usehooks-ts'

// custom
import NewListDialog from './NewListDialog';
import ConfirmDialog from './ConfirmDialog';

function MainCard(props) {

    const [lists, setLists] = useLocalStorage('lists', [])

    const {search, setSearch} = props
    const [newOpen, setNewOpen] = React.useState(false)
    const [deleteOpen, setDeleteOpen] = React.useState(false)

    function deleteLists() {
        setLists([])
    }

    return (
        <>
        <Card>
            <CardContent>
                <TextField
                    fullWidth
                    label="Search"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                    placeholder='Search your lists...'
                />
            </CardContent>
            <CardActions>
                <Tooltip
                    title="Delete All Lists"
                >
                    <IconButton
                        onClick={() => setDeleteOpen(true)}
                    >
                        <DeleteSweepIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Box sx={{flexGrow: 1}} />
                <Tooltip
                    title="Create New Attendance List"
                >
                    <IconButton
                        onClick={() => setNewOpen(true)}
                    >
                        <PostAddIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
        <NewListDialog
            open={newOpen}
            close={() => setNewOpen(false)}
        />
        <ConfirmDialog
            open={deleteOpen}
            close={() => setDeleteOpen(false)}
            text="This will delete all your lists permenantly. Proceed?"
            callback={deleteLists}
        />
        </>
    )
}

export default MainCard