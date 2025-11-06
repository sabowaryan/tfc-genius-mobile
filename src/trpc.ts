import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';

// NOTE: Vous devez remplacer cette URL par l'URL de votre backend tfc-genius déployé sur Sevalla.com
const API_URL = 'https://tfc-genius-h8uhf.sevalla.app/'; 

// Le type AppRouter doit être importé depuis le backend.
// Pour l'instant, nous utilisons 'any' pour éviter les erreurs de compilation.
// Dans un projet réel, vous devriez partager les types entre le backend et le mobile.
export type AppRouter = any; 

export const trpcReact = createTRPCReact<AppRouter>();

export const trpcClient = trpcReact.createClient({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: API_URL,
      // Vous pouvez ajouter des headers pour l'authentification ici
      // headers() {
      //   return {
      //     authorization: getAuthToken(),
      //   };
      // },
    }),
  ],
});
