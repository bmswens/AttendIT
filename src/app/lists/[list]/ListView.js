'use client'
// React
import React from 'react'

// MUI
import {  Box,  LinearProgress, Stack} from '@mui/material'
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';

// local storage
import { useLocalStorage } from 'usehooks-ts'

// custom
import TopCard from './TopCard';


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
