# apollo-graphql-prisma
Tugas 3 EAI


## Run Locally

Clone the project

```bash
  git clone https://github.com/YungBenn/apollo-graphql-prisma.git
```

Go to the project directory

```bash
  cd go-mysql-test
```

Install dependencies

```bash
  npm i
```

Create a `.env` file in the root directory of the project and see `.env.example` for an example

- `DATABASE_URL`

- `PORT`

Migrate database using prisma

```bash
  npx prisma migrate dev --name init
```

Start the server

```bash
  npm run dev
```

