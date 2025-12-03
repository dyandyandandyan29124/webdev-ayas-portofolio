const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
    console.log("Tombol warna diklik");
    document.body.classList.toggle("dark-mode");
});

const sayHelloBtn = document.getElementById("sayHello");
sayHelloBtn.addEventListener("click", () => {
    console.log("Tombol sapa diklik");
    const name = prompt("Siapa nama Anda?");
    if (name) {
        document.getElementById("greeting").innerText = `Halo, ${name}! Senang bertemu denganmu.`
    }
});