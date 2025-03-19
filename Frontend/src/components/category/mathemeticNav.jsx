import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Mathemetic from './mathemetic'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'

function MathemeticNav() {
  return (
    <div>
      <Navbar></Navbar>
      <BooksNav />
      <MobBooksNav className="md:hidden"></MobBooksNav>
      <Mathemetic></Mathemetic>
      <Footer></Footer>
    </div>
  )
}

export default MathemeticNav
