import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            {/* Link is used instead of "a href" so that the page doesnt reload */}
      <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
