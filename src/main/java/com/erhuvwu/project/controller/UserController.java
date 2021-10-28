package com.erhuvwu.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erhuvwu.project.exception.ResourceNotFoundException;
import com.erhuvwu.project.model.User;
import com.erhuvwu.project.repository.UserRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/allusers")
	public List<User> getAllUsers(){
		return userRepo.findAll();
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable int id)
	{
		User user= userRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("User not found"));
		return ResponseEntity.ok(user);                 
	}
	
	@PostMapping("/adduser")
    public User newUser(@RequestBody User user)
    {
		return userRepo.save(user);
    }
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user)
	{
		User u= userRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("User not found"));
	    u.setName(user.getName());
	    u.setEmail(user.getEmail());
	    u.setPassword(user.getPassword());
	    
	    User updatedUser=userRepo.save(u);
	    return ResponseEntity.ok(updatedUser);
	}

	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable int id)
	{
		userRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Student not found"));
	    userRepo.deleteById(id);
	    return "The student with id: "+ id +" is removed from the database.";
	}
}
