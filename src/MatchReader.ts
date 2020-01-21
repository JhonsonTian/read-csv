import { CSVReaderType } from './CsvFileReader';
import { stringDateToDate } from './utils';
import { MatchResult } from './MatchResult';

export type MatchDataType = [Date, string, string, number, number, MatchResult, string];

interface MatchReaderType {
  matches: MatchDataType[];
  init(reader: CSVReaderType): void;
}

const matchReader: MatchReaderType = {
  matches: [],
  init(reader) {
    reader.read();
    this.matches = reader.data.map((match: string[]): MatchDataType => [
      stringDateToDate(match[0]),
      match[1],
      match[2],
      parseInt(match[3], 0),
      parseInt(match[4], 0),
      match[5] as MatchResult,
      match[6],
    ]);
  },
};

export const MatchReader = (reader: CSVReaderType): MatchReaderType => {
  const objReader = Object.create(matchReader);
  objReader.init(reader);
  return objReader;
};
