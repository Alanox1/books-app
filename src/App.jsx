import { Box } from '@chakra-ui/react'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import BookDetail from './components/pages/bookDetail/BookDetail'
import NotFoundPage from './components/pages/notFoundPage/NotFoundPage'

function App() {


  return( 
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/book/:bookId' element={<BookDetail/>}/>

//      <Route path='*' element={<NotFoundPage />}/>

      </Routes>
    </HashRouter>
  
  )
    //  <BrowserRouter>
    //    <Routes>

    //      <Route path='/' element={<Home />}/>
         
    //      <Route path='/book/:bookId' element={<BookDetail/>}/>

    //      <Route path='*' element={<NotFoundPage />}/>
         
    //    </Routes>
    //  </BrowserRouter>
  // )
}

export default App







