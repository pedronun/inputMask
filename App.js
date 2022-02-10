import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

const App = () => {
  const [cell, setCell] = useState('');
  const [cpf, setCpf] = useState('');

  const cpfRef = useRef(null);
  const cellRef = useRef(null);

  function showInput() {
    const unmaskCpf = cpfRef?.current.getRawValue();
    const unmaskCell = cellRef?.current.getRawValue();

    if(unmaskCpf.length && unmaskCell.length) {
      alert(
        `
          Primeiro if
          CPF: ${cpf}
          CPF Unmask: ${unmaskCpf}

          Cell: ${cell}
          Cell Unmask: ${unmaskCell}
        `
      )
    } else if(unmaskCpf.length || unmaskCell.length) {
      if(unmaskCpf.length){
        alert(`
          Segundo if cpf
          CPF: ${cpf}
          CPF Unmask: ${unmaskCpf}
        `)
      } else {
        alert(`
          Segundo if cell
          Cell: ${cell}
          Cell Unmask: ${unmaskCell}
        `)
      }
    } else {
      alert('Nenhum valor escolhido')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estudo Input Mask</Text>

      <TextInputMask
        style={styles.input}
        type={"cel-phone"}
        options={{
          maskType:'BRL',
          withDDD:true,
          dddMask: "(99) "
        }}
        value={cell}
        placeholder="(99) 99999-9999"
        ref={cellRef}
        onChangeText={e => setCell(e)}
      />

      <TextInputMask
        style={styles.input}
        type={'cpf'}
        value={cpf}
        placeholder="123.456.789-09"
        ref={cpfRef}
        onChangeText={e => setCpf(e)}
      />

      <Button 
        title='Mostrar valores'
        style={styles.btn}
        onPress={showInput} 
      />    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#040404'
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    marginTop: 40
  }
});

export default App;
