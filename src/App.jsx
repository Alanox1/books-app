import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import BookDetail from './components/pages/bookDetail/BookDetail'
import NotFoundPage from './components/pages/notFoundPage/NotFoundPage'

function App() {


  return (
     <BrowserRouter>
       <Routes>

         <Route path='/' element={<Home />}/>
         
         <Route path='/book/:bookId' element={<BookDetail/>}/>

         <Route path='*' element={<NotFoundPage />}/>
         
       </Routes>
     </BrowserRouter>
  )
}

export default App
