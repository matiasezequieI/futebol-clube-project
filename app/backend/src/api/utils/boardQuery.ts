const boardQuery = `SELECT teams.team_name as name,
SUM(IF(matches.home_team_goals > matches.away_team_goals, 3, 0)
+ IF(matches.home_team_goals = matches.away_team_goals, 1, 0)) as totalPoints,
COUNT(matches.home_team_id) as totalGames,
SUM(IF(matches.home_team_goals > matches.away_team_goals, 1, 0)) as totalVictories,
SUM(IF(matches.home_team_goals < matches.away_team_goals, 1, 0)) as totalLosses,
SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0)) as totalDraws,
SUM(matches.home_team_goals) as goalsFavor,
SUM(matches.away_team_goals) as goalsOwn,
SUM(matches.home_team_goals - matches.away_team_goals) as goalsBalance,
SUM(IF(matches.home_team_goals > matches.away_team_goals, 3, 0)
+ IF(matches.home_team_goals = matches.away_team_goals, 1, 0))
/ (COUNT(matches.home_team_id) * 3) * 100
as efficiency
FROM matches INNER JOIN teams on teams.id = matches.home_team_id
WHERE matches.in_progress = false GROUP BY matches.home_team_id`;

export default boardQuery;
