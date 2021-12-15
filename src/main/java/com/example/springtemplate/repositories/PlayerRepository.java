package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository extends CrudRepository<Player, Integer> {
  @Query(value = "SELECT * FROM players",
          nativeQuery = true)
  public List<Player> findAllPlayers();
  @Query(value = "SELECT * FROM players WHERE id=:player_id",
          nativeQuery = true)
  public Player findPlayerById(@Param("player_id") Integer id);
}
