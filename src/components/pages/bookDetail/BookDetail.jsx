import { Stack, Text, Image, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Oval } from "react-loader-spinner"
import BookDescription from "../../common/bookDescription/BookDescription"
const BookDetail = () => {
  const { bookId } = useParams()
  const [ bookDetail, setBookDetail ] = useState("")
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    .then(json => json.json())
    .then(book => {
       
        setBookDetail(book)
        setLoading(false)
    } )
  },[])


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
    <Stack justifyContent="center" alignItems="center" >

        <Stack flexDirection={{base : "column", sm : "row"}} width={{base : "100%", sm : "70%"}}>

        <Stack flex="2" >
            <Text
                  fontSize={{base : "26px", sm : "40px"}}
                  textAlign={{base : "center", sm : "start"}}  
                  margin= "30px 0px"
            >
              {bookDetail.volumeInfo.title}
            </Text>
            <BookDescription description={bookDetail.volumeInfo.description} />
        </Stack>
        <Stack flex="1">
            <Image src={bookDetail.volumeInfo.imageLinks.medium} 
                  marginTop="30px"
            />
            <Box>Autor/Autores: {bookDetail.volumeInfo.authors.map((autor,id) => <Text key={id}>{autor}</Text>)}</Box>
            <Box>Categorias:{bookDetail.volumeInfo.categories.map((category,id) => <Text key={id}>{category}</Text>)}</Box>
            <Text>Páginas: {bookDetail.volumeInfo.pageCount}</Text>
            <Text>Fecha de lanzamiento: {bookDetail.volumeInfo.publishedDate}</Text>
            <Text>Editorial: {bookDetail.volumeInfo.publisher}</Text>
            <Text>Lenguaje: {bookDetail.volumeInfo.language}</Text>
        </Stack>
        </Stack>
    </Stack>
   
 
  )
}

export default BookDetail