const busboy = require('busboy');

const parseBody = (event) => {
  return new Promise((resolve) => {
    const bb = busboy({ headers: event.headers });

    const fields = {};

    bb.on('file', (fieldname, filestream, filename) => {
      filestream.on('data', (data) => {
        fields[fieldname] = {
          content: data,
          filename,
          type: filename.mimeType,
        };
      });
    });

    bb.on('field', (fieldName, value) => {
      fields[fieldName] = value;
    });

    bb.on('finish', () => {
      resolve(fields);
    });

    bb.write(Buffer.from(event.body, 'base64'));
  });
};

module.exports = { parseBody };
