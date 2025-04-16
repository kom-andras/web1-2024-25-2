const serverUrl = "https://nettuts.hu/jms/kom-andras/"
export const getAll = (entity) => {
    return fetch(`${serverUrl}${entity}`).then(response => response.json());
};