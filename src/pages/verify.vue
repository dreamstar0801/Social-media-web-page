<template>
  <div style="background-color: black; height: 100vh">
    <div class="door">
      <br><br>
      <img src="../assets/door.png">
    </div>
    <form>
      <div class="textbox">
        <input
          type="email"
          placeholder="ENTER YOUR SCHOOL EMAIL"
        >
      </div>
      <VCardActions class="justify-center">
        <VBtn
          width='100'
          class="ma-10"
          variant="flat"
          color="#8C54D0"
          rounded="lg"
          style="color: white;"
          to="/account_recovery/sign_up2"
        >
          Verify
        </VBtn>
      </vcardactions>
    </form>
  </div>
</template>

<style scoped>
input{
    width: 800px;
    height: 70px;
    background-color: #ffbf36;
    border: none;
    color:white;
    font-size: 40px;
    font-weight: bold;
    border-radius: 10px;
    font-family: bungee;
    text-align: center;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
    letter-spacing: 0.1em;
}

input::placeholder{
    color: white;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
}

button{
    width: 150px;
    height: 50px;
    background-color: #8C54D0;
    color:white;
    font-size: 30px;
    line-height: 1;
    font-weight: bold;
    font-family: bungee;
    border-radius: 10px;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
    
}

img{
    width: 299px;
    height: 417px;
}

.door{
    text-align: center;
    transform:translate(0,0)
}

.textbox{
    text-align: center;
    transform:translate(0,0)
}

.verifybutton{
    text-align: center;
    transform:translate(0,50px)
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
