import {ToastAndroid} from 'react-native';

export const newToast = text => {
  ToastAndroid.show(text, ToastAndroid.BOTTOM, ToastAndroid.CENTER);
};
