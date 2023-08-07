
document.addEventListener("DOMContentLoaded", function() {
const container = document.getElementById("container");
// Pętla do utworzenia pięciu elementów div
for (var i = 1; i <= 5; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dynamic-div");
    newDiv.textContent = "To jest div #" + i;

    // Dodajemy nowy div do kontenera
    container.appendChild(newDiv);
}
})