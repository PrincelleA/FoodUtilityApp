import * as React from 'react';
import {useState, useContext} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

/* To toggle between dark mode and light mode */
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../theme/ThemeContext';

/* Import external stylesheet and custom colors */
import colors from '../assets/colors/colors';
import {styles} from '../Style';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  /* Toggle Dark Mode */
  const [mode, setMode] = useState(false);
  const theme = useContext(themeContext);

  /* Initialize state variables */
  const [servings, setServings] = useState(1);
  const [toppingsP, setToppingsP] = useState(0);
  const [toppingsRB, setToppingsRB] = useState(0);
  const [toppingsR, setToppingsR] = useState(0);
  const [price, setPrice] = useState(18);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      {/* Header */}
      <View style={styles.detailsHeaderWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/icons/ArrowLeft.png')}
            style={[styles.displayModeIcon, {tintColor: colors.cream}]}
          />
        </TouchableOpacity>

        <Text style={styles.detailsHeaderText}>bobie</Text>

        {/* Button to toggle between display modes*/}
        <TouchableOpacity
          onPress={() => {
            setMode(mode ? false : true);
            EventRegister.emit('changeTheme', mode);
          }}>
          <Image
            source={require('../assets/images/icons/LightDark-Purple.png')}
            style={[styles.displayModeIcon, {tintColor: colors.cream}]}
          />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <View style={styles.productWrapper}>
        <Image style={styles.productImg} source={item.image} />
      </View>

      {/* Product Details */}
      <View style={styles.productDetails}>
        <Text style={[styles.productTitle, {color: theme.color}]}>
          {item.title}
        </Text>

        {/* Set serving size with increment and decrement buttons */}
        <View style={styles.calculateServings}>
          <TouchableOpacity onPress={() => setServings(parseInt(servings - 1))}>
            <Text style={[styles.calculateText, styles.buttonText]}>-</Text>
          </TouchableOpacity>

          <Text style={[styles.calculateText, styles.servingsInput]}>
            {servings}
          </Text>

          <TouchableOpacity onPress={() => setServings(parseInt(servings + 1))}>
            <Text style={[styles.calculateText, styles.buttonText]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.detailsPriceText}>{price * servings} Dhs</Text>

      {/* Toppings Section */}
      <View style={styles.toppingsHeaderWrapper}>
        <Text style={[styles.toppingsHeader, {color: theme.color}]}>
          Add Toppings
        </Text>
        <Text style={[styles.toppingsSubheader, {color: theme.color}]}>
          (+2 each)
        </Text>
      </View>

      <View style={styles.toppingsContentWrapper}>
        {/* Pudding  */}
        <TouchableHighlight
          onPress={() => {
            if (!toppingsP) {
              setToppingsP(1);
              setPrice(price + 2);
            } else {
              setToppingsP(0);
              setPrice(price - 2);
            }
          }}
          style={[
            styles.toppingsButton,
            {
              backgroundColor: toppingsP
                ? theme.buttonActive
                : theme.buttonInactive,
            },
          ]}>
          <Text style={styles.toppingsText}>Pudding</Text>
        </TouchableHighlight>

        {/* Red Bean */}
        <TouchableHighlight
          onPress={() => {
            if (!toppingsRB) {
              setToppingsRB(1);
              setPrice(price + 2);
            } else {
              setToppingsRB(0);
              setPrice(price - 2);
            }
          }}
          style={[
            styles.toppingsButton,
            {
              backgroundColor: toppingsRB
                ? theme.buttonActive
                : theme.buttonInactive,
            },
          ]}>
          <Text style={styles.toppingsText}>Red Bean</Text>
        </TouchableHighlight>

        {/* Rocksalt */}
        <TouchableHighlight
          onPress={() => {
            if (!toppingsR) {
              setToppingsR(1);
              setPrice(price + 2);
            } else {
              setToppingsR(0);
              setPrice(price - 2);
            }
          }}
          style={[
            styles.toppingsButton,
            {
              backgroundColor: toppingsR
                ? theme.buttonActive
                : theme.buttonInactive,
            },
          ]}>
          <Text style={styles.toppingsText}>Rocksalt</Text>
        </TouchableHighlight>
      </View>

      {/* Order Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Order')}>
        <View style={styles.orderButton}>
          <Text style={styles.orderText}>Add to Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
