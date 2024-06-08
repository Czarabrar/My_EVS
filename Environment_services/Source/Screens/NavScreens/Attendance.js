import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AttendanceStyles from '../../Styles/AttendanceStyles';
import AttendanceToday from './Attendance/AttendanceToday';
import AttendanceWeek from './Attendance/AttendanceWeek';
import AttendanceMonth from './Attendance/AttendanceMonth';

// Attendence page.

//state for navigating between today,week and month
const Attendance = () => {
  const [selectedtitle, setSelectedTitle] = useState('Today');

//funcion with shows page based on the selected state.
  const renderselect = () => {
    switch (selectedtitle) {
      case 'Today':
        return <AttendanceToday />;
      case 'Week':
        return <AttendanceWeek />;
      case 'Month':
        return <AttendanceMonth />;
      default:
        return <AttendanceToday/>;
    }
  };
  return (
    <View style={AttendanceStyles.parentContainer}>
      <View style={AttendanceStyles.headerContainer}>
        <View style={AttendanceStyles.headerNavTitle}>
          <TouchableOpacity
            onPress={() => setSelectedTitle('Today')}
            style={[
              selectedtitle === 'Today' && AttendanceStyles.selectedTitle,
            ]}>
            <View style={AttendanceStyles.navtitlecontainer}>
              <Text style={AttendanceStyles.navTitle}> Today </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTitle('Week')}
            style={[
              selectedtitle === 'Week' && AttendanceStyles.selectedTitle,
            ]}>
            <View style={AttendanceStyles.navtitlecontainer}>
              <Text style={AttendanceStyles.navTitle}> Week </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTitle('Month')}
            style={[
              selectedtitle === 'Month' && AttendanceStyles.selectedTitle,
            ]}>
            <View style={AttendanceStyles.navtitlecontainer}>
              <Text style={AttendanceStyles.navTitle}> Month </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={AttendanceStyles.renderContainer}>{renderselect()}</View>
    </View>
  );
};

export default Attendance;
