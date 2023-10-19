import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordRecoverPage } from './password-recover.page';

describe('PasswordRecoverPage', () => {
  let component: PasswordRecoverPage;
  let fixture: ComponentFixture<PasswordRecoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasswordRecoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
