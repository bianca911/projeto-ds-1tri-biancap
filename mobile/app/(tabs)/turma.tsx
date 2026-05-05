import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useRouter, useLocalSearchParams } from 'expo-router';

interface Aluno {
  id: number;
  nome: string;
  id_turma: string;
}

export default function TurmaScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Pega qual turma foi selecionada (ex: '3B', '3C'), se não vier nada, assume '3A'
  const turmaSelecionada = params.turma || '3A';

  const [todosAlunosBase, setTodosAlunosBase] = useState<Aluno[]>([]);
  const [totalAlunos, setTotalAlunos] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // Armazena qual letra/filtro está ativo no momento ('A', 'B', 'C', 'D' ou null para mostrar todos os botões)
  const [filtroAtivo, setFiltroAtivo] = useState<string | null>(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        // Conexão com o backend utilizando Express
        const response = await fetch(`http://localhost:3000/api/alunos/${turmaSelecionada}`);
        const data = await response.json();

        setTodosAlunosBase(data);
        setTotalAlunos(data.length);
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, [turmaSelecionada]);

  // Função para filtrar os alunos com base na letra escolhida
  const filtrarPorLetra = (letra: string | null) => {
    setFiltroAtivo(letra);
  };

  const handlePress = (nomeAluno: string) => {
    console.log(`Você clicou em: ${nomeAluno}`);
    router.push('/alunos');
  };

  // Obtém a lista filtrada de acordo com o estado atual
  const alunosExibidos = filtroAtivo
    ? todosAlunosBase
        .filter(aluno => aluno.nome.toUpperCase().startsWith(filtroAtivo))
        .sort((a, b) => a.nome.localeCompare(b.nome))
    : [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centralizarporra}>
        <ThemedText style={styles.texto}>
          {turmaSelecionada}
        </ThemedText>
      </View>

      <View style={styles.centralizar2}>
        <ThemedText style={styles.texto2}>
          {totalAlunos} resultados encontrados
        </ThemedText>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={{ marginTop: 20, marginBottom: 40 }}>
         
          {/* Se nenhum filtro estiver ativo, mostra todos os botões de categorias */}
          {filtroAtivo === null && (
            <>
              <TouchableOpacity
                style={styles.quadrado}
                activeOpacity={0.7}
                onPress={() => filtrarPorLetra('A')}
              >
                <View style={[styles.oquadrado, { backgroundColor: '#FF85A1' }]}>
                  <ThemedText style={styles.texto5}>ALUNOS A</ThemedText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.quadrado}
                activeOpacity={0.7}
                onPress={() => filtrarPorLetra('B')}
              >
                <View style={[styles.oquadrado, { backgroundColor: '#FFC567' }]}>
                  <ThemedText style={styles.texto5}>ALUNOS B</ThemedText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.quadrado}
                activeOpacity={0.7}
                onPress={() => filtrarPorLetra('C')}
              >
                <View style={[styles.oquadrado, { backgroundColor: '#00965F' }]}>
                  <ThemedText style={styles.texto5}>ALUNOS C</ThemedText>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.quadrado}
                activeOpacity={0.7}
                onPress={() => filtrarPorLetra('D')}
              >
                <View style={[styles.oquadrado, { backgroundColor: '#008AD7' }]}>
                  <ThemedText style={styles.texto5}>ALUNOS D</ThemedText>
                </View>
              </TouchableOpacity>
            </>
          )}

          {/* Se um filtro estiver ativo, mostra apenas o botão correspondente e os itens dentro dele */}
          {filtroAtivo !== null && (
            <View style={styles.containerFiltroAtivo}>
             
              {/* Botão de voltar para a tela inicial dos botões */}
              <TouchableOpacity
                style={[styles.botaoVoltar, { backgroundColor: '#e0e0e0', marginBottom: 20 }]}
                onPress={() => filtrarPorLetra(null)}
              >
                <ThemedText style={styles.texto3}>← Voltar</ThemedText>
              </TouchableOpacity>

              <View style={[styles.oquadrado, { backgroundColor: filtroAtivo === 'A' ? '#FF85A1' : filtroAtivo === 'B' ? '#FFC567' : filtroAtivo === 'C' ? '#00965F' : '#008AD7', height: 'auto', paddingVertical: 20 }]}>
                <ThemedText style={styles.texto5}>ALUNOS {filtroAtivo}</ThemedText>

                {/* Lista os alunos dentro do botão correspondente */}
                <View style={styles.listaAlunosContainer}>
                  {alunosExibidos.length > 0 ? (
                    alunosExibidos.map(aluno => (
                      <TouchableOpacity
                        key={aluno.id}
                        style={styles.itemAluno}
                        onPress={() => handlePress(aluno.nome)}
                      >
                        <ThemedText style={styles.texto3}>{aluno.nome}</ThemedText>
                      </TouchableOpacity>
                    ))
                  ) : (
                    <ThemedText style={styles.texto3}>Nenhum aluno encontrado.</ThemedText>
                  )}
                </View>
              </View>
            </View>
          )}
        </View>
      )}
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
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    paddingVertical: 30,
    height: 120,
  },
  quadrado: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  texto3: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Itim',
    textAlign: 'center',
  },
  texto5: {
    color: '#000',
    fontSize: 25,
    fontFamily: 'Itim',
    fontWeight: 'bold',
  },
  containerFiltroAtivo: {
    alignItems: 'center',
  },
  botaoVoltar: {
    padding: 10,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  listaAlunosContainer: {
    marginTop: 15,
    width: '100%',
    paddingHorizontal: 15,
  },
  itemAluno: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    marginVertical: 4,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
    width: '100%',
  },
});