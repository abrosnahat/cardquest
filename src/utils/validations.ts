import get from 'lodash/get';
import { FieldValues, FormState } from 'react-hook-form';

export const getFormError = <T extends FieldValues>(
  formState: FormState<T>,
  key: keyof T | string[]
): string => {
  return get(
    formState,
    ['errors', ...(Array.isArray(key) ? key : [key]), 'message'],
    ''
  );
};
