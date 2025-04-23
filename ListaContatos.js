import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar, Text } from 'react-native-elements';
import axios from 'axios';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/contatos') 
      .then(response => {
        setContatos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar contatos:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider containerStyle={styles.item}>
      <Avatar rounded source={{ uri: item.avatar }} />
      <ListItem.Content>
        <ListItem.Title style={styles.name}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.phone}>{item.phone}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Meus Contatos</Text>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  phone: {
    fontSize: 14,
    color: '#888',
  },
});
