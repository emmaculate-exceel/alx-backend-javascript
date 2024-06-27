import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let obj = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (error) {
    obj = { photo: null, user: null };
  }
  return obj;
}
