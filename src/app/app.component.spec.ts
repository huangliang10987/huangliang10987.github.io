import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './shared/index';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        MyOwnCustomMaterialModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Huang Liang's Site'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance as AppComponent;
    expect(app.title).toEqual(`Huang Liang's Site`);
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as Document;
    expect(compiled.querySelector('h1').textContent).toContain(`Welcome to Huang Liang's Site`);
  }));
  it('should load material tool bar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as Document;
    expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
  }));
});
