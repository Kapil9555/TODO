'use client'
import AddIcon from '@mui/icons-material/Add';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Box, Button, Grid, Icon, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import scroll from '../app/styles/scroll.module.css';
import NewTaskModal from './NewTaskModal';
import { Roboto } from 'next/font/google';


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
const TaskList = ({open , setOpen}) => {
    const arr = new Array(6).fill(1)

    return (
        <>

   
            <Grid item xs={9.5}>
            <Box sx={{m:"30px"}}>

            
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box>
                        <Typography className={roboto.className} sx={{fontSize:"35px", color: "#332a7c"}}>
                            All Tasks <span style={{fontSize:"16px",mt:"-20px", color: "#bdbdbd"}}>( 7 )</span>
                        </Typography>
                    </Box>
                    <Box sx={{}}>
                        <Button variant='contained' sx={{bgcolor:"#332a7c","&:hover":{bgcolor:"#332a7c"},fontSize:"12px"}} onClick={()=>{setOpen(true)}}>
                              <AddIcon sx={{fontSize:"12px",fontWeight:"bold"}}/> new task
                        </Button>
                    </Box>
                </Box>

                <Grid container sx={{mt:"40px"}} spacing={2}>
                {
                    arr.map(()=>{
                        return <Grid item lg={3}>
                    <Paper sx={{p:"10px",borderRadius:"14px"}} elevation={3}>
                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                         <Typography className={roboto.className} sx={{color:"#616161",fontSize:"16px",fontFamily:'cursive'}}>
                            kapil 
                         </Typography>
                         <Icon>
                            <DeleteForeverIcon sx={{color:"#616161",cursor:"pointer"}}/>
                         </Icon>
                    </Box>
                    <Box className={scroll.hideScroll} sx={{height:"85px",boxSizing:"border-box",mt:"10px",overflowY:"auto"}}>
                        <Typography className={roboto2.className} sx={{fontSize:"12px",fontWeight:"100",flexWrap:"wrap",overflowWrap:"break-word"}}>
                             hello this is kapil behwal
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center",mt:"10px"}}>
                        <Icon>
                           <WatchLaterIcon sx={{color:"#616161",fontSize:"17px"}}/>
                        </Icon>
                        <Typography sx={{fontSize:"13px",mt:"2px"}}>
                            11/02/2023
                        </Typography>
                        <Icon sx={{ml:"25px"}}>
                            <AssistantPhotoIcon sx={{fontSize:"19px",cursor:"pointer",display:"none"}}/>
                            <FlagOutlinedIcon sx={{fontSize:"19px",cursor:"pointer"}}/>
                        </Icon>
                        <Icon sx={{ml:"8px"}}>
                            {/* <LibraryAddCheckIcon sx={{fontSize:"18px",cursor:"pointer"}}/> */}
                            <LibraryAddCheckOutlinedIcon sx={{fontSize:"18px",cursor:"pointer"}}/>
                        </Icon>
                    </Box>
                    </Paper>
                </Grid>
                    })
                }
                
                </Grid>
                </Box>
            </Grid>
        
         </>
    )
}

export default TaskList