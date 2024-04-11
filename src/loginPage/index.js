import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import SignUpPage from '../signUpPage';
import Search from '../../assets/icons/searchIcon.svg';

const LoginPage = () => {
  const [txt, setTxt] = useState('Welcome!');
  const [modalVisible, setModalVisible] = useState(false);
  const signUp = () => {
    setTxt('Welcome Back!');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.availableTitle}>
        <Text style={styles.pointStyle}>{txt}</Text>
      </View>

      <View style={styles.trialContainer}>
        <Text style={styles.loginDetails}>Login Details</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Email or Username"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Password"
          keyboardType="visible-password"
        />
      <Search height={60} width={60} />

        <TouchableOpacity onPress={signUp}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={signUp}>
          <Text style={styles.btnTxt}>Login Details</Text>
        </TouchableOpacity>

        <View style={styles.signUp}>
          <Text style={styles.accTxt}>Does not have a account? </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.signUpTxt}>Login Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SignUpPage
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        txt={txt}
        signUp={signUp}
      />
    </View>
  );
};

export default LoginPage;
