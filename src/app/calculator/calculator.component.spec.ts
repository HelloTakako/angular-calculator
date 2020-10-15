import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should add two single digits', () => { 
    component.inputHistory = ['3', '+', '8'];

    component.calculateResult();

    expect(compiled.querySelector('#result').innerText).toBe('11');
  });

  it('should subtract two single digits', () => { 
    component.inputHistory = ['9', '-', '2'];

    component.calculateResult();

    expect(compiled.querySelector('#result').innerText).toBe('7');
  });
  
  it('should multiply two single digits', () => { 
    component.inputHistory = ['7', '*', '5'];

    component.calculateResult();

    expect(compiled.querySelector('#result').innerText).toBe('35');
  });

  it('should divide two single digits', () => { 
    component.inputHistory = ['9', '/', '3'];

    component.calculateResult();

    expect(compiled.querySelector('#result').innerText).toBe('3');
  });

  it('should display the result up to 6 decimals', () => { 
    component.inputHistory = ['7', '/', '3'];

    component.calculateResult();

    expect(compiled.querySelector('#result').innerText).toBe('2.333333');
  });
});
