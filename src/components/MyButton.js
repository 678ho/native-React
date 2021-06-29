import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
    console.log(props);
    return (
        <Pressable
          style={{
              backgroundColor: '#3498db',
              padding: 16,
              margin: 10,
              borderRadius: 8,
          }}
          onPress={() => props.onPress()}
          >
            <Text style={{color: 'white', fontSize: 24}}>{props.children ||props.title}</Text>
        </Pressable>
    );
};


MyButton.defaultProps = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};
/* 공백 버튼이 생성될때 디폴트값을 정해줘 공백버튼 생성을 방지.*/
export default MyButton;