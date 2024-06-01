class Storage {
    constructor(storageType) {
        this.storageType = storageType;
    }

    // 存储值
    set(key, value) {
        this.storageType.setItem(key, JSON.stringify(value));
    }

    // 获取值
    get(key) {
        const value = this.storageType.getItem(key);
        if (value) {
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        }
        return null;
    }

    // 移除某一个值
    remove(key) {
        this.storageType.removeItem(key);
    }

    // 清空所有值
    clear() {
        this.storageType.clear();
    }
}

const sessionStorageTool = new Storage(window.sessionStorage);
const localStorageTool = new Storage(window.localStorage);
export { sessionStorageTool, localStorageTool };