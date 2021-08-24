import React from 'react'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog } from '../../components'
import Education from '../../components/Education/Education'

function Main() {
    return (
        <div>
            <Navbar />

        
            <Landing />
            <About />
            <Education />
            <Skills />
            {/* Experience */}
            {/* PROJECTS */}
            {/* SERVICES */}
            <Testimonials />
            <Blog />
            {/* CONTACT */}
            <Footer />
        </div>
    )
}

export default Main
