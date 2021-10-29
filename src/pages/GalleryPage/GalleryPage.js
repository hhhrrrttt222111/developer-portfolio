import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Gallery,Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            
            <Gallery/>
          
            <Footer />
        </div>
    )
}

export default Main
