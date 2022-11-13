<template>
 <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand">UP SPORTS BET</a>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Criar Novo Funcionário</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lista">Lista de todos os Funcionários</router-link>
          </li>
        </ul>

      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>

</template>

