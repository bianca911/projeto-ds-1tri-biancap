import { Platform, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function TurmasScreen() {
  const { usuario } = useLocalSearchParams(); 
  const router = useRouter();

  // Função para navegar passando a turma como parâmetro
  const irParaTurma = (turmaNome: string) => {
    router.push({
      pathname: '/(tabs)/turma',
      params: { turma: turmaNome }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.lugar}>
        <View style={styles.circulo}></View>
        <View style={{ marginLeft: 15 }}>
          <ThemedText style={styles.nomeProf}>Prof. {usuario || 'Mateus'}</ThemedText>
          <ThemedText style={styles.subProf}>Tecnologia Da Informação</ThemedText>
        </View>
      </View>

      <View style={styles.titulolugar}>
        <ThemedText style={styles.titulo}>SELECIONE A TURMA</ThemedText>
      </View>

      {/* Botão 3°A */}
      <View style={styles.quadrado}>
        <TouchableOpacity onPress={() => irParaTurma('3A')}>
          <View style={[styles.oquadrado, { backgroundColor: '#FF85A1' }]}>
            <ThemedText style={styles.texto}>3°A</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

      {/* Botão 3°B */}
      <View style={styles.quadrado}>
        <TouchableOpacity onPress={() => irParaTurma('3B')}>
          <View style={[styles.oquadrado, { backgroundColor: '#FFC567' }]}>
            <ThemedText style={styles.texto}>3°B</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

      {/* Botão 3°C */}
      <View style={styles.quadrado}>
        <TouchableOpacity onPress={() => irParaTurma('3C')}>
          <View style={[styles.oquadrado, { backgroundColor: '#00965F' }]}>
            <ThemedText style={styles.texto}>3°C</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

      {/* Botão 3°D */}
      <View style={styles.quadrado}>
        <TouchableOpacity onPress={() => irParaTurma('3D')}>
          <View style={[styles.oquadrado, { backgroundColor: '#008AD7' }]}>
            <ThemedText style={styles.texto}>3°D</ThemedText>
          </View>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  lugar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 40,
  },
  circulo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FD5A46',
    borderWidth: 2,
    borderColor: '#000',
  },
  nomeProf: {
    fontSize: 18,
    fontFamily: 'itim',
    color: '#000',
    fontWeight: 'bold',
  },
  subProf: {
    fontSize: 12,
    fontFamily: 'itim',
    color: '#666',
  },
  titulolugar: {
    marginTop: 30,
    alignItems: 'center',
  },
  titulo: {
    color: '#000',
    fontFamily: 'itim',
    fontSize: 16,
  },
  quadrado: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  oquadrado: {
    width: 320,
    height: 110,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 45,
    color: '#000',
    fontFamily: 'itim',
  },
});