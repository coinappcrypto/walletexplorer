// Sağ tıklamayı engelleme
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Sağ tıklama menüsünü engeller
});

// F12 tuşu ve sağ tıklama engellemeleri
document.addEventListener("keydown", function(event) {
    // F12 tuşu engelleme
    if (event.key === "F12") {
        event.preventDefault();
    }

    // CTRL + Shift + I (Geliştirici araçları açma)
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
    }

    // CTRL + Shift + J (Geliştirici araçları açma)
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
        event.preventDefault();
    }

    // CTRL + U (Sayfa Kaynağını Görüntüleme)
    if (event.ctrlKey && event.key === "U") {
        event.preventDefault();
    }
});

// console.log, console.warn, console.error gibi işlevlerini engelleme
if (typeof console !== "undefined") {
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
}
// Metin seçimini engelle
document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(event) {
    // Ctrl + U kısayolunu engelle
    if (event.ctrlKey && event.key === "u") {
        event.preventDefault();
    }
});
(function () {
    const isChrome = /Chrome/.test(navigator.userAgent) && !/Edge|Edg|OPR|Brave/.test(navigator.userAgent);
    if (!isChrome) {
        document.body.innerHTML = "<h1>please use google chrome!!!</h1>";
        document.body.style.cssText = "display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; background-color: #0d1117; color: #c9d1d9; text-align: center;";
    }
})();

// Geliştirici araçlarının açıldığını algılayarak sayfayı boşaltma
(function() {
    let devtools = /./;
    devtools.toString = function() {
        window.location.href = "about:blank"; // Geliştirici araçları açıldığında sayfayı boşalt
    };
    setInterval(function() {
        console.log(devtools);
    }, 1000);
})();
