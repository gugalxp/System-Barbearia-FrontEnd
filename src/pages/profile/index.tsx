import Head from 'next/head';
import { Flex, Text, Heading, Box, Input, Button } from '@chakra-ui/react'
import { canSSRAuth } from "../../utils/canSSRAuth"
import { Sidebar } from "../../components/sidebar";

import Link from "next/link"

export default function Profile() {
  return (
    <>
      <Head>
        <title>Minha conta - BarberPRO</title>
      </Head>
      <Sidebar>
        <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

          <Flex w="100%" direction="row" alignItems="center" justifyContent="flex-start">
            <Heading fontSize="2xl" mt={4} mb={4} mr={4} color="orange.900" >Minha Conta</Heading>
          </Flex>

          <Flex pt={8} pb={8} bg="barber.400" maxW="700px" w="100%" direction="column" alignItems="center" justifyContent="center">
            <Flex direction="column" w="85%">
              <Text mb={2} fontSize="xl" fontWeight="bold" color="#fff" color="white">Nome da barbearia:</Text>
              <Input
                w="100%"
                bg="gray.900"
                placeholder='Nome da sua barbearia'
                size="lg"
                type="text"
                mb={3}
              />

              <Text mb={2} fontSize="xl" fontWeight="bold" color="#fff" color="white">Endereço:</Text>
              <Input
                w="100%"
                bg="gray.900"
                placeholder='Endereço da barbearia'
                size="lg"
                type="text"
                mb={3}
              />

              <Text mb={2} fontSize="xl" fontWeight="bold" color="#fff" color="white">Plano atual:</Text>

              <Flex direction="row" width="100%" mb={3} p={1} borderWidth={1} rounded={6} bg="barber.900" alignItems="center" justifyContent="space-between">
                <Text p={2} fontSize="lg" color="#4dffb4">Plano Grátis</Text>
                <Link href="/planos">
                  <Box cursor="pointer" p={1} pl={2} pr={2} bg="#00cd52" rounded={4} color="#fff">Mudar plano</Box>
                </Link>
              </Flex>

          <Button w="100%" mt={3} mb={4} bg="button.cta" size="lg" color="#fff" _hover={{ bg: '#ffb13e' }}>Salvar</Button>
          <Button w="100%" mb={6} bg="transparent" borderColor="red.500" borderWidth={2} size="lg" color="red.500" _hover={{ bg: 'transparent' }}>Sair da conta</Button>

            </Flex>
          </Flex>
        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {

    }
  }
})