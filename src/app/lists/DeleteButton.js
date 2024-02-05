'use client'
// React
import React from 'react'

// MUI
import { IconButton, Tooltip } from '@mui/material'

// MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';

// local storage
import { useLocalStorage } from 'usehooks-ts'

// nextjs
import { useRouter } from 'next/navigation';

// custom
import ConfirmDialog from '../ConfirmDialog';

function DeleteButton(props) {
    const { index, shouldNavigate } = props

    const [open, setOpen] = React.useState(false)
    const [lists, setLists] = useLocalStorage('lists', [])
    const router = useRouter()

    function handleDelete() {
        let tempLists = [...lists]
        tempLists.splice(index, 1)
        setLists(tempLists)
        if (shouldNavigate) {
            router.push("/lists")
        }
    }

    return (
        <>
            <Tooltip
                title="Delete"
            >
                <IconButton
                    onClick={() => setOpen(true)}
                >
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </Tooltip>
            <ConfirmDialog
                open={open}
                close={() => setOpen(false)}
                text="This will delete this list permenantly. Proceed?"
                callback={handleDelete}
            />
        </>
    )
}

export default DeleteButton