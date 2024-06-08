import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {PieChart} from 'react-native-gifted-charts';
import {PieChartPro} from 'react-native-gifted-charts';
import CollectionStyles from '../../../Styles/CollectionStyles';
import {styles} from 'react-native-gifted-charts/src/BarChart/styles';
import {BarChart} from 'react-native-gifted-charts';
import Svg, {Circle} from 'react-native-svg';

import Icon from 'react-native-vector-icons/Ionicons';
import NormalStyles from '../../../Styles/CoverageNormal';

const DottedCircle = () => (
  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <View>
      <Svg height="100%" width="190" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="#207D4C"
          strokeWidth="1.5"
          fill="transparent"
          strokeDasharray="2 15"
        />
      </Svg>
    </View>
    <View style={{position: 'absolute', paddingTop: 30}}>
      <Text style={{color: 'blue'}}>64</Text>
    </View>
  </View>
);
const VehicleRentToday = () => {
  const data = [
    {value: 48, color: '#6A87D4', text: '   48'},
    {value: 12, color: '#DA917E', text: '12  '},
    {value: 4, color: '#AB3FD9', text: '4'},
  ];

  const Seconddata = [
    {value: 35, color: '#6A87D4', text: '   35'},
    {value: 22, color: '#DA917E', text: '22    '},
    {value: 7, color: '#AB3FD9', text: '7'},
  ];

  return (
    <ScrollView>
      <View style={NormalStyles.CardContainer2}>
        <Text style={CollectionStyles.HeaderText}>Corporate Vehicles</Text>
        <View style={CollectionStyles.PieContainer}>
          <PieChart
            data={data}
            showText
            isAnimated={true}
            animationDuration={1000}
            textColor="#fff"
            radius={70}
            innerRadius={40}
            textSize={14}
            donut
            centerLabelComponent={DottedCircle}
          />

          <View style={CollectionStyles.CardsvalueContainer}>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.VoiletCircle}></View>
              <Text style={CollectionStyles.PieValueText}>BOV</Text>
            </View>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.orangeCircle}></View>
              <Text style={CollectionStyles.PieValueText}>
                LCV
              </Text>
            </View>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.purpleCircle}></View>
              <Text style={CollectionStyles.PieValueText}>
                HCV
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={NormalStyles.CardContainer2}>
        <Text style={CollectionStyles.HeaderText}>Vendor Vehicles</Text>
        <View style={CollectionStyles.PieContainer}>
          <PieChart
            data={Seconddata}
            showText
          
          
            textColor="#fff"
            radius={70}
            innerRadius={40}
            // pieInnerComponentWidth={100}
            // pieInnerComponentHeight={120}
            textSize={14}
            donut
            centerLabelComponent={DottedCircle}
          />

          <View style={CollectionStyles.CardsvalueContainer}>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.VoiletCircle}></View>
              <Text style={CollectionStyles.PieValueText}>BOV</Text>
            </View>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.orangeCircle}></View>
              <Text style={CollectionStyles.PieValueText}>
                LCV
              </Text>
            </View>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.purpleCircle}></View>
              <Text style={CollectionStyles.PieValueText}>
                HCV
              </Text>
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

export default VehicleRentToday;
