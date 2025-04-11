// Vida dos pokemons

let VidaPikachu = 80;
let VidaCharmander = 80;

// rodadas

let rodada = 1;

// Ataques dos pokemons

let ThunderShock = 0;
let FlareBlitz = 0;

// Inicio do while
while(VidaPikachu >= 0 && VidaCharmander >= 0){
    console.log(`🔁Rodada`, rodada)

// Danos dos ataques 
    ThunderShock = Math.floor(Math.random(8) * 28)
    FlareBlitz = Math.floor(Math.random(10) * 25)

// Comeco da trocacao de ataque

    VidaPikachu = VidaPikachu - FlareBlitz
    VidaCharmander = VidaCharmander - ThunderShock

// danos da rodada

    console.log(`Chamander usou 🔥Flare Blitz e deu ${FlareBlitz} de dano! `)
    console.log(`Pikachu usou ⚡Thunder Shock e deu ${ThunderShock} de dano! `)

// Vida pos dano recebido

    console.log(`❤️ A vida do Pikachu é de ${VidaPikachu}`)
    console.log(`❤️ A vida do Charmander é de ${VidaCharmander}`)
    console.log(`-------------------------------------------------`)
rodada++;
}
// declarando o vencedor da batalha

if(VidaCharmander <= 0 && VidaPikachu <= 0){
    console.log(`A batalha terminou em empate!`)

}else if(VidaCharmander > 0 ){
    console.log(`🏆 Charmander torrou o Pikachu e leva a vitória!`)
}else{
    console.log(`🏆 Pikachu vence a batalha com um trovão final!`)
}

// João Victor 11/04/2025
