import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import TestComponent from './TestComponent';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>tfc-genius Mobile</Text>
          <Text style={styles.headerSubtitle}>Écran d'Accueil (Scaffold)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Statut de l'API (tRPC)</Text>
          <TestComponent />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fonctionnalités</Text>
          <Text style={styles.bodyText}>
            Ceci est l'écran d'accueil de base. Le développement futur inclura :
          </Text>
          <Text style={styles.listItem}>• Navigation entre les écrans</Text>
          <Text style={styles.listItem}>• Interface utilisateur adaptée aux mobiles</Text>
          <Text style={styles.listItem}>• Gestion de l'authentification et des sessions</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  bodyText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  listItem: {
    fontSize: 14,
    marginLeft: 10,
    color: '#555',
  },
});

export default HomeScreen;
