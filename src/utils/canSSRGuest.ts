import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { destroyCookie, parseCookies} from 'nookies'

export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        if (cookies['@barber.token']) {
          return {
            redirect: {
              destination: '/dashboard',
              permanent: false
            }
          }
        }

        console.log("Este é o contexto ", ctx)
        return await fn(ctx)
    }

}