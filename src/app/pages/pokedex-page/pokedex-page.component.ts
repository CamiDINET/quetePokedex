import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.interface';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
pokemons: Pokemon[]=[];
currentpokemon: Pokemon = {
id:0,
name:"",
image:"",
description:"description du pokemon"
}
constructor( private service: PokedexService) {}

ngOnInit(){
  this.service.getPokemonsFromApi().subscribe((data:any) => this.pokemons = data
  );
}
onPokemonChange(event:Pokemon): void{
this.currentpokemon = event;

}
}
