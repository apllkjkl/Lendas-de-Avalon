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
        historia_personagem.innerHTML = '<b>Aparência:</b> Renatinho tem a pele azulada, que contrastam com seus olhos vermelhos e brilhantes.' + "<hr><b> Personalidade:</b> Renatinho é um personagem sombrio e misterioso, que raramente fala com os outros. Ele tem uma obsessão pela morte e pela magia negra, e busca desvendar os segredos da vida e da morte. Ele é cruel e impiedoso com seus inimigos, e não hesita em usar seus poderes necromânticos para controlar cadáveres e almas. Ele tem poucos amigos, mas é leal aos que o respeitam e o ajudam em sua busca." + " <hr> <b>Habilidades:</b> É um necromante habilidoso, capaz de invocar e manipular os mortos, reanimar cadáveres, esqueletos e outras criaturas mortas-vivas e lançar maldições. Ele usa um cajado feito de ossos como sua arma principal, e carrega uma adaga envenenada."
    }
    if (personagem_escolhido == 'corvo') {
        nome_personagem.innerHTML = 'Asmodeus'
        historia_personagem.innerHTML = ' <b>Aparência:</b> Asmodeus é um corvo de penas negras e brilhantes. Ele também usa um colete de couro com vários bolsos, onde ele guarda suas ferramentas e tesouros.'+"<hr><b>Personalidade:</b> Astuto e aventureiro, adora explorar lugares novos e encontrar objetos valiosos. Ele é divertido e brincalhão, mas sabe ser sério e cauteloso quando necessário. Ele é muito inteligente e observador, capaz de resolver enigmas e armadilhas com facilidade. Ele tem um senso de humor sarcástico e irônico, que às vezes pode irritar os outros. "+ "<hr> <b>Habilidades:</b> Corvus é um ladrão habilidoso, capaz de se infiltrar em lugares protegidos e roubar objetos sem ser notado. Ele pode usar sua forma de corvo para voar, se esconder ou distrair os guardas. Ele também pode usar sua voz para imitar sons ou falar com outras aves. "
    }
    if (personagem_escolhido == 'mago') {
        nome_personagem.innerHTML = 'Mago'
        historia_personagem.innerHTML = "<b>Aparência:</b>Mago alto e esguio, com barba longa que fluem como cascata quando ele conjura feitiços.Ele se veste com um manto de tons de vermelho e prata, decorado com símbolos mágicos bordados que parecem ganhar vida à medida que ele canaliza seu poder."+ "<hr><b>Personalidade:</b>Enigmático e introspectivo.Ele é leal aos amigos e aliados, disposto a usar suas habilidades para protegê-los. "+"<hr><b>1.Magias Elementais:</b> Elarion pode controlar os elementos, lançando rajadas de fogo, relâmpagos ou criando escudos de gelo para se proteger.<br><b>2.Leitura de Mentes:</b> Com sua magia mental, ele pode sondar os pensamentos e intenções dos outros, tornando-o um diplomata perspicaz. <br><b>3.Ilusões:</b> Elarion é hábil na criação de ilusões complexas que podem confundir e enganar seus inimigos."
    }
    if (personagem_escolhido == 'sapo') {
        nome_personagem.innerHTML = 'Sapo'
        historia_personagem.innerHTML = "<b>Aparência:</b>Glib é um sapo de tamanho incomum, com uma pele verde vibrante salpicada de manchas douradas. Seus olhos são grandes e redondos, com íris brilhantes que lembram esmeraldas. Ele tem uma língua extensível que usa para pegar insetos e outros pequenos alimentos."+"<hr><b>Personalidade:</b>Excêntrica e astuta. Ele é curioso e tem um senso de humor peculiar, Apesar de sua aparência incomum, ele é inteligente e perspicaz, tomando decisões estratégicas e resolvendo problemas com criatividade."+"<hr><b>Metamorfose Mágica:</b>Pode se transformar em outras criaturas ou objetos de tamanho semelhante. Essa habilidade lhe permite passar despercebido e explorar áreas de difícil acesso."
    }
    if (personagem_escolhido == 'cavaleiro') {
        nome_personagem.innerHTML = 'Ragnar'
        historia_personagem.innerHTML = "<b>Aparência:</b>Guerreiro viking robusto e imponente, com uma altura acima da média e uma figura atlética. Sua pele é bronzeada pelo sol.Ele tem barba longa e se veste com uma armadura antiga, decorada com runas místicas, e carrega um machado de guerra ornamentado."+"<hr><b>Personalidade:</b>Guerreiro valente, leal aos seus companheiros e dedicado ao seu clã, conhecido por seu senso de justiça e honra.Tem um coração generoso e cuida daqueles que o cercam fora do campo de batalha."+"<hr><b>Proficiência em Armas:</b>Mestre em combate corpo a corpo, especializado em machados e espadas vikings. <br><b>Resistência Viking:</b>Possui uma resistência extraordinária, capaz de suportar ferimentos que incapacitariam outros guerreiros."
    }
}
