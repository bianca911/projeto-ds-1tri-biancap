import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useRouter } from 'expo-router';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export default function HomeScreen() {
  const [credencial, setCredencial] = useState('');
  const router = useRouter();

  const fazerLogin = async () => {

    try {
      const response = await axios.post('http://10.222.91.16:8081/login', {
        credencial: credencial
      });

      if (response.data.status === 'sucesso') {
        router.push({
          pathname: "/turmas",
          params: { usuario: response.data.usuario }
        });
      } 
    } catch (error) {
      Toast.show({ 
        type: 'error', text1: 'Erro de Busca',
        text2: 'Por favor, insira uma credencial válida!' });
    }
  };

  return (
    <View style={{ flex: 1}}> // Container para o Toast flutuar

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.centralizar}>
          <ThemedText type="subtitle" style={styles.subtituloCustomizado}>Colégio</ThemedText>
        </View>

        <View style={styles.centralizar}>
          <ThemedText type="title" style={styles.tituloCustomizado}>Luláticos</ThemedText>
        </View>

        <ThemedText type="subtitle" style={styles.credencialtexto}>
          insira sua credencial de acesso
        </ThemedText>

        <TextInput
          style={styles.input}
          value={credencial}
          onChangeText={(text) => setCredencial(text.replace(/[^0-9]/g, ''))}  //deixar só digitar números
          keyboardType="numeric"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>continuar</Text>
        </TouchableOpacity>
      </ScrollView>

      <Toast />
    </View>
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