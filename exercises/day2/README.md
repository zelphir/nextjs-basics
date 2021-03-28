# Day 2

## [1] Usare catchAll routes

### Specifiche

- Creare una pagina tipo `/articles/2021/title1` (dynamic route con catchAll)
- Render sia anno che titolo sulla pagina
- Convertire la pagina in optional catchAll
- Handle scenarios
  - Come prima (`/articles/2021/title1`), quindi con stesso render
  - Quando url = `/articles`

## [2] Redirect

Testare il comportamento creando manualemnete un cookie `auth`

### Specifiche

- Creare una pagina `/dashboard`
- Implementare logica per:
  - Quando cookie `auth` la homepage redirects to `/dashboard`
  - Quando no cookie `auth` la homepage redirects to `/login`
