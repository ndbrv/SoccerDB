package com.example.springtemplate.daos;

import com.example.springtemplate.models.League;
import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.LeagueRepository;
import com.example.springtemplate.repositories.PlayerRepository;
import com.example.springtemplate.repositories.UserRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class LeagueRestDao {
  @Autowired
  LeagueRepository leagueRepository;

  @PostMapping("/api/leagues")
  public League createLeague(@RequestBody League league) {
    return leagueRepository.save(league);
  }

  @GetMapping("/api/leagues")
  public List<League> findAllLeagues() {
    return leagueRepository.findAllLeagues();
  }

  @GetMapping("/api/leagues/{leagueId}")
  public League findLeagueById(
          @PathVariable("leagueId") Integer id) {
    return leagueRepository.findLeagueById(id);
  }

  @PutMapping("/api/leagues/{leagueId}")
  public League updateLeague(
          @PathVariable("leagueId") Integer id,
          @RequestBody League leagueUpdates) {
    League league = leagueRepository.findLeagueById(id);
    league.setLeagueName(leagueUpdates.getLeagueName());
    league.setCountry(leagueUpdates.getCountry());
    league.setTier(leagueUpdates.getTier());
    league.setLeagueWorth(leagueUpdates.getLeagueWorth());
    league.setTeams(leagueUpdates.getTeams());
    return leagueRepository.save(league);
  }

  @DeleteMapping("/api/leagues/{leagueId}")
  public void deleteLeague(
          @PathVariable("leagueId") Integer id) {
    leagueRepository.deleteById(id);
  }
}