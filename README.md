# CS3200FinalProjCode

SoccerDB Project Nikola Dobrev

Final project for CS3200 Database Design. Web app that allows for navigation of and CRUD operations on soccer players, teams, and leagues.

The user data model is the players class which stores the required fields of player_id, firstName, lastName, username, password, email, and dateOfBirth. In addition, it stores the enumeration position and the foreign key team_id which is the team the player plays for. Many players can play in one team.

The enumeration position can hold the values of: Forward, Midfielder, Defender, Goalkeeper.

The team data model has the fields teamName, manager, home_field (field the team plays at), team_worth (value of the team in USD) and the foreign key league_id which is the league in which the team plays in. One team can be played for by many players. Many teams can participate in a league.

The league data model has the fields leagueName, country, tier (what level of play the league is), and league_worth (how much the league is worth in USD).

The relationship between players and teams is a one to many where many players play in one team.

The relationship between teams and leagues is a one to many where many teams participate in one league.

The user interface screens: Player list - Displays the players playing in a team Player editor - displays a player for creating/updating a player Team List - Displays the teams playing in a league Team Editor - Displays a team for updating/creating a team, and allows for navigation to players in a team League List - Displays the available leagues League Editor - Displays a given league for creating/updating a league and allows for navigation to teams in that league
