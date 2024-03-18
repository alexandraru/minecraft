import { NearestFilter, TextureLoader, RepeatWrapping } from 'three';
import {
    log,
    dirt,
    glass,
    grass,
    wood,
} from './images';


const dirtTexture = new TextureLoader().load(dirt);
const logTexture = new TextureLoader().load(log);
const glassTexture = new TextureLoader().load(glass);
const grassTexture = new TextureLoader().load(grass);
const woodTexture = new TextureLoader().load(wood);
const groundTexture = new TextureLoader().load(grass);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {dirtTexture, logTexture, glassTexture, grassTexture, woodTexture, groundTexture}
