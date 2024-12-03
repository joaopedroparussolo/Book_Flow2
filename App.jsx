import React from "react";
import { Image } from "@rneui/base";
import Homesenai from "./src/ProjetoSenaiFront/Login/Homesenai";
import CadastroBook from "./src/ProjetoSenaiFront/Tela 2 Cadastro/CadastroBook";
import Config from "./src/ProjetoSenaiFront/Tela 4 Configurações/Config";
import TelaSobre from "./src/ProjetoSenaiFront/Tela 5 Sobre/TelaSobre";
import editarPerfil from "./src/ProjetoSenaiFront/Tela 6 Editar Perfil/editarPerfil"
import enviarLivro from "./src/ProjetoSenaiFront/Tela 7 Enviar Livro/enviarLivro"
import HomePage from "./src/ProjetoSenaiFront/Tela 3 Principal/BookPrincipal";
import 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            }} initialRouteName="Homesenai">
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="Homesenai" component={Homesenai} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="CadastroBook" component={CadastroBook} />

                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="enviarLivro" component={enviarLivro} />

                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'red',
                }} name="BookPrincipal" component={HomePage} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'red' }, headerTintColor: 'white',
                }} name="Config" component={Config} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/sobreText.png'))}
                        />
                    ),
                    title: '',

                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#A70A0A' }, headerTintColor: 'red',
                }} name="TelaSobre" component={TelaSobre} />
                <Stack.Screen options={{
                    headerBackground: () => (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={(require('./res/img/BOOKFLOW/HEADERBookFlow.png'))}
                        />
                    ),
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#A70A0A' }, headerTintColor: 'red',
                }} name="editarPerfil" component={editarPerfil} />

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App


