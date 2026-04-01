# Multi-stage build : le premier stage installe les deps et lance les tests,
# le second produit une image legere sans les devDependencies ni le cache npm.
# Ca reduit la taille finale et evite d'embarquer des outils inutiles en prod.

FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /app/server.js .
EXPOSE 3000
CMD ["node", "server.js"]
