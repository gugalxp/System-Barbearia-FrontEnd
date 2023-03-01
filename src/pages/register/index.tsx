import { useState, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'
import logoImg from '../../../public/images/logo.svg'
import Link from 'next/link';
import { canSSRGuest } from "../../utils/canSSRGuest"

import { AuthContext } from '../../context/AuthContext'

export default function Register() {

  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister () {
    if (!name && !email && password) {
      return;
    }

    await signUp({ name, email, password });
  }

  return (
    <>
    <Head>
      <title>Crie sua conta no BarberPRO</title>
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
          placeholder="Nome da barbearia"
          type="text"
          mb={3}
          _hover={{ bg: "barber.400"}}
          value={name}
          onChange={ (e) => setName(e.target.value)}
        />

        <Input 
          background="barber.400"
          variant="filled"
          size="lg"
          placeholder="email@email.com"
          type="email"
          mb={3}
          _hover={{ bg: "barber.400"}}
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
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
          onChange={ (e) => setPassword(e.target.value)}
        />

        <Button
          background="button.cta"
          mb={6}
          color="gray.900"
          size="lg"
          _hover={{ bg: "#ffb13e"}}
          onClick={ handleRegister }
        >
          Cadastrar
        </Button>

        <Center mt={2}>
          <Link href="/login">
            <Text cursor="pointer">Já possui conta? <strong>Faça login</strong></Text>
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