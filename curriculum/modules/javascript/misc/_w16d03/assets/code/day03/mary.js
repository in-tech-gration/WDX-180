console.log("Mary")
const firstName = "Mary";
const lastName = "Richelle";
const fullName = firstName + lastName;

const maryObj = {
  livesIn: "Greece",
  hobby: "coding",
  does: ["eat","code","sleep","repeat"]
}
const myData = [firstName , lastName , fullName, maryObj.livesIn , maryObj.hobby]


const aboutMe = (livesIn)=>{
  console.log(fullName + " lives in " + livesIn)
  
}
aboutMe(maryObj.livesIn)
myData.push(maryObj.does)

export const film = Object.freeze({
  name: "Wish",
  director: "Chris Buck",
  releaseDate: 2024,
  genre: ["Animation","Family","Fantasy","Adventure"]
})
