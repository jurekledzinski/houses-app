const ImageKit = require('imagekit');

const imageKitLog = () => {
  const imagekit = new ImageKit({
    publicKey: process.env.VUE_APP_PUBLIC_KEY_IMAGEKIT,
    privateKey: process.env.VUE_APP_PRIVATE_KEY_IMAGEKIT,
    urlEndpoint: process.env.VUE_APP_URL_ENDPOINT_IMAGEKIT,
  });

  return imagekit;
};

module.exports = { imageKitLog };
