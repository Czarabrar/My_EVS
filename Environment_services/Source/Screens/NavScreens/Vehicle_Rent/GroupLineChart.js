import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

const GroupLineChart = () => {
  //data for charts
  const barData = [
    {
      value: 100,
      label: 'Feb1',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 100, frontColor: '#9EB6E9'},
    {
      value: 80,
      label: 'Feb2',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 100, frontColor: '#9EB6E9'},
    {
      value: 100,
      label: 'Feb3',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 100, frontColor: '#9EB6E9'},
    {
      value: 100,
      label: 'Feb4',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 100, frontColor: '#9EB6E9'},
    {
      value: 100,
      label: 'Feb5',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 80, frontColor: '#9EB6E9'},
    {
      value: 100,
      label: 'Feb6',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 80, frontColor: '#9EB6E9'},
    {
      value: 100,
      label: 'Feb7',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 80, frontColor: '#9EB6E9'},
    {
      value: 100,
      label: 'Feb8',
      spacing: 0,
      labelWidth: 32,
      labelTextStyle: {color: 'gray',fontSize:10},
      frontColor: '#B5797F',
    },
    {value: 80, frontColor: '#9EB6E9'},
  ];
  return (
    <BarChart
      data={barData}
      barWidth={8}
      height={110}
      spacing={20}
      rulesType="solid"
      roundedTop
      xAxisThickness={1}
      yAxisThickness={1}
      yAxisTextStyle={{color: 'black'}}
      noOfSections={3}
      maxValue={150}
      stepValue={30}
      width={300}
      // below  props are used to show line the barchart
      showLine
      lineConfig={{
        // curved: false,
        spacing: 32,
        shiftY: -30,
        thickness: 1,
        dataPointsColor: 'white',
        dataPointsRadius: 3,
        color: '#9B307D',
      }}
    />
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeaderContainer: {
    backgroundColor: 'white',
    elevation: 4,
    zIndex: 2,
    width: 350,
    height: 350,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textparams: {
    color: '#000000',
    fontSize: 14,
  },
  headerWrapperContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  subHeaderContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  extrablackCircle: {
    borderWidth: 1,
    borderColor: '#B5797F',
    width: 10,
    height: 10,
    borderRadius: 50,
    marginTop: 5,
    backgroundColor: '#B5797F',
    marginHorizontal: 5,
  },
  extraVioletCircle: {
    borderWidth: 1,
    borderColor: '#9EB6E9',
    width: 10,
    height: 10,
    borderRadius: 50,
    marginTop: 5,
    backgroundColor: '#9EB6E9',
    marginHorizontal: 5,
  },
  extraLightVioletCircle: {
    borderColor: '#9B307D',
    width: 10,
    height: 10,
    borderRadius: 50,
    marginTop: 5,
    backgroundColor: '#9B307D',
    marginHorizontal: 5,
  },
  yAxisLabelTexts: {
    color: 'black',
  },
});

export default GroupLineChart;
