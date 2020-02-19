import { Application } from 'express';
import { PokeService } from '../src/services/pokemon.service';

export class Controller {
    private pokeService: PokeService;

    constructor(private app: Application) {
        this.pokeService = new PokeService();
        this.routes();
    }

    public routes(){
        this.app.route('/').get(this.pokeService.welcomeMessage);

        this.app.route('/pokemons').get(this.pokeService.getAllPokemon);
        this.app.route('/pokemons').post(this.pokeService.addNewPokemon);
        this.app.route('/pokemons/:id')
            .delete(this.pokeService.deletePokemon)
            .put(this.pokeService.updatePokemon);
    }
}