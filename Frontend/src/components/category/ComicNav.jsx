
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Mathemetic from './mathemetic'
import Computer from './Computer'
import Comics from './Comic'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'
function ComicNav() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      <MobBooksNav className="md:hidden"></MobBooksNav>
      <BooksNav />
      <Comics></Comics>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default ComicNav
