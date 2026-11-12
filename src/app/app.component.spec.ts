import { TestBed } from '@angular/core/testing';
import { App } from './app.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Hello Universe and interpolated city', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello Universe');
    expect(compiled.querySelector('.intro')?.textContent).toContain('Hello San Francisco, 2');
  });

  it('should render conditional server status with @if and @else', () => {
    const fixtureTrue = TestBed.createComponent(App);
    fixtureTrue.detectChanges();
    expect((fixtureTrue.nativeElement as HTMLElement).textContent).toContain(
      'Yes, the server is running',
    );

    const fixtureFalse = TestBed.createComponent(App);
    fixtureFalse.componentInstance.isServerRunning = false;
    fixtureFalse.detectChanges();
    expect((fixtureFalse.nativeElement as HTMLElement).textContent).toContain(
      'No, the server is not running',
    );
  });

  it('should render operating systems and users with @for', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const items = Array.from(compiled.querySelectorAll('.pill-list li')).map((li) =>
      li.textContent?.trim(),
    );
    expect(items).toEqual([
      'Windows',
      'macOS',
      'Linux',
      'Sarah',
      'Amy',
      'Rachel',
      'Jessica',
      'Poornima',
    ]);
  });

  it('should bind contentEditable via property binding', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const box = (fixture.nativeElement as HTMLElement).querySelector(
      '.editable-box',
    ) as HTMLElement;
    expect(String(box.contentEditable)).toBe('true');
  });
});
