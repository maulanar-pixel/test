const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
// Menambahkan tugas
function addTask() {
    // Kalau input kosong
    if (inputbox.value.trim() === "") {
        alert("Kamu harus menulis sesuatu!");
        return;
    }
    // Membuat LI
    const li = document.createElement("li");
    // Memasukkan teks tugas
    li.textContent = inputbox.value.trim();
    // Membuat tombol hapus
    const span = document.createElement("span");
    span.textContent = "×";
    // Memasukkan tombol hapus ke LI
    li.appendChild(span);
    // Memasukkan LI ke UL
    listcontainer.appendChild(li);
    // Mengosongkan input
    inputbox.value = "";
    // Menyimpan data
    saveData();
}
// KLIK TUGAS / HAPUS TUGAS
listcontainer.addEventListener("click", function(event) {

    // Kalau yang diklik adalah tugas
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    }
    // Kalau yang diklik adalah tombol X
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
});
// Menyimpan data
function saveData() {
    localStorage.setItem(
        "data",
        listcontainer.innerHTML
    );
}
// Menampilkan data
function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listcontainer.innerHTML = savedData;
    } else {
        listcontainer.innerHTML = "";
    }
}
// Enter
inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
// localStorage.removeItem("data");
// Jalankan saat halaman dibuka
showTask();