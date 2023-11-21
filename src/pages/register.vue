<template>
  <div style="background-color: black; height: 100vh">
    <div class="door">
      <img src="../assets/door.png">
    </div>
    <form>
      <div class="textbox">
        <input
          type="email"
          placeholder="ENTER YOUR SCHOOL EMAIL"
        >
      </div>
      <div class="verifybutton">
        <button onclick="location.href='2.html'">
          VERIFY
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input{
    width: 1007px;
    height: 128px;
    background-color: #ffbf36;
    border: none;
    color:white;
    font-size: 50px;
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
    width: 282px;
    height: 89px;
    background-color: #8C54D0;
    color:white;
    font-size: 50px;
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
    transform:translate(0,30px)
}
</style>
