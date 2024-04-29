interface AudioPlayer {
    audioVolume: number;
    details: Details;
    song: string;
    songDuration: number;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    details: {
        author: 'Arcade Fire',
        year: 2019
    },
    song: "The Suburbs",
    songDuration: 36
}

const song = 'New Song';

const { song: anotherSong ,
    songDuration:duration} = audioPlayer;
const { author } = audioPlayer.details;

//console.log('Song: ', anotherSong);
//console.log('Author: ', author);

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta']

console.log('Personaje 3', trunks);

export { };