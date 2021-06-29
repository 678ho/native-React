import React from 'react';
import {Text, View, Button} from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
const App = () => {
    return (
        <View 
          style={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
          }}
          >
              
              <Text style={{  fontSize: 30, marginBottom: 10}}>Props</Text>
              <MyButton title="Button" onPress={() => alert('props')}/>
              <MyButton title="Button" onPress={() => alert('Children')}>Children Props</MyButton>
              <MyButton  onPress={() => alert('default')}/>
              <EventButton />
              <Counter />
              <EventInput />
          </View>
    );
};

export default App;

/* Props 란 Properties를 줄인 표현으로, 부모 컴포넌트로부터 전달된 속성값  혹은 상속받은 속성값.
    부모 컴포넌트가 자식 컴포넌트의 props를 설정하면 자식 컴포넌트에서는 해당 props를 사용가능 하지만 변경은 불가능.
    변경이 필요한 경우 설정 및 전달한 부모 컴포넌트에서 변경해야함.*/

/*
              <Text style={{  fontSize: 30, marginBottom: 10}}>Props</Text>
              <MyButton title="Button" onPress={() => alert('props')}/>
              <MyButton title="Button" onPress={() => alert('Children')}>Children Props</MyButton>
              <MyButton  onPress={() => alert('default')}/>
 */