import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterServiceComponent } from './printer-service.component';

describe('PrinterServiceComponent', () => {
  let component: PrinterServiceComponent;
  let fixture: ComponentFixture<PrinterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
