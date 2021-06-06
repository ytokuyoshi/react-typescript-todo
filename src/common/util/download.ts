import moment from 'moment';

const download = (fileData: string, type: string, fileName: string): void => {
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, fileData], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.download = fileName;
  a.href = url;
  a.click();
  a.remove();
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1e4);
};

export const downloadJson = (fileData: string): void => {
  download(fileData, 'text/plain', `${moment().format('YYYYMMDD_HHmm')}.json`);
};
