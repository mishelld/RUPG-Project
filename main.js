import Renderer from "./ui.js";
import Generator from "./model.js";
const generator = new Generator();
const renderer = new Renderer();
const usersData = await generator.getMainAndFriends();
const quote = await generator.generateKanyeQuote();
const pokemon = await generator.generatePokemon();
const text = await generator.generateText();

renderer.render(usersData, quote, pokemon, text);
