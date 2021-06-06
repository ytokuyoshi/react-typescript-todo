const LOCAL_STORAGE_KEY = 'LOCAL_STORAGE_KEY';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getLocalStorage = (): any => {
  const data: string = localStorage.getItem(LOCAL_STORAGE_KEY) ?? '';
  if (data.length > 0) return JSON.parse(data);
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export const setLocalStorage = (data: any): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
