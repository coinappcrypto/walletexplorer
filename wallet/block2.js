// Sağ tıklamayı engelle
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Belirtilen kısayolları engelle
document.addEventListener("keydown", function(e) {
    // Ctrl + U (Kaynak Kodunu Görüntüle)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
    // F12 (Geliştirici Araçlarını Aç)
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Ctrl + Shift + I (Geliştirici Araçlarını Aç)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Ctrl + Shift + J (Konsolu Aç)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
    // Ctrl + P (Sayfayı Yazdırma)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
    }
    // Ctrl + S (Sayfayı Kaydetme)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
    }
    // Ctrl + F (Sayfa İçinde Arama)
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
    }
    // Ctrl + Shift + C (Element Seçici)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
    // Ctrl + Shift + E (Ağ Sekmesi)
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
    }
    // Ctrl + Shift + R (Önbellek Temizle ve Yeniden Yükle)
    if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
    }
    // F5 (Sayfayı Yenile)
    if (e.key === 'F5') {
        e.preventDefault();
    }
    // Ctrl + R (Sayfayı Yenile)
    if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
    }
    // Ctrl + H (Tarayıcı Geçmişini Görüntüle)
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
    }
});