FROM node:16.5.0

WORKDIR /app
COPY package.json package-lock.json
RUN npm ci

COPY . .

RUN npm run build

FROM node:16.5.0

WORKDIR /app
COPY --from=0 /app .
COPY . .

EXPOSE $PORT
CMD ["node", "./build"]
