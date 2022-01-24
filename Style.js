import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from './assets/colors/colors';

const styles = StyleSheet.create({
  
  // MODAL STYLES

  centerModal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalContainer: {
    backgroundColor: colors.darkPurple,
    alignContent: 'center',
    height: 300,
    overflow: 'hidden',
    width: '80%',
    borderRadius: 20,
  },
  modalImage: {
    backgroundColor: colors.pink,
    flex: 0.4,
    overflow: 'hidden',
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    height: 300,
    width: '100%',
  },
  modalContent: {
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 0.6,
    justifyContent: 'space-around',
  },
  modalHeader: {
    color: colors.pink,
    fontSize: 30,
    fontFamily: 'Nunito-ExtraBold',
  },
  modalText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Nunito-ExtraBold',
    paddingBottom: 5,
  },
  modalButton: {
    color: colors.pink,
    padding: 5,
    fontSize: 15,
    fontFamily: 'Nunito-ExtraBold',
    alignSelf: 'flex-end',
  },

  // HOME PAGE STYLES

  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Nunito-ExtraBold',
    color: colors.darkPurple,
  },
  invisibleChild: {
    width: 40,
  },
  displayModeIcon: {
    justifyContent: 'flex-end',
    width: 40,
    height: 40,
  },
  searchSection: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(165, 150, 139, 0.3)',
    margin: 30,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  searchIcon: {
    width: 30,
    height: 30,
    tintColor: '#644C5C',
  },
  searchBar: {
    padding: 10,
    paddingLeft: 10,
    color: '#8B7283',
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold',
  },
  categoriesWrapper: {
    marginTop: 20,
    marginLeft: 30,
  },
  categoriesTitle: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 25,
    paddingHorizontal: 3,
    color: colors.darkPurple,
  },
  categoriesListWrapper: {
    marginBottom: 20,
  },
  categoryItemWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.darkGreen,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 30,
  },
  categoryItemImage: {
    width: 70,
    height: 124,
    marginTop: 15,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'left',
    fontFamily: 'Nunito-ExtraBold',
    color: 'white',
    fontSize: 18,
    marginTop: 18,
  },
  categoryItemPrice: {
    fontFamily: 'Nunito-ExtraBold',
    color: colors.pink,
  },
  categoryItemAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryItemAddText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    color: colors.cream,
  },
  bottomSpace: {
    height: 70,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
  },
  navigationBar: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.darkPurple,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  homeIcon: {
    width: 40,
    height: 40,
    tintColor: colors.cream,
  },
  shoppingBagIcon: {
    width: 35,
    height: 35,
    tintColor: colors.cream,
  },

  // DETAILS PAGE STYLES

  detailsHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: colors.darkGreen,
    alignItems: 'center',
  },
  detailsHeaderText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Nunito-ExtraBold',
    color: colors.cream,
  },
  productWrapper: {
    backgroundColor: colors.darkGreen,
    paddingTop: 60,
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  productImg: {
    width: 135,
    height: 237,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  productTitle: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 35,
    color: colors.darkPurple,
  },
  calculateServings: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor: colors.darkGreen,
    width: 80,
    height: 35,
  },
  calculateText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textAlignVertical: 'center',
  },
  servingsInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 25,
    height: 25,
  },
  detailsPriceText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    color: '#8B7283',
    marginHorizontal: 30,
  },
  toppingsHeaderWrapper: {
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  toppingsHeader: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    color: colors.darkPurple,
  },
  toppingsSubheader: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 15,
    color: colors.darkPurple,
  },
  toppingsContentWrapper: {
    marginTop: 15,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  toppingsButton: {
    //backgroundColor: '#757F76',
    padding: 5,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  toppingsText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 15,
    color: 'white',
  },
  orderButton: {
    backgroundColor: colors.darkPurple,
    marginHorizontal: 30,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
    height: 50,
  },
  orderText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    color: 'white',
  },

  // ORDER PAGE STYLES

  cartHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: colors.darkPurple,
    alignItems: 'center',
  },
  cartHeaderText: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Nunito-ExtraBold',
    color: colors.cream,
  },
  cartContainer: {
    flex: 1,
    backgroundColor: colors.darkPurple,
  },
  cartWrapper: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 70,
    height: 70,
    tintColor: colors.pink,
  },
  cartText: {
    fontFamily: 'Nunito-ExtraBold',
    color: colors.cream,
    fontSize: 25,
    marginTop: 40,
  },
});

export {styles};
