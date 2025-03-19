import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'
import Search from './searchBar'
function SearchNav() {
  
  const[searchBook,setSearchBook]=useState()
  return (
    <div>
      <Navbar></Navbar>
      <BooksNav />
      <MobBooksNav className="md:hidden"></MobBooksNav>
      <Search></Search>
      <Footer></Footer>
    </div>
  )
}

export default SearchNav
