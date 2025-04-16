import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

const categorias = [
  {
    name: 'Consultation',
    icon: <FontAwesome5 name="user-md" size={24} color="#fff" />,
    color: '#007AFF'
  },
  {
    name: 'Dentist',
    icon: <MaterialIcons name="medical-services" size={24} color="#fff" />,
    color: '#FF6B6B'
  },
  {
    name: 'Cardiologist',
    icon: <Ionicons name="heart" size={24} color="#fff" />,
    color: '#FF8C00'
  },
  {
    name: 'Hospital',
    icon: <FontAwesome5 name="hospital" size={24} color="#fff" />,
    color: '#4CAF50'
  },
  {
    name: 'Emergency',
    icon: <MaterialIcons name="emergency" size={24} color="#fff" />,
    color: '#E91E63'
  },
  {
    name: 'Laboratory',
    icon: <Entypo name="lab-flask" size={24} color="#fff" />,
    color: '#9C27B0'
  }
];

const doctors = [
  {
    name: 'Dr. Olivia Wilson',
    specialty: 'Consultant - Physiotherapy',
    rating: '⭐ 4.9 (37 Reviews)',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Dr. Jonathan Patterson',
    specialty: 'Consultant - Internal Medicine',
    rating: '⭐ 4.9 (37 Reviews)',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg'
  }
];

const Welcome = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcome}>Welcome, Dani Martinez</Text>
        <TextInput
          style={styles.barraBusca}
          placeholder="Search doctor"
          placeholderTextColor="#666"
        />
      </View>

      <Text style={styles.titulo}>Categorias</Text>
      <View style={styles.categoriasContainer}>
        {categorias.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.cardCategoria, { backgroundColor: cat.color }]}
          >
            {cat.icon}
            <Text style={styles.cardCategoriaText}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.titulo}>Top Doctors</Text>
      {doctors.map((doc, index) => (
        <View key={index} style={styles.cardDoutor}>
          <Image source={{ uri: doc.photo }} style={styles.imagemDoutor} />
          <View>
            <Text style={styles.nomeDoutor}>{doc.name}</Text>
            <Text style={styles.detalhesDoutor}>{doc.specialty}</Text>
            <Text style={styles.doutorRating}>{doc.rating}</Text>
          </View>
        </View>
      ))}

      {/* Footer como um componente normal com o mesmo padding */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="home" size={20} color="#007AFF" />
          <Text style={[styles.footerText, { color: '#007AFF' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="user-md" size={20} color="#8e8e8e" />
          <Text style={styles.footerText}>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="calendar-check" size={20} color="#8e8e8e" />
          <Text style={styles.footerText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="user" size={20} color="#8e8e8e" />
          <Text style={styles.footerText}>Profile</Text>
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
  headerContainer: {
    backgroundColor: '#E6F0FF',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 24
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000'
  },
  barraBusca: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12
  },
  categoriasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 24
  },
  cardCategoria: {
    width: '47%',
    height: 100,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  cardCategoriaText: {
    marginTop: 8,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  cardDoutor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16
  },
  imagemDoutor: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12
  },
  nomeDoutor: {
    fontSize: 16,
    fontWeight: '600'
  },
  detalhesDoutor: {
    fontSize: 14,
    color: '#666'
  },
  doutorRating: {
    fontSize: 13,
    color: '#444',
    marginTop: 4
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
  footerText: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 4
  }
});

export default Welcome;
