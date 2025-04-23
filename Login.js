import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, Avatar } from 'react-native-elements';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        containerStyle={styles.avatar}
      />
      <Text h3 style={styles.title}>Login</Text>
      
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'feather', name: 'mail' }}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'feather', name: 'lock' }}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <Button
        title="Login"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={() => alert('Login realizado (simulado)')}
      />

      <Button
        title="Cadastre-se"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={() => navigation.navigate('Register')}
      />

      <Button
        title="Esqueceu a Senha"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={() => navigation.navigate('ForgotPassword')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#4A90E2', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

