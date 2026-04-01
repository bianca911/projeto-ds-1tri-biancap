
import { Platform, StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { View } from 'react-native'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#918e8e'
      }} />

     
        
      
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
  },

 

});