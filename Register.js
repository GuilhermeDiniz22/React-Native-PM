import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, Avatar } from 'react-native-elements';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
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
      <Text h3 style={styles.title}>Cadastro</Text>

      <Input
        placeholder="Nome"
        leftIcon={{ type: 'feather', name: 'user' }}
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder="CPF"
        leftIcon={{ type: 'feather', name: 'credit-card' }}
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />

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
        title="Cadastrar"
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
