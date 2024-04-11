import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.trialContainer}>
        <View style={styles.pointContainer}>
          <Text style={styles.pointStyle}>6</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.trialTitle}>Trial Points</Text>
          <Text style={styles.availableTitle}>Available</Text>
        </View>
      </View>
      <Image source={{uri:'C:\Users\ASUS\Shopping\assets\icons\searchIcon.svg'}} />
    </View>
  );
};

export default HomeHeader;
