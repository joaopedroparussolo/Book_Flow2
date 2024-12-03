import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Alert, } from 'react-native';
import axios from 'axios';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from '@rneui/base';
import { Button } from '@rneui/themed';
import RNFS from 'react-native-fs';
const Botoes = () => {
    const [imagem, setImagem] = useState(null);

    //acessar a câmera do celular
    const handleCameraLaunch = async () => {
        const options = {
            mediaType: 'photo',
        };

        try {
            const response = await launchCamera(options);
            
            // Verifica se a imagem foi capturada com sucesso
            if (response.assets && response.assets.length > 0) {
                const image = response.assets[0];

                console.log(image);

                setImagem(image);
            } else {
                console.log('Nenhuma imagem capturada.');
            }
        } catch (error) {
            console.error('Erro ao capturar a imagem:', error);
        }
    };

    //Acessar a biblioteca de imagens do celular
    const handleImageLibraryLaunch = async () => {
        const options = {
            mediaType: 'photo',
        };

        try {
            const response = await launchImageLibrary(options);
            console.log('pickedFile', response);

            // Verifica se a imagem foi selecionada com sucesso
            if (response.assets && response.assets.length > 0) {
                const image = response.assets[0];
                setImagem(image);
            } else {
                console.log('Nenhuma imagem selecionada.');
            }
        } catch (error) {
            console.error('Erro ao selecionar a imagem:', error);
        }
    };
    const enviarDadosParaApi = async () => {
        try {
            // Verifica se os campos obrigatórios foram preenchidos
            if (!imagem) {
                Alert.alert('É obrigatório conter uma imagem.');
                return;
            }
            Alert.alert('Livro cadastrado com sucesso');
            // Lê o arquivo da imagem como base64
            const imageData = await RNFS.readFile(imagem.uri, 'base64');

            // Configuração da requisição Axios
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            // URL da sua API para enviar os dados e a imagem
            const apiUrl = 'http://10.0.2.2:8085/api/cadastro_livro';

            // Dados a serem enviados para a API
            const data = {
                imagemBase64: imageData,
            };

            // Envia os dados e a imagem para a API usando Axios
            const response = await axios.post(apiUrl, data, config);
            //console.log('Resposta da API:', response.data);

            // Limpa o formulário após o envio dos dados
            limparFormulario();
            // Retorna para a página inicial


        } catch (error) {
            console.error('Erro ao enviar a imagem para a APII:', error);
        }
    };
    const limparFormulario = () => {

        setImagem(null);
    };
    return (
        <View >
            <Button buttonStyle={{
                alignSelf: 'center',
                borderRadius: 15,
                marginTop: 10,
            }}
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                    colors: ["#E06723", "#993131"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                title="Câmera" onPress={handleCameraLaunch}
            />

            <Button buttonStyle={{
                alignSelf: 'center',
                borderRadius: 15,
                marginTop: 10,
            }}
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                    colors: ["#E06723", "#993131"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                title="Galeria" onPress={handleImageLibraryLaunch} />

            <Button buttonStyle={{


                alignSelf: 'center',
                borderRadius: 15,
                marginTop: 10,
            }}
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                    colors: ["#E06723", "#993131"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                title="Enviar" onPress={enviarDadosParaApi}
            />
        </View>
    )
}
export default enviarLivro = ({ navigation, }) => {
    const [formData, setFormData] = useState('');
    const [comentario, setComentario,] = useState('');
    const [show, setShow] = useState(false);
    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const data = {
        comentario: comentario,
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <ImageBackground style={{ width: 415, height: 660 }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >

                    <View>
                        <Text style={{
                            position: "absolute",
                            alignSelf: 'center',
                            fontFamily: 'JuliusSansOne-Regular',
                            color: 'white',
                            fontSize: 20,
                            marginTop: 10
                        }}>
                            CADASTRE SEU LIVRO JÁ!!!
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => setShow(true)}>
                            <LinearGradient

                                colors={['#993131', '#E06723']}
                                style={{
                                    borderRadius: 10,
                                    marginTop: 37,
                                    height: 265,
                                    width: '65%',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{ width: 80, height: 80, marginTop: 5, alignSelf: 'center', }} source={  require ('../../../res/img/BOOKFLOW/plus.png')} >
                                </Image>
                            </LinearGradient>
                            {
                                show ? <Botoes /> : null
                            }
                        </TouchableOpacity>
                        <LinearGradient
                            colors={['#610000', '#000000']}
                            style={{
                                borderRadius: 40,
                                marginTop: 20,
                                height: 300,
                                width: '85%',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                
                            }}>
                            <TextInput
                                color={'#B0B0B0'}
                                placeholder='Faça um comentário:' placeholderTextColor={'#B0B0B0'}
                                keyboardType="email-address"
                                onChangeText={value => setComentario(value)}
                                value={formData.comentario}
                                editable
                                multiline
                                style={{

                                    width: '90%', height: '20%', alignSelf: 'center', marginTop: -170,
                                    fontFamily: 'AnnieUseYourTelescope',
                                    fontSize: 17,
                                }} />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate('')}>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

    textInput: {
        width: '100',
        backgroundColor: 'white',
    },
    Link: {
        alignSelf: 'center',
        marginTop: -435,
        color: 'white',
        opacity: 0.0,
    },
    mensagem: {
        color: 'white',
        marginTop: 10,
        alignSelf: 'center',
    },
    item: {
        width: 370,
        height: 160,
        marginHorizontal: 20,
        marginTop: -130,
        zIndex: 50,
        alignSelf: 'center',
    },
    item2: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: -80,
        alignSelf: 'center',
        zIndex: 10,

    },
    item3: {
        width: 220,
        height: 280,
        marginHorizontal: 20,
        marginTop: 90,
        alignSelf: 'center',
        zIndex: 20,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
});