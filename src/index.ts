import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './WinsAnalysis';

const csvReader = CsvFileReader('football.csv');
const matchReader = MatchReader(csvReader);
const analysis = WinsAnalysis('Man United');
analysis.analyze(matchReader.matches);
