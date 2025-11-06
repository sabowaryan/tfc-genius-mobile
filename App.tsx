import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpcReact, trpcClient } from './src/trpc';
import HomeScreen from './src/HomeScreen';

const queryClient = new QueryClient();

export default function App() {
  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
        <StatusBar style="auto" />
      </QueryClientProvider>
    </trpcReact.Provider>
  );
}

const styles = StyleSheet.create({
  // Styles non nécessaires ici car HomeScreen gère la mise en page
});