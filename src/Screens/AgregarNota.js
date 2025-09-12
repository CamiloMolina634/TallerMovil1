
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Alert, Image} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import styles from '../Styles/styles';

const AgregarNota = ({navigation}) => {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [nota4, setNota4] = useState('');
    const [nota5, setNota5] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [editMode, setEditMode] = useState(true);

    useEffect(() => {
        const isValid = nota1.trim() !== '' && nota2.trim() !== '' && nota3.trim() !== '' && nota4.trim() !== '' && nota5.trim() !== '';
        setFormValid(isValid);
    }, [nota1, nota2, nota3, nota4, nota5]);

    const handleSaveNotas = () => {
        if (!formValid) {
            Alert.alert('Error', 'Todas las notas son obligatorias', [{text: 'Ok'}]);
            return;
        }
        setEditMode(false);
        Alert.alert('Notas guardadas', 'Las notas han sido guardadas correctamente', [{text: 'Ok'}]);
    };

    const handleEditNotas = () => {
        setEditMode(true);
        Alert.alert('Modo edición', 'Ahora puedes editar las notas', [{text: 'Ok'}]);
    };

    const handleVerNotas = () => {
        if (!formValid) {
            Alert.alert('Error', 'Todas las notas son obligatorias', [{text: 'Ok'}]);
            return;
        }
        const notas = { nota1, nota2, nota3, nota4, nota5 };
        navigation.navigate('VerNota', { notas });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={styles.title}>Agregar Notas</Text>
                        <TextInput
                            label="Nota 1"
                            value={nota1}
                            onChangeText={setNota1}
                            style={styles.input}
                            mode="outlined"
                            editable={editMode}
                        />
                        <TextInput
                            label="Nota 2"
                            value={nota2}
                            onChangeText={setNota2}
                            style={styles.input}
                            mode="outlined"
                            editable={editMode}
                        />
                        <TextInput
                            label="Nota 3"
                            value={nota3}
                            onChangeText={setNota3}
                            style={styles.input}
                            mode="outlined"
                            editable={editMode}
                        />
                        <TextInput
                            label="Nota 4"
                            value={nota4}
                            onChangeText={setNota4}
                            style={styles.input}
                            mode="outlined"
                            editable={editMode}
                        />
                        <TextInput
                            label="Nota 5"
                            value={nota5}
                            onChangeText={setNota5}
                            style={styles.input}
                            mode="outlined"
                            editable={editMode}
                        />
                        <Button
                            mode="contained"
                            onPress={handleSaveNotas}
                            style={styles.button}
                            disabled={!formValid}
                        >
                            Guardar Notas
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={handleEditNotas}
                            style={styles.button}
                        >
                            Editar Notas
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={handleVerNotas}
                            style={styles.button}
                        >
                            Ver Notas
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

export default AgregarNota;