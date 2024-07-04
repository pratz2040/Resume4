import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer_left'>
        <Typography className="footer_name"></Typography> 
           Prathamesh Pawar
      </div>
      <div className='footer_right'>
        <Typography className='footer_copy'>
          Designed my <a href='/' target='_blank'> Prathamesh_Pawar</a>
          <br/>
          Idea By <a  target='_blank'> Travonline.</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer
