import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default function RegisterContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');


  return (
    <View style={styles.container}>

      <Input
        placeholder="Nome"
        leftIcon={{ type: 'feather', name: 'user' }}
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'feather', name: 'mail' }}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

    <Input
        placeholder="Telefone"
        leftIcon={{ type: 'feather', name: 'phone' }}
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
    />


      <Button
        title="Salvar"
        containerStyle={styles.button}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonText}
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
  },
  buttonStyle: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
