package ual.dra.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@Controller

public class EjemploController {
	@Autowired
	private CancionRepository cancionRepository;
	
	@GetMapping("/hola")
	@ResponseBody
	@CrossOrigin(origins= "*")
	public String hola(){
		return "hola";
	}
	
	@GetMapping("/cancion")
	@ResponseBody
	public List<Cancion> getAllCanciones(){
		return (List<Cancion>)cancionRepository.findAll();
	}
	
	@GetMapping("/cancion/filter/{id}")
	@ResponseBody
	public  List<Cancion> getCancionID(@PathVariable String id){
		Long textID= Long.parseLong(id);
		return cancionRepository.findCancionID(textID);
	}
	
	
	
	
	@PostMapping("/cancion")
	@ResponseBody
	public Response addCancion(@RequestBody Cancion cancion) {
		cancionRepository.save(cancion);
		Response aux= new Response("OK");
	  return aux;
	}
	
	
	/*
	@PostMapping("/editCancion/{id}")
	@ResponseBody
	@Modifying
	public Response editCancionID(@PathVariable String id,@RequestBody Cancion cancion){
		Long textID= Long.parseLong(id);
		String posiccionCancion = cancion.getPosiccionCancion();
		String titulo= cancion.getTitulo();
		String artista= cancion.getArtista();
		String imagen= cancion.getImagen();		
		cancionRepository.editCancionID(textID, posiccionCancion, titulo, artista, imagen);
		
		Response aux= new Response("OK");
		return aux;
	}*/
	
	
	@PostMapping("/deleteCancion/{idCancion}")
	@ResponseBody
	public Response borrarCancion(@PathVariable Long idCancion){
		cancionRepository.deleteById(idCancion);
		Response aux= new Response("OK");
		return aux;
	}
		
	@GetMapping("/getPosicion/{titulo}")
	@ResponseBody
	public List<Cancion> getposicion(@PathVariable String titulo){
		return cancionRepository.findPosicion(titulo);
	}
	
}
