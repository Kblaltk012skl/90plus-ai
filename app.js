const content =
document.getElementById("content");

async function anaSayfa(){

content.innerHTML =
"<p style='text-align:center'>Yükleniyor...</p>";

try{

const response = await fetch(
"https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.json"
);

const data =
await response.json();

content.innerHTML = "";

data.matches.slice(0,10).forEach(mac=>{

content.innerHTML += `

<div class="match-card">

<div class="league">
Premier League
</div>

<div class="teams logos">

<div class="team">

<div class="team-logo">
⚽
</div>

<span>
${mac.team1}
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
${mac.team2}
</span>

</div>

</div>

<div class="prediction">

AI Tahmini:
<b>KG VAR 🔥</b>

</div>

</div>

`;

});

}catch(error){

content.innerHTML = `

<div class="match-card">

<h2>Hata ❌</h2>

<p>Maçlar yüklenemedi.</p>

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

<div>
72'
</div>

</div>

<div class="teams logos">

<div class="team">

<div class="team-logo">
🔵🔴
</div>

<span>
Barcelona
</span>

</div>

<div id="score">
2 - 1
</div>

<div class="team">

<div class="team-logo">
⚪
</div>

<span>
Real Madrid
</span>

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

<p>Galatasaray Kazanır</p>

<p>KG VAR</p>

<p>2.5 ÜST</p>

<br>

<b>Toplam Oran: 5.42</b>

</div>

`;

}

function profil(){

content.innerHTML = `

<div class="match-card">

<h2>👤 Profil</h2>

<p>Premium Üye</p>

<p>VIP Tahminler Açık</p>

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
