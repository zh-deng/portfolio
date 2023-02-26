import { createSlice } from "@reduxjs/toolkit";
import { spotifywebImages } from "../containers/projects/imports";

export const projectinfoSlice = createSlice({
    name: "projectinfo",
    initialState: {
        projectCount: 1,
        projectArray: [
            {
                imgArray: spotifywebImages,
                currentImage: 0,
                projectName: "SpotifyWEB",
                projectDescription: "noob"
            },

        ]
        // spotifyweb: {
        //     imgArray: spotifywebImages,
        //     currentImage: 0,
        //     projectName: "SpotifyWEB",
        //     projectDescription: "noob"
        // }

    },
    reducers: {
        previousImage: (state, action) => {
           if(state.projectArray[action.payload].currentImage > 0) {
                state.projectArray[action.payload].currentImage--;
           }
        },
        nextImage: (state, action) => {
            if(state.projectArray[action.payload].currentImage < state.projectArray[action.payload].imgArray.length-1) {
                state.projectArray[action.payload].currentImage++;
           }
        }
    }
});

export const {previousImage, nextImage} = projectinfoSlice.actions;

export default projectinfoSlice.reducer;