import { Component } from '@angular/core';

@Component({
  template: `
  	<div class="home">
  	<div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header_home mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">Howdy!</h1>
      </main>
    </div>
    </div>

   <div class="container">
      <h2>Welcome to Gnarathon.com, </h2>
      <p>Currently everything here is under construction. 
      To learn more about what we are up to, check our <a href="http://gnarathon.com/updates">updates</a>.
      To keep up with the new changes here, check our <a href="https://github.com/nicholashopper/gnarathon-site">github</a>. 
  </div>`
})

// App Component class
export class HomeComponent {}