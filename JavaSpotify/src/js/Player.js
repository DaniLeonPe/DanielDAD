import Song, {play_song} from './Song.js';
//import covers from '../assets/images/*.mp3';

export default class player{
    constructor(map){
        Object.entries(map);
        let aux = 1;
        for (var [key, value] of Object.entries(map)){
            let clave = key;
            let valor = value;
            let song = new Song(clave, valor);
            play_song(song);
            aux++;
        }
    }
 
}