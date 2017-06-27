import { Component } from '@angular/core';

@Component({
  template: `
  	<div class="error">
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
        <h1 class="header-text">Whoops!</h1>
      </main>
    </div>
    </div>

    <div class="container">
	    <h2>The requested url cannot be found.</h2>
	</div>`
})

// App Component class
export class ErrorComponent {}