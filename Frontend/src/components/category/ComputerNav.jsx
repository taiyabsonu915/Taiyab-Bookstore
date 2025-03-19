
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Mathemetic from './mathemetic'
import Computer from './Computer'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'
function ComputerNav() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      <BooksNav />
      <MobBooksNav className="md:hidden"></MobBooksNav>
      <Computer></Computer>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default ComputerNav
