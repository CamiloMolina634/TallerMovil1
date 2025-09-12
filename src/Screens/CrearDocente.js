import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Alert, Image} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import styles from '../Styles/styles';

const CrearDocente = ({navigation}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [materia, setMateria] = useState('');
    const [email, setEmail] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [editMode, setEditMode] = useState(true);

    useEffect(() => {
        const isValid = nombre.trim() !== '' &&
         apellido.trim() !== '' && 
         materia.trim() !== '' && 
         email.trim() !== '';
        setFormValid(isValid);
    }, [nombre, apellido, materia, email]);

    const handleSaveDocente = () => {
        if (!formValid) {
            Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'Ok'}]);
            return;
        }
        if (!email.includes('@')) {
            Alert.alert(
                'Email inválido',
                'Por favor, ingrese un email válido',
                [{text: 'OK'}]
            );
            return;
        }

        const docente = {
            nombre,
            apellido,
            materia,
            email,
        };
        navigation.navigate('VerDocente', {docente});
    };

    const handleEditDocente = () => {
        setEditMode(true);
        Alert.alert('Modo edición', 'Ahora puedes editar el docente', [{text: 'Ok'}]);
    };    

    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.profileHeader}>
                    <Image
                        style={[styles.profileImage, styles.avatar]}
                        source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png' }}
                    />
                    <Text style={styles.title}>Crear Docente</Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content>
                        <TextInput
                            label="Nombre"  
                            value={nombre}
                            onChangeText={text => setNombre(text)}
                            mode="outlined"
                            style={styles.input}
                        />
                        <TextInput
                            label="Apellido"
                            value={apellido}
                            onChangeText={text => setApellido(text)}
                            mode="outlined"
                            style={styles.input}
                        />
                        <TextInput
                            label="Materia"
                            value={materia}
                            onChangeText={text => setMateria(text)}
                            mode="outlined"
                            style={styles.input}
                        />
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            mode="outlined"
                            style={styles.input}
                        />
                        <Button
                            mode="contained"
                            onPress={handleSaveDocente}
                            style={styles.button}
                            disabled={!formValid}
                        >
                            Guardar Perfil
                        </Button>
                        <Button
                            mode="outlined"
                            onPress={() => navigation.navigate('AgregarNota')}
                            style={styles.button}
                        >
                            Agregar Notas
                        </Button>

                        <Button
                            mode="outlined"
                            onPress={handleEditDocente}
                            style={styles.button}
                        >
                            Editar Docente
                        </Button>

                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    )
    }//este cierra el componentee
        
