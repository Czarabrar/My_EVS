import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentTable = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.row, styles.header]}>
        <Text style={styles.HeaderText}>TotalComponent</Text>
        <Text style={styles.HeaderText}>Total Amount</Text>
        
      </View>

      {/* Rows */}
      <View style={styles.row2}>
        <Text style={styles.cell}>Final Amount after </Text>
        <Text style={styles.cell}>12080</Text>
       
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Fixed Payment</Text>
        <Text style={styles.cell}>12080</Text>
       
      </View>
      <View style={styles.row2}>
        <Text style={styles.cell}>Performance based Payment</Text>
        <Text style={styles.cell}>12080</Text>
       
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Total Payment without Deduction</Text>
        <Text style={styles.cell}>12080</Text>
       
      </View>
      <View style={styles.row2}>
        <Text style={styles.cell}>Vehicle Rent</Text>
        <Text style={styles.cell}>12080</Text>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // marginTop: 50,
    paddingTop:20,
    backgroundColor:'#fff'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '95%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '95%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    backgroundColor:'#F0FCFD',
    borderColor: '#ccc',
  },
  header: {
    backgroundColor: '#086972',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    // marginHorizontal:10,
  },
  HeaderText:{
    fontFamily:'DMSans-SemiBold',
    color:'#fff',
    fontSize:16
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontFamily:'DMSans-Medium',
    color:'#000',
    fontSize:16
  },
});

export default PaymentTable;
