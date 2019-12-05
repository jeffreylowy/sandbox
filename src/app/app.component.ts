import {
  Component,
  ComponentRef,
  ComponentFactoryResolver,
  OnInit,
  AfterViewInit,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { DemoComponent } from './demo/demo.component';
import { BehaviorSubject } from 'rxjs';
import { SelectComponent, SelectEvent } from './select/select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translate3d(0, 100%, 0)' }),
        animate(
          '500ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ transform: 'translate3d(0, 0%, 0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  display = false;

  dataForAppSubjectComponent = ['one', 'two', 'three', 'four'];
  SubjectComponentPosition = new BehaviorSubject(0);

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef | null = null;

  @ViewChild('container2', { read: ViewContainerRef })
  container2: ViewContainerRef | null = null;

  @ViewChildren(SelectComponent) selects!: QueryList<SelectComponent>;

  // Keep track of list of generated components for removal purposes
  components = [];

  // Expose class so that it can be used in the template
  demoComponentClass = DemoComponent;
  selectFactory: any = SelectComponent;
  componentFactory: any;
  s = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      DemoComponent
    );
    this.selectFactory = this.componentFactoryResolver.resolveComponentFactory(
      SelectComponent
    );
  }

  addComponent(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentClass
    );
    const component = this.container.createComponent(componentFactory);

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }

  addRemoveLabels(event: SelectEvent) {
    console.log('container start', this.container);
    if (event.eventType === 'add') {
      const newComponent: ComponentRef<SelectComponent> = this.container.createComponent(
        this.selectFactory
      );
      newComponent.instance.selection.subscribe((e: SelectEvent) => {
        this.addRemoveLabels(e);
        this.components.push(newComponent);
        this.components.forEach(
          (comp: ComponentRef<SelectComponent>, i: number) => {
            console.log('should update index');
            comp.instance.index = i;
          }
        );
      });
    } else if (event.eventType === 'remove') {
      console.log('remove component');
    }
    console.log('container end', this.container);
    if (this.selects.length) {
      console.log('end selects', this.selects);
      this.selects.forEach((s) => console.log('each s', s));
    }
  }

  removeComponent(componentClass: Type<any>) {
    // Find the component
    const componentRef = this.components.find(
      (component) => component.instance instanceof componentClass
    );
    const componentRefIndex = this.components.indexOf(componentRef);

    if (componentRefIndex !== -1) {
      // Remove component from both view and array
      this.container.remove(this.container.indexOf(componentRef));
      this.components.splice(componentRefIndex, 1);
    }
  }

  removeSelf() {
    console.log('removeSelf()');
  }

  updateSubjectPosition(event: any) {
    console.log('NUMBER EVENT', event);
    this.SubjectComponentPosition.next(event);
  }

  log(e?: Event) {
    console.log(!!e ? e : 'no event');
  }
}
