import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  /*Usado em: Quiz*/
  barradeprogresso:{
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, .85)',
  },
  
  /*Usado em: Quiz*/
  botaoquestoes:{
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 55,
    backgroundColor: 'white',
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 20,
  },

  /*Usado em: Todo aplicativo*/
  container: {
    justifyContent: 'center',
    flex: 1,
  },

  /*Usado em: Principal*/
  submenu: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  /*Usado em: Principal*/
  submenudividido: {
    width: 170,
    backgroundColor: 'rgba(0, 0, 0, .85)',
    marginTop: 10,
    marginHorizontal: 5,
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 20,
  },

  /*Usado em: Principal e Quiz*/
  submenuexterno:{
    marginTop: 30,
    marginBottom: 10,
    marginRight: 15,
    alignItems: 'flex-end'
  },

  /*Usado em: Todo aplicativo*/
  submenudescricoes: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, .85)',
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  /*Usado em: Quiz*/
  submenualternativas: {
    alignSelf: 'center',
    width: '90%',
    height: 60,
    marginTop: 10,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 20,
  },  

  /*Usado em: Todo aplicativo*/
  fundo: {
    flex: 1,
    resizeModee: "cover",
    justifyContent: 'center',
  },  

  /*Usado em: Todo aplicativo*/
  iconpadrao:{
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },

  /*Usado em: Todo aplicativo*/
  iconperfil:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },

  /*Usado em: Principal*/
  iconsubmenuexterno: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  /*Usado em: Quiz*/
  iconpequeno: {
    width: 18,
    height: 18,
    marginRight: 10,
    marginBottom: 10,
  },

  /*Usado em: Quiz*/
  input:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,  
  },

  /*Usado em: Todo app*/
  recuo:{
    margin: 30,
  },

  /*Usado em: Todo aplicativo*/
  textoforte: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  /*Usado em: Todo aplicativo*/
  textomedio: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },

  /*Usado em: Todo aplicativo*/
  textopequenonegrito: {
    fontSize: 16,
    fontWeight:'bold',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'justify',
  },

  /*Usado em: Todo aplicativo*/
  textopequenocentralizado: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold',
    marginTop: 10,
  },

  /*Usado em: Login, Cadastro, Quiz*/
  textobotao:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },

  });

export default styles