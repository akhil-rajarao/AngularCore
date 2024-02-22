import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyncpipeComponent } from './anyncpipe.component';

describe('AnyncpipeComponent', () => {
  let component: AnyncpipeComponent;
  let fixture: ComponentFixture<AnyncpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnyncpipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnyncpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
