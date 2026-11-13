import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app.component';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render navigation links for Home and User', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const links = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('nav a')).map(
      (a) => ({ text: a.textContent?.trim(), href: a.getAttribute('href') }),
    );
    expect(links).toEqual([
      { text: 'Home', href: '/' },
      { text: 'User', href: '/user' },
    ]);
  });

  it('should navigate between Home and User via RouterLink without reload', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello Universe');

    const userLink = compiled.querySelector('a[routerLink="/user"]') as HTMLAnchorElement;
    userLink.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(router.url).toBe('/user');
    expect(compiled.textContent).toContain('youngTech');
  });
});
