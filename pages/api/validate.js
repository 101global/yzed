import * as admin from 'firebase-admin';

const firebaseAdmin = admin.initializeApp(
  {
    credential: admin.credential.cert({
      type: process.env.FIREBASE_type,
      project_id: process.env.FIREBASE_project_id,
      private_key: process.env.FIREBASE_private_key,
      client_email: process.env.FIREBASE_client_email,
    }),
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
  try {
    const { token } = JSON.parse(req.headers.authorization || '{}');
    if (!token) {
      return res.status(403).send({
        errorCode: 403,
        message: 'Auth token missing.',
      });
    }
    const result = await validate(token);
    return res.status(200).send(result);
  } catch (err) {
    return res.status(err.code).send({
      errorCode: err.code,
      message: err.message,
    });
  }
};
