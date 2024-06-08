import {View, Text} from 'react-native';
import React from 'react';
import AttendanceStyles from '../../../Styles/AttendanceStyles';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
const AttendanceMonth = () => {
  return (
    <View style={AttendanceStyles.AttendanceTodayContainer}>
      <View style={AttendanceStyles.attendenceCardContainer}>
        <View style={AttendanceStyles.cardHeaderContainer}>
          <Text style={AttendanceStyles.cardHeaderText}>
            Vehicle Department-Monthly
          </Text>
        </View>
        <View style={AttendanceStyles.childCardsContainer}>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
              <Micon
                name="rickshaw"
                size={35}
                style={AttendanceStyles.iconStyle}></Micon>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>1114/1028</Text>
            </View>
          </View>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
              <Micon
                name="truck-flatbed"
                size={35}
                style={AttendanceStyles.iconStyle}></Micon>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>1004/1028</Text>
            </View>
          </View>
          <View style={AttendanceStyles.childCards}>
            <View style={AttendanceStyles.childCardLogo}>
              <Micon
                name="truck-cargo-container"
                size={35}
                style={AttendanceStyles.iconStyle}></Micon>
            </View>
            <View style={AttendanceStyles.childCardValue}>
              <Text style={AttendanceStyles.iconText}>114/1028</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AttendanceMonth;
