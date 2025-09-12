import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/Screens/Inicio';
import CrearEstudiante from './src/Screens/CrearEstudiante';
import CrearDocente from './src/Screens/CrearDocente';
import AgregarNota from './src/Screens/AgregarNota';
import VerNota from './src/Screens/VerNota';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Inicio">
                    <Stack.Screen name="Inicio" component={Inicio} options={{ title: 'Bienvenido' }} />
                    <Stack.Screen name="CrearEstudiante" component={CrearEstudiante} options={{ title: 'Crear Estudiante' }} />
                    <Stack.Screen name="CrearDocente" component={CrearDocente} options={{ title: 'Crear Docente' }} />
                    <Stack.Screen name="AgregarNota" component={AgregarNota} options={{ title: 'Agregar Nota' }} />
                    <Stack.Screen name="VerNota" component={VerNota} options={{ title: 'Ver Notas' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
