import React, {useState} from 'react';
import { View, Text } from 'react-native';
import MyButton from './MyButton';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, margin: 10}}>{count}</Text>
            <MyButton title = "+1" onPress={() => setCount(count +1)}/>
            <MyButton title = "-1" onPress={() => setCount(count -1)}/>
        </View>
    );
};

export default Counter;

/* useState : 상태를 관리하는 변수와 그 변수를 변경할 수 있는 세터함수를 배열로 반환.
              상태 변수는 직접 변경하는 것이 아니라 useState 함수에서 반환한 세터 함수를 이용해야함.(초기값 설정) */