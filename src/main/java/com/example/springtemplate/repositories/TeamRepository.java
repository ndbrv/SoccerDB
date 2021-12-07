package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TeamRepository extends CrudRepository<Team, Integer> {
  @Query(value = "SELECT * FROM teams",
          nativeQuery = true)
  public List<Team> findAllTeams();
  @Query(value = "SELECT * FROM teams WHERE id=:team_id",
          nativeQuery = true)
  public Team findTeamById(@Param("team_id") Integer id);
}
