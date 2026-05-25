// API Bilgileri ve Sizin Özel Anahtarınız
const apiKey = "1mdJzL0o4c4FBNlkgUXzLm:42svR4LrIQ93xyeBlCQHEp";
// Tarayıcı engelini aşan doğrudan ve güncel bir CORS köprüsü ekledik
const apiUrl = "https://allorigins.win" + encodeURIComponent("https://collectapi.com");

// HTML'deki maç listesi alanını seçiyoruz
const macListesiAlani = document.getElementById("mac-listesi");

// API'den verileri çeken fonksiyon
async function maclariGetir() {
    try {
        const response = await fetch(apiUrl);
        const wrapperData = await response.json();
        
        // Köprü sunucudan gelen gerçek metni JSON formatına çeviriyoruz
        const data = JSON.parse(wrapperData.contents);

        // İstek başarılı olduysa ve veri geldiyse
        if (data.success && data.result) {
            // Yükleniyor yazısını temizle
            macListesiAlani.innerHTML = "";

            // Her bir maçı döngüyle HTML içerisine yazdır
            data.result.forEach(mac => {
                const macKarti = `
                    <div class="mac-kart">
                        <div class="takim ev-sahibi">${mac.home || 'Ev Sahibi'}</div>
                        <div class="skor-kutusu">${mac.skor || 'v'}</div>
                        <div class="takim deplasman">${mac.away || 'Deplasman'}</div>
                    </div>
                `;
                macListesiAlani.innerHTML += macKarti;
            });
        } else {
            hataGoster("Maç verileri şu anda alınamadı. API kotanızı veya anahtarınızı kontrol edin.");
        }

    } catch (error) {
        console.error("Hata oluştu:", error);
        hataGoster("Bağlantı hatası! Kodlar yüklenemedi.");
    }
}

// Hata mesajını ekrana basan yardımcı fonksiyon
function hataGoster(mesaj) {
    macListesiAlani.innerHTML = `
        <div class="hata-ekrani">
            <p>⚠️ ${mesaj}</p>
        </div>
    `;
}

// Sayfa yüklendiğinde otomatik olarak fonksiyonu çalıştır
window.addEventListener("DOMContentLoaded", maclariGetir);
