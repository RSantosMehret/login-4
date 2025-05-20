function criarConta() {
  let usuario = prompt("Digite o nome de usuário (mínimo 5 caracteres):");

  while (!usuario || usuario.length < 5) {
    alert("O nome de usuário deve ter no mínimo 5 caracteres.");
    usuario = prompt("Digite o nome de usuário novamente:");
  }

  let senha = prompt("Digite a senha (mínimo 8 caracteres):");

  while (!senha || senha.length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres.");
    senha = prompt("Digite a senha novamente:");
  }

  alert(`Conta criada com sucesso!\nUsuário: ${usuario}`);
}
