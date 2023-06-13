import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity, ImageBackground ,Modal, Animated } from 'react-native'
import { COLORS } from '../../constants';
import DataSoma from '../../data/DataSoma'; 
import styles from '../../style/MainStyle';
import fundo from '../../assets/fundo.png';
import iconsairquiz from '../../assets/iconsairquiz.png';

const Soma = ({navigation}) => {

    const allQuestions = DataSoma
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const principal = () => {
        navigation.navigate("Principal")
    }

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+3)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View style={styles.submenudescricoes}>
                <Text style={styles.textopequenonegrito}>
                    {allQuestions[currentQuestionIndex]?.question}
                </Text>
            </View>
        )
    }
    
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            backgroundColor: 
                              option==correctOption 
                              ? COLORS.certa 
                              : option==currentOptionSelected 
                              ? COLORS.errada
                              : COLORS.normal,
                            width: '90%',
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            marginVertical: 10
                        }}
                        >
                            <Text style={styles.textomedio}>{option}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    {/*botão próximo*/}
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={styles.botaoquestoes}>
                  <Text style={styles.textobotao}>
                    Próximo
                  </Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }

    {/*Variáveis barra de progresso*/}
    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })

    {/*barra de progresso*/}
    const renderProgressBar = () => {
    return (
        <View style={styles.barradeprogresso}>
            <Animated.View style={[{
            height: 20,
            borderRadius: 20,
            backgroundColor: 'white'
            },{
                width: progressAnim
            }]}>
            </Animated.View>
        </View>
        )
    }

    {/*Renderizando página*/}
    return (
       <View style={styles.container}>
  
        <ImageBackground
          source={fundo}
          style={styles.fundo}
        >
          
          <ScrollView>

            <View style={styles.recuo}/>

            <StatusBar/>

            <View>
              <TouchableOpacity style={styles.submenuexterno} onPress={() => principal()}>
                <Image
                  source={iconsairquiz}
                  style={styles.iconpequeno}              
                />
              </TouchableOpacity>           
          </View>


            {/*Barra de Progresso*/}
            {renderProgressBar()}

            {/*Questões*/}
            {renderQuestion()}

            {/*Opções*/}
            {renderOptions()}

            {/*Botão Próximo*/}
            {renderNextButton()}

            {/*Final*/}
            <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
            >      
              <View style={styles.container}>
                
                <ImageBackground
                  source={fundo}
                  style={styles.fundo}>
                  
                  <View style={styles.submenudescricoes}>

                    <Text style={styles.textoforte}>{ score> (allQuestions.length/2) ? 'Parabéns!' : 'Ops! Você foi mal' }</Text>

                    <View style={styles.submenu}>
                        <Text style={styles.textomedio}>
                          {score}
                        </Text>
                        <Text style={styles.textomedio}>
                          XP
                        </Text>
                    </View>

                    {/* Retry Quiz button */}
                    <TouchableOpacity
                    onPress={() => principal()}
                    style={styles.botaoquestoes}>
                        <Text style={styles.textobotao}>
                          Continuar
                        </Text>
                    </TouchableOpacity>
                  
                  </View>
              
                </ImageBackground>             

              </View>
            
            </Modal>

            <View style={styles.recuo}/>
  
          </ScrollView>
  
        </ImageBackground>
  
      </View>
    )
}

export default Soma