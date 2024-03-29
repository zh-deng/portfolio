import { createSlice } from "@reduxjs/toolkit";
import { spotifywebImages, gpt3Images, portfolioImages, chatgptImages, mywebsiteImages } from "../containers/projects/imports";
import { projectDescriptions } from "../containers/projects/projectDescriptions";

export const projectinfoSlice = createSlice({
    name: "projectinfo",
    initialState: {
        projectArray: [
            {
                imgArray: mywebsiteImages,
                currentImage: 0,
                status: "ongoing",
                projectName: "MyWebsite",
                projectDescription: projectDescriptions.mywebsite.deutsch,
                techStack: ["HTML", "CSS", "JavaScript", "REACT", "REDUX", "TYPESCRIPT", "SASS/SCSS", "REACT - ROUTER"],
                liveDemo: "https://mw-dengdev.netlify.app/",
                gitHub: "https://github.com/zh-deng/MyWebsiteTypeScript"
            },
            {
                imgArray: chatgptImages,
                currentImage: 0,
                status: "finished",
                projectName: "ChatWithAI",
                projectDescription: projectDescriptions.chatgpt.deutsch,
                techStack: ["HTML", "CSS", "JavaScript", "REACT", "REDUX", "WIKIPEDIA API", "GPT-3.5 API"],
                liveDemo: "https://chatgpt-dengdev.netlify.app/",
                gitHub: "https://github.com/zh-deng/chatgpt"
            },
            {
                imgArray: portfolioImages,
                currentImage: 0,
                status: "finished",
                projectName: "Portfolio Website",
                projectDescription: projectDescriptions.portfolio.deutsch,
                techStack: ["HTML", "CSS", "JavaScript", "REACT", "REDUX"],
                liveDemo: "https://dengdev.netlify.app/",
                gitHub: "https://github.com/zh-deng/portfolio"
            },
            {
                imgArray: gpt3Images,
                currentImage: 0,
                status: "finished",
                projectName: "GPT-3",
                projectDescription: projectDescriptions.gpt3.deutsch,
                techStack: ["HTML", "CSS", "JavaScript", "REACT", "FIGMA"],
                liveDemo: "https://gpt3-dengdev.netlify.app/",
                gitHub: "https://github.com/zh-deng/GPT-3-Figma"
            },
            {
                imgArray: spotifywebImages,
                currentImage: 0,
                status: "finished",
                projectName: "SpotifyWEB",
                projectDescription: projectDescriptions.spotifyweb.deutsch,
                techStack: ["HTML", "CSS", "JavaScript", "REACT", "SPOTIFY-API"],
                liveDemo: "",
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