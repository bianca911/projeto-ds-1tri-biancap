import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useLocalSearchParams } from 'expo-router';

const API_URL = 'http://localhost:3000';

export default function AlunoDetalhesScreen() {
  const { id } = useLocalSearchParams();
  const [aluno, setAluno] = useState<any>(null);
  const [registros, setRegistros] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDadosDoAluno() {
      try {
        setLoading(true);

        // 1. Busca os registros de frequência (Global)
        const responseReg = await fetch(`${API_URL}/api/registros`);
        const todosRegistros = await responseReg.json();

        const registrosFiltrados = todosRegistros.filter(
          (r: any) => r.id_aluno === Number(id)
        );
        setRegistros(registrosFiltrados);

        // 2. Busca a lista de TODOS os alunos (de todas as turmas)
        // Alterado de /api/alunos/3A para /api/alunos
        const responseAlunos = await fetch(`${API_URL}/api/alunos`);
        const listaAlunos = await responseAlunos.json();
       
        const alunoEncontrado = listaAlunos.find(
          (a: any) => a.id === Number(id)
        );

        setAluno(alunoEncontrado);
      } catch (error) {
        console.error('Erro ao carregar detalhes do aluno:', error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      carregarDadosDoAluno();
    }
  }, [id]);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} size="large" color="#FB7DA8" />;
  }

  const faltas = registros.filter((r) => r.status === 'Falta').length;
  const presencas = registros.filter((r) => r.status === 'Presença').length;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centralizarHeader}>
        <ThemedText style={styles.textoNome}>
          {aluno ? aluno.nome : 'Aluno não encontrado'}
        </ThemedText>
        {aluno && (
          <ThemedText style={styles.textoTurma}>
            Turma: {aluno.id_turma}
          </ThemedText>
        )}
      </View>

      <View style={styles.quadrado}>
        <View style={styles.oquadrado1}>
          <ThemedText style={styles.labelStatus}>Status de Frequência</ThemedText>

          <View style={styles.containerStatus}>
            <View style={styles.linhaStatus}>
              <View style={[styles.circulo, { backgroundColor: '#FF5F5F' }]} />
              <ThemedText style={styles.textoStatus}>
                {faltas} {faltas === 1 ? 'falta' : 'faltas'}
              </ThemedText>
            </View>

            <View style={styles.linhaStatus}>
              <View style={[styles.circulo, { backgroundColor: '#00995E' }]} />
              <ThemedText style={styles.textoStatus}>
                {presencas} {presencas === 1 ? 'presença' : 'presenças'}
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  centralizarHeader: {
    alignItems: 'center',
    marginTop: 40,
  },
  textoNome: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoTurma: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  quadrado: {
    alignItems: 'center',
    marginTop: 30,
  },
  oquadrado1: {
    width: 320,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FB7DA8',
  },
  labelStatus: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  containerStatus: {
    alignItems: 'center',
  },
  linhaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '80%',
  },
  circulo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 15,
  },
  textoStatus: {
    fontSize: 20,
    color: '#000',
  },
});