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

#### Stuff to research

- Decorators
- SystemJS
- Template local variables
- Typescript

#### Directives
