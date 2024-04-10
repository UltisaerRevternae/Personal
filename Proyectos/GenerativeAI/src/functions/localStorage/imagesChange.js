import { getImages } from "../s3/getImagesS3New"

const date = new Date()

const imagesChange = async () => {
  const INFO = {
    date : date,
    s3 : await getImages(),
  }
  localStorage.setItem('imagesS3' , JSON.stringify(INFO))
}

export { imagesChange }