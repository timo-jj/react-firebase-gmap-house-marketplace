import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDAMA1GCdPwrJpXFLHoM0NkdlB_7ToSrQI',
  authDomain: 'react-house-marketplace-7c7b1.firebaseapp.com',
  projectId: 'react-house-marketplace-7c7b1',
  storageBucket: 'react-house-marketplace-7c7b1.appspot.com',
  messagingSenderId: '263977378081',
  appId: '1:263977378081:web:8910127744ec0caf9c5e60',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
