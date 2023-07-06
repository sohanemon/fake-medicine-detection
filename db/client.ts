import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};

// Initializes
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);
const collectionName = 'medicines';

// Utils
const goHome = () => (window.location.pathname = '/');

// Functions
export function getCurrentUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
      // User is signed out
    }
  });
}

export function googleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      goHome();
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
}

export function createUser(name: string, email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
        photoURL: 'https://ui-avatars.com/api/?name=' + name,
      })
        .then(() => {
          console.log(user);
          goHome();
        })
        .catch((error) => {
          const errorMessage = error.message;
        });
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
}

export function signIn(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      goHome();
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
}

export function logOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      const errorMessage = error.message;
    });
}

// firebase db actions

export async function setData(data: any) {
  await setDoc(doc(db, 'collectionName', 'id'), {
    name: 'ololo',
  });
}

export async function getData(id: string) {
  const docSnap = await getDoc(doc(db, collectionName, id));

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}

export async function getAllData() {
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
  });
}

export async function deleteData(id: string) {
  await deleteDoc(doc(db, collectionName, id));
}
