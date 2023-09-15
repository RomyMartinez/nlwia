import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  //Para poder usar esta funcao alem deste arquivo a gente utiliza export
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Realizando o dowload:", videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error("Video maior que 60 segundos")
      }
    })
    .on("end", () => {
      console.log("Download do video finalizado")
    })
    .on("error", (error) => {
      console.log("Não foi possível baixar o vídeo. Detalhes do error: ", error)
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
