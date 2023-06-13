import { Input } from '@rneui/themed';

export default DataPortugol = [
    {
        id: 0,
        question: "Quanto que é o resultado da operação matemática a seguir: 2+2",
        options: ["2","3","4","5"],
        correct_option: "4"
    },        
    {
        id: 1,
        question: "Quanto que é o resultado da operação matemática a seguir: 2+10",
        options: [<Input
            placeholder='Digite sua resposta'
            inputStyle={{color: 'white'}}
            placeholderTextColor={'white'}/>],
        correct_option: "12"
    },
    {
        id: 2,
        question: "Quanto que é o resultado da operação matemática a seguir: 6+5",
        options: ["10","6","15","11"],
        correct_option: "11"
    },
    {
        id: 3,
        question: "Quanto que é o resultado da operação matemática a seguir: 1+1",
        options: ["1","2","4","5"],
        correct_option: "2"
    },
    {
        id: 4,
        question: "Quanto que é o resultado da operação matemática a seguir: 14+11",
        options: ["25","22","21","35"],
        correct_option: "25"
    },
]