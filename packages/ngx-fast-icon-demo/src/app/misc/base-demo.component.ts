import { Component, computed, inject, input, OnInit } from '@angular/core';
import { IconTester } from './icon-tester.service';

@Component({
  standalone: true,
  template: ``,
})
export class BaseDemoComponent implements OnInit {
  protected layout = input('on-screen');
  protected count = input<number, number>(0, {
    transform: (count) => Number(count)
  });
  protected countArr = computed(() => [...Array(Number(this.count())).keys()]);
  protected tester = inject(IconTester);

  ngOnInit() {
    this.tester.activeLayoutSetting.set(this.layout() as any);
    this.tester.iconListCount.set(this.count());
  }
}
