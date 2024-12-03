import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button } from '@rneui/themed';
import axios from 'axios';

export default Homesenai = ({ navigation }) => {

     const [formData, setFormData] = useState('');
     const [email, setEmail] = useState("");
     const [senha, setSenha,] = useState("");
     const [mensagem, setMensagem] = useState('');
     const handleInputChange = (name, value) => {
          setFormData({ ...formData, [name]: value });
     };

     const data = {

          email: email,
          senha: senha,
     }

     //validar que os campos não são vazios
     const handleLogin = async () => {
          if (!email || !senha) {
               setMensagem('Todos os campos são obrigatórios')
               return;
          }

          //envio de informações para a API cadastrar no banco de dados
          try {
               await axios.post('http://10.0.2.2:8085/api/login', data);
               Alert.alert('Login realizado com sucesso');
               navigation.navigate('BookPrincipal');
          } catch (error) {
               console.log(error);
               setMensagem('Usuário ou Senha incorretas')
          }
     }

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView>
                    <ImageBackground style={{ width: 412, height: 628 }} source={require('../../../res/img/BOOKFLOW/FundoEditarPerfil.png')} >

                         <TextInput
                              color={'black'}
                              placeholder='Digite sua senha:'
                              placeholderTextColor={'black'}
                              onChangeText={value => setSenha(value)}
                              editable

                              secureTextEntry={true}
                              maxLength={40}
                              style={{
                                   width: '90%', height: 50, alignSelf: 'center', backgroundColor: 'white', marginTop: 470,
                                   borderRadius: 10, fontFamily: 'AnnieUseYourTelescope'
                              }}
                         />

                         <TextInput
                              color={'black'}
                              placeholder='Digite seu email:' placeholderTextColor={'black'}
                              onChangeText={value => setEmail(value)}
                              editable
                              multiline

                              maxLength={40}
                              style={{
                                   width: '90%', height: 50, alignSelf: 'center', backgroundColor: 'white', marginTop: -120,
                                   borderRadius: 10, fontFamily: 'AnnieUseYourTelescope'
                              }}
                         />

                         <View style={styles.Button}>
                              <Button
                                   title="Entrar" onPress={handleLogin}
                                   buttonStyle={{
                                        backgroundColor: '#9B0303',

                                        borderColor: '#9B0303',
                                        borderRadius: 10,
                                   }}
                                   titleStyle={{

                                        color: 'black',
                                        marginHorizontal: 50,
                                        marginVertical: -3,
                                        fontFamily: 'AnnieUseYourTelescope',

                                   }}
                              />
                              <TouchableOpacity onPress={() => navigation.navigate('BookPrincipal')}></TouchableOpacity>
                         </View>
                         {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

                         <View>
                              <TouchableOpacity onPress={() => navigation.navigate('CadastroBook')}>
                                   <Text style={styles.Link}>Não tem uma conta? Cadastre-se agora! </Text>
                              </TouchableOpacity>
                         </View>

                         <View>
                              <Text style={styles.title}>Book Flow</Text>
                         </View>
                    </ImageBackground>
               </ScrollView>
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },

     title: {

          color: '#FFC700',
          marginTop: -530,
          alignSelf: 'center',
          fontFamily: 'Inspiration',
          fontSize: 90,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 15,
     },

     textInput: {
          width: '100',
          backgroundColor: 'white',
     },

     Link: {
          alignSelf: 'center',
          marginTop: 4,
          color: 'white',
          fontFamily: 'AnnieUseYourTelescope'

     },

     Button: {
          alignItems: 'center',
          marginTop: 100,
     },

     mensagem: {
          color: 'white',
          marginTop: 10,
          alignSelf: 'center',
     }
});