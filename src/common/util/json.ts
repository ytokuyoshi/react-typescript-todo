// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const jsonText2obj = (jsonText = ''): any => {
  try {
    const obj = JSON.parse(jsonText);
    return obj;
  } catch (error) {
    return null;
  }
};

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const jsonText2dataList = (jsonText: string): any => {
//   try {
//     const jsonObj = JSON.parse(jsonText);
//     return [...jsonObj.data];
//   } catch (error) {
//     return [];
//   }
// };

// const formatJsonText = (jsonText = ''): string => {
//   try {
//     return JSON.stringify(jsonText2obj(jsonText));
//   } catch (error) {
//     return '';
//   }
// };
