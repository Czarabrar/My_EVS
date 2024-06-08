import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PaymentTable from './Payment/PaymentTable';
import PaymentWeek from './Payment/PaymentWeek';
import PaymentMonth from './Payment/PaymentMonth';
import {StyleSheet} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {View} from 'react-native';
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderLeftWidth: 0,
            width: '80%',
            backgroundColor: '#fff',
            elevation: 0,
            
          },
          // tabBarGap:-10,
          tabBarItemStyle:{},
          tabBarIndicatorContainerStyle: {backgroundColor: '#fff'},
          tabBarIndicatorStyle: {backgroundColor: '#086972', height: 3,borderRadius:10,marginLeft:20,width:70,marginBottom:10},
          tabBarLabelStyle:{fontFamily:'Inter-Medium',fontSize:15}
        }}
        style={styles.mainContainer}>
        <Tab.Screen name="Today" component={PaymentTable} />
        <Tab.Screen name="Week" component={PaymentWeek} />
        <Tab.Screen name="Month" component={PaymentMonth} />
      </Tab.Navigator>
    
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:'#fff'
  },
});
export default MyTabs;
