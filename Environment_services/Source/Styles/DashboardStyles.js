import {StyleSheet} from 'react-native';

const DashboardStyles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    backgroundColor:'#fff'
  },
  //header section
  headerContainer: {
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 15,
    zIndex: 2,
  },
  headerLogoContainer: {
    width: '60%',
    height: '100%',
    paddingRight: 10,
  },
  headerLogo: {
    resizeMode: 'contain',
    width: 117,
    height: 33,
    marginLeft: 20,
    marginTop: 11,
  },
  headerProfileLogo: {
    width: '100%',
    justifyContent: 'center',
  },
  profileLogo: {
    width: 34,
    height: 34,
    marginLeft: 100,
  },
  //navigation icons holder section
  NavigationIconContainer: {
    width: '100%',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
  },
  IconsHolder: {
    flexDirection: 'row',
    width: '100%',
  },
  menuIcon: {
    width: '70%',
    marginLeft: 30,
  },
  filterContainer: {
    marginRight: 19,
  },
  HeaderTextHolder: {
    backgroundColor: '#fff',
  },
  headerTextStyle: {
    color: '#086972',
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    paddingLeft: 30,
  },
  pageContainerWrapper: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop:18,
  },
  pageContainerparent: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,

    width: '100%',
  },
  pageContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    //  zIndex:2,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    // backgroundColor:'#fff',
    marginLeft: 20,
  },
  pagenavigator: {
    borderColor: '#000',
    flexGrow: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    paddingRight: 20,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    // marginRight:20
    // backgroundColor:'#ff3'
  },
  pageTextButton: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#086972',
    color: '#fff',
    // height:42,
    // marginLeft:10,
  },
  pageText: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  mainBodyContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
export default DashboardStyles;
