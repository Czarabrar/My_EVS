import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

const HorizontalChart = () => {
  const barData = [
    {value: 9, frontColor: '#9F9F9F'},
    {value: 6, frontColor: '#EE4B3C'},
    {value: 15, frontColor: '#52AAA4'},
    {value: 10.5, frontColor: '#E56730'},
    {value: 12.5, frontColor: '#628C6E'},
  ];
  return (
    <View style={styles.barContainer}>
      <View style={styles.horizontalLines}>
        {barData.map((dataPoint, index) => (
          <View
            key={index}
            style={[styles.horizontalLine, {top: index * 30}]}
          />
        ))}
      </View>

      <View
        style={{
          width: 90,
          flexDirection: 'column',
          alignItems: 'stretch',
          paddingVertical:28,
          marginLeft:5,
        }}>
        <Text style={styles.bartext1}>Mixed waste</Text>
        <Text style={styles.bartext1}>Household Waste</Text>
        <Text style={styles.bartext1}>Recyclable Dry Waste</Text>
        <Text style={styles.bartext1}>Non Degradable Waste</Text>
        <Text style={styles.bartext1}>Degradable Wet Waste</Text>
      </View>
      <View style={{marginHorizontal: -60, marginTop:-20}}>
        <BarChart
          horizontal
          // isAnimated={true}
          // animationDuration={10}
          barWidth={12}
          barBorderRadius={4}
          frontColor="#BDBDBD"
          rulesType="solid"
          data={barData}
          yAxisTextStyle={styles.axistext}
          xAxisLabelTextStyle={styles.xaxisStyle}
          spacing={8}
          stepValue={3}
          maxValue={15}
          width={240}
          height={105}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  barContainer: {
    width: 300,
    flexDirection: 'row',
    // marginLeft: 5,
    // paddingBottom:10,
  },
  xaxisStyle: {},
  axistext: {
    color: 'black',
    paddingBottom: 14,
    fontFamily: 'DMSans-Regular',
  },
  bartext1: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'DMSans-Medium',
    fontWeight:'400'
  },
  
  horizontalLines: {
    height: '100%',
    position: 'absolute',
    flexDirection: 'column',
    marginHorizontal: 95,
    width: '95%',
  },
  horizontalLine: {
    marginTop: 15,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    width: '85%',
    position: 'absolute',
    borderStyle: 'solid',
  },
});

export default HorizontalChart;
