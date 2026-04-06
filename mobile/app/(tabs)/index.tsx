
import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { View } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.centralizar}>
        <ThemedText type="subtitle" style={styles.subtituloCustomizado}>Colégio</ThemedText>
      </View>
      <View style={styles.centralizar}>
        <ThemedText type="title" style={styles.tituloCustomizado}>Lunáticos</ThemedText>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  subtituloCustomizado: {
    color: '#000',
    fontSize: 48,
    fontFamily: 'Itim',
  },
  tituloCustomizado: {
    color: '#FFC567',
    fontSize: 70,
    fontFamily: 'MuseoBold',
  },
  centralizar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
