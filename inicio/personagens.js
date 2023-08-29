var bixo = document.getElementById('bixo').addEventListener("mouseenter", escolher_personagem)
var corvo = document.getElementById('corvo').addEventListener("mouseenter", escolher_personagem)
var mago = document.getElementById('mago').addEventListener("mouseenter", escolher_personagem)
var sapo = document.getElementById('sapo').addEventListener("mouseenter", escolher_personagem)
var cavaleiro = document.getElementById('cavaleiro').addEventListener("mouseenter", escolher_personagem)

var nome_personagem = document.getElementById('nome_personagem')
var historia_personagem = document.getElementById('historia_personagem')

function escolher_personagem() {
    var personagem_escolhido = this.id

    if (personagem_escolhido == 'bixo') {
        nome_personagem.innerHTML = 'Renatinho'
        historia_personagem.innerHTML = '<b>Aparência:</b> Renatinho tem a pele azulada, que contrastam com seus olhos vermelhos e brilhantes.' + "<br> <br><b> Personalidade:</b> Renatinho é um personagem sombrio e misterioso, que raramente fala com os outros. Ele tem uma obsessão pela morte e pela magia negra, e busca desvendar os segredos da vida e da morte. Ele é cruel e impiedoso com seus inimigos, e não hesita em usar seus poderes necromânticos para controlar cadáveres e almas. Ele tem poucos amigos, mas é leal aos que o respeitam e o ajudam em sua busca." + " <br> <br> <b>Habilidades:</b> É um necromante habilidoso, capaz de invocar e manipular os mortos, reanimar cadáveres, esqueletos e outras criaturas mortas-vivas e lançar maldições. Ele usa um cajado feito de ossos como sua arma principal, e carrega uma adaga envenenada."
    }
    if (personagem_escolhido == 'corvo') {
        nome_personagem.innerHTML = 'Asmodeus'
        historia_personagem.innerHTML = ' <b>Aparência:</b> Asmodeus é um corvo de penas negras e brilhantes. Ele também usa um colete de couro com vários bolsos, onde ele guarda suas ferramentas e tesouros.'+"<br> <br><b>Personalidade:</b> Astuto e aventureiro, adora explorar lugares novos e encontrar objetos valiosos. Ele é divertido e brincalhão, mas sabe ser sério e cauteloso quando necessário. Ele é muito inteligente e observador, capaz de resolver enigmas e armadilhas com facilidade. Ele tem um senso de humor sarcástico e irônico, que às vezes pode irritar os outros. "+ "Habilidades: Corvus é um ladrão habilidoso, capaz de se infiltrar em lugares protegidos e roubar objetos sem ser notado. Ele pode usar sua forma de corvo para voar, se esconder ou distrair os guardas. Ele também pode usar sua voz para imitar sons ou falar com outras aves. Ele tem conhecimentos sobre geografia, história, arte e cultura, que ele usa para identificar e avaliar os itens que ele encontra. Ele usa sua adaga como sua arma principal, mas também pode usar armas improvisadas ou arremessadas, como pedras, moedas ou facas."
    }
    if (personagem_escolhido == 'mago') {
        nome_personagem.innerHTML = 'Mago'
        historia_personagem.innerHTML = ''
    }
    if (personagem_escolhido == 'sapo') {
        nome_personagem.innerHTML = 'Sapo'
        historia_personagem.innerHTML = ''
    }
    if (personagem_escolhido == 'cavaleiro') {
        nome_personagem.innerHTML = 'Ragnar'
        historia_personagem.innerHTML = ''
    }
}
