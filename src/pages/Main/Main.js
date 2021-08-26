import React from 'react'
// eslint-disable-next-line
import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts } from '../../components'


function Main() {
    return (
        <div>
            <Navbar />

        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            {/* PROJECTS */}
            {/* SERVICES */}
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
