import { useState, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'
import logoImg from '../../../public/images/logo.svg'
import Link from 'next/link';
import { AuthContext } from '../../context/AuthContext'
import { canSSRGuest } from "../../utils/canSSRGuest"


export default function Login() {

  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin () {
    if (!email || !password) {
      return;
    }
    
    await signIn({email, password})
  }

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
          _hover={{ bg: "barber.400"}}
          mb={3}
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
        />

        <Input 
          background="barber.400"
          variant="filled"
          size="lg"
          placeholder="*********"
          type="text"
          mb={6}
          _hover={{ bg: "barber.400"}}
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
        />

        <Button
          background="button.cta"
          mb={6}
          color="gray.900"
          size="lg"
          _hover={{ bg: "#ffb13e"}}
          onClick={ handleLogin }
        >
          Acessar
        </Button>

        <Center mt={2}>
          <Link href="/register">
            <Text cursor="pointer">Ainda não possui conta? <strong>Cadastre-se</strong></Text>
          </Link>
        </Center>

        <Center>

        </Center>
      </Flex>
      
    </Flex>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {
      
    }
  }
})