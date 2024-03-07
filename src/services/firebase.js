// import key from '../constants/driven-surface-415915-0a949e46f8ee.json'

import {initializeApp} from 'firebase/app';
import {getDatabase,ref,push,get,child,remove} from 'firebase/database';
import {getStorage} from 'firebase/storage'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { exchange } from './api';

const firebaseConfig = {
  apiKey: 'AIzaSyC3rZL8XkbIVEHFyiJWaCgIdDHxslrh2iY',
  authDomain: 'commodity-price-controller.firebaseapp.com',
  databaseURL: 'https://commodity-price-controller-default-rtdb.firebaseio.com',
  projectId: 'commodity-price-controller',
  storageBucket: 'commodity-price-controller.appspot.com',
  messagingSenderId: '1053014579200',
  appId: '1:1053014579200:web:b1bf461927361ae1a9a0e5',
  measurementId: 'G-KKVH3WXN1P',
};
const app = initializeApp (firebaseConfig);
const auth = getAuth (app);
export const database = getDatabase (app);
export const storage = getStorage(app)

export const signupUser = async (data, setLoader) => {
  try {
    const res = await createUserWithEmailAndPassword (
      auth,
      data.email,
      data.password
    );
    return res.user;
  } catch (error) {
    setLoader (false);
    toast.error (
      error.message
        .split (' ')[2]
        .replace ('(', '')
        .replace (')', '')
        .replace ('auth', '')
        .replace ('/', '')
    );
  }
};
export const signinUser = async (data, setLoader) => {
  try {
    const res = await signInWithEmailAndPassword (
      auth,
      data.email,
      data.password
    );
    return res.user;
  } catch (error) {
    console.log(error)
    setLoader (false);
    toast.error (
      error.message
        .split (' ')[2]
        .replace ('(', '')
        .replace (')', '')
        .replace ('auth', '')
        .replace ('/', '')
    );
  }
};

export const create =  async(reference,data,setLoader)=>{
  try {
    const res = await push(ref(database,reference),{
      ...data
    })
    return res
  } catch (error) {
    setLoader(false)
    toast.error(error.message)
  }
}
export const fetch =  async(reference)=>{
  try {
    const res = await get(child(ref(database),reference))
    return res.val()
  } catch (error) {
    toast.error(error.message)
  }
}
export const destroy =  async(reference)=>{
  try {
    const res = await remove(child(ref(database),reference))
    return res
  } catch (error) {
    toast.error(error.message)
  }
}
 export const calc = async(res)=>{
  const data = Object.values (res);
  const promises = data.map (async(d, i) => {
    d['id'] = Object.keys (res)[i];
    d['newPrice'] = parseInt(await exchange(d.priceUSD,'USD','NGN'))
    d['price'] = parseInt(d['price'])
    return d
  });
  const newData = await Promise.all(promises)
  return newData
}
