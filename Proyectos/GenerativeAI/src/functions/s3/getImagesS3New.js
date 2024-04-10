import { S3Client, ListObjectsV2Command, GetObjectTaggingCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { settings } from "./settings.js";

const s3Client = new S3Client({
  region: settings.AWS.REGION,
  credentials: {
    accessKeyId: settings.AWS.KEY,
    secretAccessKey: settings.AWS.SECRET_KEY,
  },
});

const getImages = async () => {
  const dataS3Save = [];

  try {
    const listCommand = new ListObjectsV2Command({
      Bucket: settings.AWS.BUCKET_NAME,
    });
    const objects = await s3Client.send(listCommand);
    for (const object of objects.Contents) {
      if (/\.(jpg|jpeg|png)$/i.test(object.Key)) {
        const url = `https://${settings.AWS.BUCKET_NAME}.s3.${settings.AWS.REGION}.amazonaws.com/${object.Key}`;

        const taggingCommand = new GetObjectTaggingCommand({
          Bucket: settings.AWS.BUCKET_NAME,
          Key: object.Key,
        });

        let tags;
        try {
          tags = await s3Client.send(taggingCommand);
        } catch (taggingError) {
          console.error(`Error getting tags for ${object.Key}:`, taggingError);
          continue;  // Salta al siguiente objeto si hay un error
        }

        const headCommand = new HeadObjectCommand({
          Bucket: settings.AWS.BUCKET_NAME,
          Key: object.Key,
        });

        let headObject;
        try {
          headObject = await s3Client.send(headCommand);
        } catch (headError) {
          console.error(`Error getting metadata for ${object.Key}:`, headError);
          continue;  // Salta al siguiente objeto si hay un error
        }

        dataS3Save.push({
          'image': object.Key,
          'url': url,
          'tags': tags.TagSet.map(tag => tag.Key), 
          'metadata': headObject.CacheControl
        });
      }
    }
  } catch (error) {
    console.error("Error while processing images:", error);
  }
  return dataS3Save;
};

export { getImages };


// const headCommand = new HeadObjectCommand({
//   Bucket: settings.AWS.BUCKET_NAME,
//   Key: object.Key,
// });
// const metadata = await s3Client.send(headCommand);