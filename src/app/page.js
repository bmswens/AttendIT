'use client'
// React
import React from 'react'

// MUI
import { Alert, Button, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from '@mui/material';

// MUI Icon
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import ForwardIcon from '@mui/icons-material/Forward';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DownloadIcon from '@mui/icons-material/Download';

// custom
import TextLink from './TextLink';


function CustomListItem(props) {
  const { indent, children } = props

  return (
    <ListItem disablePadding sx={{ pl: indent ? 2 : 0 }}>
      <ListItemIcon sx={{ minWidth: "32px" }}>
        <ChevronRightIcon />
      </ListItemIcon>
      <ListItemText>
        {children}
      </ListItemText>
    </ListItem>
  )
}


function Home() {

  return (
    <Stack spacing={1} sx={{ margin: 1 }}>
      <Typography variant="h3" align="center">
        AttendIT
      </Typography>
      <Typography variant="h6" align="center">
        A simple solution for tracking sign in and attendance.
      </Typography>
      <Divider>
        <Typography variant="h4">
          About
        </Typography>
      </Divider>
      <Typography>
        AttendIT is a <TextLink href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" >Progressive Web App</TextLink> that allows users to create sign in lists that can be filled out by scanning the front of a CAC with a barcode reader.
      </Typography>
      <Typography>
        These lists can then be exported to a comma seperated values (.csv) file that can be loaded in common editor applications like Microsfot Excel or Google Sheets, or easily ingested in other databases.
      </Typography>
      <Divider>
        <Typography variant="h4">
          The Technology
        </Typography>
      </Divider>
      <List>
        <CustomListItem>
          <TextLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</TextLink>
        </CustomListItem>
        <CustomListItem indent>
          <TextLink href="https://nodejs.org/en/about">NodeJS</TextLink>
        </CustomListItem>
        <CustomListItem indent>
          <TextLink href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</TextLink>
        </CustomListItem>
        <CustomListItem indent>
          <TextLink href="https://jestjs.io/">Jest</TextLink>
        </CustomListItem>
        <CustomListItem>
          <TextLink href="https://react.dev/">React</TextLink>
        </CustomListItem>
        <CustomListItem indent>
          <TextLink href="https://nextjs.org/">NextJS</TextLink>
        </CustomListItem>
        <CustomListItem indent>
          <TextLink href="https://mui.com/">MUI</TextLink>
        </CustomListItem>
        <CustomListItem>
          <TextLink href="https://git-scm.com/">Git</TextLink>
        </CustomListItem>
        <CustomListItem indent>
          <TextLink href="https://github.com/features/actions">Github Actions</TextLink>
        </CustomListItem>
      </List>
      <Divider>
        <Typography variant="h4">
          How-To Guides
        </Typography>
      </Divider>
      <Typography variant='h5'>
        How To Create A New List
      </Typography>
      <CustomListItem>
        Open the side menu.
        <IconButton>
          <MenuIcon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        Select "New List."
        <IconButton>
          <PostAddIcon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        Enter a unique name and and press <Button variant="contained" size='small' >Submit</Button>.
      </CustomListItem>
      <CustomListItem>
        After pressing the submit button, you wil be taken to the page for the newly created list.
      </CustomListItem>
      <Typography variant='h5'>
        How To Navigate To A Created List
      </Typography>
      <CustomListItem>
        Open the side menu.
        <IconButton>
          <MenuIcon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        Select "Lists."
        <IconButton>
          <ListIcon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        Use the searchbar or scroll for your list.
        <IconButton>
          <SearchIcon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        Click the "View List" button.
        <IconButton>
          <ForwardIcon />
        </IconButton>
      </CustomListItem>
      <Typography variant='h5'>
        How To Scan A CAC To Sign In
      </Typography>
      <CustomListItem>
        Connect A 2D barcode scanner via bluetooth or USB.
      </CustomListItem>
      <CustomListItem>
        Navigate to the list you want to add entries to.
      </CustomListItem>
      <CustomListItem>
        Select the "Barcode Value" text field.
      </CustomListItem>
      <TextField
        label="Barcode Value"
        sx={{ width: "300px" }}
        helperText="Select this field and scan the front of the CAC card."
      />

      <CustomListItem indent>
        On mobile devices, this will open your keyboard. You may leave it open or lower it, but the text field must stay selected (blue outline and flashing cursor).
      </CustomListItem>
      <CustomListItem>
        Scan the <TextLink href="https://en.wikipedia.org/wiki/PDF417">PDF417</TextLink> barcode on the front of the CAC.
      </CustomListItem>
      <CustomListItem>
        When a barcode has been succesfully read, an alert message will appear at the top of the screen and an entry will be added to the list.
      </CustomListItem>
      <CustomListItem indent>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "300px" }}
        >
          The message will look like this.
        </Alert>
      </CustomListItem>
      <Typography variant='h5'>
        How To Do Manual Sign In
      </Typography>
      <CustomListItem>
        Navigate to the list you want to add entries to.
      </CustomListItem>
      <CustomListItem>
        Select the "Manual Sign In" button.
        <IconButton>
          <PersonAddAlt1Icon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        Fill out the form that appears on screen.
      </CustomListItem>
      <CustomListItem>
        Click <Button variant='contained' size='small'>Submit</Button>.
      </CustomListItem>
      <CustomListItem indent>
        OR click the "Submit Multiple" button to submit and clear the form.
        <IconButton>
          <GroupAddIcon />
        </IconButton>
      </CustomListItem>
      <Typography variant='h5'>
        How To Download A List
      </Typography>
      <CustomListItem>
        Navigate to the list you want to add entries to.
      </CustomListItem>
      <CustomListItem>
        Click the "Download" button.
        <IconButton>
          <DownloadIcon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        This will save a .csv file to your device. This file can be opened in editors like <TextLink href="https://www.microsoft.com/en-us/microsoft-365/excel">Microsoft Excel</TextLink> or <TextLink href="https://www.google.com/sheets/about/">Google Sheets</TextLink>.
      </CustomListItem>
      <Typography variant='h5'>
        How To Delete A List
      </Typography>
      <CustomListItem>
        Navigate to the list you want to add entries to.
      </CustomListItem>
      <CustomListItem>
        Click the "Delete" button.
        <IconButton>
          <DownloadIcon />
        </IconButton>
      </CustomListItem>
      <CustomListItem>
        Click the <Button variant="contained" size="small">Confirm</Button> button.
      </CustomListItem>
      <Divider>
        <Typography variant="h4" id="FAQs">
          FAQs
        </Typography>
      </Divider>
        <Typography variant="h5">
          Question: Is this secure?
        </Typography>
        <Typography>
          Short Answer: Yes.
        </Typography>
        <Typography>
          Long Answer: This application is as secure as taking notes or saving files to your local device as it uses JavaScript's <TextLink href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</TextLink>. 
        </Typography>
        <Typography>
          If you're using the application as a <TextLink href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">Progressive Web App</TextLink>, it is sanboxed.
          If you are accessing the application as a website, it is provided securely via <TextLink href="https://www.cloudflare.com/learning/ssl/what-is-https/">HTTPS</TextLink>.
        </Typography>
        <Typography>
          The code to build this application is open source, and <TextLink href="https://github.com/bmswens/AttendIT">availible here.</TextLink>
        </Typography>
    </Stack>
  );
}

export default Home