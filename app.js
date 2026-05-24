const content =
document.getElementById("content");

function anaSayfa(){

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

<div class="match-card">

<div class="league">
Süper Lig
</div>

<div class="teams logos">

<div class="team">

<div class="team-logo">
🟡🔴
</div>

<span>
Galatasaray
</span>

</div>

<div class="vs">
VS
</div>

<div class="team">

<div class="team-logo">
🟡🔵
</div>

<span>
Fenerbahçe
</span>

</div>

</div>

<div class="prediction">
AI Tahmini:
<b>2.5 ÜST 🔥</b>
</div>

</div>

<div class="match-card">

<div class="league">
Premier League
</div>

<div class="teams logos">

<div class="team">

<div class="team-logo">
🔵
</div>

<span>
Manchester City
</span>

</div>

<div class="vs">
VS
</div>

<div class="team">

<div class="team-logo">
🔴
</div>

<span>
Arsenal
</span>

</div>

</div>

<div class="prediction">
AI Tahmini:
<b>KG VAR ✅</b>
</div>

</div>

<div class="match-card">

<div class="league">
La Liga
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

<div class="vs">
VS
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
AI Tahmini:
<b>MS1 ⚽</b>
</div>

</div>

`;

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
67'
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
