import { createSlice } from "@reduxjs/toolkit";
import { spotifywebImages, gpt3Images } from "../containers/projects/imports";
import { projectDescriptions } from "../containers/projects/projectDescriptions";

export const projectinfoSlice = createSlice({
    name: "projectinfo",
    initialState: {
        projectArray: [
            {
                imgArray: gpt3Images,
                currentImage: 0,
                status: "ongoing",
                projectName: "E-Commerce",
                projectDescription: projectDescriptions.ecommerce.deutsch,
                techStack: ["HTML", "CSS", "SCSS", "REACT", "REDUX", "TYPESCRIPT"],
                liveSite: "",
                gitHub: "https://github.com/zh-deng/GPT-3-Figma"
            },
            {
                imgArray: gpt3Images,
                currentImage: 0,
                status: "finished",
                projectName: "GPT-3",
                projectDescription: projectDescriptions.gpt3.deutsch,
                techStack: ["HTML", "CSS", "REACT", "FIGMA"],
                liveSite: "",
                gitHub: "https://github.com/zh-deng/GPT-3-Figma"
            },
            {
                imgArray: spotifywebImages,
                currentImage: 0,
                status: "finished",
                projectName: "SpotifyWEB",
                projectDescription: projectDescriptions.spotifyweb.deutsch,
                techStack: ["HTML", "CSS", "REACT", "SPOTIFY-API"],
                liveSite: "",
                gitHub: "https://github.com/zh-deng/SpotifyWEB/tree/master"
            },
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
        },
        jumpToImage: (state, action) => {
            state.projectArray[action.payload[0]].currentImage = action.payload[1];
        }
    }
});

export const selectProjectinfo = state => state.projectinfo;

export const {previousImage, nextImage, jumpToImage} = projectinfoSlice.actions;

export default projectinfoSlice.reducer;