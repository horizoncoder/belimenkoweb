const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-shot');
const character = {
    name: 'Pikachu',
    defaultHP:100,
    damageHP:100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
};
const enemy = {
    name: 'Charmander',
    defaultHP:100,
    damageHP:100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
};
$btn.addEventListener('click', function() {
    console.log('Kick');
    changeHP.call(character, random(20));
    changeHP.call(enemy, random(20));
});
$btn1.addEventListener('click', function() {
    console.log('Ulta');
    changeHP.call(character, random(100));
    changeHP.call(enemy, random(100));
});
function init() {
    console.log('Start Game!');
    renderHP.call(character);
    renderHP.call(enemy);
}
function renderHP(){
    renderHPLife.call(this);
    renderProgressbarHP.call(this);
}
function renderHPLife(){
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}
function renderProgressbarHP(){
    this.elProgressbar.style.width = this.damageHP + '%';
}
function changeHP(count){
    if(this.damageHP<count){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
    
    renderHP.call(this);
}
function random(num){
    return Math.ceil(Math.random()*num);
}
init();