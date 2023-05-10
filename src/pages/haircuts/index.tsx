import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import {
  Flex,
  Text,
  Heading,
  Button,
  Stack,
  Switch,
  useMediaQuery,
  Link
} from '@chakra-ui/react'
import { Sidebar } from '../../components/sidebar'

import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../context/AuthContext'
import { api } from '../../services/apiClient'
import { setupAPIClient } from '../../services/api'
import { IoMdPricetag } from 'react-icons/io'

export default function Haircuts() {
  const {  } = useContext(AuthContext);

  const [isMobile] = useMediaQuery("(max-width: 500px)")

  return (
    <>
      <Head>
        <title>Modelos de cortes - BarberPRO</title>
      </Head>
      <Sidebar>
        <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

          <Flex
            direction={isMobile ? "column" : "row"}
            width="100%"
            alignItems={isMobile ? "column" : "center"}
            justifyContent="flex-start"
            mb={isMobile ? 5 : 0}
          >
            <Heading
              fontSize={isMobile ? "28px" : "3xl"}
              mt={4}
              mb={4}
              mr={4}
              color="orange.900"
            >
              Modelos de cortes
            </Heading>

            <Link href="/haircuts/new">
              <Button bg="barber.400" _hover={{ opacity: ".2", borderWidth: '2px'}} color="#fff">
                Cadastrar novo
              </Button>
            </Link>

            <Stack ml="auto" align="center" direction="row">
              <Text color="#fff" fontWeight="bold" >Ativos</Text>
              <Switch
                colorScheme='green'
                size="lg"
              />
            </Stack>

          </Flex>

          <Link w="100%" href="/haircuts/123">
            <Flex
              cursor="pointer"
              w="100%"
              p={4}
              bg="barber.400"
              direction="row"
              rounded="4"
              mb={4}
              justifyContent="space-between"
            >
              <Flex direction="row" align="center" justifyContent="center">
                <IoMdPricetag color={28} color="#fba931" />
                <Text fontWeight="bold" ml={4} noOfLines={2} color="#fff">
                  Corte completo
                </Text>
              </Flex>

              <Text fontWeight="bold" color="#fff">
                Preço R$ 59.90
              </Text>

            </Flex>
          </Link>

        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  try{
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/detalhesUserLogado')
  let a = 0;
  console.log(a)

  const user = {
    id: response.data.id,
    name: response.data.name,
    email: response.data.email,
    endereco: response.data?.endereco
  }

  return {
    props: {
    }
  }


  }catch(err){
  console.log("ERRO DENTRO DO COMPONENTE: ", err);

    return{
      redirect:{
        destination: '/dashboard',
        permanent: false,
      }
    }
  }

})