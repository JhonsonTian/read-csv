import fs from 'fs';

export interface CSVReaderType {
  fileName: string;
  data: string[][];
  init(fileName: string): void;
  read(): void;
}

const reader: CSVReaderType = {
  fileName: '',
  data: [],
  init(fileName) {
    this.fileName = fileName;
  },
  read() {
    this.data = fs.readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((match: string): string[] => match.split(','));
  },

};

export const CsvFileReader = (fileName: string): CSVReaderType => {
  const objReader = Object.create(reader);
  objReader.init(fileName);
  return objReader;
};
