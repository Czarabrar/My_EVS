import { View, Text } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import React from 'react';

const ProgressBar = () => {
  const data = {
    data: [0.5, 0.8],
  };

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1, index) => {
      const dataValue = data.data[index];
      if (dataValue === 0.8) {
        if (opacity <= 0.8) {
          return `rgba(255, 200, 0, ${opacity / 0.8})`;
        } else {
          return 'rgba(128, 128, 128, 0.5)';
        }
      } else if (dataValue === 0.5) {
        if (opacity <= 0.5) {
          return `rgba(30, 215, 0, ${opacity / 0.5})`;
        } else {
          return 'rgba(128, 128, 128, 0.5)';
        }
      }
    },
  };

  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <ProgressChart
        data={data}
        width={130}
        height={130}
        strokeWidth={8}
        radius={30}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      {/* Text component to display in the center */}
      <View style={{ position: 'absolute', top: '75%', left: '50%', transform: [{ translateX: -15 }, { translateY: -50 }] }}>
        <Text style={{fontFamily:'DMSans-SemiBold',color:'#f4b63e',fontSize:12}}>28.29</Text>
        <Text style={{color:'rgb(30,215,0)',fontSize:12}}>15.15</Text>
      </View>
    </View>
  );
};

export default ProgressBar;
