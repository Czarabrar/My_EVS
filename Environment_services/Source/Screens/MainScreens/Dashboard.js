import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Easing,
  StyleSheet,
  Modal,
  Button
} from 'react-native';
import React, {useState} from 'react';
import DashboardStyles from '../../Styles/DashboardStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import Attendance from '../NavScreens/Attendance';
import Menuicon from '../../svg/Menuicon';

import Coverage from '../NavScreens/Coverage';
import Collection from '../NavScreens/Collection';
import Segregation from '../NavScreens/Segregation';
import VehicleRent from '../NavScreens/VehicleRent';
import Payment from '../NavScreens/Payment';


const Dashboard = ({navigation}) => {
  const [selectedScreen, setSelectedScreen] = useState('Attendance'); 
  const [openModal,setOpenModal]=useState(false);
const openfunc = () =>{
  setOpenModal(true);
}
 const closefunc =()=>{
setOpenModal(false) ;
}

  const renderComponent = () => {
    switch (selectedScreen) {
      case 'Attendance':
        return <Attendance />;
      case 'Coverage':
        return <Coverage />;
      case 'Collection':
        return <Collection />;
      case 'Segregation':
        return <Segregation />;
      case 'VehicleRent':
        return <VehicleRent />;
      case 'Payment':
        return <Payment />;
      default:
        return <Attendance />;
    }
  };
  
  return (
    <View style={DashboardStyles.parentContainer}>
      {/* header  */}
      <View style={DashboardStyles.headerContainer}>
        <View style={DashboardStyles.headerLogoContainer}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../Images/logo.png')}
              style={DashboardStyles.headerLogo}
            />
          </TouchableOpacity>
        </View>
        <View style={DashboardStyles.headerProfileLogo}>
          <TouchableOpacity>
            <Image
              source={require('../../Images/profile.png')}
              style={DashboardStyles.profileLogo}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* header ends here */}
      {/* next to header navigation section */}
      <View style={DashboardStyles.NavigationIconContainer}>
        <View style={DashboardStyles.IconsHolder}>
          <View style={DashboardStyles.menuIcon}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.openDrawer()}>
              <Menuicon/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={openfunc}>
          <View style={DashboardStyles.filterContainer}>
            <Icon name="filter-list" size={22} color="#000" />
          </View>
          </TouchableOpacity>
          <View style={DashboardStyles.calendarContainer}>
            <Micon name="calendar-month-outline" size={22} color="#000" />
          </View>
        </View>
      </View>
      <View style={DashboardStyles.HeaderTextHolder}>
        <Text style={DashboardStyles.headerTextStyle}>Dashboard</Text>
      </View>
      {/* header title and other icons section ends here */}
      <View style={DashboardStyles.pageContainerWrapper}>
        <View style={DashboardStyles.pageContainerparent}>
          <View style={DashboardStyles.pageContainer}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={DashboardStyles.pagenavigator}
              showsHorizontalScrollIndicator={true}>
              
                <TouchableOpacity
                activeOpacity={0.5}
                  onPress={() => {
                    setSelectedScreen('Attendance')
                  }}
                  style={[
                    selectedScreen === 'Attendance' &&
                      DashboardStyles.pageTextButton,
                  ]}>
                  <Text
                    style={[
                      DashboardStyles.pageText,
                      selectedScreen === 'Attendance' &&
                        DashboardStyles.selectedText,
                    ]}>
                    Attendance
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.5}
                  onPress={() => {
                    setSelectedScreen('Coverage')
                  }}
                  style={[
                    selectedScreen === 'Coverage' &&
                      DashboardStyles.pageTextButton,
                  ]}>
                  <Text
                    style={[
                      DashboardStyles.pageText,
                      selectedScreen === 'Coverage' &&
                        DashboardStyles.selectedText,
                    ]}>
                    Coverage
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.5}
                  onPress={() => 
                    setSelectedScreen('Collection')
                  }
                  style={[
                    selectedScreen === 'Collection' &&
                      DashboardStyles.pageTextButton,
                  ]}>
                  <Text
                    style={[
                      DashboardStyles.pageText,
                      selectedScreen === 'Collection' &&
                        DashboardStyles.selectedText,
                    ]}>
                    Collection
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.5}
                  onPress={() => 
                    setSelectedScreen('Segregation')
                  }
                  style={[
                    selectedScreen === 'Segregation' &&
                      DashboardStyles.pageTextButton,
                  ]}>
                  <Text
                    style={[
                      DashboardStyles.pageText,
                      selectedScreen === 'Segregation' &&
                        DashboardStyles.selectedText,
                    ]}>
                    Segregation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.5}
                  onPress={() => {
                    setSelectedScreen('VehicleRent')
                  }}
                  style={[
                    selectedScreen === 'VehicleRent' &&
                      DashboardStyles.pageTextButton,
                  ]}>
                  <Text
                    style={[
                      DashboardStyles.pageText,
                      selectedScreen === 'VehicleRent' &&
                        DashboardStyles.selectedText,
                    ]}>
                    Vehicle Rent
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.5}
                  onPress={() => {
                    setSelectedScreen('Payment')
                  }}
                  style={[
                    selectedScreen === 'Payment' &&
                      DashboardStyles.pageTextButton,
                  ]}>
                  <Text
                    style={[
                      DashboardStyles.pageText,
                      selectedScreen === 'Payment' &&
                        DashboardStyles.selectedText,
                    ]}>
                    Payment
                  </Text>
                </TouchableOpacity>
              
            </ScrollView>
          </View>
        </View>
      </View>
      <ScrollView style={DashboardStyles.mainBodyContainer}>
        {renderComponent()}
      </ScrollView>
      
      {/* {openModal && <FilterModal openfunc={openfunc} closefunc={closefunc}/>} */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    // marginVertical: 10,
    // padding: 10,
    // backgroundColor: 'lightblue',
    // borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
  },
  selectedText: {
    fontWeight: 'bold',
  },
});

export default Dashboard;
