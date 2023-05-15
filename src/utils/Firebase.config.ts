import { initializeApp } from 'firebase/app';
import { getAuth, updateProfile } from 'firebase/auth';

import { firebaseConfig } from '../config';

initializeApp(firebaseConfig);
export const auth = getAuth();
export const updateUser = updateProfile;
