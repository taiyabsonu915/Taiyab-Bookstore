
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Mathemetic from './mathemetic'
import Art from './Art'
import Course from '../Course'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'
function ArtNav() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      <BooksNav />
      <MobBooksNav className="md:hidden"></MobBooksNav>
      <Art ></Art>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default ArtNav
