import { computed, Directive, inject, input, numberAttribute, OnInit } from '@angular/core';

import { Layout } from '../shared/constants';
import { IconTester } from './icon-tester.service';

/**
 * Base for every comparison page. `layout` and `count` are bound from the
 * route params (withComponentInputBinding) and pushed into the shared tester
 * so a deep link restores the controls.
 */
@Directive()
export abstract class BaseDemoComponent implements OnInit {
  protected readonly layout = input<Layout>('on-screen');
  protected readonly count = input(0, { transform: numberAttribute });
  protected readonly countArr = computed(() => [...Array(this.count()).keys()]);
  protected readonly tester = inject(IconTester);

  ngOnInit() {
    this.tester.activeLayoutSetting.set(this.layout());
    this.tester.iconListCount.set(this.count());
  }
}
