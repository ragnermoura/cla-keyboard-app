import React, { useEffect, useContext } from 'react';
import { Container, Logo, LoadingIcon  } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';;
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
     useEffect(() => {
       const checkToken = async () => {
         try {
           const token = await AsyncStorage.getItem('token');
           if (!token) {
             navigation.reset({
               routes: [{ name: 'Main' }]
             });
           } else {
             navigation.reset({
               routes: [{ name: 'Main' }]
             });
           }
         } catch (error) {
           console.error("Erro ao buscar o token", error);
         }
       };
  
       checkToken();
     }, []);
  
    return (
      <Container>
        <Logo />
        <LoadingIcon size="large" color="red" />
      </Container>
    );
  };