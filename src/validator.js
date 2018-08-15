import {
  MISSING_KEY_FILENAME,
  INVALID_TYPE_FILENAME,
  INVALID_TYPE_SHEET,
  INVALID_TYPE_SHEET_DATA
} from './commons/constants';

const childValidator = (array) => {
  return array.every(item => Array.isArray(item));
};

export default (config) => {
  if (!config.filename) {
    console.error(MISSING_KEY_FILENAME);
    return {
      error: MISSING_KEY_FILENAME
    };
  }

  if (typeof config.filename !== 'string') {
    console.error(INVALID_TYPE_FILENAME);
    return {
      error: INVALID_TYPE_FILENAME
    };
  }
  /*
    if (!Array.isArray(config.sheets)) {
      console.error(INVALID_TYPE_SHEET);
      return false;
    }
  */
  return true;
};