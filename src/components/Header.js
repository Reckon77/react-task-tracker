import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button"
//will be used to hide the add button when we are in about page
import { useLocation } from 'react-router-dom'

const Header = (props) => {
    const location = useLocation()
    return (
        <header className='header'>
           <h1>{props.title}</h1> 
           {location.pathname === '/' && (
               <Button onClick={props.toggleAddTask} color={props.showAdd?'red':'green'} text={props.showAdd?'Close':'Add'}/>
           )}
           
        </header>
    )
}
//default props if nothing is passed
Header.defaultProps={
    title:'Task Title'
}
Button.defaultProps={
    color:'steelblue'
    }
//setting prop types
Header.propTypes={
    //.isRequired for reqd
    title: PropTypes.string.isRequired
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func.isRequired
    }
//setting style
// const headingStyle={
//     color:'red',
//     backgroundColor:'black'
// }
export default Header
