export const retriveLocalStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T;
    }
    return object as T;
}
