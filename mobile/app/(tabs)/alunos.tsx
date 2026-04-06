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
      
      
      <View style={styles.contralizarsubtitulo}>
        <ThemedText style={styles.texto2}>
           4 resultados encontrados - A
        </ThemedText>
      </View>
     <View style={styles.quadrado}>
<View style={styles.oquadrado}>
<ThemedText style={styles.aluno1}>Angelina dos anjos </ThemedText>

</View>
 </View>

<View style={styles.quadrado}>
<View style={styles.oquadrado}>
  <ThemedText style={styles.aluno1}>Eve albuquerque santos</ThemedText>
</View>
 </View>

 <View style={styles.quadrado}>
<View style={styles.oquadrado}>
  <ThemedText style={styles.aluno1}>Kali silva barreto</ThemedText>
</View>
 </View>

 <View style={styles.quadrado}>
<View style={styles.oquadrado}>
  <ThemedText style={styles.aluno1}>Kate silva barreto</ThemedText>
</View>
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
  marginTop: 20,
  },

  texto: {
    color: '#000000',
    fontSize: 50,

  },

contralizarsubtitulo: {
  marginTop:20,
  alignItems: 'center',
},
texto2: {
  gap: 'auto',
 color: '#000000',
    fontSize: 20,
},
 //quadrados
  oquadrado: {
    width: 300,
    height: 120,
    borderRadius: 15,
    backgroundColor: '#FFC567',
    borderWidth: 2,
    borderColor: '#000',
  },
  quadrado: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
aluno1: {
 textAlign: 'center',
 marginTop: 40,
 color: '#000000',
    fontSize: 20,
},
});