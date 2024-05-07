import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProductPage = props => {
  //   const {navigation, renderData, heading} = props || {};

  return (
    <TouchableOpacity style={styles.listContainer}>
      <Image
        style={styles.imgStyle}
        source={{
          uri: 'https://static.javatpoint.com/list/images/list-of-makeup-items5.png',
        }}
      />
      <TouchableOpacity>
        <MaterialIcons name="favorite" style={styles.favIcon} />
      </TouchableOpacity>
      <Text style={styles.titleTxt}>ullu</Text>
    </TouchableOpacity>
  );
};

export default ProductPage;
