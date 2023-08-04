import React from 'react'
import App from '../App'

export const Footer = () => {
     let footerStyle = {
          "color" : "white",
          "background" : "black",
          "position" : "fixed",
          "bottom" : "0",
          "width" : "100vw",
          "textAlign" : "center",
          "height" : "4vh",
     }
  return (
    <footer style={footerStyle} className='mt-3'>
     <div>© 2023 Todos List. All rights reserved.</div>
    </footer>
  )
}
