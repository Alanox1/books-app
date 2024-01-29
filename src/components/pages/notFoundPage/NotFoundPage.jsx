import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Stack alignItems="center">
        <Text textAlign="center" fontSize="50px">Página no encontrada</Text>
        <Link to="/" style={{textAlign : "center", fontSize:"30px"}}>Volver a inicio</Link>
    </Stack>
  )
}

export default NotFoundPage