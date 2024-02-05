'use client'
// React
import React from 'react'

// MUI
import { Alert, Box, Card, CardActions, CardContent, CardHeader, IconButton, LinearProgress, Snackbar, Stack, TextField, Tooltip } from '@mui/material'
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';

// MUI icons
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

// local storage
import { useLocalStorage } from 'usehooks-ts'

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

function ListGrid(props) {

    const {
        rows
    } = props

    const columns = [
        {
            field: 'rank',
            headerName: 'Rank',
            flex: .5
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            flex: 1
        },
        {
            field: 'firstName',
            headerName: 'First name',
            flex: 1
        },
        {
            field: 'datetime',
            headerName: 'Datetime',
            flex: 1
        },
        {
            field: 'dodid',
            headerName: 'DODID',
            flex: 1
        },
        {
            field: 'comment',
            headerName: 'Comment',
            flex: 1
        }
    ]

    return (
        <Box sx={{width: "100%", height: "calc(100vh - 354px)" }}>
            <DataGrid
                columns={columns}
                rows={rows}
                slots={{
                    toolbar: GridToolbar
                }}
                initialState={{
                    columns: {
                        columnVisibilityModel: {
                            dodid: false,
                            comment: false
                        }
                    }
                }}
            />
        </Box>
    )
}

function ListView(props) {

    const { params } = props
    let index = Number(params.list) - 1
    const [lists, setLists] = useLocalStorage('lists', [])
    const list = lists[index]

    function addRow(data) {
        data.id = list.rows.length
        let tmpList = {
            ...list,
            rows: [
                ...list.rows,
                data
            ]
        }
        let tmpLists = [...lists]
        tmpLists.splice(index, 1, tmpList)
        setLists(tmpLists)
    }

    if (!list) {
        return (
            <LinearProgress />
        )
    }

    return (
        <Stack spacing={1} sx={{ margin: 1 }}>
            <TopCard
                title={list?.title}
                datetime={list?.datetime}
                addRow={addRow}
                index={index}
            />
            <ListGrid
                rows={list?.rows}
            />
        </Stack>
    )
}

export default ListView