import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
	return {
	  const photo = await uploadPhoto();
      const user = await createUser();
    };
  } catch (error) {
    return { photo: null, user: null };
  }
}
