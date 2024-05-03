import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import CustomKeyboard from '../../components/PalavrasKey/index'; // Ajuste o caminho conforme necessário

const KeyboardTestScreen = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleKeyPress = key => {
    console.log("Key pressed:", key);
    // Aqui você pode adicionar o que fazer quando uma tecla é pressionada
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Teste o Teclado Customizado:</Text>
      <Button
        title={keyboardVisible ? "Esconder Teclado" : "Mostrar Teclado"}
        onPress={() => setKeyboardVisible(!keyboardVisible)}
      />
      {keyboardVisible && <CustomKeyboard onKeyPress={handleKeyPress} />}
    </View>
  );
};

export default KeyboardTestScreen;
