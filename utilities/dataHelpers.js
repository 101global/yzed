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

export const imagesNames = (brandName) => {
  // USE the below is using AWS S3
  // const imageBaseUrl = 'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/';
  let images = [];
  for (let i = 1; i < 6; i++) {
    images.push({
      id: `${brandName} Photo ${i}`,
      image: `https://res.cloudinary.com/dpfp9fxy7/image/upload/c_scale,q_80,w_1328/v1596519279/${brandName}_image${i}.jpg`,
      thumbnail: `https://res.cloudinary.com/dpfp9fxy7/image/upload/c_scale,q_10,w_50/v1596519279/${brandName}_image${i}.jpg`,
    });
  }
  return images;
};
