import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CoverageStyles from '../../Styles/CoverageStyles';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CoverageToday from './Coverage/CoverageToday';
import CoverageWeek from './Coverage/CoverageWeek';
import CoverageMonth from './Coverage/CoverageMonth';
import NormalStyles from './Coverage/CoverageNormal';
import CoverageTodayChart from './Coverage/CoverageCharts/CoverageTodayChart';
import CoverageWeekChart from './Coverage/CoverageCharts/CoverageWeekChart';
import CoverageMonthChart from './Coverage/CoverageCharts/CoverageMonthChart';
import CoverageNormal from './Coverage/CoverageNormal';
import chartmenu from '../../svg/Chartmenu';

// Coverage page 

const Coverage = () => {
  //2 states 
  // one for displaying item between today,week and month
  // one for displaying chart data and normal data based on selected icon
  const [selectedTitle, setSelectedTitle] = useState('Today');
  const [selectedChartTab, setSelectedChartTab] = useState('Today');


// function which renders page based on selected state.
  const renderselect = () => {
    if (selectedTitle === 'ChartPage') {
      switch (selectedChartTab) {
        case 'Today':
          return <CoverageTodayChart />;
        case 'Week':
          return <CoverageWeekChart />;
        case 'Month':
          return <CoverageMonthChart />;
        default:
          return null;
      }
    } else {
      switch (selectedTitle) {
        case 'Today':
          return < CoverageToday/>;
        case 'Week':
          return <CoverageWeek />;
        case 'Month':
          return <CoverageMonth />;
        
        default:
          return <CoverageNormal />;
      }
    }
  };

  const renderTabs = () => {
    return (
      <View style={CoverageStyles.headerNavTitle}>
        <TouchableOpacity
        activeOpacity={1}
          onPress={() => setSelectedTitle('Today')}
          style={[selectedTitle === 'Today' && CoverageStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={CoverageStyles.navTitle}> Today </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={1}
          onPress={() => setSelectedTitle('Week')}
          style={[selectedTitle === 'Week' && CoverageStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={CoverageStyles.navTitle}> Week </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={1}
          onPress={() => setSelectedTitle('Month')}
          style={[selectedTitle === 'Month' && CoverageStyles.selectedTitle]}
        >
          <View style={CoverageStyles.navtitlecontainer}>
          <Text style={CoverageStyles.navTitle}> Month </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderChartTabs = () => {
    if (selectedTitle === 'ChartPage') {
      return (
        <View style={CoverageStyles.headerNavTitle}>
          <TouchableOpacity
          activeOpacity={1}
            onPress={() => setSelectedChartTab('Today')}
            style={[selectedChartTab === 'Today' && CoverageStyles.selectedTitle]}
          >
            <View style={CoverageStyles.navtitlecontainer}>
            <Text style={CoverageStyles.navTitle}> Today </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={1}
            onPress={() => setSelectedChartTab('Week')}
            style={[selectedChartTab === 'Week' && CoverageStyles.selectedTitle]}
          >
            <View style={CoverageStyles.navtitlecontainer}>
            <Text style={CoverageStyles.navTitle}> Week </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={1}
            onPress={() => setSelectedChartTab('Month')}
            style={[selectedChartTab === 'Month' && CoverageStyles.selectedTitle]}
          >
            <View style={CoverageStyles.navtitlecontainer}>
            <Text style={CoverageStyles.navTitle}> Month </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={CoverageStyles.parentContainer}>
      <View style={CoverageStyles.headerWrapper}>
        <View style={CoverageStyles.headerContainer}>
          {selectedTitle === 'ChartPage' ? renderChartTabs() : renderTabs()}
        </View>
        <View style={CoverageStyles.navIconsContainer}>
          <View style={CoverageStyles.navIcons}>
            <TouchableOpacity
            activeOpacity={1}
              onPress={() => setSelectedTitle('Today')}
              style={[selectedTitle === 'Today' && CoverageStyles.selectedIcon]}
            >
              <Micon
                name='dashboard'
                size={22}
                style={[
                  CoverageStyles.iconStyle,
                  selectedTitle != 'ChartPage' && CoverageStyles.selectedIconStyle,
                ]}
              />
              {/* <chartmenu/> */}
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={1}
              onPress={() => setSelectedTitle('ChartPage')}
              style={[selectedTitle === 'ChartPage' && CoverageStyles.selectedIcon]}
            >
              <Micon
                name="bar-chart"
                size={22}
                style={[
                  CoverageStyles.iconStyle,
                  selectedTitle === 'ChartPage' && CoverageStyles.selectedIconStyle,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={CoverageStyles.renderContainer}>{renderselect()}</ScrollView>
    </View>
  );
};

export default Coverage;
