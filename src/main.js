let points = 100000

let axe = 0

let sword = 0

let sharp = 0

let fire = 0

let looting = 0

let unbreaking

let aLevel = document.getElementById("aLevel")

let sLevel = document.getElementById("sLevel")

let shLevel = document.getElementById("shLevel")

let fLevel = document.getElementById("fLevel")

let loLevel = document.getElementById("lLevel")

let unLevel = document.getElementById("unLevel")

function changePoint(amount) {

  points = points + amount

  document.getElementById("points").innerText = points + " Diamonds"

}
function buyAxe() {
  console.log('Hi from buyAxe')
  if (points >= 10){
    // purchase axe
    changePoint(-10)
    axe = axe + 1
    aLevel.innerText = "level " + axe
  }
  else{
    alert("Get a job")
  }
}

function buySword() {
  console.log('Hi from buySword')
  if (points >= 20){
    // purchase sword
    changePoint(-20)
    sword = sword + 1
    sLevel.innerText = "level " + sword
  }
  else{
    alert("Get a job")
  }
}
function buySharpness() {
  console.log('Hi from buySharpness')
  if (points >= 4000){
    // purchase sword
    changePoint(-4000)
    sharp = sharp + 1
    shLevel.innerText = "level " + sharp
  }
  else{
    alert("Get a job")
  }
}
function buyFire() {
  console.log('Hi from buyFire')
  if (points >= 10000){
    // purchase axe
    changePoint (-8000)
    fire = fire + 1
    fLevel.innerText = "level " + fire
  }
  else{
    alert("Get a job")
  }
}

function buyLooting() {
  console.log('Hi from buyLooting')
  if (points >= 20000){
    // purchase sword
    changePoint(-20000)
    looting = looting + 1
    loLevel.innerText = "level " + looting
  }
  else{
    alert("Get a job")
  }
}
function buyUnbreaking() {
  console.log('Hi from buyUnbreaking')
  if (points >= 40000){
    // purchase sword
    changePoint(-40000)
    unbreaking = unbreaking + 1
    unLevel.innerText = "level " + unbreaking
  }
  else{
    alert("Get a job")
  }
}