import { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import {
  Flex,
  Text,
  Heading,
  Box,
  Input,
  Button
} from '@chakra-ui/react'
import { Sidebar } from '../../components/sidebar'

import Link from 'next/link'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../context/AuthContext'
import { api } from '../../services/apiClient'
import { parseCookies } from 'nookies'

interface UserProps {
  id: string;
  name: string;
  email: string;
  endereco: string | null;
  subscriptions?: SubscriptionProps | null;
}

interface SubscriptionProps {
  id: string;
  status: string;
}


export default function Profile() {
  const { logoutUser } = useContext(AuthContext);
  const [user, setUser] = useState<UserProps>()
  const [name, setName] = useState<string | undefined>(user?.name);
  const [endereco, setEndereco] = useState<string | null>(user?.endereco);

  const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco(event.target.value);
  };
  
  async function handleLogout() {
    await logoutUser();
  }

  async function handleUpdateUser() {
    if (!name || !endereco) {
      return;
    }

    try {
      api.put('/updateInformacoesUsuario', {
        name: name,
        endereco: endereco
      }).then(response => {
        alert("Dados atualizados com sucesso!")
      })
    } catch (error) {
      console.log(error);      
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const { '@barber.token': token } = parseCookies();

    if (token) {
      api.get('/detalhesUserLogado').then(response => {
        console.log("Dados no perfil", response.data.user);
        const { id, name, endereco, email, subscriptions } = response.data.user;
        setUser({
          id,
          name,
          email,
          endereco,
          subscriptions
        })
        setName(name); 
        setEndereco(endereco)
      })
        .catch(() => {
          signOut()
        })

    }

  }, [])

  return (
    <>
      <Head>
        <title>Minha Conta - BarberPRO</title>
      </Head>
      <Sidebar>
        <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

          <Flex w="100%" direction="row" alignItems="center" justifyContent="flex-start">
            <Heading fontSize="3xl" mt={4} mb={4} mr={4} color="orange.900">Minha Conta</Heading>
          </Flex>

          <Flex pt={8} pb={8} background="barber.400" maxW="700px" w="100%" direction="column" alignItems="center" justifyContent="center" >
            <Flex direction="column" w="85%">
              <Text mb={2} fontSize="xl" fontWeight="bold" color="white">
                Nome da barbearia:
              </Text>
              <Input
                w="100%"
                background="gray.900"
                placeholder="Nome da sua barbearia"
                size="lg"
                type="text"
                mb={3}
                color="white"
                value={name}
                onChange={handleNameChange}
              />

              <Text mb={2} fontSize="xl" fontWeight="bold" color="white">
                Endereço:
              </Text>
              <Input
                w="100%"
                background="gray.900"
                placeholder="Endereço da barbearia"
                size="lg"
                type="text"
                mb={3}
                color="white"
                value={endereco}
                onChange={handleEnderecoChange }
              />

              <Text mb={2} fontSize="xl" fontWeight="bold" color="white">
                Plano atual:
              </Text>

              <Flex
                direction="row"
                w="100%"
                mb={3}
                p={1}
                borderWidth={1}
                rounded={6}
                background="barber.900"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text p={2} fontSize="lg" color={user?.subscriptions == null ? "#4dffb4" : "#FBA931"}>
                  {user?.subscriptions == null ? "Plano Grátis" : "Plano Premium"}
                </Text>

                <Link href="/planos">
                  <Box
                    cursor="pointer"
                    p={1} pl={2} pr={2}
                    background="#00cd52"
                    rounded={4}
                    color="white"
                  >
                    Mudar plano
                  </Box>
                </Link>

              </Flex>

              <Button
                w="100%"
                mt={3}
                mb={4}
                bg="button.cta"
                size="lg"
                _hover={{ bg: '#ffb13e' }}
                onClick={handleUpdateUser}
              >
                Salvar
              </Button>

              <Button
                w="100%"
                mb={6}
                bg="transparent"
                borderWidth={2}
                borderColor="red.500"
                color="red.500"
                size="lg"
                _hover={{ bg: 'transparent' }}
                onClick={handleLogout}
              >
                Sair da conta
              </Button>

            </Flex>
          </Flex>

        </Flex>
      </Sidebar>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  // try{
  // const apiClient = setupAPIClient(ctx)
  // const response = await apiClient.get('/detalhesUserLogado')

  // const user = {
  //   id: response.data.id,
  //   name: response.data.name,
  //   email: response.data.email,
  //   endereco: response.data?.endereco
  // }

  return {
    props: {
    }
  }


  // }catch(err){
  // console.log(err);

  //   return{
  //     redirect:{
  //       destination: '/dashboard',
  //       permanent: false,
  //     }
  //   }
  // }

})