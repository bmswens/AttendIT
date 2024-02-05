'use client'
// React
import React from 'react'

// MUI
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'

// local storage
import { useLocalStorage } from 'usehooks-ts'

// next
import { useRouter } from 'next/navigation'


function NewListDialog(props) {

    const { open, close } = props
    const router = useRouter()
    const [title, setTitle] = React.useState('')
    const [lists, setLists] = useLocalStorage('lists', [])
    const listTitles = lists.map(list => list.title)
    const error = listTitles.includes(title)

    function submit() {
        close()
        setLists([
            ...lists,
            {
                title: title,
                datetime: new Date(),
                rows: []
            }
        ])
        router.push(`/lists/${lists.length + 1}`)
        setTitle('')
    }

    function handleClose() {
        setTitle('')
        close()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle align="center">
                Create New Attendance List
            </DialogTitle>
            <DialogContent>
                <Stack spacing={1} sx={{marginTop: 1}}>
                    <TextField
                        label="List Name"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        error={error}
                        helperText={error ? "List title already in lists." : undefined}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    onClick={submit}
                    variant="contained"
                    disabled={title.length === 0 || error}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewListDialog