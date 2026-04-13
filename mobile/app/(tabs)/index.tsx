import React, { useState } from 'react'; // Importado useState
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import axios from 'axios'; 

export default function HomeScreen() {
  const [credencial, setCredencial] = useState(''); //valor da credencial

  const fazerLogin = async () => {
      if (!credencial) {
        Alert.alert("Erro", "Por favor, insira uma credencial.")
        return;
      }

      try {
        const response = await axios.post('http://localhost:8000/Login', {
          credencial: credencial
        });

      if (response.data.status === 'sucesso') {
        Alert.alert("Sucesso", "Acesso liberado para " + response.data.usuario);
      }
     } catch (error) {
      Alert.alert("Erro de acesso", "Credencial inválida ou erro no servidor.");
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.centralizar}>
        <ThemedText type="subtitle" style={styles.subtituloCustomizado}>
          Colégio
        </ThemedText>
      </View>

      <View style={styles.centralizar}>
        <ThemedText type="title" style={styles.tituloCustomizado}>
          Luláticos
        </ThemedText>
      </View>

      <ThemedText type="subtitle" style={styles.credencialtexto}>
        insira sua credencial de acesso
      </ThemedText>

      
      <TextInput
        style={styles.input}
        value={credencial}
        onChangeText={(text) => setCredencial(text.replace(/[^0-9]/g, ''))} //deixar só digitar números
        keyboardType="numeric"
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => console.log('Acessando com:', credencial)}
      >
        <Text style={styles.textoBotao}>continuar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subtituloCustomizado: {
    color: '#000',
    fontSize: 40,
    fontFamily: 'Itim',
  },
  tituloCustomizado: {
    color: '#FFC567',
    fontSize: 70,
    fontFamily: 'MuseoBold',
    marginBottom: 100,
  },
  centralizar: {
    marginVertical: 5,
  },
  credencialtexto: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Itim',
    marginTop: 20,
    marginBottom: 10,
  },
  
  input: {
    width: '90%',
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20, 
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily: 'Itim',
    marginBottom: 15,
  },
  botao: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFC567',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 15,
    fontFamily: 'Itim',
    color: '#000',
  }
});