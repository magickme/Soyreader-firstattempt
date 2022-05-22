FROM node:18.2.0

WORKDIR /
COPY package.json package-lock.json
RUN npm ci

COPY . .

RUN npm run build

FROM node:18.2.0

WORKDIR /
COPY --from=0 / .
COPY . .

EXPOSE $PORT
CMD ["node", "./build"]
