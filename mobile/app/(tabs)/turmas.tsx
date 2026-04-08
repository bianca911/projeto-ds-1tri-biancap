
import { Platform, StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { View } from 'react-native'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

     <View style={styles.lugar}> 
        <View style={styles.circulo}></View> 
     </View>
        
      <View style={styles.titulolugar}>
        <ThemedText style={styles.titulo}>SELECIONE A TURMA</ThemedText>
      </View>
      
      <View style={styles.quadrado}>
        <View style={styles.oquadrado}>
          <ThemedText style={styles.texto}>3°A</ThemedText>
        </View>
      </View>

      <View style={styles.quadrado}>
        <View style={styles.oquadrado}>
          <ThemedText style={styles.texto}>3°B</ThemedText>
        </View>
      </View>

      <View style={styles.quadrado}>
        <View style={styles.oquadrado}>
          <ThemedText style={styles.texto}>3°C</ThemedText>
        </View>
      </View>

      <View style={styles.quadrado}>
        <View style={styles.oquadrado}>
          <ThemedText style={styles.texto}>3°D</ThemedText>
        </View>
      </View>

    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
  },

  lugar: { // lugar da bola
    flex: 1,
    flexDirection: 'row', // bola para o lado
    alignItems: 'center', // para deixar do lado ainda
    marginLeft: 20, // mais longe da esquerda
    marginTop: 20,  // mais para baixo
  },

  circulo: { // a bola  // para deixar redondo, largura e altura te que ter o mesmo valor, a borda tem que ter a matade dor valor dos outro
    width: 50,
    height: 50, 
    borderRadius: 25,
    backgroundColor: '#FD5A46',
    borderWidth: 2,
    borderColor: '#000',
  },
 
  titulolugar: {
    marginTop: 20,
    alignItems: 'center', // alinha horizontalmente
  },

  titulo: {
    color: '#000',
    fontFamily: 'itim',
  },

  quadrado: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }, 

  oquadrado: {
    width: 300, // deixa comprido
    height: 120,
    borderRadius: 15,
    backgroundColor: '#FFC567',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center', // para o texto ficar no meio (específco para o texto)
    alignItems: 'center',     // idem (idem)
  },

  texto: {
      fontSize: 40,
      color: '#000',
      fontFamily: 'itim',
  },
});