import React from 'react'

function About({img , about}) {
    if(!img) return "https://via.placeholder.com/215"
    return (
            <aside>
                <img src={img} alt='blog logo'/>
                <p>{about}</p>
            </aside>
    )
}

export default About
