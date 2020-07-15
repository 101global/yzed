export const fbData = (result) => {
  const userID = result.user.uid;
  const email = result.user.email;
  const firstName = result.additionalUserInfo.profile.first_name;
  const lastName = result.additionalUserInfo.profile.last_name;
  const profilePicture = result.additionalUserInfo.profile.picture.data.url;
  return { userID, email, firstName, lastName, profilePicture };
};

export const googleData = (result) => {
  const userID = result.user.uid;
  const email = result.user.email;
  const firstName = result.additionalUserInfo.profile.given_name;
  const lastName = result.additionalUserInfo.profile.family_name;
  const profilePicture = result.additionalUserInfo.profile.picture;
  return { userID, email, firstName, lastName, profilePicture };
};
