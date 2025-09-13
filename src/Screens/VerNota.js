import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../Styles/styles';
import { Button} from 'react-native-paper';


const VerNota = ({ route, navigation }) => {
  const { notas } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={[styles.profileImage, styles.avatar]}
          source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png' }}
        />
        <Text style={styles.title}>Notas del Alumno</Text>
      </View>
      <View style={styles.card}>
        <View style={{padding: 16}}>
          <Text style={styles.input}>Nota 1: {notas?.nota1 || 'malosky'}</Text>
          <Text style={styles.input}>Nota 2: {notas?.nota2 || 'malosky'}</Text>
          <Text style={styles.input}>Nota 3: {notas?.nota3 || 'malosky'}</Text>
          <Text style={styles.input}>Nota 4: {notas?.nota4 || 'malosky'}</Text>
          <Text style={styles.input}>Nota 5: {notas?.nota5 || 'malosky'}</Text>
          <Button mode="outlined" onPress={() => navigation.goBack()} style={{marginTop: 16}}>
            Volver Atrás jaja
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerNota;
