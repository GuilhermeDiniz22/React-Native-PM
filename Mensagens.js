import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const mensagens = [
  {
    nome: 'Claudia Alves',
    mensagem: 'Do more of what you love.',
    hora: '3m ago',
    naolido: 3,
    avatar: 'https://randomuser.me/api/portraits/women/56.jpg'
  },
  {
    nome: 'Dani Martinez',
    mensagem: 'Do your own thing.',
    hora: '5m ago',
    naolido: 1,
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg'
  },
  {
    nome: 'Kimberly Nguyen',
    mensagem: 'Kindness is beautiful.',
    hora: '1h ago',
    naolido: 2,
    avatar: 'https://randomuser.me/api/portraits/women/58.jpg'
  },
  {
    nome: 'Mariana Napolitani',
    mensagem: 'Live your purpose.',
    hora: '2h ago',
    naolido: 1,
    avatar: 'https://randomuser.me/api/portraits/women/59.jpg'
  },
  {
    nome: 'Olivia Wilson',
    mensagem: 'You got this.',
    hora: '5h ago',
    naolido: 0,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    nome: 'Rachelle Beaudry',
    mensagem: "You're wonderful.",
    hora: 'Yesterday',
    naolido: 0,
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    nome: 'Soo Jin Ae',
    mensagem: 'Keep it simple.',
    hora: 'Yesterday',
    naolido: 0,
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg'
  }
];

const Mensagem = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Messages & Chat</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sort by time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Mark all read</Text>
          </TouchableOpacity>
        </View>
      </View>

      {mensagens.map((msg, index) => (
        <TouchableOpacity key={index} style={styles.mensagemCard}>
          <Image source={{ uri: msg.avatar }} style={styles.avatar} />
          <View style={styles.mensagemConteudo}>
            <View style={styles.mensagemHeader}>
              <Text style={styles.nome}>{msg.nome}</Text>
              <Text style={styles.hora}>{msg.hora}</Text>
            </View>
            <View style={styles.mensagemFooter}>
              <Text style={styles.mensagemTexto}>{msg.mensagem}</Text>
              {msg.naolido > 0 && (
                <View style={styles.simbolo}>
                  <Text style={styles.simboloTexto}>{msg.naolido}</Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="home" size={20} color="#8e8e8e" />
          <Text style={styles.footerTexto}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="user-md" size={20} color="#8e8e8e" />
          <Text style={styles.footerTexto}>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="calendar-check" size={20} color="#8e8e8e" />
          <Text style={styles.footerTexto}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="user" size={20} color="#007AFF" />
          <Text style={[styles.footerTexto, { color: '#007AFF' }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    padding: 16,
    paddingBottom: 8
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#E6F0FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 12
  },
  mensagemCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center'
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 12
  },
  mensagemConteudo: {
    flex: 1
  },
  mensagemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nome: {
    fontSize: 16,
    fontWeight: '600'
  },
  hora: {
    fontSize: 12,
    color: '#999'
  },
  mensagemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4
  },
  mensagemTexto: {
    fontSize: 14,
    color: '#666',
    flex: 1
  },
  simbolo: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8
  },
  simboloTexto: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 24
  },
  footerItem: {
    alignItems: 'center'
  },
  footerTexto: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 4
  }
});

export default Mensagem;
