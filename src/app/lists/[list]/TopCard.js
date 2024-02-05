'use client'
// React
import React from 'react'

// MUI
import { Alert, Box, Card, CardActions, CardContent, CardHeader, IconButton, Snackbar, TextField, Tooltip } from '@mui/material'

// MUI icons
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

// custom
import AddRowDialog from './AddRowDialog';
import DeleteButton from '../DeleteButton';
import DownloadButton from '../DownloadButton';

function AlertMessage(props) {
    const {
        open,
        close,
        message
    } = props

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={close}
            anchorOrigin={{vertical: "top", horizontal: "center" }}
        >
            <Alert
                onClose={close}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

function TopCard(props) {

    const {
        index,
        title,
        datetime,
        addRow
    } = props

    const [barcode, setBarcode] = React.useState('')
    const [alertOpen, setAlertOpen] = React.useState(false)
    const [rowOpen, setRowOpen] = React.useState(false)
    const [message, setMessage] = React.useState('')

    function handleBarcode(event) {
        let value = event.target.value
        if (value.length === 99) {
            let dodid = Number.parseInt(value.slice(1, 8), 32)
            let firstName = value.slice(16, 35).trim()
            let lastName = value.slice(37, 63).trim()
            let rank = value.slice(74, 80).trim()
            let datetime = new Date()
            let comment = "CAC scanned."
            setBarcode('')
            addRow({
                dodid,
                firstName,
                lastName,
                rank,
                datetime,
                comment
            })
            // alert
            setMessage(`Welcome, ${firstName}!`)
            setAlertOpen(true)
        }
        else {
            setBarcode(value)
        }
    }

    return (
        <>
            <Card>
                <CardHeader
                    title={title}
                    subheader={datetime}
                />
                <CardContent>
                    <TextField
                        value={barcode}
                        onChange={handleBarcode}
                        label="Barcode Value"
                        fullWidth
                        helperText="Select this field and scan the front of the CAC card."
                    />
                </CardContent>
                <CardActions>
                    <DeleteButton
                        index={index}
                        shouldNavigate
                    />
                    <DownloadButton
                        index={index}
                    />
                    <Box sx={{flexGrow: 1}} />
                    <Tooltip
                        title="Manual Sign In"
                    >
                        <IconButton
                            onClick={() => setRowOpen(true)}
                        >
                            <PersonAddAlt1Icon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
            <AlertMessage
                open={alertOpen}
                close={() => setAlertOpen(false)}
                message={message}
            />
            <AddRowDialog
                open={rowOpen}
                close={() => setRowOpen(false)}
                addRow={addRow}
            />
        </>
    )
}

export default TopCard