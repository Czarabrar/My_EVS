import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SegregationStyles from '../../Styles/CoverageStyles';

import { ScrollView } from 'react-native-gesture-handler';
import SegregationToday from './Segregation/SegregationToday';
import SegregationWeek from './Segregation/SegregationWeek';
import SegregationMonth from './Segregation/SegregationMonth';
import CoverageStyles from '../../Styles/CoverageStyles'

const Segregation = () => {
  const [selectedTitle, setSelectedTitle] = useState('Today');

  const renderselect = () => {
      switch (selectedTitle) {
        case 'Today':
          return <SegregationToday/>
        case 'Week':
          return <SegregationWeek />;
        case 'Month':
          return <SegregationMonth />;
        default:
          return <CollectionToday />;
      }
    }
  

  const renderTabs = () => {
    return (
      <View style={SegregationStyles.headerNavTitle}>
        <TouchableOpacity
        activeOpacity={0.5}
          onPress={() => setSelectedTitle('Today')}
          style={[selectedTitle === 'Today' && SegregationStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={SegregationStyles.navTitle}> Today </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
          onPress={() => setSelectedTitle('Week')}
          style={[selectedTitle === 'Week' && SegregationStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={SegregationStyles.navTitle}> Week </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.5}
          onPress={() => setSelectedTitle('Month')}
          style={[selectedTitle === 'Month' && SegregationStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={SegregationStyles.navTitle}> Month </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

 
  return (
    <View style={SegregationStyles.parentContainer}>
      <View style={SegregationStyles.headerWrapper}>
        <View style={SegregationStyles.headerContainer}>
          { renderTabs()}
        </View>
        
      </View>
      <ScrollView style={SegregationStyles.renderContainer}>{renderselect()}</ScrollView>
    </View>
  );
};

export default Segregation;
