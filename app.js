// API Bilgileri ve Sizin Özel Anahtarınız
const apiKey = "1mdJzL0o4c4FBNlkgUXzLm:42svR4LrIQ93xyeBlCQHEp";
const apiUrl = "https://allorigins.win" + encodeURIComponent("https://collectapi.com");

async function maclariGetir() {
    try {
        const response = await fetch(apiUrl);
        const wrapperData = await response.json();
        const data = JSON.parse(wrapperData.contents);

        if (data.success && data.result) {
            // Sizin kendi index.html dosyanızda alt menünün (Ana Sayfa, Canlı, Kupon) 
            // hemen üstünde yer alan ana kapsayıcıyı seçiyoruz.
            // Eğer sitenizde boş kalan kısmın sınıfı farklıysa burayı güncelleyebilirsiniz.
            let anaKapsayici = document.querySelector('.app-container') || document.body;

            // Maçları eklemek için yeni bir liste alanı oluşturuyoruz
            const listeDiv = document.createElement('div');
            listeDiv.style.cssText = "display:flex; flex-direction:column; gap:12px; padding:20px; max-width:650px; margin:0 auto; margin-bottom:80px;";

            data.result.forEach(mac => {
                listeDiv.innerHTML += `
                    <div style="display:flex; justify-content:space-between; align-items:center; background:#161b22; padding:15px 20px; border-radius:10px; border:1px solid #30363d;">
                        <div style="width:40%; font-weight:600; font-size:15px; color:#f0f6fc; text-align:right;">${mac.home || 'Ev Sahibi'}</div>
                        <div style="width:18%; text-align:center; background:#1f883d; color:#ffffff; border-radius:6px; padding:6px 0; font-weight:bold; font-size:16px;">${mac.skor || 'v'}</div>
                        <div style="width:40%; font-weight:600; font-size:15px; color:#f0f6fc; text-align:left;">${mac.away || 'Deplasman'}</div>
                    </div>
                `;
            });

            // Alt menü butonlarının (Navigasyon barının) üzerine gelecek şekilde yerleştir
            const navBar = document.querySelector('footer') || document.querySelector('[style*="position: fixed"]');
            if (navBar) {
                anaKapsayici.insertBefore(listeDiv, navBar);
            } else {
                anaKapsayici.appendChild(listeDiv);
            }
        }
    } catch (error) {
        console.error("Hata:", error);
    }
}

window.addEventListener("DOMContentLoaded", maclariGetir);
