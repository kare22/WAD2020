<template>
  <div class="login-page">
    <div id="login-container">
      <div>
        <h5>Welcome to postIt!</h5>
      </div>
      <div>
        <h4>
          <button class="btn btn-link create-account">Create an Account</button>
        </h4>
      </div>
      <div>
        <h4>Or</h4>
      </div>
      <div>
        <h3>Please Log In</h3>
        <form>
          <div>
            <input class="form-control" type="text" name="email" placeholder="Email">
          </div>
          <div>
            <input class="form-control" type="password" name="password" placeholder="Password">
          </div>
          <div>
            <button @click.prevent="$router.push({name: 'posts'})" class="btn btn-primary my-3" type="submit" name="login">Log In</button>
          </div>
          <div>
            <small>
              <a href="#">Forgot password?</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  layout: 'default',
}
</script>

<style scoped>
.create-account {
  font-size: 1.5rem;
}

.login-page {
  padding: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-container {
  padding: 5rem 10rem;
  background-image: url(/logo.png);
  background-size: 22% auto;
  background-repeat: no-repeat;
  background-position: 15px 15px;
  min-width: 20%;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  text-align: center;
}

#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}

</style>
