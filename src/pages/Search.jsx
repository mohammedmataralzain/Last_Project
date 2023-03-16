import React from 'react'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Container } from '../components/style'
import TabSearch from '../components/TabsSearch'

const Search = () => {
  return (
    <div>
      <Navbar />
      <Container className='flex'>
      <Filters/>
      <TabSearch/>
      </Container>
      <Footer />
    </div>
  )
}

export default Search