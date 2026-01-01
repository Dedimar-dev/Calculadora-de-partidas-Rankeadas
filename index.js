let heroisVitoriasDerrotas = [
  ["Heroi_1", 120, 20 ],
  ["Heroi_2", 100, 15 ],
  ["Heroi_3", 90, 20 ],
  ["Heroi_4", 115, 10 ],
  ["Heroi_5", 70, 25 ],
  ["Heroi_6", 20, 11 ],
  ["Heroi_7", 30, 12 ]

]

for(let i = 0; i < heroisVitoriasDerrotas.length; i++){

  console.log(vitoriasDerrotas(heroisVitoriasDerrotas[i][1], 
                              heroisVitoriasDerrotas[i][2]))

}


function vitoriasDerrotas(vitorias, derrotas){
  let saldoVitorias = vitorias - derrotas
  let nivel = ""

  switch(true){

    case saldoVitorias <  10: 
     nivel = "Ferro"
     return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`

    case saldoVitorias >= 11 && saldoVitorias <= 20:
      nivel = "Bronze"
      return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`

    case saldoVitorias >= 21 && saldoVitorias <= 50: 
      nivel = "Prata"
      return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`

    case saldoVitorias >= 51 && saldoVitorias <=  80:
      nivel = "Ouro"
      return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`

    case saldoVitorias >= 81 && saldoVitorias <=  90: 
      nivel = "Diamante"
      return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`

    case saldoVitorias >= 91 && saldoVitorias <= 100:
      nivel = "Lendário"
      return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`

    case saldoVitorias >= 101:
      nivel = "Imortal"
      return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  }
}