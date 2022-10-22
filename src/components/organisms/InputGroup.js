import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';

const InputGroup = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const inputRules = {
    maxLength: 100,
    required: true,
  };
  const onSubmit = data => console.log(data);

  return (
    <View style={{flex: 1}}>
      <Controller
        control={control}
        rules={inputRules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>Completar campo</Text>}

      <Controller
        control={control}
        rules={inputRules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text>Completar campo</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InputGroup;
