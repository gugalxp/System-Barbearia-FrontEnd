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
  Link,
  Input
} from '@chakra-ui/react'
import { Sidebar } from '../../../components/sidebar'

import { canSSRAuth } from '../../../utils/canSSRAuth'
import { AuthContext } from '../../../context/AuthContext'
import { api } from '../../../services/apiClient'
import { setupAPIClient } from '../../../services/api'
import { FiChevronLeft } from 'react-icons/fi'

interface NewHairtcutProps {
  subscription: boolean;
  count: number;
}

export default function NewHaircut({ subscription, count }: NewHairtcutProps) {

  const [isMobile] = useMediaQuery("(max-width: 500px)")

  return (
    <>
      <Head>
        <title>BarberPRO - Novo modelo de corte</title>
      </Head>

      <Sidebar>
        <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

          <Flex
            direction="row"
            w="100%"
            align={isMobile ? "flex-start" : "center"}
            mb={isMobile ? 4 : 0}
          >
            <Link href='/haircuts'>
              <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="barber.400"
                _hover={{ opacity: ".2", borderWidth: '2px' }}
                color="#fff"
                mr={4}
              >
                <FiChevronLeft size={24} color='#fff' />
                Voltar
              </Button>
            </Link>

            <Heading
              color="orange.900"
              mt={4}
              mr={4}
              mb={4}
              fontSize={isMobile ? "28px" : "3xl"}
            >
              Modelos de corte
            </Heading>
          </Flex>

          <Flex
            maxW="700px"
            bg="barber.400"
            w="100%"
            align="center"
            justify="center"
            pt={8}
            pb={8}
            direction="column"
          >
            <Heading
              fontSize={isMobile ? "22px" : "3xl"}
              color="white"
              mb={4}
            >
              Cadastrar modelo
            </Heading>

            <Input
              placeholder="Nome do corte"
              size="lg"
              type="text"
              w="85%"
              bg="gray.900"
              mb={3}
            />

            <Input
              placeholder="Valor do corte ex: 59.90"
              size="lg"
              type="text"
              w="85%"
              bg="gray.900"
              mb={4}
            />

            <Button
              w=" 85%"
              size="lg"
              color="gray.900"
              mb={6}
              bg="button.cta"
              _hover={{ bg: "#FFB13E" }}
            >
              Cadastrar
            </Button>

            {!subscription && count >= 3 && (
              <Flex>
                <Text>
                  Você atingiu o limite de corte.
                </Text>
                <Link href="/planos">
                  <Text>
                    Seja premium
                  </Text>
                </Link>
              </Flex>
            )}
          </Flex>

        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  try {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/check')
    const count = await apiClient.get('/countHaircut')
    response
    console.log("RESPONSE", response)
    console.log("COUNT: ", count)

    return {
      props: {
        subscription: response.data.user?.subscription?.status === 'active' ? true : false,
        count: count.data.user
      }
    }

  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }
})







