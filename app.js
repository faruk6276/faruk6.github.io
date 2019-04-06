/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game

*/
let score,roundScore,activeplayer,gameplay;
first();
document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gameplay=='true'){
    let dice=Math.floor(Math.random()*6)+1;

    let images=document.querySelector('.dice');
    images.style.display='block';
    images.src='dice-'+dice+'.png';
    if(dice!==1){
      roundScore += dice;
    console.log(roundScore);
    document.getElementById('current-'+activeplayer).textContent=roundScore;
    }else{
      roundScore=0;
      document.getElementById('current-'+activeplayer).textContent=roundScore;
      toggle();
    }
  }

});
document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gameplay=='true'){
    score[activeplayer] += roundScore;
  document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
  if(score[activeplayer]>=50){
    document.getElementById('name-'+activeplayer).textContent="Winner!";
    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
      document.getElementById('current-'+activeplayer).textContent=0;
    document.querySelector('.dice').style.display='none';
     gameplay='false';
  }
  else{
    roundScore=0;
    document.getElementById('current-'+activeplayer).textContent=roundScore;
    toggle();
  }
  }
});
document.querySelector(".btn-new").addEventListener('click',first);

function first(){
  score=[0,0];
  roundScore=0;
  activeplayer=0;
  gameplay='true';
  document.getElementById('current-0').textContent=0;
  document.getElementById('current-1').textContent=0;
  document.getElementById('score-0').textContent=0;
  document.getElementById('score-1').textContent=0;
  document.getElementById('name-0').textContent="Player 1";
  document.getElementById('name-1').textContent="Player 2";
  document.querySelector('.dice').style.display='none';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
}
function toggle(){
  activeplayer === 0 ? activeplayer=1 :activeplayer=0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}
