<template>
  <div style="background-color: black; height: 100vh">
    <div style="line-height: 1200%;">
      <h1 style="font-size: 100px;">
        CREATE YOUR <br> NEW ACCOUNT
      </h1>
    </div>
    <form>
      <div class="idbox justify-center">
        <VTextField
          style="color: white; width: 50%;"
          bg-color="#8C54D0"
          color="#8C54D0"
          label="Username"
        >
          <template #append-inner>
            <VBtn color="#8C54D0">
              Test
            </VBtn>
          </template>
        </VTextField>
      </div>
      <div class="pwbox">
        <input
          type="password"
          placeholder="Password"
          style="background-color: #ffbf36"
        >
      </div>
        
      <h3 style="font-size: 40px;">
        ※ Please include at least one UPPER case and
      </h3> 
      <h3 style="font-size: 40px;">
        one Number in your password
      </h3> 
        
      <div class="createbutton">
        <button onclick="location.href='notyet.html'">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1{
    text-align: center;
    color: #fbd990;
    font-family: bungee;
    letter-spacing: 0.1em;
}

h2{
    text-align: center;
    color: white;
    font-family: bungee;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
    transform:translate(0,-100px);
}

h3{
    text-align: center;
    color: #ff7676;
    font-family: cabin;
}

.idbox{
    text-align: center;
    transform:translate(0,-100px);
}

.verifybutton{
    border-radius: 20px;
    width: 170px;
    height: 66px;
}

.pwbox{
    text-align: center;
    transform:translate(0,-90px);
}

input{
    width: 899px;
    height: 84px;
    color:white;
    font-size: 50px;
    border-radius: 10px;
    font-family: cabin;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
    letter-spacing: 0.1em;
}


input::placeholder{
    color: white;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
}

button{
    width: 198px;
    height: 66px;
    background-color: #8C54D0;
    color:white;
    font-size: 45px;
    line-height: 1;
    font-family: cabin;
    border-radius: 10px;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
    
}
.createbutton{
    text-align: center;
}
</style>
