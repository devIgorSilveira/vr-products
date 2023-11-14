# VR Products Project

### Como iniciar a api:

- No terminal: cd vrproducts-api
- No terminal: yarn
- Criar o .env baseado no .env.example
- No terminal: yarn typeorm migration:run -d ./src/data-source.ts
- No terminal: yarn dev

  - Obs: Rota padrão é 3001, caso não seja configurada outra no .env.
  - Obs: O arquivo routes.json, contém um workspace de Insomnia para vizualizar as rotas.

---

### Como iniciar o app:

- No terminal: cd vrproducts-app
- No terminal: npm install
- No terminal: ng serve -o
