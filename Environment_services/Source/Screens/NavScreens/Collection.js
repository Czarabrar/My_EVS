import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CollectionStyles from '../../Styles/CoverageStyles';
import CollectionToday from './Collection/CollectionToday';
import CollectionWeek from './Collection/CollectionWeek';
import CollectionMonth from './Collection/CollectionMonth';
import { ScrollView } from 'react-native-gesture-handler';
import NormalStyles from '../../Styles/CoverageNormal';
import CoverageStyles from '../../Styles/CoverageStyles';

const Collection = () => {
  const [selectedTitle, setSelectedTitle] = useState('Today');

  const renderselect = () => {
      switch (selectedTitle) {
        case 'Today':
          return <CollectionToday/>
        case 'Week':
          return <CollectionWeek />;
        case 'Month':
          return <CollectionMonth />;
        
        default:
          return <CollectionToday />;
      }
    }
  

  const renderTabs = () => {
    return (
      <View style={CollectionStyles.headerNavTitle}>
        <TouchableOpacity
        activeOpacity={1}
          onPress={() => setSelectedTitle('Today')}
          style={[selectedTitle === 'Today' && CollectionStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={CollectionStyles.navTitle}> Today </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={1}
          onPress={() => setSelectedTitle('Week')}
          style={[selectedTitle === 'Week' && CollectionStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={CollectionStyles.navTitle}> Week </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={1}
          onPress={() => setSelectedTitle('Month')}
          style={[selectedTitle === 'Month' && CollectionStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={CollectionStyles.navTitle}> Month </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

 
  return (
    <View style={CollectionStyles.parentContainer}>
      <View style={CollectionStyles.headerWrapper}>
        <View style={CollectionStyles.headerContainer}>
          { renderTabs()}
        </View>
        
      </View>
      <ScrollView style={CollectionStyles.renderContainer}>{renderselect()}</ScrollView>
    </View>
  );
};

export default Collection;
