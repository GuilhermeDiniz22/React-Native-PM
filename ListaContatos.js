import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem, Avatar, Text } from 'react-native-elements';

const contacts = [
  {
    id: '1',
    name: 'Maria Silva',
    phone: '(11) 98765-4321',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'João Souza',
    phone: '(21) 99876-5432',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: '3',
    name: 'Ana Oliveira',
    phone: '(31) 91234-5678',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export default function ListaContatos() {
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
        data={contacts}
        keyExtractor={(item) => item.id}
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
