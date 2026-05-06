import React, { useState } from 'react'; 
import { Platform, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
    // Estado para controlar qual card está aberto começa como 'null' (todos fechados).
  const [cardAberto, setCardAberto] = useState<number | null>(null);  // seta a propriedade do card aberto e da o estado nulo


  // Função para abrir/fechar
  const alternarCard = (id: number) => {
    if (cardAberto === id) {
      setCardAberto(null);  // Se clicar no que já está aberto, ele fecha

    } else {
      setCardAberto(id);  // Abre o card clicado

    }
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.centralizarHeader}>
        <ThemedText style={styles.texto}>
          3°A
        </ThemedText>
      </View>

  <View style={styles.subsub}>
        <ThemedText style={styles.subsubtexto}>
          Resultados encontrados:
        </ThemedText>
      </View>
     
     
      <View style={styles.quadrado}>
        <TouchableOpacity // botao
          activeOpacity={0.9} 
          onPress={() => alternarCard(1)} // quando vc clicka ele pucha o valor do id "1"

          style={[styles.oquadrado1, cardAberto === 1 && styles.cardExpandido]}
        >
          <ThemedText style={styles.aluno1}>Allan Cordeiro</ThemedText>
       
          {cardAberto === 1 && <ConteudoStatus />}
        </TouchableOpacity>
      </View>
     
      
   
      
   
      

    </ScrollView>
  );
}
// componente interno para não repetir o código das bolinhas 4 vezes
const ConteudoStatus = () => (
  <View style={styles.containerStatus}>
    <ThemedText style={styles.labelStatus}>status</ThemedText>
    <View style={styles.linhaStatus}>
      <View style={[styles.circulo, { backgroundColor: '#FF5F5F' }]} />
      <ThemedText style={styles.textoStatus}>13 faltas</ThemedText>
    </View>
    <View style={styles.linhaStatus}>
      <View style={[styles.circulo, { backgroundColor: '#00995E' }]} />
      <ThemedText style={styles.textoStatus}>200 presenças</ThemedText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#000000',
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
 
  texto2: {
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
