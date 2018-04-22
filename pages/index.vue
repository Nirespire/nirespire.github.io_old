<template>  
  <div>
    <div class="background"></div>

    <div class="container pad-top">
      <div class="row image-header">
        <div class="column center">
          <img src="~/assets/headshot.jpg" class="headshot" alt="That's me!">
          <h1>Sanjay Nair</h1>
          <h4>Software Engineer</h4>
        </div>
      </div>

      <div class="row">
        <div class="column column-50 column-offset-25 center">
          <p>
            I am a software engineer based out of Atlanta, Georgia.
            I enjoy working with full stack teams on value driven projects.
            In my spare time I work on personal projects including coding apps, giving tech talks, and writing articles.
          </p>
        </div>
      </div>

      <!-- <hr/> -->

      <div class="row">

        <div class="column center">
          <div><h3><i class="fab fa-medium fa-fw icon-link"></i><a href="https://medium.com/@nirespire" target="_blank">Articles</a></h3></div>
          <div><h3><i class="fab fa-twitter fa-fw icon-link"></i><a href="https://twitter.com/Nirespire" target="_blank">Twitter</a></h3></div>
          <div><h3><i class="fab fa-linkedin fa-fw icon-link"></i><a href="https://www.linkedin.com/in/sanjaynair8/" target="_blank">LinkedIn</a></h3></div>
          <div><h3><i class="fab fa-github-square fa-fw icon-link"></i><a href="https://github.com/Nirespire" target="_blank">Github</a></h3></div>
          <div><h3><i class="fas fa-envelope fa-fw icon-link"></i><a href="mailto:sanjayhnair@gmail.com" target="_blank">Contact</a></h3></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
html,
body,
.container,
.row {
  height: 100%;
}

.center {
  text-align: center;
}

.pad-top {
  padding-top: 50px;
}

.background {
  position: absolute;
  background: url("~/assets/logo.png");
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
}

.headshot {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}

.icon-link {
  text-align: left;
}
</style>
