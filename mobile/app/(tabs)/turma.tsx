import { Platform, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router'; // 1. Adicione useRouter aqui

export default function HomeScreen() {
  // 2. Inicialize o router
  const router = useRouter();

  // Função que será executada ao clicar em um quadrado
  const handlePress = (opcao: string) => {
    console.log(`Você clicou em: ${opcao}`);
    
    // 3. Exemplo de uso do router para navegar para outra tela
    // Certifique-se de que o arquivo "sua-outra-tela.js" exista na pasta app/
    router.push('/(tabs)/alunos'); 
  };

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

      {/* Primeiro Quadrado Clicável */}
      <TouchableOpacity 
        style={styles.quadrado} 
        activeOpacity={0.7} 
        onPress={() => handlePress('TODOS OS ALUNOS')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#FF85A1'}]}>
          <ThemedText style={styles.texto3}>
            TODOS OS ALUNOS
          </ThemedText>
        </View>
      </TouchableOpacity>

      <View style={styles.centralizar2}>
        <ThemedText style={styles.texto4}>
          SELECIONE FILTRO
        </ThemedText>
      </View>

      {/* Quadrado dos Alunos A */}
      <TouchableOpacity 
        style={styles.quadrado} 
        activeOpacity={0.7} 
        onPress={() => handlePress('ALUNOS A')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#FF85A1'}]}>
          <ThemedText style={styles.texto5}>
            ALUNOS A 
          </ThemedText>
        </View>
      </TouchableOpacity>

      {/* Quadrado dos Alunos B */}
      <TouchableOpacity 
        style={styles.quadrado} 
        activeOpacity={0.7} 
        onPress={() => handlePress('ALUNOS B')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#FFC567'}]}>
           <ThemedText style={styles.texto5}>
            ALUNOS B
          </ThemedText>
        </View>
      </TouchableOpacity>

      {/* Quadrado dos Alunos C */}
      <TouchableOpacity 
        style={styles.quadrado} 
        activeOpacity={0.7} 
        onPress={() => handlePress('ALUNOS C')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#00965F'}]}>
           <ThemedText style={styles.texto5}>
            ALUNOS C
          </ThemedText>
        </View>
      </TouchableOpacity>

      {/* Quadrado dos Alunos D */}
      <TouchableOpacity 
        style={styles.quadrado} 
        activeOpacity={0.7} 
        onPress={() => handlePress('ALUNOS D')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#008AD7'}]}>
           <ThemedText style={styles.texto5}>
            ALUNOS D
          </ThemedText>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centralizarporra: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  texto: {
    color: '#000',
    fontSize: 40,
    fontFamily: 'Itim',
  },
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