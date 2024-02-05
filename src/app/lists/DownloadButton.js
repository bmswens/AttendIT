'use client'
// React
import React from 'react'

// MUI
import { IconButton, Tooltip } from '@mui/material'

// MUI Icons
import DownloadIcon from '@mui/icons-material/Download';

// local storage
import { useLocalStorage } from 'usehooks-ts';

function DownloadButton(props) {

    const { index } = props
    const [lists] = useLocalStorage('lists', [])
    const list = lists[index]

    function download() {
        let keys = [
            "rank",
            "lastName",
            "firstName",
            "dodid",
            "datetime",
            "comment"
        ]
        let fileName = list.title.replace(' ', '-') + '.csv'
        let content = keys.join(',') + '\n'
        for (let row of list.rows) {
            let line = keys.map(key => row[key]).join(',') + '\n'
            content += line
        }
        let blob = new Blob([content], {type: "text/csv"})
        let url = window.URL.createObjectURL(blob)
        let anchor = document.createElement("a")
        anchor.style = "display: none;"
        anchor.download = fileName
        anchor.href = url
        document.body.appendChild(anchor)
        anchor.click()
        window.URL.revokeObjectURL(url)
        anchor.remove()
    }

    return (
        <Tooltip
            title="Download"
        >
            <IconButton
                onClick={download}
            >
                <DownloadIcon fontSize="large" />
            </IconButton>
        </Tooltip>
    )
}

export default DownloadButton