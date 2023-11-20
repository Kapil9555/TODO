'use client'
import { Box, Button, Grid, Icon, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import scroll from '../app/styles/scroll.module.css'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import { Roboto } from 'next/font/google';
import NewTaskModal from './NewTaskModal';
import TaskList from './TaskList';



const roboto4 = Roboto({
    weight:'500',
    subsets:['latin-ext'],
    display:"swap"
  })
  const roboto = Roboto({
    weight:'900',
    subsets:['latin'],
    display:"swap"
  })

  const roboto2 = Roboto({
    weight:'300',
    subsets:['latin'],
    display:"swap"
  })

const MiddlePartHome = () => {
    const arr = new Array(6).fill(1)
    const [open , setOpen]=useState(false)
    return (
        <>

        <Grid container sx={{ height: "90dvh" }}>
            <Grid item xs={2.5} sx={{ borderRight: "1px solid #e0e0e0", height: "100%", pl: "20px" }}>
                <Box sx={{ mt: "30px" }}>
                    <Typography   sx={{ fontSize: "13px", userSelect: "none", cursor: "pointer", color: "#bdbdbd" }}>
                        Tasks Management
                    </Typography>
                </Box>
                <Box>
                {
                    arr.map(()=>{
                        return(
                            <Box sx={{ mt: "15px",width:"fit-content",p:"10px 22px 10px 10px",borderRadius:"7px",bgcolor:"#EDEDF4" }}>
                               <Typography className={roboto4.className} sx={{ userSelect:"none",cursor:"pointer",fontSize: "19px", display: "flex", alignItems: "center", color: " #332a7c" }}><DescriptionOutlinedIcon sx={{ mr: "7px", fontSize: "25px", }} />All Tasks</Typography>
                            </Box>
                        )
                    })
                }
                   
                </Box>
            </Grid>
             <TaskList roboto={roboto} roboto2={roboto2} open={open}  setOpen={setOpen}/>
        </Grid>
        <NewTaskModal open={open} setOpen={setOpen}/>
         </>
    )
}

export default MiddlePartHome