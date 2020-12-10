package ual.dra.rest;


import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

@RepositoryRestResource()
public interface CancionRepository extends CrudRepository<Cancion, Long> {
	
	
	@Query(value = "SELECT * from Canciones where titulo = :titulo ", nativeQuery=true)
	public List<Cancion> findPosicion(@Param("titulo") String titulo);
	
	
	@Query(value = "SELECT * from Canciones where id = :id ", nativeQuery=true)
	public List<Cancion> findCancionID(@Param("id") Long textID);
	
	/*
	@Modifying
	@Transactional
	@Query(value = "UPDATE Canciones SET posiccionCancion=: posiccionCancion, titulo=: titulo, artista=: artista, imagen=: imagen, where id = :id ")
	public void editCancionID(
			@Param("id") Long textID,
			@Param("posiccionCancion") String posiccionCancion,
			@Param("titulo") String titulo,
			@Param("artista") String artista,
			@Param("imagen") String imagen		
			);
	*/
}