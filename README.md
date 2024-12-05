# Sorteio de Amigos 🎉

Este projeto permite que você adicione amigos a uma lista e, em seguida, faça um sorteio aleatório de como os amigos serão agrupados. Além disso, ele realiza algumas validações para garantir que o nome não seja repetido na lista e que o usuário não adicione nomes vazios. 

## Funcionalidades 🛠️

- **Adicionar Amigo**: Permite adicionar amigos à lista, mas verifica se o nome não está vazio e se não é repetido. Caso um nome repetido seja inserido, ele é automaticamente convertido para minúsculas. 
- **Sorteio**: O sorteio é feito aleatoriamente e agrupa os amigos na tela. O algoritmo Fisher-Yates é utilizado para garantir que a ordem seja aleatória. 
- **Reiniciar**: O botão "Reiniciar" limpa a lista de amigos e sorteios, permitindo que o usuário comece novamente. 

## Como usar 💡

1. **Adicionar Amigos**: Digite o nome de um amigo no campo de texto e clique em "Adicionar". Se o nome já estiver na lista, ele será automaticamente convertido para minúsculas. Se o campo estiver vazio, será exibido um alerta. 
2. **Sortear**: Após adicionar os amigos, clique em "Sortear" para ver o resultado do sorteio. A ordem dos amigos será embaralhada e exibida na tela. 
3. **Reiniciar**: Clique no botão "Reiniciar" para limpar as listas e começar de novo. 

## Tecnologias usadas 🧑‍💻

- HTML 
- JavaScript (com algoritmo Fisher-Yates para embaralhamento) 
- CSS (para estilo simples) 
