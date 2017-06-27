import { Component } from '@angular/core';

@Component({
  template: `
  	<div class="contact">
  	<div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="https://www.facebook.com/Waco.Longboard.Cult/">Waco Longboard Cult</a>
            <a class="mdl-navigation__link" href="https://www.facebook.com/gnarlys.shop/">Gnarly's</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">How to reach us.</h1>
      </main>
    </div>
    </div>

    <div class="container">
	    <h1>Waco Longboard Cult</h1>
      <p>Some info.</p>
      <h1>Gnarly's Skate Shop</h1>
      <p>Some info.</p>
	</div>`
})

// Component class
export class ContactComponent {}