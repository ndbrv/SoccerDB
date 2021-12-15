package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.PlayerRepository;
import com.example.springtemplate.repositories.UserRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlayerRestDao {
  @Autowired
  PlayerRepository playerRepository;

  @PostMapping("/api/players")
  public Player createPlayer(@RequestBody Player player) {
    return playerRepository.save(player);
  }

  @GetMapping("/api/players")
  public List<Player> findAllPlayers() {
    return playerRepository.findAllPlayers();
  }

  @GetMapping("/api/players/{playerId}")
  public Player findPlayerById(
          @PathVariable("playerId") Integer id) {
    return playerRepository.findPlayerById(id);
  }

  @GetMapping("/api/players/{playerId}/team")
  public Team findPlayerTeamById(
          @PathVariable("playerId") Integer id) {
    return playerRepository.findPlayerById(id).getTeam();
  }

  @PutMapping("/api/players/{playerId}")
  public Player updatePlayer(
          @PathVariable("playerId") Integer id,
          @RequestBody Player playerUpdates) {
    Player player = playerRepository.findPlayerById(id);
    player.setFirstName(playerUpdates.getFirstName());
    player.setLastName(playerUpdates.getLastName());
    player.setUsername(playerUpdates.getUsername());
    player.setPassword(playerUpdates.getPassword());
    player.setEmail(playerUpdates.getEmail());
    player.setUsername(playerUpdates.getUsername());
    player.setDateOfBirth(playerUpdates.getDateOfBirth());
    player.setPosition(playerUpdates.getPosition());
    player.setTeam(playerUpdates.getTeam());
    return playerRepository.save(player);
  }

  @DeleteMapping("/api/players/{playerId}")
  public void deletePlayer(
          @PathVariable("playerId") Integer id) {
    playerRepository.deleteById(id);
  }
}
