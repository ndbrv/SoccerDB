# CS3200FinalProjCode

SoccerDB Project 
Group 51
Nikola Dobrev

Final project for CS3200 Database Design. Web app that allows for navigation of and CRUD operations on soccer players, teams, and leagues.

The user data model is the players class which stores the required fields of player_id, firstName, lastName, username, password, email, and dateOfBirth. In addition, it stores the enumeration position and the foreign key team_id which is the team the player plays for. Many players can play in one team.

The enumeration position can hold the values of: Forward, Midfielder, Defender, Goalkeeper.

The team data model has the fields teamName, manager, home_field (field the team plays at), team_worth (value of the team in USD) and the foreign key league_id which is the league in which the team plays in. One team can be played for by many players. Many teams can participate in a league.

The league data model has the fields leagueName, country, tier (what level of play the league is), and league_worth (how much the league is worth in USD).

The relationship between players and teams is a one to many where many players play in one team.

The relationship between teams and leagues is a one to many where many teams participate in one league.

The user interface screens: Player list - Displays the players playing in a team Player editor - displays a player for creating/updating a player Team List - Displays the teams playing in a league Team Editor - Displays a team for updating/creating a team, and allows for navigation to players in a team League List - Displays the available leagues League Editor - Displays a given league for creating/updating a league and allows for navigation to teams in that league

--------------------------------------------------------------------------------------------------------------------------

Problem:
In competitive sports there is a need for data to be organized and easily accesible for those both those participating in the sport and interested onlookers. This helps all parties involved to be more informed about the sport. Soccer is the biggest sport in the world and there are thousands of players, teams, and leagues around the world. All the information about these players, teams, and leagues needs to be stored and accessed somehow.

Solution: 
Using MySQL, Spring Boot and React, I built a web app to allow for the storage and viewing of data relating to soccer players, teams, and leagues. The data was stored in a MySQL database. Java Spring boot was used for the back end. React.js was used to display the data on the front end. The app feautures the ability to view lists of the three different entities. When selected, each entity can also be update and deleted. New entities can also be created. 

User: 
A typical user that would use the solution would typically be a soccer player or soccer fan. A player has a first name, last name, password, email, date of birth, position, and the team the the player plays for. Using the app the player can view other players as well as teams that other players play in and leagues that other teams participate in. 

Team: 
A team is another domain object that is a part of the app. A team holds information about the team name, the home field of the team, what the team is worth, and the league in which the team participates. One team can have many players playing in it. The app lists all the teams and allows for the updating, deletion, and creation of new teams.

League:
The other domain object that is part of the app is the league. A league holds information about the league name, what country it is in, at what tier the league is, and how much the league is worth. A league can have many teams participating in it. The app lists the all the leagues and allows for the updating, deletion, and creation of new leagues.



