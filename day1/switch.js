const result = prompt('Escolha uma fruta:\na) uva\nb) kiwi\nc) melancia')

switch (result) {
  case 'uva':
    alert('Não vendemos essa fruta aqui!')
    break
  case 'kiwi':
    alert('Estamos com escassez de kiwis.')
    break
  case 'melancia':
    alert('Aqui está, são 3 reais o quilo.')
    break
  default:
    alert('Nehnhuma das opções...')
}
