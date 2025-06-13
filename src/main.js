let points = 1000000

let axe = 0

let sword = 0

let bow = 0

let pickaxe = 0

let sharp = 0

let fire = 0

let looting = 0

let unbreaking = 0

let aLevel = document.getElementById("aLevel")

let sLevel = document.getElementById("sLevel")

let bLevel = document.getElementById("bLevel")

let pLevel = document.getElementById("pLevel")

let shLevel = document.getElementById("shLevel")

let fLevel = document.getElementById("fLevel")

let loLevel = document.getElementById("loLevel")

let unLevel = document.getElementById("unLevel")

function changePoint(amount) {

  points = points + amount

  document.getElementById("points").innerText = points.toFixed(0) + " Diamonds"

}
function buyAxe() {
  console.log('Hi from buyAxe')
  if (points >= 10) {
    // purchase axe
    changePoint(-10)
    axe = axe + 1
    aLevel.innerText = "level " + axe
  }
  else {
    alert("Get a job")
  }
}

function buySword() {
  console.log('Hi from buySword')
  if (points >= 20) {
    // purchase sword
    changePoint(-20)
    sword = sword + 1
    sLevel.innerText = "level " + sword
  }
  else {
    alert("Get a job")
  }
}
function buyBow() {
  console.log('Hi from buySword')
  if (points >= 50) {
    // purchase sword
    changePoint(-50)
    bow = bow + 1
    bLevel.innerText = "level " + bow
  }
  else {
    alert("Get a job")
  }
}
function buyPickaxe() {
  console.log('Hi from buyPickaxe')
  if (points >= 100) {
    // purchase sword
    changePoint(-100)
    pickaxe = pickaxe + 1
    pLevel.innerText = "level " + pickaxe
  }
  else {
    alert("Get a job")
  }
}
function buySharpness() {
  console.log('Hi from buySharpness')
  if (points >= 4000) {
    // purchase sharpness
    changePoint(-4000)
    sharp = sharp + 1
    shLevel.innerText = "level " + sharp
  }
  else {
    alert("Get a job")
  }
}
function buyFire() {
  console.log('Hi from buyFire')
  if (points >= 10000) {
    // purchase fire
    changePoint(-10000)
    fire = fire + 1
    fLevel.innerText = "level " + fire
  }
  else {
    alert("Get a job")
  }
}

function buyLooting() {
  console.log('Hi from buyLooting')
  if (points >= 20000) {
    // purchase looting
    changePoint(-20000)
    looting = looting + 1
    loLevel.innerText = "level " + looting
  }
  else {
    alert("Get a job")
  }
}
function buyUnbreaking() {
  console.log('Hi from buyUnbreaking')
  if (points >= 40000) {
    // purchase unbreaking
    changePoint(-40000)
    unbreaking = unbreaking + 1
    unLevel.innerText = "level " + unbreaking
  }
  else {
    alert("Get a job")
  }
}

function bigclick() {

  let basePoint = 1 + (axe ** 1.05) + (sword ** 1.5)

  changePoint(basePoint)
}