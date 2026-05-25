const content =
document.getElementById("content");

const apiKey =
"1mdJzL0o4c4FBNlkgUXzLm:42svR4LrIQ93xyeBlCQHEp";

async function anaSayfa(){

content.innerHTML =
"<p style='text-align:center'>Canlı maçlar yükleniyor...</p>";

try{

const response = await fetch(
"https://api.sportsrc.org/v2/soccer/matches",
{
headers:{
"Authorization": apiKey
}
}
);

const data =
await response.json();

content.innerHTML = "";

data.data.slice(0,10).forEach(mac=>{

content.innerHTML += `

<div class="match-card">

<div class="league">
${mac.league}
</div>

<div class="teams logos">

<div class="team">

<div class="team-logo">
⚽
</div>

<span>
${mac.home_team}
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
${mac.away_team}
</span>

</div>

</div>

<div class="prediction">

<b>
${mac.status}
</b>

</div>

</div>

`;

});

}catch(error){

content.innerHTML = `

<div class="match-card">

<h2>API Hatası ❌</h2>

<p>
Canlı maçlar çekilemedi.
</p>

</div>

`;

console.log(error);

}

}

function canli(){

anaSayfa();

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
