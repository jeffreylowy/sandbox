# To Finish Chapter 2:

To finish this project, copy the missing components from the chapter2/auction direc- tory to the corresponding directories of your project:

- The services directory contains the product-service.ts file that declares two classes: Product and ProductService. This is where the data for the auction comes from. We'll provide more details about the content of this file in the hands-on section of chapter 3.
- The navbar directory contains the code for the top navigation bar.
- The footer directory contains the code for the footer of the page.
- The search directory contains the initial code for the SearchComponent, which is a form that you'll develop in chapter 7.
- The carousel directory contains the code that implements a Bootstrap slider in the top portion of the home page.

# Angular 2+

Notes from Manning's Angular 2 with Typescript

Examples:
[Github](https://github.com/Farata/angular2typescript)

## Notes

- Angular(2+) is more performant than AngularJS (1).

#### Modules

- An app must have at least one module and one component, which is called the `root component`.
- A module is a container for a group of related components, services, directives, etc.
- All components of a small app can be located in one module, the root module. Whereas larger applications will have more [feature] modules.
- A module is an es6 class annotated with the `NgModule` decorator.

```javascript
@NgModule({
  // Every browser app must import the BrowserModule
  imports: [BrowserModule],
  // Delcare the HellloWorldComponent belongs to AppModule.
  declarations: [HelloWorldComponent],
  // During app launch the module renders the component that is assigned to the bootsrap property of NgModule.
  bootstrap: [HelloWorldComponent]
})
export class AppModule {}
```

- You must import the `BrowserModule` in the app's root module.
- Feature modules will import `CommonModule`.

#### Components

- Components are the main building block of an Angular app.
- Each component consists of two parts: the view (ui) and the class that implements the logic behind the view.
- A view is the result of merging the UI layout with the data.
- Each component is basically a directive with an associated view, but unlike a component, a directive doesn't have its own view.

```javascript
// Think of the Component decorator as a config function that complements the class.
@Component({
  // Each component must define a selector and a template/templateUrl.
  selector: "app-component",
  // For web applications, a template contains HTML markup. You can also use another language for rendering native mobile applications provided by third-party frameworks.
  template: "<h1>Hello !</h1>",
  // External files allow web designers to work on the styles without modifying the application code.
  styleUrls: "styles.css"
})
class HelloComponent {}
```

#### Directives

- Each component is basically a directive with an associated view, but unlike a component, a directive doesn't have its own view.
- All directives that are used in the module need to be added to the declaration prop- erty of the @NgModule decorator, as in this example:

hightlight-directive.js

```javascript
// A directive that changes the background of the attached element to blue:
import { Directive, ElementRef, Renderer } from "@angular/core";
@Directive({ selector: "[highlight]" })
export class HighlightDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, "backgroundColor", "blue");
  }
}
```

```html
<h1 highlight>Hello World</h1>
```

root-module.js

```javascript
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HelloWorldComponent, HighlightDirective ],
  bootstrap: [ HelloWorldComponent ]
})
...
```

#### Data Binding

#### Routing

You can think of a SPA as a collection of states, such as Home state, Product Details state, and Shipping state. Each state represents a different view of the same single page app (SPA). The router is responsible for managing client-side navigation. With a SPA, the code for rendering components is already on the client (except for the lazy-loading scenarios), and you just need to replace one view with another.

The implementation of routing func- tionality is implemented in a separate RouterModule module

Angular offers two location strategies for implementing client-side navigation:

- HashLocationStrategy - A hash sign (#) is added to the URL, and the URL seg- ment after the hash uniquely identifies the route to be used as a web page frag- ment. This strategy works with all browsers, including the old ones. The hash sign serves as a separator between the base URL and the client-side locations of the required content. <br><br>`http://mysite.com:8080/#/products/page/3`

- PathLocationStrategy - _This History API_ - based strategy is supported only in browsers that support HTML5. This is the default location strategy in Angular. The browser's History API allows you to move back and forth through the user's navi- gation history as well as programmatically manipulate the history stack. _Note_: See MDN docs [Manipulating the browser history](http://mng.bz/i64G)<br><br>Angular spares you from invoking pushState() explicitly—you just need to config- ure the URL segments and map them to the corresponding components. You can tell Angular what to use as a base URL in your application in one of two ways:

  - Add the `<base>` tag to the header of index.html, such as `<base href="/">`.
  - Assign a value for the `APP_BASE_HREF` Angular constant in the `root` module, and use it as the `providers` value.

  ```javascript
  import { APP_BASE_HREF } from "@angular/common";
  @NgModule({
    //...
    providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
  })
  class AppModule {}
  ```

  Angular offers the following main players for implementing routing in your application:

* `Router` - An object that represents the router in the runtime. You can use its `navigate()` and `navigateByUrl()` methods to navigate to a route either by the configured route path or by the URL segment, respectively.
* `RouterOutlet` - A `directive` that serves as a placeholder within your web page (`<router-outlet>`) where the router should render the component.
* `Routes` - An array of routes that map URLs to components to be rendered inside the `<router-outlet>`.
* `RouterLink` - A directive for declaring a link to a route if the navigation is done using HTML anchor tags. `RouterLink` may contain parameters to be passed to the route's component.
* `ActivatedRoute` - An object that represents the route or routes that are currently active.

#### Stuff to research

- SystemJS
- Template local variables
- Typescript
  - Decorators
  - Member ordering
  - Private/public/protected class properties
- Router
