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

  if (event.httpMethod === 'GET') {
    const houses = await House.find({}).select('-__v');

    return {
      statusCode: 200,
      body: JSON.stringify({ value: houses }),
    };
  }

  if (event.httpMethod === 'POST') {
    const body = await parseBody(event);

    const house = await House.create(body);

    return {
      statusCode: 200,
      body: JSON.stringify({ value: house }),
    };
  }

  if (event.httpMethod === 'PATCH') {
    const body = await parseBody(event);
    const id = event.queryStringParameters.id;

    const house = await House.findByIdAndUpdate({ _id: id }, body, {
      new: true,
      select: '-__v',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ value: house }),
    };
  }

  if (event.httpMethod === 'PUT') {
    const body = await parseBody(event);
    const id = event.queryStringParameters.id;

    const house = await House.findByIdAndUpdate({ _id: id }, body, {
      new: true,
      select: '-__v',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ value: house }),
    };
  }

  if (event.httpMethod === 'DELETE') {
    const imagekit = imageKitLog();
    const id = event.queryStringParameters.id;
    const house = await await House.findByIdAndDelete({ _id: id });
    await imagekit.deleteFile(house.imageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ value: 'House removed successfully' }),
    };
  }
};
