export default class Utils {
  static request(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        }
      };
      xhr.onerror = () => {
        reject(new Error(xhr.statusText));
      };
      xhr.send(null);
    });
  }
}
