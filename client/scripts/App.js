const App = {
  name: "App",
  template: `
    <div>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/shop">Каталог</router-link>
        <router-link to="/product">Продукт</router-link>
        <router-link to="/order">Корзина</router-link>
      </nav>

      <p>*Нажимайте на ссылки для перехода между компонентами.</p>

      <router-view></router-view>
    </div>
  `
};

export default App;