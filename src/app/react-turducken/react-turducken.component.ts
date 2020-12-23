import {
  Component,
  Input,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { render } from 'react-dom';
import * as React from 'react';

@Component({
  selector: 'react-turducken',
  template: `<div [id]="appId"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactTurduckenComponent implements AfterViewInit {
  @Input() component: any;
  @Input() props: Object;

  appId = `react-turducken-${Math.floor(Math.random() * 10000)}`;

  constructor() {}

  ngAfterViewInit(): void {
    this.renderReact();
  }

  renderReact() {
    console.log(this.props);
    render(
      React.createElement(this.component, this.props, null),
      document.getElementById(this.appId)
    );
  }
}
