import axios from "axios";

export class ContactService {
  static serverURL = `http://localhost:5003`;

  static getData(infoId) {
    let dataURL = `${this.serverURL}/data/${infoId}`;
    return axios.get(dataURL);
  }

  static postData(info) {
    let dataURL = `${this.serverURL}/data`;
    return axios.post(dataURL, info);
  }

  static updateData(info, infoId) {
    let dataURL = `${this.serverURL}/data/${infoId}`;
    return axios.put(dataURL, info);
  }

  static deleteContact(infoId) {
    let dataURL = `${this.serverURL}/data/${infoId}`;
    return axios.delete(dataURL);
  }
}
