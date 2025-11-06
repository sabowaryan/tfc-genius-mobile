import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpcReact, trpcClient } from './src/trpc';
import TestComponent from './src/TestComponent';

const queryClient = new QueryClient();

export default function App() {
  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <TestComponent />
          <StatusBar style="auto" />
        </View>
      </QueryClientProvider>
    </trpcReact.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});