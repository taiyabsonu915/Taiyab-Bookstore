
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Mathemetic from './mathemetic'
import Art from './Art'
import Social from './Social'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'
function SocialNav() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      <BooksNav />
      <MobBooksNav className="md:hidden"></MobBooksNav>
      <Social></Social>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default SocialNav
