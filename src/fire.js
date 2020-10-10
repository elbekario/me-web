import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyBwcbUEgkD-LnuQTS1NPsiZTV9ggZpmaQY',
  authDomain: 'elbekario.firebaseapp.com',
  databaseURL: 'https://elbekario.firebaseio.com',
  projectId: 'elbekario',
//   storageBucket: 'elbekario.appspot.com',
//   messagingSenderId: 'your_message_sending_id',
};

var fire = firebase.initializeApp(config);
export default fire;
