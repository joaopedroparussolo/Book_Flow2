import React from 'react'
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
export default function Config({ navigation }) {

    return (

        <SafeAreaView>
            <ImageBackground style={{ width: 412, height: 760, }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >

                <ScrollView>
                    <View>
                        <Text style={styles.title}>Book Flow</Text>
                    </View>

                    <View style={{ width: 'auto', flexDirection: 'row' }}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('TelaSobre')}>
                                <Text style={styles.Link}>Sobre</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Homesenai')}>

                                <Text style={styles.Link2}>Trocar de Conta</Text>

                            </TouchableOpacity>

                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('editarPerfil')}>

                                <Text style={styles.Link3}>Editar Perfil</Text>

                            </TouchableOpacity>

                        </View>

                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Link: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 150,
        marginLeft: 170,
        color: 'white',
        fontFamily: 'Judson-Regular',
    },

    Link2: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 220,
        marginLeft: -140,
        fontFamily: 'Judson-Regular',
        color: 'white',
    },
    Link3: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 80,
        marginLeft: -200,
        fontFamily: 'Judson-Regular',
        color: 'white',
    },

    title: {

        color: '#FFC700',
        alignSelf: 'center',
        fontFamily: 'Inspiration',
        fontSize: 90,
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 15
    },
})

