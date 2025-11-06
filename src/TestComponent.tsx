import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { trpcReact } from './trpc';

// Ce composant suppose que votre backend a une procédure 'example.hello' ou similaire
// qui retourne un message simple.
const TestComponent: React.FC = () => {
  // NOTE: 'example.hello' est une procédure factice. Vous devrez la remplacer par une
  // procédure existante de votre backend tfc-genius.
  const { data, isLoading, error } = trpcReact.example.hello.useQuery({ text: 'from Expo' });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Connexion au backend...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.errorText]}>Erreur de connexion tRPC:</Text>
        <Text style={styles.errorText}>{error.message}</Text>
        <Text style={styles.noteText}>
          Vérifiez que le backend est lancé et que l'URL dans `src/trpc.ts` est correcte.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.successText]}>Connexion tRPC réussie !</Text>
      <Text style={styles.text}>Message du backend : {data?.greeting ?? 'Aucun message reçu'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
  },
  successText: {
    color: 'green',
    fontWeight: 'bold',
  },
  noteText: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default TestComponent;
