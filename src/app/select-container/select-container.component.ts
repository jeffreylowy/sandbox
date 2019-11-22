import {
  Component,
  ComponentFactory,
  Input,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  ComponentRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectComponent, SelectEvent } from '../select/select.component';

@Component({
  selector: 'app-select-container',
  templateUrl: './select-container.component.html',
  styleUrls: ['./select-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectContainerComponent {
  selects = new BehaviorSubject([]);
  selectFactory: ComponentFactory<SelectComponent> | null = null;
  @Input() set options(options: string[]) {
    options.forEach((opt) => {
      this.addComponent();
    });
  }
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef | null = null;
  components = [];
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.selectFactory = this.componentFactoryResolver.resolveComponentFactory(
      SelectComponent
    );
  }

  addComponent() {
    const newComponent: ComponentRef<SelectComponent> = this.container.createComponent(
      this.selectFactory
    );
    newComponent.instance.selection.subscribe((x: SelectEvent) => {
      console.log(x);
      this.addRemoveLabels(x);
    });
    this.components.push(newComponent);
  }

  removeComponent() {
    console.log('remove component');
    // this.container.remove();
  }

  addRemoveLabels(event: SelectEvent) {
    if (event.eventType === 'add') {
      this.addComponent();
    } else if (event.eventType === 'remove') {
      this.removeComponent();
    }
  }
}
