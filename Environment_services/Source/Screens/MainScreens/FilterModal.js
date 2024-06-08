import { View, Text ,Modal,Button} from 'react-native'
import React from 'react'

const FilterModal = ({openfunc,closefunc}) => {
    return (
      <Modal>
        <Button title='close' onPress={closefunc}></Button>
      </Modal>
    );
  }
  
  export default FilterModal;
