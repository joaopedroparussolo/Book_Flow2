import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image, RefreshControl, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed'
import enviarLivro from '../Tela 7 Enviar Livro/enviarLivro';
import Config from '../Tela 4 Configurações/Config';
import { Marquee } from '@animatereactnative/marquee';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

function BookPrincipal() {

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const [livros, setLivros] = React.useState([]);

    useEffect(() => {
        const obterLivros = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:8085/api/getBooks');

                console.log(response.data)
                setLivros(response.data);
            } catch (error) {
                console.error('Erro ao obter os alunos:', error);
            }
        };
        obterLivros();
    }, [refreshing]);

    const renderItem = ({ item }) => (

        <View style={styles.item}>
            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.0, y: 1.0 }}
                locations={[0, 0.5, 0.9]} colors={['#922f2f', '#561c1c', '#561c1c']} style={styles.linearGradient}>

                <Image
                    style={{ width: 180, height: 180, marginTop: 18, alignSelf: 'center', borderRadius: 10, }} source={{ uri: `data:image/jpeg;base64,${item.livro}` }} >
                </Image>

                <Image
                    style={{ width: 45, height: 45, marginTop: 10, borderRadius: 90, marginLeft: -3, }} source={require('../../../res/img/BOOKFLOW/Default-User.jpg')} >
                </Image>

                <Image
                    style={{ width: 150, height: 55, marginTop: -50, marginLeft: 48, borderRadius: 10, }} source={require('../../../res/img/BOOKFLOW/FundoMSGBOOKFLOW.png')} >
                </Image>

                <Text
                    style={{ marginTop: -52, marginLeft: 52, color: 'black', fontFamily: 'Judson-Regular', }}>
                    {item.comentario}
                </Text>
            </LinearGradient>
        </View>
    )
    return (
        <SafeAreaView>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <ImageBackground style={{ width: 412, height: 760, }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >

                    <Marquee style={{ backgroundColor: 'transparent' }} spacing={20} speed={0.8}>
                        <Text
                            style={{
                                backgroundColor: 'transparent',
                                color: '#FFC700',
                                fontFamily: 'Judson-Regular',
                                fontSize: 15,
                            }}> TODOS OS DIREITOS RESERVADOS A: JUAN E JOÃO PEDRO</Text>
                    </Marquee>

                    <View >
                        <Text style={styles.title}>Book Flow</Text>
                    </View>
                  
                    <FlatList
                        horizontal
                        data={livros}
                        renderItem={renderItem}
                        keyExtractor={item => item}
                        extraData={livros}
                    />
                </ImageBackground>
            </ScrollView>
        </SafeAreaView >
    );
}

const Tab = createBottomTabNavigator();

export default function HomePage({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Configurações') {
                        iconName = focused
                            ? 'bars'
                            : 'bars';
                    } else if (route.name === 'Início') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Uploads') {
                        iconName = focused ? 'plus' : 'plus';
                    } else if (route.name === 'Configuracoes') {
                        iconName = focused ? 'gear' : 'gear';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'user' : 'user';
                    }

                    return <Icon type='font-awesome' name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
            })}
        >
            <Tab.Screen options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#A70A0A', '#790707', '#440404',]}
                        start={{ x: 0.5, y: 1 }} // Inicia no centro inferior
                        end={{ x: 0.5, y: 0 }} // Termina no centro superior
                        locations={[0, 0.5, 0.9]}
                        style={styles.linearGradient2} />
                ),

                tabBarActiveTintColor: 'white',
            }} name="Início" component={BookPrincipal} />

            <Tab.Screen options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#A70A0A', '#790707', '#440404',]}
                        start={{ x: 0.5, y: 1 }} // Inicia no centro inferior
                        end={{ x: 0.5, y: 0 }} // Termina no centro superior
                        locations={[0, 0.5, 0.9]}
                        style={styles.linearGradient2} />
                ),
                tabBarActiveTintColor: 'white',
            }} name="Perfil" component={enviarLivro} />

            <Tab.Screen options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#A70A0A', '#790707', '#440404',]}
                        start={{ x: 0.5, y: 1 }} // Inicia no centro inferior
                        end={{ x: 0.5, y: 0 }} // Termina no centro superior
                        locations={[0, 0.5, 0.9]}
                        style={styles.linearGradient2} />
                ),
                tabBarActiveTintColor: 'white',
            }} name="Configuracoes" component={Config} />
        </Tab.Navigator>
    )

}

import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    container2: {
        flex: 2,
        backgroundColor: 'blue',
    },

    item2: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: 200,
    },
    item: {
        flexDirection: 'row',
        width: 220,
        height: 240,
        marginHorizontal: 20,
        marginTop: 55,
        transform: [
            {
                perspective: 300,

            },
            { rotateX: '10deg' },
            { rotateY: '-13deg' },
        ],
    },

    linearGradient: {
        flex: 1,
        height: 270,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
    },
    linearGradient2: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,

    },
    image: {
        width: '218',
        height: '202',
    },

    Link: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 295,
        marginLeft: 175,
        color: 'white',
        fontFamily: 'Judson-Regular',
    },

    Link2: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 360,
        marginLeft: -140,
        fontFamily: 'Judson-Regular',
        color: 'white',
    },
    Link3: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 230,
        marginLeft: -200,
        fontFamily: 'Judson-Regular',
        color: 'white',
    },

    title: {
        color: '#FFC700',
        alignSelf: 'center',
        fontFamily: 'Inspiration',
        fontSize: 90,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 15
    },
})
