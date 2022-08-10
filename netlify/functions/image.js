// const ImageKit = require('imagekit');
const connectDb = require('../../db/connectDB');
const House = require('../../models/house');
const { parseBody } = require('../../utils/parseForm');
const { imageKitLog } = require('../../utils/imageKit');

connectDb(process.env.VUE_APP_APP_DB);

exports.handler = async function (event) {
  if (event.headers['x-api-key'] !== process.env.VUE_APP_API_KEY) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'UnAuthorized' }),
    };
  }

  if (event.httpMethod === 'PATCH') {
    const body = await parseBody(event);
    const imagekit = imageKitLog();

    const id = event.queryStringParameters.id;

    const isImageExist = await House.findOne({ _id: id }).select([
      '-_id',
      'imageId',
    ]);

    if (isImageExist.imageId) {
      const foundImg = await imagekit.getFileDetails(isImageExist.imageId);

      if (foundImg.fileId === isImageExist.imageId) {
        await imagekit.deleteFile(isImageExist.imageId);
      }
    }

    const result = await imagekit.upload({
      file: body.image.content,
      fileName: body.image.filename.filename,
      folder: '/Houses/houses',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        value: {
          imageId: result.fileId,
          name: result.name,
          url: result.url,
        },
      }),
    };
  }
};
