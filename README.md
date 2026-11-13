# Angular Tutorial — PR06 (Parte Individual)

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-22.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vitest](https://img.shields.io/badge/Vitest-5.1-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

</div>

---

> [!IMPORTANT]
> **Práctica individual PR06 — Introducció al Front-End:**
> Este repositorio recoge la implementación local paso a paso de los ejercicios del tutorial oficial de **Angular** ([Learn Angular](https://angular.dev/tutorials/learn-angular)) indicados en la práctica **PR06** por **Ignacio Breñas** para el Proyecto Intermodular de **DAW MP0616** (STUCOM Pelai).

---

## 🔗 Repositorios Relacionados

- **Este repositorio (Tutorial Angular Individual):** [Ignaciobrenas/Angular-Tutorial](https://github.com/Ignaciobrenas/Angular-Tutorial)
- **Repositorio Grupal Frontend:** [Ignaciobrenas/Nurse-Simulator-Frontend](https://github.com/Ignaciobrenas/Nurse-Simulator-Frontend)
- **Repositorio Individual Backend (Symfony / Doctrine):** [Ignaciobrenas/Ignacio-Nurse-Simulator](https://github.com/Ignaciobrenas/Ignacio-Nurse-Simulator)
- **Repositorio Grupal Backend:** [Ignaciobrenas/Nurse-Simulator](https://github.com/Ignaciobrenas/Nurse-Simulator)

---

## 📚 Ejercicios Implementados (Tutorial PR06)

Cada avance está registrado en un commit independiente siguiendo el orden de los 10 apartados seleccionados en el enunciado de la práctica:

| Paso | Ejercicio                             | Concepto aplicado                                                              | Captura                                                                                                                 |
| :--: | :------------------------------------ | :----------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
|  1   | **Anatomy of a Component**            | Estructura base del componente, plantilla y `:host` CSS                        | [Ver captura](docs/screenshots/tutorial/01-anatomy-of-a-component.png)                                                  |
|  2   | **Updating the component**            | Propiedad `city` e interpolación `{{ city }}, {{ 1 + 1 }}`                     | [Ver captura](docs/screenshots/tutorial/02-updating-the-component.png)                                                  |
|  3   | **Component composition**             | Creación del componente `User` (`ng generate component user`) y `<app-user />` | [Ver captura](docs/screenshots/tutorial/03-component-composition.png)                                                   |
|  4   | **Control flow - `@if`**              | Renderizado condicional con `@if (isServerRunning)` y `@else`                  | [Ver captura](docs/screenshots/tutorial/04-control-flow-if.png)                                                         |
|  5   | **Control flow - `@for`**             | Listados de `operatingSystems` y `users` con `@for (...; track ...)`           | [Ver captura](docs/screenshots/tutorial/05-control-flow-for.png)                                                        |
|  6   | **Property Binding**                  | Enlace dinámico `[contentEditable]="isEditable"`                               | [Ver captura](docs/screenshots/tutorial/06-property-binding.png)                                                        |
|  7   | **Event handling**                    | Manejo de eventos `(click)` y `(mouseover)`                                    | [Ver captura](docs/screenshots/tutorial/07-event-handling.png)                                                          |
|  8   | **Enabling routing**                  | Barra de navegación y `<router-outlet />` en el shell principal                | [Ver captura](docs/screenshots/tutorial/08-enabling-routing.png)                                                        |
|  9   | **Define a route**                    | Creación de `Home` y definición de rutas `''` y `'user'` en `app.routes.ts`    | [Home](docs/screenshots/tutorial/09-define-route-home.png) · [User](docs/screenshots/tutorial/09-define-route-user.png) |
|  10  | **Link to a route with `RouterLink`** | Navegación SPA sin recarga de página con `RouterLink` y `RouterLinkActive`     | [Home](docs/screenshots/tutorial/10-router-link-home.png) · [User](docs/screenshots/tutorial/10-router-link-user.png)   |

---

## 📂 Estructura del Proyecto

```text
Angular-Tutorial/
├── .vscode/                         # Configuración de depuración y tareas en VS Code
├── docs/
│   └── screenshots/
│       └── tutorial/                # Capturas de cada paso del tutorial (00 a 10)
├── public/
│   └── favicon.ico                  # Icono de la aplicación
├── src/
│   ├── app/
│   │   ├── home/                    # Componente Home (ruta '/') con los ejercicios
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── user/                    # Componente User (ruta '/user' y composición)
│   │   │   ├── user.component.css
│   │   │   ├── user.component.html
│   │   │   ├── user.component.spec.ts
│   │   │   └── user.component.ts
│   │   ├── app.component.css        # Estilos de la barra de navegación y contenedor
│   │   ├── app.component.html       # Shell con <nav> y <router-outlet />
│   │   ├── app.component.spec.ts    # Tests de navegación y shell raíz
│   │   ├── app.component.ts         # Componente raíz con RouterLink y RouterOutlet
│   │   ├── app.config.ts            # Proveedores globales (provideRouter)
│   │   └── app.routes.ts            # Rutas '' (Home) y 'user' (User)
│   ├── index.html                   # Documento HTML principal
│   ├── main.ts                      # Arranque de la aplicación
│   └── styles.css                   # Estilos globales
├── angular.json                     # Configuración de Angular CLI
├── package.json                     # Dependencias y scripts de npm
├── tsconfig.json                    # Configuración base de TypeScript
├── tsconfig.app.json                # Configuración TypeScript de la app
└── tsconfig.spec.json               # Configuración TypeScript de tests
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos

- **Node.js**: versión LTS (v20 o superior).
- **npm**: gestor de paquetes de Node.
- **Angular CLI** (opcional globalmente):
  ```bash
  npm install -g @angular/cli
  ```

### Ejecución en Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Ignaciobrenas/Angular-Tutorial.git
cd Angular-Tutorial

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor local de desarrollo
npm start
# O con Angular CLI:
npx ng serve
```

Abre el navegador en `http://localhost:4200/` para ver la ruta `Home` y navegar a `/user`.

### Compilación y Pruebas

```bash
# Compilación de producción (salida en dist/)
npm run build

# Pruebas unitarias con Vitest
npm test -- --watch=false
```

---

## 👤 Autor

- **Ignacio Breñas** ([@Ignaciobrenas](https://github.com/Ignaciobrenas))  
  _Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW 2)_  
  _STUCOM Centre d'Estudis — Barcelona_
