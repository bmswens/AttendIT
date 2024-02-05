'use client'
// React
import React from 'react'

// MUI
import { Avatar, Box, Card, CardActions, CardHeader, IconButton, Stack, Tooltip, useTheme } from '@mui/material';

// MUI Icons
import ForwardIcon from '@mui/icons-material/Forward';
import DeleteIcon from '@mui/icons-material/Delete';

// local storage
import { useLocalStorage } from 'usehooks-ts'

// next
import { useRouter } from 'next/navigation'

// custom
import MainCard from './MainCard'
import ConfirmDialog from '../ConfirmDialog';
import DownloadButton from './DownloadButton';
import DeleteButton from './DeleteButton';

function ListCard(props) {
  const {
    title,
    index,
    rows,
    datetime,
    search
  } = props

  const theme = useTheme()
  const router = useRouter()

  if (search && !title.toLowerCase().includes(search.toLowerCase())) {
    return null
  }

  return (
    <>
      <Card>
        <CardHeader
          title={title}
          subheader={datetime}
          avatar={<Avatar sx={{ bgcolor: theme.palette.primary.dark }}>{rows.length}</Avatar>}
        />
        <CardActions>
          <DeleteButton
            index={index}
          />
          <DownloadButton
            index={index}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip
            title="View List"
          >
            <IconButton
              onClick={() => router.push(`/lists/${index + 1}`)}
            >
              <ForwardIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  )
}

function Home() {

  const [search, setSearch] = React.useState('')
  const [lists] = useLocalStorage('lists', [])

  return (
    <Stack spacing={1} sx={{ margin: 1 }}>
      <MainCard
        search={search}
        setSearch={setSearch}
      />
      {lists.map((list, index) => <ListCard key={index} index={index} {...list} search={search} />)}
    </Stack>
  );
}

export default Home