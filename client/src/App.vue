<template>

<nav>
  <div class="nav-wrapper blue darken-1">
    <a href="#" class="brand-logo center">UP SPORTS - BET</a>
  </div>
</nav>

<div class="container">

  <form>

      <label>Nome</label>
      <input type="text" placeholder="ex: Matheus">
      <label>Função no Trabalho</label>
      <input type="text" placeholder="ex: Web Developer">
      <label>Salário</label>
      <input type="number" placeholder="ex: 2000">
      <label>ID do Funcionário</label>
      <input type="number" placeholder="ex: 8764778">

      <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

  </form>

  <table>

    <thead>

      <tr>
        <th>NOME</th>
        <th>FUNÇÃO</th>
        <th>SALÁRIO</th>
        <th>OPÇÕES</th>
      </tr>

    </thead>

    <tbody>

      <tr>

        <td>Matheus</td>
        <td>Web Developer</td>
        <td>2000</td>
        <td>
          <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
          <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
        </td>

      </tr>

    </tbody>
  
  </table>

</div>

</template>

<script>

</script>

<style>

</style>
