import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default function ForgotPassword() {
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
      
      <Button title="Enviar"  containerStyle={styles.button} buttonStyle={{ backgroundColor: 'green' }} />
      
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
  },
  button: {
    marginTop: 10,
  },
});