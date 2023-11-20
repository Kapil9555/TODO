'use client'
import ImageIcon from '@mui/icons-material/Image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Grid, Icon, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/logo.png'
import { Roboto } from 'next/font/google';



const roboto4 = Roboto({
    weight:'700',
    subsets:['latin-ext'],
    display:"swap"
  })

const Header = () => {
    const [arrow, setArrow]= useState(false)
  return (
    <>
    <Grid container sx={{borderBottom:"1px solid #e0e0e0"}}>
        <Grid item xs={4} sx={{display:"flex",alignItems:"Center",height:"100%",p:"15px"}}>
            <Box>
                <Image src={logo} />
            </Box>
            <Box>
                <Typography className={roboto4.className} sx={{color:"#03015d",whiteSpace:"nowrap",fontSize:{lg:"20px",md:"20px",sm:"17px",xs:"14px"},marginLeft: "12px"}}>
                    Todo App
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={8} sx={{display:"flex",justifyContent:"right",p:"10px 15px"}}>
            <Box sx={{height:"100%",display:"flex",alignItems:"center",zIndex:99}}>
                <Box sx={{display:"flex",alignItems:"center",position:"relative",mr:"3px"}}>
                  <Typography sx={{fontSize:"17px",color:"#bdbdbd",userSelect:"none"}}>
                     Kapil
                  </Typography>
                   <Icon sx={{cursor:"pointer",ml:"3px",color:"#bdbdbd",mr:"10px"}} onClick={()=>{setArrow(!arrow)}}>
                      <KeyboardArrowUpIcon sx={{display:!arrow ?"none":"block"}}/>
                     <KeyboardArrowDownIcon sx={{display:arrow ?"none":"block"}}/>
                   </Icon>
                   <Paper elevation={3} sx={{display:arrow ?"flex":"none",alignItems:"space-between",flexDirection:"column",justifyContent:"center",position:"absolute",width:"100%",height:"70px",top:"26px"}}>
                       <Typography align='center' sx={{fontSize:"13px",userSelect:"none",cursor:"pointer",fontWeight:"bold",color:"#bdbdbd"}}>
                          Profile
                       </Typography>
                       <Typography align='center' sx={{fontSize:"13px",userSelect:"none",cursor:"pointer",fontWeight:"bold",color:"#bdbdbd",mt:"10px"}}>
                          Logout
                       </Typography>
                   </Paper>
                </Box>
                <Box sx={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"#e0e0e0",zIndex:99,height:"100%",width:"50px",borderRadius:"6px"}}>
                <ImageIcon sx={{color:"#bdbdbd"}}/>
                </Box>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default Header