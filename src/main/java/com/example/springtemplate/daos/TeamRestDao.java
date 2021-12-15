package com.example.springtemplate.daos;

import com.example.springtemplate.models.League;
import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.LeagueRepository;
import com.example.springtemplate.repositories.PlayerRepository;
import com.example.springtemplate.repositories.TeamRepository;
import com.example.springtemplate.repositories.UserRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamRestDao {
  @Autowired
  TeamRepository teamRepository;

  @PostMapping("/api/teams")
  public Team createTeam(@RequestBody Team team) {
    return teamRepository.save(team);
  }

  @GetMapping("/api/teams")
  public List<Team> findAllTeams() {
    return teamRepository.findAllTeams();
  }

  @GetMapping("/api/teams/{teamId}")
  public Team findTeamById(
          @PathVariable("teamId") Integer id) {
    return teamRepository.findTeamById(id);
  }

  @GetMapping("/api/teams/{teamId}/league")
  public League findTeamLeagueById(
          @PathVariable("teamId") Integer id) {
    return teamRepository.findTeamById(id).getLeague();
  }

  @GetMapping("/api/teams/{teamId}/players")
  public List<Player> findTeamPlayersById(
          @PathVariable("teamId") Integer id) {
    return teamRepository.findTeamById(id).getPlayers();
  }

  @PutMapping("/api/teams/{teamId}")
  public Team updateLeague(
          @PathVariable("teamId") Integer id,
          @RequestBody Team teamUpdates) {
    Team team = teamRepository.findTeamById(id);
    team.setTeamName(teamUpdates.getTeamName());
    team.setManager(teamUpdates.getManager());
    team.setHomeField(teamUpdates.getHomeField());
    team.setTeamWorth(teamUpdates.getTeamWorth());
    team.setLeague(teamUpdates.getLeague());
    team.setPlayers(teamUpdates.getPlayers());
    return teamRepository.save(team);
  }

  @DeleteMapping("/api/teams/{teamId}")
  public void deleteLeague(
          @PathVariable("teamId") Integer id) {
    teamRepository.deleteById(id);
  }
}