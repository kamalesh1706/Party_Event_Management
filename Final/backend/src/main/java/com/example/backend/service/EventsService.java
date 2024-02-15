package com.example.backend.service;

import com.example.backend.entity.events;
import com.example.backend.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventsService {

    @Autowired
    private EventsRepository eventsRepository;

    // Create operation
    public events createEvent(events event) {
        events savedEvent = eventsRepository.save(event);
        return savedEvent;
    }

    // Read operation
    public List<events> getAllEvents() {
        return eventsRepository.findAll();
    }

    // Update operation
    public events updateEvent(int id, events updatedEvent) {
        Optional<events> optionalEvent = eventsRepository.findById(id);
        if (optionalEvent.isPresent()) {
            events existingEvent = optionalEvent.get();
            existingEvent.setDescription(updatedEvent.getDescription());
            existingEvent.setDate(updatedEvent.getDate());
            existingEvent.setAmount(updatedEvent.getAmount());
            eventsRepository.save(existingEvent);
            return existingEvent;
        } else {
            throw new RuntimeException("Event with party id " + id + " not found");
        }
    }

    // Delete operation
    public void deleteEvent(int id) {
        Optional<events> optionalEvent = eventsRepository.findById(id);
        if (optionalEvent.isPresent()) {
            eventsRepository.delete(optionalEvent.get());
        } else {
            throw new RuntimeException("Event with party id " + id + " not found");
        }
    }

}
