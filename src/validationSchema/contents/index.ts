import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  business_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
