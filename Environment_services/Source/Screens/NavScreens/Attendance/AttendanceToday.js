import {View, Text} from 'react-native';
import React from 'react';
import AttendanceStyles from '../../../Styles/AttendanceStyles';
import Rickshaw from '../../../svg/RickshawIcon';

import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import Truck from '../../../svg/Truck';
import TruckLcv from '../../../svg/TruckLcv';
import SanitoryWorkers from '../../../svg/SanitoryWorkers';
const AttendanceToday = () => {
  return (
    <View style={AttendanceStyles.AttendanceTodayContainer}>
      <View style={AttendanceStyles.attendenceCardContainer}>
        <View style={AttendanceStyles.cardHeaderContainer}>
          <Text style={AttendanceStyles.cardHeaderText}>
            Vehicle Department
          </Text>
        </View>
        <View style={AttendanceStyles.childCardsContainer}>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
                <Rickshaw/>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>114/128</Text>
            </View>
          </View>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
              <Truck/>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>114/128</Text>
            </View>
          </View>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
             <TruckLcv/>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>114/128</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={AttendanceStyles.attendenceCardContainer2}>
        <View style={AttendanceStyles.cardHeaderContainer}>
          <Text style={AttendanceStyles.cardHeaderText}>
            Manpower Deployment
          </Text>
        </View>
        <View style={AttendanceStyles.childCardsContainer}>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
              <SanitoryWorkers/>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>114/128</Text>
            </View>
          </View>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
              <Micon
                name="account-supervisor"
                size={35}
                style={AttendanceStyles.iconStyle}></Micon>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>114/128</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AttendanceToday;
