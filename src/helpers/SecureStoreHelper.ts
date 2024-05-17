import * as SecureStore from "expo-secure-store";

const setString = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

const getString = async (key: string, defaultValue?: string) => {
  const val = await SecureStore.getItemAsync(key);
  return val || defaultValue || null;
};

const setNumber = async (key: string, value: number) => {
  await SecureStore.setItemAsync(key, value.toString());
};

const getNumber = async (key: string, defaultValue?: number) => {
  const val = await SecureStore.getItemAsync(key);
  if (val) {
    return parseFloat(val);
  }
  return defaultValue || null;
};

const setBoolean = async (key: string, value: boolean) => {
  await SecureStore.setItemAsync(key, value.toString());
};

const getBoolean = async (key: string, defaultValue?: boolean) => {
  const val = await SecureStore.getItemAsync(key);
  if (val == "true" || val == "false") return val;
  if (typeof defaultValue == "boolean") return defaultValue;
  return null;
};

const setObject = async <T>(key: string, value: T) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};

const getObject = async <T>(
  key: string,
  defaultValue?: T
): Promise<T | null> => {
  const val = await SecureStore.getItemAsync(key);

  if (val != null) {
    return JSON.parse(val);
  }

  if (defaultValue) {
    return defaultValue;
  }

  return null;
};

const deleteData = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log("Value deleted!");
  } catch (error) {
    console.error("Error occurred while trying to delete: ", error);
  }
};

const SecureStoreHelper = {
  setString,
  getString,
  setNumber,
  getNumber,
  getBoolean,
  setBoolean,
  setObject,
  getObject,
  deleteData,
};

export default SecureStoreHelper;
