;(() => {
  let getLink = document.querySelectorAll("a")
  let getButton = document.querySelectorAll("button")
  for (let i = 0; i < getLink.length; i++) {
    getLink[i].addEventListener("click", () => {
      // console.log("under construction")
      alert("under construction")
    })
  }
  for (let i = 0; i < getButton.length; i++) {
    getButton[i].addEventListener("click", () => {
      // console.log("under construction")
      alert("under construction")
    })
  }
})()
