import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');


  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Esqueceu a Senha</Text>

      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'feather', name: 'mail' }}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Button
        title="Enviar"
        containerStyle={{ marginTop: 15 }}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      />

      <Button
        title="Voltar ao Login"
        type="clear"
        titleStyle={styles.linkText}
        onPress={() => navigation.navigate('Login')}
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
  button: {
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
  linkText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
});
