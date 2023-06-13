import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style/MainStyle';

const RenderQuestion = (props) => {
    return (
        <View style={styles.submenudescricoes}>
            <Text style={styles.textopequenonegrito}>
                {props.allQuestions[props.currentQuestionIndex]?.question}
            </Text>
        </View>
    )
}

export default RenderQuestion