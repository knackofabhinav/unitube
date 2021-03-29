import { createServer } from "miragejs"

export function setupMockServer() {
  createServer({
    routes() {
      this.get("/api/videos", () => ({
        videos: [
            {
                id: 1,
                name: "Haasil - Sunny Khan Durrani | Urdu Rap",
                url: "https://www.youtube.com/watch?v=38t50grgWSQ"
            },
            {
                id: 2,
                name: "Umer Farooq - Patang (Official Audio)",
                url: "https://www.youtube.com/watch?v=sWXK5Errxkk"
            },
            {
                id: 3,
                name: "Old Bollywood Medley - Atif Aslam | Aesthetics اردو",
                url: "https://www.youtube.com/watch?v=xzn-y00ygaY"
            },
            {
                id: 4,
                name: "Umer Farooq - Keh Na (Official Video)",
                url: "https://www.youtube.com/watch?v=or4fdMBOUBI"
            },
            {
                id: 5,
                name: "Bharat Chauhan - Ghar [Official Music Video]",
                url: "https://www.youtube.com/watch?v=e44meSqTkH0"
            },
            {
                id: 6,
                name: "GUMAAN - Young Stunners | Talha Anjum | Talhah Yunus | Prod. By Jokhay (Official Music Video)",
                url: "https://www.youtube.com/watch?v=jIQ0Dx-4peE"
            },
            {
                id: 7,
                name: "Kaavish - Baat Unkahi feat. Samra Khan",
                url: "https://www.youtube.com/watch?v=rn9aNVsABvc"
            },
            {
                id: 8,
                name: "Bharat Chauhan - Tu Hoti Toh [Official Music Video]",
                url: "https://www.youtube.com/watch?v=cVDASbWZ_KI"
            },
            {
                id: 9,
                name: "RIHA by Anuv Jain (Studio)",
                url: "https://www.youtube.com/watch?v=9et5qzuzbQM"
            }
        ],
      }))
    },
  })
}