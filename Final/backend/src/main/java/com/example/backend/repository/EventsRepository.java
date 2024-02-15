package com.example.backend.repository;



import com.example.backend.entity.events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsRepository extends JpaRepository<events, Integer> {
}
