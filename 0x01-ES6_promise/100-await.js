
import { uploadPhoto, createUser } from './utils';
/**
 * Asynchronously uploads a photo and creates a user.
 * @returns {Promise<Object>} An object with photo and user responses.
 */
export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
