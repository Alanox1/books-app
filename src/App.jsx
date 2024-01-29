import { HashRouter,Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import BookDetail from './components/pages/bookDetail/BookDetail'
import NotFoundPage from './components/pages/notFoundPage/NotFoundPage'

function App() {


  return( 
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/book/:bookId' element={<BookDetail/>}/>

        <Route path='*' element={<NotFoundPage />}/>

      </Routes>
    </HashRouter>
  
  )
}

export default App







