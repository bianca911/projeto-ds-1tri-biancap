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

      <View style={styles.centralizar2}>
        <ThemedText style={styles.texto2}>
          10 resultados encontrados
        </ThemedText>
      </View>


      <View style={styles.quadrado}>
        <View style={[styles.oquadrado, { backgroundColor: '#FF85A1'}]}>
          <ThemedText style={styles.texto3}>
            TODOS OS ALUNOS

          </ThemedText>
        </View>
      </View>

      <View style={styles.centralizar2}>
        <ThemedText style={styles.texto4}  >
          SELECIONE FILTRO
        </ThemedText>

      </View>

      <View style={styles.quadrado}>
        <View style={[styles.oquadrado, { backgroundColor: '#FF85A1'}]}>
          <ThemedText style={styles.texto5}  >
            ALUNOS A 
          </ThemedText>
        </View>
      </View>


      <View style={styles.quadrado}>
        <View style={[styles.oquadrado, { backgroundColor: '#FFC567'}]}>
           <ThemedText style={styles.texto5}  >
            ALUNOS B
          </ThemedText>
        </View>
      </View>


      <View style={styles.quadrado}>
        <View style={[styles.oquadrado, { backgroundColor: '#00965F'}]}>
           <ThemedText style={styles.texto5}  >
            ALUNOS C
          </ThemedText>
        </View>
      </View>

      <View style={styles.quadrado}>
        <View style={[styles.oquadrado, { backgroundColor: '#008AD7'}]}>
           <ThemedText style={styles.texto5}  >
            ALUNOS D
          </ThemedText>
        </View>
      </View>


    </ScrollView>
  );
}

// A tela - OBS: todas as notas são feitas por MIM não uma IA
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Primeiro texto 
  centralizarporra: {
    flex: 1,                    // Deixa flexivel, se sobrar espaço na tela ele estica e preenche tudo.
    justifyContent: 'center',   // Centraliza verticalmente
    alignItems: 'center',       // Centraliza horizontalmente
    marginTop: 20, // ta descendo 
  },

  texto: {
    color: '#000',
    fontSize: 40,
    fontFamily: 'Itim',
  },


  // Segundo texto 
  centralizar2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  texto2: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Itim',
  },

  //quadrados
  oquadrado: {
    width: 300,
    height: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  quadrado: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  texto3: {
    color: '#000',
    fontSize: 25,
    fontFamily: 'Itim',
  },
  texto4: {
    color: '#000',
    fontFamily: 'Itim',
  },
  texto5: {
    color: '#000',
    fontSize: 25,
    fontFamily: 'Itim',
  }
});