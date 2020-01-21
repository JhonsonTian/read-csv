
import { MatchDataType } from './MatchReader';
import { MatchResult } from './MatchResult';

interface WinAnalysisType {
  teamName: string;
  init(teamName: string): void;
  analyze(data: MatchDataType[]): void;
}

const analysis: WinAnalysisType = {
  teamName: '',
  init(teamName) {
    this.teamName = teamName;
  },
  analyze(data) {
    let manUnitedWins = 0;
    data.forEach((match: MatchDataType): void => {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
      }
    });
    console.log(`Man Uniteds won ${manUnitedWins} games`);
  },
};


export const WinsAnalysis = (teamName: string): WinAnalysisType => {
  const objWinAnalysis = Object.create(analysis);
  objWinAnalysis.init(teamName);
  return objWinAnalysis;
};
