import { v4 as uuidv4 } from 'uuid';
import cold from "./song-covers/cold.jpg";
import heroes from "./song-covers/heroes-tonight.jpg";
import mortals from "./song-covers/mortals.jpg";
import notAfraid from "./song-covers/not-afraid.jpg";
import stay from "./song-covers/stay.jpg";

function music(){
    return [
        {
            name: "Heroes Tonight",
            cover: heroes,
            audio: "https://docs.google.com/uc?export=download&id=15e8zeuhZXfmTB6o932GO6B5-9CZ67cfD",
            artist: "Jumanji",
            colour: ["#82676C","#544A56"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Mortals",
            cover: mortals,
            audio: "https://docs.google.com/uc?export=download&id=1W2CfLM3ux4DkGmjPz4aIZ9BEJIhPn672",
            artist: "Warriyo",
            colour: ["#F4D2D0","#B62E2F"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Cold",
            cover: cold,
            audio: "https://docs.google.com/uc?export=download&id=16vM51UD_U2-x_In_RZq_1NDR_d_88kVl",
            artist: "Neffex",
            colour: ["#8392A6","#16455C"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Not Afraid",
            cover: notAfraid,
            audio: "https://docs.google.com/uc?export=download&id=1y6J8NEYZ7vs8hPyC9PHe6pV4hlcM9ZOc",
            artist: "Eminem",
            colour: ["#000000","#3a3a3a"],
            id: uuidv4(),
            active: false
        },
        {
            name: "S.T.A.Y",
            cover: stay,
            audio: "https://docs.google.com/uc?export=download&id=1r3b7GfeZIYty5yCNFmsxAGUeUXtt7SqK",
            artist: "Hans Zimmer",
            colour: ["#475052","#233C43"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default music;