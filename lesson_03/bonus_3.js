/*
Bonus:
Vytvořte pipeline; funkci modifyArray, která přijme pole a neomezený počet callbacků, pak
aplikuje tyto callbacky na pole v pořadí, ve kterém byly poskytnuty. Každý callback by měl
přijímat pole a vracet nové pole.
*/

const matches = [
    { homeTeam: "FC Barcelona", awayTeam: "Real Madrid", goalsHome: 1, goalsAway: 2 },
    { homeTeam: "Manchester City", awayTeam: "Liverpool", goalsHome: 2, goalsAway: 3 },
    { homeTeam: "Bayern Munich", awayTeam: "Borussia Dortmund", goalsHome: 2, goalsAway: 0 },
    { homeTeam: "Juventus", awayTeam: "AC Milan", goalsHome: 3, goalsAway: 1 },
    { homeTeam: "PSG", awayTeam: "Monaco", goalsHome: 3, goalsAway: 1 },
];

const modifyArray = (array, ...callbacks) => {
    let result = array;
    for (let callback of callbacks) {
        result = callback(result)
    }
    return result;
}

const addTotalGoals = (matches) => matches.map(match => ({ ...match, totalGoals: match.goalsHome + match.goalsAway }));
const filterHomeWins = (matches) => matches.filter(match => match.goalsHome > match.goalsAway);
const filterHighScoringMatches = (matches) => matches.filter(match => match.totalGoals > 3);

const totalResult = modifyArray(matches, addTotalGoals, filterHomeWins, filterHighScoringMatches);

console.log(totalResult);

