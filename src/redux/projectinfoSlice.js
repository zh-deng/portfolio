import { createSlice } from "@reduxjs/toolkit";
import { spotifywebImages } from "../containers/projects/imports";

export const projectinfoSlice = createSlice({
    name: "projectinfo",
    initialState: {
        projectCount: 2,
        projectArray: [
            {
                imgArray: spotifywebImages,
                currentImage: 0,
                projectName: "SpotifyWEB",
                projectDescription: "noob",
                techStack: ["HTML", "CSS"],
                liveSite: "",
                gitHub: "https://github.com/zh-deng/SpotifyWEB/tree/master"
            },
            {
                imgArray: spotifywebImages,
                currentImage: 0,
                projectName: "GPT-3",
                projectDescription: "haha",
                techStack: ["HTML", "CSS"],
                liveSite: "",
                gitHub: "https://github.com/zh-deng/SpotifyWEB/tree/master"
            }
        ]
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