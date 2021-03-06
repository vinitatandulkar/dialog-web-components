/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 * @flow
 */

function errorToString(error: ?(string | Error)): ?string {
  if (error) {
    if (typeof error === 'string') {
      return error;
    }

    return error.message;
  }

  return null;
}

export default errorToString;
