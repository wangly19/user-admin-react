const Storage = {

  /**
   * 存储数据
   * @param key 键名，存储 标识
   * @param data 需要存储的数据
   */
  setData<T> (key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  },

  /**
   * 获取某项存储数据
   * @param key 键名，存储 标识
   */
  getData<T> (key: string): T | null {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) as string);
    }
    return null;
  },

  /**
   * 移除某项存储数据
   * @param key 键名，存储 标识
   */
  removeData (key: string): boolean {
    localStorage.removeItem(key)
    const state: string | null = localStorage.getItem(key);
    return state ? true : false
  },

  /**
   * 清除存储数据
   */
  clearData () {
    localStorage.clear();
  }

}

export default Storage
