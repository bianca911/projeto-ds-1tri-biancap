import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function TurmaScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [alunosExibidos, setAlunosExibidos] = useState<any[]>([]);
  const [totalAlunos, setTotalAlunos] = useState(0);

  useEffect(() => {
    // Importa o banco diretamente da pasta Back
    const db = require('../../Back/database.js');
   
    const todosDaTurma = db.alunos.filter((aluno: any) => aluno.id_turma === "3A");
   
    setTotalAlunos(todosDaTurma.length);
    setAlunosExibidos(todosDaTurma.sort((a: any, b: any) => a.nome.localeCompare(b.nome)));
  }, []);

  const filtrarPorLetra = (letra: string) => {
    const db = require('../../Back/database.js');
    const todosDaTurma = db.alunos.filter((aluno: any) => aluno.id_turma === "3A");
   
    if (letra === 'TODOS') {
      setAlunosExibidos(todosDaTurma.sort((a: any, b: any) => a.nome.localeCompare(b.nome)));
    } else {
      const filtrados = todosDaTurma.filter((aluno: any) =>
        aluno.nome.toUpperCase().startsWith(letra)
      );
      setAlunosExibidos(filtrados.sort((a: any, b: any) => a.nome.localeCompare(b.nome)));
    }
  };

  // Correção da função de clique
  const handlePress = (nomeAluno: string) => {
    console.log(`Você clicou em: ${nomeAluno}`);
    router.push('/alunos');
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
          {totalAlunos} resultados encontrados
        </ThemedText>
      </View>

      <TouchableOpacity
        style={styles.quadrado}
        activeOpacity={0.7}
        onPress={() => filtrarPorLetra('TODOS')}
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

      <TouchableOpacity
        style={styles.quadrado}
        activeOpacity={0.7}
        onPress={() => filtrarPorLetra('A')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#FF85A1'}]}>
          <ThemedText style={styles.texto5}>
            ALUNOS A
          </ThemedText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.quadrado}
        activeOpacity={0.7}
        onPress={() => filtrarPorLetra('B')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#FFC567'}]}>
           <ThemedText style={styles.texto5}>
            ALUNOS B
          </ThemedText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.quadrado}
        activeOpacity={0.7}
        onPress={() => filtrarPorLetra('C')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#00965F'}]}>
           <ThemedText style={styles.texto5}>
            ALUNOS C
          </ThemedText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.quadrado}
        activeOpacity={0.7}
        onPress={() => filtrarPorLetra('D')}
      >
        <View style={[styles.oquadrado, { backgroundColor: '#008AD7'}]}>
           <ThemedText style={styles.texto5}>
            ALUNOS D
          </ThemedText>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 30, marginBottom: 40 }}>
        {alunosExibidos.map((aluno: any) => (
          <TouchableOpacity
            key={aluno.id}
            style={styles.quadrado}
            activeOpacity={0.7}
            onPress={() => handlePress(aluno.nome)}
          >
            <View style={[styles.oquadrado, { backgroundColor: '#E0E0E0', height: 80 }]}>
              <ThemedText style={styles.texto3}>{aluno.nome}</ThemedText>
            </View>
          </TouchableOpacity>
        ))}
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
    fontSize: 22,
    fontFamily: 'Itim',
    textAlign: 'center',
  },
  texto4: {
    color: '#000',
    fontFamily: 'Itim',
    fontSize: 16,
    fontWeight: 'bold',
  },
  texto5: {
    color: '#000',
    fontSize: 25,
    fontFamily: 'Itim',
  }
});