import { Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

interface BookProps {
  book: Record<string, any>;
}

const Book: React.FC<BookProps> = ({book}) => {
  
    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    
    if(thumbnail === undefined) return
  
  return (
    <Stack justifyContent="center"
           alignItems="center"
           backgroundColor="#FFFFFF"
           padding="5px"
           borderRadius="8px"
           boxShadow="0px 0px 10px #000"
    >
        <Text textAlign="center" width="75%">{book.volumeInfo.title}</Text>
        <Image src={thumbnail} />
        <Link style={{fontSize:"20px", padding : "20px 0px", color : "#0066CC"}} to={`/book/${book.id}`}>Ver detalle...</Link>
    </Stack>
  )
}

export default Book