import React, {useState} from 'react';

import {View, TextInput, StyleSheet, Platform} from 'react-native';
import MyButton from '../../components/MyButton';

const UserPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const clickHandler = () => {
    console.log(form);
  };

  return (
    <>
      {/* 用户账号 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="请输入账号"
          onChangeText={newText =>
            setForm({
              username: newText,
              password: form.password,
            })
          }
          defaultValue={form.username}
          keyboardType="default"
        />
      </View>
      {/*用户密码 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="请输入密码"
          onChangeText={newText =>
            setForm({
              username: form.username,
              password: newText,
            })
          }
          /* 密码输入框 */
          secureTextEntry={true}
          defaultValue={form.password}
          keyboardType={
            Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
          }
        />
      </View>
      {/* 按钮 */}
      <MyButton style={styles.button} onPress={clickHandler}>
        登录
      </MyButton>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: global.pxw(20),
  },
  input: {
    width: '95%',
    height: global.pxw(80),
    borderWidth: 1,
    padding: global.pxw(20),
  },
  button: {
    marginTop: global.pxw(20),
    width: '95%',
    height: global.pxw(60),
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default UserPage;
