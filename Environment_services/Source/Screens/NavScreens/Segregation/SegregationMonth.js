import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SegregationStyles from '../../../Styles/SegregationStyles';
import CoverageChart from '../Coverage/CoverageChart';
import ProgressBar from './ProgressBar';
import GroupStack from './GroupStack';
import ScrollableChart from '../Coverage/ScrollableChart';
import NormalStyles from '../../../Styles/CoverageNormal';
import GroupLineChart from '../Vehicle_Rent/GroupLineChart';
const SegregationToday = () => {
  const stackData = [
    {
      stacks: [
        {value: 10, color: '#05afae'},
        {value: 5, color: '#086972'},
        {value: 15, color: '#90be6d'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z1',
    },
    {
      stacks: [
        {value: 5, color: '#05afae'},
        {value: 5, color: '#f4b63e'},
        {value: 5, color: '#086972'},
        {value: 5, color: '#f94144'},
        {
          value: 10,
          color: '#05afae',
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        },
      ],
      label: 'z2',
    },

    {
      stacks: [
        {value: 8, color: '#f94144'},
        {value: 5, color: '#086972'},
        {value: 5, color: '#f4b63e'},
        {value: 12, color: '#90be6d'},
        {
          value: 8,
          color: '#05afae',
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        },
      ],
      label: 'z3',
    },
    {
      stacks: [
        {value: 5, color: '#086972'},
        {value: 5, color: '#90be6d'},
        {value: 10, color: '#05afae'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z4',
    },
  ];
  const fulldata = [
    {
      stacks: [
        {value: 10, color: '#05afae'},
        {value: 5, color: '#086972'},
        {value: 15, color: '#90be6d'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z1',
    },
    {
      stacks: [
        {value: 10, color: '#05afae'},
        {value: 5, color: '#086972'},
        {value: 15, color: '#90be6d'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z1',
    },
    {
      stacks: [
        {value: 10, color: '#05afae'},
        {value: 5, color: '#086972'},
        {value: 15, color: '#90be6d'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z1',
    },
    {
      stacks: [
        {value: 5, color: '#05afae'},
        {value: 5, color: '#f4b63e'},
        {value: 5, color: '#086972'},
        {value: 5, color: '#f94144'},
        {
          value: 10,
          color: '#05afae',
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        },
      ],
      label: 'z2',
    },

    {
      stacks: [
        {value: 8, color: '#f94144'},
        {value: 5, color: '#086972'},
        {value: 5, color: '#f4b63e'},
        {value: 12, color: '#90be6d'},
        {
          value: 8,
          color: '#05afae',
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        },
      ],
      label: 'z3',
    },
    {
      stacks: [
        {value: 5, color: '#086972'},
        {value: 5, color: '#90be6d'},
        {value: 10, color: '#05afae'},
        {value: 10, color: '#f94144'},
        {
          value: 15,
          color: '#f4b63e',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        },
      ],
      label: 'z4',
    },
  ];
  const yAxisLabels = [
    '0',
    '10,000',
    '20,000',
    '30,000',
    '40,000',
    '50,000',
    '60,000',
  ];
  return (
    <ScrollView>

<View style={SegregationStyles.CardContainer}>
  <View style={SegregationStyles.chartHeaderContainer}>
    <Text style={SegregationStyles.HeaderText2}>Daily Collection vs Segregation</Text>
  </View>
  <View style={SegregationStyles.chartHeaderWrapper}>
  <View style={SegregationStyles.chartHeaderWrapper}>
    <View style={SegregationStyles.linecircleone}></View>
    <Text style={SegregationStyles.HeaderText3}>Daily Collection</Text>
  </View>
  <View style={SegregationStyles.chartHeaderWrapper}>
    <View style={SegregationStyles.linecircletwo}></View>
    <Text style={SegregationStyles.HeaderText3}>Daily Collection</Text>
  </View>
  <View style={SegregationStyles.chartHeaderWrapper}>
    <View style={SegregationStyles.linecirclethree}></View>
    <Text style={SegregationStyles.HeaderText3}>Daily Collection</Text>
  </View>
  </View>
  <View style={SegregationStyles.lineChartContainer}>
        <GroupLineChart/>
        </View>
      </View>

      <View style={SegregationStyles.CardContainer}>
        <View style={SegregationStyles.ProgressHeader}>
          <Text style={SegregationStyles.HeaderText2}>
            Division wise waste Collection vs Segregation
          </Text>
          <View style={SegregationStyles.chartHeaderWrapper}>
            <View style={SegregationStyles.chartHeaderWrapper}>
              <View style={SegregationStyles.progressyellowCircle}></View>
              <Text style={SegregationStyles.HeaderText2}>Collection</Text>
            </View>
            <View style={SegregationStyles.chartHeaderWrapper}>
              <View style={SegregationStyles.progressGreenCircle}></View>
              <Text style={SegregationStyles.HeaderText2}>Segregation</Text>
            </View>
          </View>
        </View>
        <View style={SegregationStyles.ProgressbarContainer}>
          <View style={SegregationStyles.PrograssbarWrapper}>
            <ProgressBar />
          </View>
          <View style={SegregationStyles.PrograssbarWrapper}>
            <ProgressBar />
          </View>
        </View>
        <View style={SegregationStyles.progressLabel}>
          <Text style={SegregationStyles.HeaderText4}>Division 1</Text>
          <Text style={SegregationStyles.HeaderText4}>Division 2</Text>
        </View>
      </View>

      <View style={SegregationStyles.CardContainer2}>
        <View style={SegregationStyles.chartHeaderContainer}>
          <View style={SegregationStyles.chartHeadertextWrapper}>
            <View style={SegregationStyles.headerTextContainer}>
              <Text style={SegregationStyles.HeaderText}>Header</Text>
            </View>
            <View style={SegregationStyles.HeaderTextValues}>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.yellowCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  BioDegradable Wet Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.redCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Non Degradable Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.blueCircle}></View>
                <Text style={SegregationStyles.textparams}> Mixed Waste </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.greenCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Recyclable Dry Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.darkGreenCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Household Hazardous Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.redCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Inert Waste Waste{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={SegregationStyles.CardsvalueContainer}>
            <ScrollView
              Horizontal={true}
              scrollEnabled
              style={SegregationStyles.container}>
              <ScrollableChart
                data={stackData}
                width={375}
                height={112}
                verticalLines={[1, 2, 3, 4, 5, 6, 7]}
                stepValue={10}
                maxValue={60}
                yAxisLabels
              />
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={SegregationStyles.CardContainer2}>
      <View style={SegregationStyles.ProgressHeader}>
          <Text style={SegregationStyles.HeaderText2}>
            Division wise waste Collection vs Segregation
          </Text>
          <View style={SegregationStyles.chartHeaderWrapper}>
            <View style={SegregationStyles.chartHeaderWrapper}>
              <View style={SegregationStyles.groupbarCircleone}></View>
              <Text style={SegregationStyles.HeaderText2}>Target</Text>
            </View>
            <View style={SegregationStyles.chartHeaderWrapper}>
              <View style={SegregationStyles.groupbarCircletwo}></View>
              <Text style={SegregationStyles.HeaderText2}>Collection</Text>
            </View>
            <View style={SegregationStyles.chartHeaderWrapper}>
              <View style={SegregationStyles.groupbarCirclethree}></View>
              <Text style={SegregationStyles.HeaderText2}>Segregation</Text>
            </View>
          </View>
        </View>
      <View style={SegregationStyles.GroupBarContainer}>
        <GroupStack />
        </View>
      </View>

      <View style={SegregationStyles.CardContainer2}>
        <View style={SegregationStyles.chartHeaderContainer}>
          <View style={SegregationStyles.chartHeadertextWrapper}>
            <View style={SegregationStyles.headerTextContainer}>
              <Text style={SegregationStyles.HeaderText}>Header</Text>
            </View>
            <View style={SegregationStyles.HeaderTextValues}>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.yellowCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  BioDegradable Wet Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.redCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Non Degradable Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.blueCircle}></View>
                <Text style={SegregationStyles.textparams}> Mixed Waste </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.greenCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Recyclable Dry Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.darkGreenCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Household Hazardous Waste{' '}
                </Text>
              </View>
              <View style={SegregationStyles.chartHeaderWrapper}>
                <View style={SegregationStyles.redCircle}></View>
                <Text style={SegregationStyles.textparams}>
                  Inert Waste Waste{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={SegregationStyles.CardsvalueContainer}>
            <ScrollView
              style={SegregationStyles.container}>
              <ScrollableChart
                data={fulldata}
                width={370}
                height={112}
                verticalLines={[1, 2, 3, 4, 5, 6, 7]}
                stepValue={10}
                maxValue={60}
                yAxisLabels
              />
            </ScrollView>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

export default SegregationToday;
