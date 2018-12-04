const pokedex = require ('./pokedex.json')

class Pokedex {
  
    static getAll(res) {
      res.json(pokedex);
    }
  
    static getPokemon(data, res) {
      let pokemon = pokedex.find((item) => {
        return item[data.key] == data.value;
      })
      res.json(pokemon)
    }
  
  }
  
  module.exports = Pokedex