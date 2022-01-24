import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import {styles} from '../Style';

const Order = ({ navigation }) => {
  return (
    <View style={styles.cartContainer}>
      {/* Header */}
      <View style={styles.cartHeaderWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/icons/ArrowLeft.png')}
            style={[styles.displayModeIcon, {tintColor: colors.cream}]}
          />
        </TouchableOpacity>
      </View>

      {/* Add to cart */}
      <View style={styles.cartWrapper}>
        <Image
          source={require('../assets/images/icons/Check.png')}
          style={styles.checkIcon}
        />
        <Text style={styles.cartText}>Added to cart</Text>
      </View>
    </View>
  );
};

export default Order;
