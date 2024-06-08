import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

const GroupStack = () => {
  const barData = [
    {
      value: 3,
      label: 'W1',
      spacing: 3,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#253926',
    },
    {
        value: 2.7,
        spacing: 3,
        labelWidth: 30,
        labelTextStyle: {color: 'gray'},
        frontColor: '#9b307d',
      },
    {value: 3.2, frontColor: '#cb5b80'},
    {
        value: 3,
        spacing: 3,
        labelWidth: 30,
        labelTextStyle: {color: 'gray'},
        frontColor: '#253926',
      },
    {
      value: 4,
      label: 'W2',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#9b307d',
    },
    {value: 2.8, frontColor: '#cb5b80'},
    {
        value: 5,
        spacing: 3,
        labelWidth: 30,
        labelTextStyle: {color: 'gray'},
        frontColor: '#253926',
      },
    {
      value: 2.7,
      label: 'W3',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#9b307d',
    },
    {value: 1.7, frontColor: '#cb5b80'},
    {
      value: 2,
      label: 'W4',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#253926',
    },
    {
        value: 1.5,
        spacing: 3,
        labelWidth: 30,
        labelTextStyle: {color: 'gray'},
        frontColor: '#9b307d',
      },
    {value: 3.2, frontColor: '#cb5b80'},
    {
        value: 5,
        spacing: 3,
        labelWidth: 30,
        labelTextStyle: {color: 'gray'},
        frontColor: '#253926',
      },
    {
      value: 6,
      label: 'W5',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#9b307d',
    },
    {value: 4, frontColor: '#cb5b80'},
    {
        value: 5,
        spacing: 3,
        labelWidth: 30,
        labelTextStyle: {color: 'gray'},
        frontColor: '#253926',
      },
    {
      value: 5.5,
      label: 'W6',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'gray'},
      frontColor: '#9b307d',
    },
    {value: 3, frontColor: '#cb5b80'},
    {
        value: 2,
        label: 'W7',
        spacing: 2,
        labelWidth: 30,
        fontFamily:'DMSans-SemiBold',
        labelTextStyle: {color: 'gray'},
        frontColor: '#253926',
      },
      {
          value: 1.5,
          spacing: 3,
          labelWidth: 30,
          labelTextStyle: {color: '#000'},
          frontColor: '#9b307d',
        },
      {value: 3.2, frontColor: '#cb5b80'}
  ];

 
  return (
    <View>
      <BarChart
        data={barData}
        isAnimated={true}
        animationDuration={1000}
        scrollAnimation
        barWidth={8}
        spacing={20}
        width={320}
        rulesType='solid'
        roundedTop
        roundedBottom
        height={130}
        yAxisTextStyle={{color: '#000',fontFamily:'DMSans-SemiBold',}}
        noOfSections={6}
        maxValue={6}
      />
    </View>
  );
};
export default GroupStack;
