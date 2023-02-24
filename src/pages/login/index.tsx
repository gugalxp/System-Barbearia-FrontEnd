import Head from 'next/head';
import Image from 'next/image';
import { Flex, Text, Center, Input, Button, Link } from '@chakra-ui/react'
import logoImg from '../../../public/images/logo.svg'


export default function Home() {

  return (
    <>
    <Head>
      <title>BarberPRO - Faça login para acessar</title>
    </Head>
    <Flex color="barber.100" background="barber.900" height="100vh" alignItems="center" justifyContent="center">
      
      <Flex width={640} direction="column" p={14} rounded={8}>
       
        <Center p={4}>
            <Image 
              src={logoImg} 
              quality={100} 
              objectFit="fill" 
              alt="Logo barbePro" 
              width={240}
            />
        </Center>

        <Input 
          background="barber.400"
          variant="filled"
          size="lg"
          placeholder="email@email.com"
          type="email"
          mb={3}
          _hover={{ bg: "barber.400"}}
        />

        <Input 
          background="barber.400"
          variant="filled"
          size="lg"
          placeholder="*********"
          type="text"
          mb={6}
          _hover={{ bg: "barber.400"}}
        />

        <Button
          background="button.cta"
          mb={6}
          color="gray.900"
          size="lg"
          _hover={{ bg: "#ffb13e"}}
        >
          Acessar
        </Button>

        <Center mt={2}>
          <Link href="/register">
            <Text cursor="pointer">Ainda não possui conta? <strong>Cadastre-se</strong></Text>
          </Link>
        </Center>

      </Flex>
      
    </Flex>
    </>
  )
}