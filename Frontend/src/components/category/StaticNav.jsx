import Navbar from '../Navbar'
import Footer from '../Footer'
import Mathemetic from './mathemetic'
import Art from './Art'
import Social from './Social'
import Static from './Static'
import BooksNav from '../booksNav'
import MobBooksNav from '../mobBooksNav'
function StaticNav() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      <BooksNav />
      <MobBooksNav className="md:hidden"></MobBooksNav>
      <Static></Static>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default StaticNav
