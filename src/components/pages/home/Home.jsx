import { Button, Input, Stack, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Book from '../book/Book'
import { Oval } from "react-loader-spinner"

const Home = () => {
  const [ books, setBooks ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ query, setQuery ] = useState("Stephen King")

  const [ value, setValue ] = useState("")
  
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${import.meta.env.VITE_API_KEY}` + "&maxResults=40")
    .then(json => json.json())
    .then(data => {
        setBooks(data.items)
        setLoading(false)
    } )
  },[query])


  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(value) 
    setValue("")
    setLoading(true)
  }


 
  if (loading) {
    return (
      <div className="loader-container" style={{display:"flex", justifyContent:"center",alignItems: "center",minHeight:"100vh"}}>
        <Oval
            visible={true}
            height="80"
            width="80"
            color="#FFFFFF"
            secondaryColor="#3E2723"
            ariaLabel="oval-loading"
            wrapperStyle={{
            }}
            wrapperClass=""
       />
     </div>
    );
  }



  return (
  <Stack>
    <Stack>
      <Text
            fontSize={{base : "30px", sm : "52px"}}   
            textAlign="center"
            marginTop={{base : "20px", sm : "0px"}}   
      >
        BOOKS
      </Text>

      <form style={{display : "flex", gap:"10px", justifyContent:"center", padding:"20px 0px"}} onSubmit={handleSubmit}>
        <Input width="80%" border="1px solid #333333" backgroundColor="#F5F5F5 "  value={value} onChange={(e) => setValue(e.target.value)} placeholder="Mariana Enriquez"  />
        <Button type='submit'>Buscar</Button>
      </form>
      <Stack  display="grid" 
              gridTemplateColumns="repeat(auto-fit,minmax(200px,1fr))" 
              gap="32px"   
      >
          {books.map(book => (
              <Book book={book}  key={book.id} />
          ))}
              
      </Stack>
   </Stack>
  </Stack>
   

  )
}

export default Home












































