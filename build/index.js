"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var WinsAnalysis_1 = require("./WinsAnalysis");
var csvReader = CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = MatchReader_1.MatchReader(csvReader);
var analysis = WinsAnalysis_1.WinsAnalysis('Man United');
analysis.analyze(matchReader.matches);
