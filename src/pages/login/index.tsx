import Head from 'next/head';
import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react'
import logoImg from '../../../public/images/logo.svg'


export default function Home() {

  return (
    <>
    <Head>
      <title>BarberPRO - Faça login para acessar</title>
    </Head>
    <Flex color="barber.100" background="barber.900" height="100vh" alignItems="center" justifyContent="center">
      <Text>Página HOME!</Text>
    </Flex>
    </>
  )
}