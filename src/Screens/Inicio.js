import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../Styles/styles';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Eres estudiante o profesor?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Soy Estudiante"
          onPress={() => navigation.navigate('CrearEstudiante')}
        />
        <Button
          title="Soy Profesor"
          onPress={() => navigation.navigate('CrearDocente')}
        />
      </View>
    </View>
  );
};



export default Inicio;

