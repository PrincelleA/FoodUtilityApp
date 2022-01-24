import * as React from 'react';
import {useState, useContext} from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

/* To toggle between dark mode and light mode */
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../theme/ThemeContext';

/* Import external stylesheet and custom colors */
import {styles} from '../Style';
import colors from '../assets/colors/colors';

/* Import data for bubble tea options */
import popularData from '../assets/data/popularData';
import fruitData from '../assets/data/fruitData';
import classicData from '../assets/data/classicData';

const Home = ({navigation}) => {
  /* Toggle Dark Mode */
  const [mode, setMode] = useState(false);
  const theme = useContext(themeContext);

  /* Initialize state variables */
  const [searchItem, onChangeSearch] = useState('Search');
  const [modalToggle, setModalToggle] = useState(true);

  /* Render each drink option */
  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {item: item})}>
        <View style={styles.categoryItemWrapper}>
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View style={styles.categoryItemAdd}>
            <Text style={styles.categoryItemPrice}>{item.price} dhs</Text>
            <Text style={styles.categoryItemAddText}>+</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  {
    /* Function: Displays modal */
  }
  const ModalDisplay = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalToggle}
        onRequestClose={() => {
          setModalToggle(!modalToggle);
        }}>
        <View style={styles.centerModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalImage}>
              <ImageBackground
                resizeMode="repeat"
                style={styles.bgImage}
                source={require('../assets/images/bobaBg.jpg')}
              />
            </View>

            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Welcome!</Text>
              <Text style={styles.modalText}>
                Craving boba? We got you covered. Get started by selecting from
                our wide variety of flavors!
              </Text>

              {/* Toggle button: Closes modal */}
              <TouchableOpacity onPress={() => setModalToggle(!modalToggle)}>
                <Text style={styles.modalButton}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <ModalDisplay />

      <ScrollView>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.invisibleChild}></View>

          <Text style={[styles.headerText, {color: theme.color}]}>bobie</Text>

          {/* Button to toggle between display modes*/}
          <TouchableOpacity
            onPress={() => {
              setMode(mode ? false : true);
              EventRegister.emit('changeTheme', mode);
            }}>
            <Image
              source={require('../assets/images/icons/LightDark-Purple.png')}
              style={[styles.displayModeIcon, {tintColor: theme.color}]}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <Image
            source={require('../assets/images/icons/Search.png')}
            style={[styles.searchIcon, {tintColor: theme.color}]}
          />
          <TextInput
            style={[styles.searchBar, {color: theme.color}]}
            onChangeText={onChangeSearch}
            value={searchItem}
          />
        </View>

        {/* Popular Section */}
        <View style={styles.categoriesWrapper}>
          <Text style={[styles.categoriesTitle, {color: theme.color}]}>
            Popular
          </Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={popularData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Classic Section */}
        <View style={styles.categoriesWrapper}>
          <Text style={[styles.categoriesTitle, {color: theme.color}]}>
            Classic
          </Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={classicData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Fruit Tea Section */}
        <View style={styles.categoriesWrapper}>
          <Text style={[styles.categoriesTitle, {color: theme.color}]}>
            Fruit Tea
          </Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={fruitData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Bottom Margin */}
        <View style={styles.bottomSpace}></View>
      </ScrollView>

      {/* Navigation */}
      <View style={styles.navigationContainer}>
        <View style={styles.navigationBar}>
          <Image
            source={require('../assets/images/icons/Home.png')}
            style={styles.homeIcon}
          />
          <Image
            source={require('../assets/images/icons/ShoppingBag.png')}
            style={styles.shoppingBagIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
