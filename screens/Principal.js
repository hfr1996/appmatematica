import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from '../style/MainStyle';
import fundo from '../assets/fundo.png';

export default function Principal ({navigation}) {

  const soma = () => {
    navigation.navigate("Soma")
  }

  return (
   
    <ImageBackground
      source={fundo}
      style={styles.fundo}
    >
        <ScrollView>

          <View style={styles.recuo}/>

          <View style={styles.submenudescricoes}>

            <Text style={styles.textoforte}>
              Matemáticaa
            </Text>
            
            <Text style={styles.textopequenocentralizado}>
              Vamos aprender a fazer umas contas?
            </Text>

          </View>

          <View style={styles.submenu}>
          
            <TouchableOpacity style={ styles.submenudividido}  onPress={() => soma()}>
              <Text style={styles.textopequenocentralizado}>
                +
                {'\n'}
                Soma
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.submenudividido}>
              <Text style={styles.textopequenocentralizado}>
                -
                {'\n'}
                Subtração
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={ styles.submenudividido}>
              <Text style={styles.textopequenocentralizado}>
                *
                {'\n'}
                Multiplicação
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submenudividido}>
              <Text style={styles.textopequenocentralizado}>
                /
                {'\n'}
                Divisão
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.recuo}/>

        </ScrollView>    
  
    </ImageBackground>

  )
};