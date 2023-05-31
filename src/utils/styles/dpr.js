import {Dimensions, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('screen');
const dpr = (size, dimensions = 'h') => {
  if (size == 'wf') return width;
  if (size == 'hf') return height;
  if (size == 'hwh') {
    return height - (height * 0.08195 + StatusBar.currentHeight);
  }
  if (dimensions == 'w') {
    if (width > 400) {
      const w = size / 313;
      return w * width;
    } else if (width <= 400 && width > 385) {
      const w = size / 315;
      return w * width;
    } else if (width <= 385 && width > 370) {
      const w = size / 317;
      return w * width;
    } else if (width <= 370 && width > 355) {
      const w = size / 319;
      return w * width;
    } else if (width <= 355 && width > 340) {
      const w = size / 321;
      return w * width;
    } else if (width <= 340 && width > 325) {
      const w = size / 323;
      return w * width;
    } else if (width <= 325 && width > 310) {
      const w = size / 325;
      return w * width;
    } else {
      const w = size / 327;
      return w * width;
    }
  } else if (dimensions == 'h') {
    if (height > 800) {
      const h = size / 860;
      return h * height;
    } else if (height <= 800 && height > 750) {
      const h = size / 810;
      return h * height;
    } else if (height <= 750 && height > 700) {
      const h = size / 760;
      return h * height;
    } else if (height <= 700 && height > 650) {
      const h = size / 710;
      return h * height;
    } else if (height <= 650 && height > 600) {
      const h = size / 660;
      return h * height;
    } else if (height <= 600 && height > 550) {
      const h = size / 610;
      return h * height;
    } else {
      const h = size / 610;
      return h * height;
    }
  }
};

export default dpr;
