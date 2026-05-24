const content =
document.getElementById("content");

const apiKey =
"8fc952c2878440478c5aea4fbc80d5b5";

async function anaSayfa(){

content.innerHTML =
"<p style='text-align:center'>Yükleniyor...</p>";

try{

const response = await fetch(
"https://corsproxy.io/?https://api.football-data.org/v4/matches",
{
headers:{
"X-Auth-Token": apiKey
}
}
);

const data =
await response.json();

content.innerHTML = `

<div class="hero-card">

<h2>🔥 Günün Bankosu</h2>

<p>
Galatasaray vs Fenerbahçe
</p>

<div class="hero-rate">
%92 AI Güven
</div>

</div>

`;

data.matches.slice(0,6).forEach(mac=>{

content.innerHTML += `

<div class="match-card">

<div class="league">
${mac.competition.name}
</div>

<div class="teams logos">

<div class="team">

<div class="team-logo">
⚽
</div>

<span>
${mac.homeTeam.name}
</span>

</div>

<div class="vs">
VS
</div>

<div class="team">

<div class="team-logo">
🏆
</div>

<span>
${mac.awayTeam.name}
</span>

</div>

</div>

<div class="prediction">

AI Tahmini:
<b>2.5 ÜST 🔥</b>

</div>

<div class="odds">

<div class="odd-box">

<div class="odd-title">
MS1
</div>

<div class="odd-value">
1.85
</div>

</div>

<div class="odd-box">

<div class="odd-title">
X
</div>

<div class="odd-value">
3.20
</div>

</div>

<div class="odd-box">

<div class="odd-title">
MS2
</div>

<div class="odd-value">
2.10
</div>

</div>

</div>

</div>

`;

});

}catch(error){

content.innerHTML = `

<div class="match-card">

<h2>API Hatası ❌</h2>

<p>
API bağlantısı kurulamadı.
</p>

</div>

`;

console.log(error);

}

}

function canli(){

content.innerHTML = `

<div class="match-card live-card">

<div class="live-top">

<div>

<span class="live-dot"></span>

<span class="live-text">
CANLI
</span>

</div>

<div id="dakika">
67'
</div>

</div>

<div class="teams logos">

<div class="team">

<div class="team-logo">
🔵🔴
</div>

<span>Barcelona</span>

</div>

<div id="score">
2 - 1
</div>

<div class="team">

<div class="team-logo">
⚪
</div>

<span>Real Madrid</span>

</div>

</div>

<div class="prediction">

AI Canlı Tahmin:
<b>Sonraki Gol Barcelona ⚽</b>

</div>

</div>

`;

}

function kupon(){

content.innerHTML = `

<div class="match-card">

<h2>🎫 Günün Kuponu</h2>

<br>

<p>Galatasaray Kazanır</p>

<p>2.5 ÜST</p>

<p>KG VAR</p>

<br>

<b>Toplam Oran: 5.42</b>

</div>

`;

}

function profil(){

content.innerHTML = `

<div class="match-card">

<h2>👤 Profil</h2>

<br>

<p>Kullanıcı: Premium Üye</p>

<p>VIP Tahminler: Açık</p>

<p>Bildirimler: Açık</p>

</div>

`;

}

anaSayfa();

document.querySelectorAll(".nav-item")[0]
.onclick = anaSayfa;

document.querySelectorAll(".nav-item")[1]
.onclick = canli;

document.querySelectorAll(".nav-item")[2]
.onclick = kupon;

document.querySelectorAll(".nav-item")[3]
.onclick = profil;
