import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import Mensagens from './Mensagens';
import Destination from './Destination';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
