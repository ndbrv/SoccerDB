package com.example.springtemplate.repositories;

import com.example.springtemplate.models.League;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LeagueRepository extends CrudRepository<League, Integer> {
  @Query(value = "SELECT * FROM leagues",
          nativeQuery = true)
  public List<League> findAllLeagues();
  @Query(value = "SELECT * FROM leagues WHERE id=:league_id",
          nativeQuery = true)
  public League findLeagueById(@Param("league_id") Integer id);
}
