export class Session {
  static getItem(key) {
    return sessionStorage.getItem(key);
  }

  static setItem(key, value) {
    sessionStorage.setItem(key, value);
  }
}
