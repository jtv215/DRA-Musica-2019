package ual.dra.rest;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Canciones")
public class Cancion implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 65)
    @Column(name = "posiccionCancion")
    private String posiccionCancion;
    
    @NotNull
    @Size(max = 200)
    @Column(name = "titulo")
    private String titulo;

    @NotNull
    @Size(max = 200)
    @Column(name = "artista")
    private String artista;

    @NotNull
    @Size(max = 200)
    @Column(name = "imagen")
    private String imagen;

    // Hibernate requires a no-arg constructor
    public Cancion() {

    }

    public Cancion(String posiccionCancion, String titulo, String artista, String imagen) {
        super();	
        this.posiccionCancion = posiccionCancion;
		this.titulo = titulo;
		this.artista = artista;
		this.imagen = imagen;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPosiccionCancion() {
		return posiccionCancion;
	}

	public void setPosiccionCancion(String posiccionCancion) {
		this.posiccionCancion = posiccionCancion;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getArtista() {
		return artista;
	}

	public void setArtista(String artista) {
		this.artista = artista;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

}