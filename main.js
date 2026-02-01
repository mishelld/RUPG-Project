import Renderer from "./ui.js";
import Generator from "./model.js";
const generator = new Generator();
const renderer = new Renderer();
const [user, friends] = await generator.getMainAndFriends();
const quote = await generator.generateKanyeQuote();
const pokemon = await generator.generatePokemon();
const text = await generator.generateText();

renderer.renderUser(user);
renderer.renderFriends(friends);
renderer.renderQuote(quote);
renderer.renderPokemon(pokemon);
renderer.renderText(text);
