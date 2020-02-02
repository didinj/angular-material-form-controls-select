import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { GroupingComponent } from './grouping/grouping.component';
import { MultipleComponent } from './multiple/multiple.component';
import { NestedComponent } from './nested/nested.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
    data: { title: 'Basic Select Example' }
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
    data: { title: 'Select in Reactive Form Example' }
  },
  {
    path: 'grouping',
    component: GroupingComponent,
    data: { title: 'Grouping Options Example' }
  },
  {
    path: 'multiple',
    component: MultipleComponent,
    data: { title: 'Multiple Selection Example' }
  },
  {
    path: 'nested',
    component: NestedComponent,
    data: { title: 'Nested Select Example' }
  },
  {
    path: 'custom',
    component: CustomComponent,
    data: { title: 'Custom Select Style Example' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
