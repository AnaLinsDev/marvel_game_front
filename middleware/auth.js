export default function ({ store, redirect, route }) {
  // não logado e nao está na tela login/registro
  if (!store.state.user.loggedIn && route.name != "index") {
    return redirect("/");
  }

  // logado e está na tela de login/registro
  if (store.state.user.loggedIn && route.name == "index") {
    return redirect("/game/config");
  }
}
