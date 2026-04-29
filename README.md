# Blanc-Studio
En este repositorio se guardará el progreso de la página web donde se ofrecerán servicios de consultoría para desarrollo web, marketing digital y manejo de redes sociales.

## Requisitos

- [Node.js](https://nodejs.org) v18 o superior
- npm (viene incluido con Node.js)

Verificá que los tenés instalados:

```bash
node -v
npm -v
```

---

## Cómo levantar el proyecto

**1. Cloná el repositorio**

```bash
git clone https://github.com/MatiasCortes2211/Blanc-Studio
cd blanc-studio
```

**2. Instalá las dependencias**

```bash
cd frontend
npm install
```

**3. Levantá el servidor de desarrollo**

```bash
npm run dev
```

Abrí el navegador en `http://localhost:5173`

---

## Flujo de trabajo Git

- `main` → rama de producción, solo recibe merges desde `dev`
- `dev` → rama de desarrollo, integra las features terminadas
- `feature/nombre` → ramas de trabajo, se crean desde `dev` y se mergean a `dev`

## Estructura

```
frontend/
├── public/
└── src/
    ├── assets/
    ├── components/
    │   ├── layout/      # Navbar, Footer
    │   └── sections/    # Hero, Nosotros, Servicios, Contacto
    ├── styles/
    ├── App.jsx
    └── main.jsx
```
