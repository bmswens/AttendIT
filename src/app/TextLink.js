// React
import React from 'react'

// MUI Icon
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

// nextjs
import Link from 'next/link'


function TextLink(props) {
    const {
        href,
        children
    } = props

    return (
        <Link href={href} style={{ textDecoration: "underline", color: "inherit"}} target="_blank">
            {children}<OpenInNewIcon fontSize="small" />
        </Link>
    )
}

export default TextLink