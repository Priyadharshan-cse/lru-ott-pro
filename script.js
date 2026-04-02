let capacity = 3;
let memory = [];
let removed = "None";

function watch(movie) {

  // 🔊 sound
  let sound = document.getElementById("clickSound");
  if (sound) sound.play();

  document.getElementById("current").innerText = movie;

  if (memory.includes(movie)) {
    memory = memory.filter(m => m !== movie);
  }

  if (memory.length >= capacity) {
    removed = memory.shift();
  } else {
    removed = "None";
  }

  memory.push(movie);

  updateUI();
}

function updateUI() {
  let memDiv = document.getElementById("memory");
  memDiv.innerHTML = "";

  memory.forEach(m => {
    let box = document.createElement("div");
    box.innerText = m;
    memDiv.appendChild(box);
  });

  document.getElementById("removed").innerText = removed;
}