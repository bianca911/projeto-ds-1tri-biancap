import { Platform, StyleSheet, ScrollView } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.centralizarporra}>
        <ThemedText style={styles.texto}>
          3°A
        </ThemedText>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centralizarporra: {
    flex: 1,                    // Precisa disso!
    justifyContent: 'center',   // Centraliza verticalmente
    alignItems: 'center',       // Centraliza horizontalmente
  
  },
  texto: {
    color: '#000000',
    fontSize: 50,

  },
});