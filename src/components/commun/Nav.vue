<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-4">FIT IT Blog</strong>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
          <div class="buttons">
          <!-- Check that the SDK client is not currently loading before accessing is methods-->
          <div>
            <!-- show login when not authenticated -->
            <a v-if="!isLoggedIn" @click="login" class="button is-dark"><strong>Sign in</strong></a>
            <!-- show logout when authenticated -->
            <a v-if="isLoggedIn" @click="logout" class="button is-dark"><strong>Log out</strong></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthService from '@/services/AuthService'

@Component({
    components: {
  },
})

export default class Nav extends Vue{
public currentUser: any;
public accessTokenExpired: boolean | undefined = false;
public isLoggedIn: boolean= false;
private auth0!: AuthService;

  get username(): string {
    return this.currentUser;
  }

  public login() {
    this.auth0.login();
  }

  public logout() {
      this.auth0.logoutcustom(); 
  //  auth.logout();
  }

  public created() {
    this.auth0=new AuthService();
    this.auth0.getUser().then((user) => {
      if (user !== null){
      this.currentUser = user.profile.name;
      this.accessTokenExpired = user.expired;
      }
      this.isLoggedIn = (user !== null && !user.expired);
    });
   document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
  }


}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }  
  } 
</style>