import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import styles from '../Styles/styles';

const CrearEstudiante = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');

  const handleSubmit = () => {
    if (!nombre || !codigo || !carrera) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }
    navigation.navigate('AgregarNota', { estudiante: { nombre, codigo, carrera } });
  };

  const handleVerNota = () => {
    navigation.navigate('VerNota');
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Crear Estudiante" />
        <Card.Content>
          <TextInput
            label="Nombre"
            value={nombre}
            onChangeText={setNombre}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Código"
            value={codigo}
            onChangeText={setCodigo}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Carrera"
            value={carrera}
            onChangeText={setCarrera}
            style={styles.input}
            mode="outlined"
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Guardar y continuar
          </Button>
          <Button mode="outlined" onPress={handleVerNota} style={styles.button}>
            Ver Nota
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};


export default CrearEstudiante;