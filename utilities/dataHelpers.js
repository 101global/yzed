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

export const imagesNames = (brandName, imageCount) => {
  const imageBaseUrl = 'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/';
  let images = [];
  for (let i = 1; i < imageCount + 1; i++) {
    images.push({
      id: `${brandName} Photo ${i}`,
      image: `${imageBaseUrl}${brandName}_image${i}.jpg`,
      imageThumb: `${imageBaseUrl}${brandName}_image${i}_thumb.jpg`,
      carouselImage: `${imageBaseUrl}${brandName}_image${i}.png`,
      carouselImageThumb: `${imageBaseUrl}${brandName}_image${i}_thumb.png`,
    });
  }
  return images;
};
