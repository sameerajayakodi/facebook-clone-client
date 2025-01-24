import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

export const getData = async key => {
  var val;
  try {
    val = await AsyncStorage.getItem(key);
  } catch (error) {}

  return val;
};
