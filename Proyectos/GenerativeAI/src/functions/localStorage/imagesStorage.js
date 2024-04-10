import { imagesChange } from "./imagesChange.js"

const imagesStorage = async () => {

  const dataStorage = () => {
    let getStorage = localStorage.getItem('imagesS3');
    let data = JSON.parse(getStorage) || {};
    return data;
  };
  
  const dataLocal  = dataStorage();
  const newDate = new Date();
  const oldDate = new Date(dataLocal.date);
  
  
  const dateIsDiferentInDays = (date1, date2) => {
    const day1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const day2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return day1.getTime() !== day2.getTime();
  
  };
  
  const storage = async () => {
    if (dateIsDiferentInDays(newDate, oldDate)  ) {
      await imagesChange()
    }
    return JSON.parse(localStorage.getItem('imagesS3')).s3
  };

  return storage()
}


export { imagesStorage } 