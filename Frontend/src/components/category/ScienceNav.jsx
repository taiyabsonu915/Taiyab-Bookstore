import React from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import Mathemetic from './mathemetic'
import Science from './Science'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'
function ScienceNav() {
  return (
    <div>
       <Navbar></Navbar>
       <BooksNav />
       <MobBooksNav className="md:hidden"></MobBooksNav>
      <Science></Science>
      <Footer></Footer>
    </div>
  )
}

export default ScienceNav
