import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, ScrollView, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// URL base do seu servidor (use o IP da sua máquina local ou localhost no emulador/navegador)
const API_URL = 'http://localhost:3000';

interface Aluno {
  id: number;
  nome: string;
  id_turma: string;
}

export default function HomeScreen() {
  const [cardAberto, setCardAberto] = useState<number | null>(null);
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [registros, setRegistros] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Carrega os dados do servidor quando o componente monta
  useEffect(() => {
    async function carregarDados() {
      try {
        // Busca alunos da turma 3A
        const responseAlunos = await fetch(`${API_URL}/api/alunos/3A`);
        const alunosData = await responseAlunos.json();
        setAlunos(alunosData);

        // Busca os registros
        const responseRegistros = await fetch(`${API_URL}/api/registros`);
        const registrosData = await responseRegistros.json();
        setRegistros(registrosData);
      } catch (error) {
        console.error('Erro ao conectar com a API:', error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  const alternarCard = (id: number) => {
    if (cardAberto === id) {
      setCardAberto(null);
    } else {
      setCardAberto(id);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centralizarHeader}>
        <ThemedText style={styles.texto}>
          3°A
        </ThemedText>
      </View>

      <View style={styles.subsub}>
        <ThemedText style={styles.subsubtexto}>
          Resultados encontrados: {alunos.length}
        </ThemedText>
      </View>
     
      {/* Mapeamento dinâmico dos alunos */}
      {alunos.map((aluno) => (
        <View style={styles.quadrado} key={aluno.id}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => alternarCard(aluno.id)}
            style={[styles.oquadrado1, cardAberto === aluno.id && styles.cardExpandido]}
          >
            <ThemedText style={styles.aluno1}>{aluno.nome}</ThemedText>
         
            {cardAberto === aluno.id && (
              <ConteudoStatus idAluno={aluno.id} registrosGlobais={registros} />
            )}
          </TouchableOpacity>
        </View>
      ))}

    </ScrollView>
  );
}

// Componente modificado para receber os registros via props
const ConteudoStatus = ({ idAluno, registrosGlobais }: { idAluno: number, registrosGlobais: any[] }) => {
  const registros = registrosGlobais.filter((r: any) => r.id_aluno === idAluno);

  const faltas = registros.filter((r: any) => r.status === "Falta").length;
  const presencas = registros.filter((r: any) => r.status === "Presença").length;

  return (
    <View style={styles.containerStatus}>
      <ThemedText style={styles.labelStatus}>status</ThemedText>
      <View style={styles.linhaStatus}>
        <View style={[styles.circulo, { backgroundColor: '#FF5F5F' }]} />
        <ThemedText style={styles.textoStatus}>{faltas} faltas</ThemedText>
      </View>
      <View style={styles.linhaStatus}>
        <View style={[styles.circulo, { backgroundColor: '#00995E' }]} />
        <ThemedText style={styles.textoStatus}>{presencas} presenças</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralizarHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  texto: {
    color: '#000000',
    fontSize: 50,
  },
  subsub: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  subsubtexto: {
    color: '#000000',
    fontSize: 20,
  },
  quadrado: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  aluno1: {
    textAlign: 'center',
    marginTop: 40,
    color: '#000000',
    fontSize: 20,
  },
  cardExpandido: {
    height: 300,
    width: 300,
    paddingBottom: 25,
  },
  containerStatus: {
    alignItems: 'center',
    marginTop: 10,
  },
  labelStatus: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
  },
  linhaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginBottom: 8,
  },
  circulo: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#000',
    marginRight: 15,
  },
  textoStatus: {
    fontSize: 20,
    color: '#000000',
  },
  oquadrado1: {
    width: 300,
    height: 120,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FB7DA8',
  }
});