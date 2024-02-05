'use client'
// React
import React from 'react'

// MUI
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Tooltip } from '@mui/material'

// MUI Icons
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const emptyRow = {
    rank: '',
    lastName: '',
    firstName: '',
    dodid: '',
    comment: '',
    datetime: new Date()
}

function AddRowDialog(props) {
    const { open, close, addRow } = props
    const [row, setRow] = React.useState(emptyRow)

    function submit() {
        addRow(row)
        setRow(emptyRow)
    }

    function submitOne() {
        submit()
        close()
    }

    function handleClose() {
        setRow(emptyRow)
        close()
    }

    const canSubmit = row.firstName && row.lastName

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle align="center">
                Manual Sign In
            </DialogTitle>
            <DialogContent>
                <Stack spacing={1} sx={{marginTop: 1}}>
                    <TextField
                        label="Rank"
                        value={row.rank}
                        onChange={event => setRow({...row, rank: event.target.value})}
                    />
                    <TextField
                        label="Last Name"
                        required
                        value={row.lastName}
                        onChange={event => setRow({...row, lastName: event.target.value})}
                    />
                    <TextField
                        label="First Name"
                        required
                        value={row.firstName}
                        onChange={event => setRow({...row, firstName: event.target.value})}
                    />
                    <TextField
                        label="DODID"
                        value={row.dodid}
                        onChange={event => setRow({...row, dodid: event.target.value})}
                    />
                    <TextField
                        label="Comments"
                        multiline
                        rows={3}
                        maxRows={5}
                        value={row.comment}
                        onChange={event => setRow({...row, comment: event.target.value})}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Tooltip
                    title="Submit Multiple"
                >
                    <IconButton
                        onClick={submit}
                        disabled={!canSubmit}
                    >
                        <GroupAddIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Box sx={{flexGrow: 1}} />
                <Button
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={submitOne}
                    disabled={!canSubmit}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddRowDialog