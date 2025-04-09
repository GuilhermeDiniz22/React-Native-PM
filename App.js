import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './Register';
import LoginScreen from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './ForgotPassword';
import ListaContatos from './ListaContatos';
import RegisterContact from './RegisterContact';
import AlterContact from './AlterContact';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegistrarContato" component={RegisterContact} />
        <Stack.Screen name="AlterarContato" component={AlterContact} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} />
        
      </Stack.Navigator>
    </NavigationContainer>
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
