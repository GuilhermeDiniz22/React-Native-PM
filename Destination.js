import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const categorias = [
  { nome: 'Resort', icone: 'umbrella-beach', imagem: 'https://source.unsplash.com/600x400/?resort' },
  { nome: 'Family House', icone: 'home', imagem: 'https://source.unsplash.com/600x400/?homestay' },
  { nome: 'Hotel', icone: 'hotel', imagem: 'https://source.unsplash.com/600x400/?hotel' },
  { nome: 'Chale', icone: 'tree', imagem: 'https://source.unsplash.com/600x400/?lodge' },
  { nome: 'Villa', icone: 'building', imagem: 'https://source.unsplash.com/600x400/?villa' },
  { nome: 'Apartament', icone: 'city', imagem: 'https://source.unsplash.com/600x400/?apartment' },
  { nome: 'Hostel', icone: 'bed', imagem: 'https://source.unsplash.com/600x400/?hostel' }
];

const Destination = () => {
  return (
    <ScrollView style={estilos.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Welcome, Donna Stroupe</Text>
        <TextInput
          style={estilos.pesquisa}
          placeholder="Buscar destino..."
          placeholderTextColor="#999"
        />
      </View>

      <Text style={estilos.secao}>Categories</Text>
      <Text style={estilos.subSecao}>Popular Destinations</Text>

      <View style={estilos.grade}>
        {categorias.map((item, index) => (
          <TouchableOpacity key={index} style={estilos.card}>
            <Image source={{ uri: item.imagem }} style={estilos.imagem} />
            <View style={estilos.rodapeCard}>
              <FontAwesome5 name={item.icone} size={30} color="#007AFF" style={estilos.iconeCard} />
              <Text style={estilos.textoCard}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={estilos.verTodos}>
        <Text style={estilos.textoVerTodos}>See All</Text>
        <FontAwesome5 name="chevron-right" size={12} color="#007AFF" style={estilos.iconeVerTodos} />
      </TouchableOpacity>

      <View style={estilos.rodape}>
        <TouchableOpacity style={estilos.itemRodape}>
          <FontAwesome5 name="home" size={20} color="#8e8e8e" />
          <Text style={estilos.textoRodape}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.itemRodape}>
          <FontAwesome5 name="search" size={20} color="#8e8e8e" />
          <Text style={estilos.textoRodape}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.itemRodape}>
          <FontAwesome5 name="envelope" size={20} color="#8e8e8e" />
          <Text style={estilos.textoRodape}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.itemRodape}>
          <FontAwesome5 name="user" size={20} color="#007AFF" />
          <Text style={[estilos.textoRodape, { color: '#007AFF' }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  cabecalho: {
    padding: 16,
    backgroundColor: '#E6F0FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12
  },
  pesquisa: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8
  },
  secao: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft: 16
  },
  subSecao: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    marginLeft: 16
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  card: {
    width: '47%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0'
  },
  imagem: {
    width: '100%',
    height: 100
  },
  rodapeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8
  },
  iconeCard: {
    marginRight: 6
  },
  textoCard: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  verTodos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 24
  },
  textoVerTodos: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  iconeVerTodos: {
    marginLeft: 6,
    marginTop: 1
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  itemRodape: {
    alignItems: 'center'
  },
  textoRodape: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 4
  }
});

export default Destination;
