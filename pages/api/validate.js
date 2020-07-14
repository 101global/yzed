import * as admin from 'firebase-admin';

const serviceAccount = require('../../../../../../Downloads/yzed-88819-firebase-adminsdk-np4c6-04f889bc2f.json');

const firebaseAdmin = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://yzed-88819.firebaseio.com',
  },
  `${Math.random().toString()}`
);

const validate = async (token) => {
  const decodedToken = await firebaseAdmin.auth().verifyIdToken(token, true);
  console.log(decodedToken);
  console.log('VALID TOKEN');
  let userData;
  await firebaseAdmin
    .firestore()
    .collection('users')
    .doc(decodedToken.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData = { ...doc.data() };
      } else {
        console.log('No such document!');
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
    });
  const user = await firebaseAdmin.auth().getUser(decodedToken.uid);
  const result = {
    user: {
      uid: user.uid,
      email: user.email,
      profilePicture: userData.profilePicture,
      username: userData.username,
      emailVerified: user.email_verified,
      loggedIn: true,
    },
  };
  return result;
};

export default async (req, res) => {
  console.log('VALIDATING TOKEN');
  try {
    const { token } = JSON.parse(req.headers.authorization || '{}');
    if (!token) {
      return res.status(403).send({
        errorCode: 403,
        message: 'Auth token missing.',
      });
    }
    const result = await validate(token);
    console.log('RESULT', result);
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return res.status(err.code).send({
      errorCode: err.code,
      message: err.message,
    });
  }
};
