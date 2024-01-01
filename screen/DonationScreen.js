import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
import {TextInput} from 'react-native-paper'
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const DonationScreen = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [cnic, setCnic] = useState('');
  const [gender, setGender] = useState('');
  const [donationType, setDonationType] = useState('');

  const handleDonation = () => {
    console.log('Donation Details:', {
      name,
      contact,
      cnic,
      gender,
      donationType,
    });
    // Handle donation submission logic here
  };


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      { label: 'Donation', value: 'Donation' },
      { label: 'Reciever', value: 'Reciever' },
    
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
      { label: 'Education', value: 'education' },
      { label: 'Medical', value: 'Mediacl' },
      { label: 'Menoy', value: 'menoy' },
      { label: 'health care', value: 'heacth care' },
    
  ]);


  return (
    <View>
      <Text style={{color:'black',margin:'10px'}}>Name</Text>
      <TextInput
      style={{
        backgroundColor: 'white',
        color: 'blue',
        margin: 10,
        width: '90%',
      }}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text>Contact</Text>
      <TextInput
          style={{
            backgroundColor: 'white',
            color: 'blue',
            margin: 10,
            width: '90%',
          }}
        placeholder="Enter your contact number"
        value={contact}
        onChangeText={(text) => setContact(text)}
        keyboardType="numeric"
      />

      <Text>CNIC</Text>
      <TextInput
          style={{
            backgroundColor: 'white',
            color: 'blue',
            margin: 10,
            width: '90%',
          }}
        placeholder="Enter your CNIC"
        value={cnic}
        onChangeText={(text) => setCnic(text)}
        keyboardType="numeric"
      />
<View style={{height:'200px',margin:'10px',display:'block'}}>


<DropDownPicker
                            style={{ color: 'grey'}}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />

</View>


<View style={{height:'200px',zIndex:1,margin:'10px'}}>


<DropDownPicker
                            style={{ color: 'grey'}}
                            open={open1}
                            value={value1}
                            items={items1}
                            setOpen={setOpen1}
                            setValue={setValue1}
                            setItems={setItems1}
                        />

</View>


      {/* <Text>Gender</Text>
      <RNPickerSelect
        onValueChange={(value) => setGender(value)}
        items={[
          { label: 'Select gender', value: '' },
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        value={gender} // Add this line to set the initial value
      />

      <Text>Donation Type</Text>
      <RNPickerSelect
        onValueChange={(value) => setDonationType(value)}
        items={[
          { label: 'Select donation type', value: '' },
          { label: 'Medical', value: 'medical' },
          { label: 'Food', value: 'food' },
          { label: 'Money', value: 'money' },
          { label: 'Education', value: 'education' },
        ]}
        value={donationType} // Add this line to set the initial value
      /> */}

      <Button title="Take Donation" onPress={handleDonation} />
    </View>
  );
};

export default DonationScreen;
