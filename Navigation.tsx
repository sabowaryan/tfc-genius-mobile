import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

// Définition des types pour la navigation
export type RootStackParamList = {
  Home: undefined;
  // Ajoutez d'autres écrans ici (ex: Login, Settings)
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Accueil tfc-genius' }}
        />
        {/* Ajoutez d'autres Stack.Screen ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
