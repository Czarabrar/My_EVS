import React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CoverageChart from '../Coverage/CoverageChart';
import {PieChart} from 'react-native-gifted-charts';
import CollectionStyles from '../../../Styles/CollectionStyles';
import {styles} from 'react-native-gifted-charts/src/BarChart/styles';
import {BarChart} from 'react-native-gifted-charts';
import Svg, {Circle} from 'react-native-svg';
import HorizontalChart from './HorizontalChart';
import Icon from 'react-native-vector-icons/Ionicons';
import MyPieChart from './MyPieChart';
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
    <View style={{position: 'absolute',paddingTop:35}}>
      <Text style={{color: 'blue',fontFamily:'Inter-Medium'}}>114 MT</Text>
    </View>
  </View>
);
const CollectionToday = () => {
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];

  const data = [
    {value: 78, color: '#1ED760'},
    {value: 22, color: '#F94144', text: '22%'},
  ];
  const [selectIcon, setSelectIcon] = useState(false);
  
  return (
    <ScrollView>
      <View style={NormalStyles.CardContainer2}>
        <Text style={CollectionStyles.HeaderText}>Target vs Actual Mt</Text>
        <View style={CollectionStyles.PieContainer}>
          <PieChart
            data={data}
            showText
            labelsPosition={'outward'}
            textColor="#fff"
            radius={70}
            innerRadius={45}
            // pieInnerComponentWidth={200}
            // pieInnerComponentHeight={200}
            textSize={14}
            donut
            centerLabelComponent={DottedCircle}
          />

          <View style={CollectionStyles.CardsvalueContainer}>
            <View style={CollectionStyles.CardsValueHolder}>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.redCircle}></View>
              <Text style={CollectionStyles.PieValueText}>Pending</Text>
            </View>
            <View style={CollectionStyles.PieValueBox}>
              <View style={CollectionStyles.greenCircle}></View>
              <Text style={CollectionStyles.PieValueText}>
                Actual Collection
              </Text>
            </View>
          </View>
          </View>
        </View>
      </View>

      <View style={NormalStyles.CardContainer2}>
        <View style={CollectionStyles.chartHeaderWrapper}>
          <View style={CollectionStyles.headerTextContainer}>
          <Text style={CollectionStyles.HeaderText}>Target vs Actual Mt</Text>
          </View>
            <View style={CollectionStyles.headerIconContainer}>
          <View style={CollectionStyles.IconWrapper}>
            <TouchableOpacity onPress={() => setSelectIcon(false)}>
                <Image source={require('../../../Images/barIccon.png')}
                style={
                  !selectIcon
                   ? CollectionStyles.selectedIcon
                   : CollectionStyles.unselectedIcon
               }/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectIcon(true)}>
              <Image source={require('../../../Images/PieIcon.png')}
                style={selectIcon ? CollectionStyles.selectedIcon : CollectionStyles.unselectedIcon}/>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        <View style={CollectionStyles.barContainer}>
          {selectIcon ? <MyPieChart/> : <HorizontalChart />}
        </View>
      </View>
    </ScrollView>
  );
};

export default CollectionToday;
