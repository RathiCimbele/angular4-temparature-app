import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule],
      declarations: [
        AppComponent 
        
      ],
    }).compileComponents();


  }));
  it(`should have as title 'Working'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.title).toEqual('Working');
  }));

  it('form invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.temperatureForm.valid).toBeFalsy();
  });

  it('temparature input validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    let temperature = app.temperatureForm.controls['temperature']; 
    expect(temperature.valid).toBeFalsy(); 
  });

 it('temparature median should be valid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    let temperature = app.temperatureForm.controls['temperature']; 
    expect(app.median).toEqual(undefined);
    temperature.setValue(1);
    app.recordTemperature();
    temperature.setValue(3);
    app.recordTemperature();
    temperature.setValue(2);
    app.recordTemperature();
    app.getCurrentMedian();
    expect(app.median).toEqual(2);
    temperature.setValue(5);
    app.recordTemperature();
    temperature.setValue(4);
    app.recordTemperature();
    app.getCurrentMedian();
    expect(app.median).toEqual(3);
    });

    it('check temperature added to array', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        app.ngOnInit();
        expect(app.usedSize).toEqual(0);
        let temperature = app.temperatureForm.controls['temperature']; 
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        let current_array_size = app.usedSize;
        expect(current_array_size).toEqual(2);
        temperature.setValue(1);
        app.recordTemperature();
        let updated_array_size = app.usedSize;
        expect(updated_array_size).toEqual(3);
    });

    it('maxium storage reached', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        const compiled = fixture.debugElement.nativeElement;
        
        fixture.detectChanges();
        app.ngOnInit();
        expect(app.usedSize).toEqual(0);
        let temperature = app.temperatureForm.controls['temperature']; 
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        temperature.setValue(1);
        app.recordTemperature();
        expect(app.usedSize).toEqual(8);
    });
});
