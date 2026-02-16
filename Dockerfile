FROM node:24-alpine AS base
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

FROM base AS build

COPY . .
# Persist Astro image optimization cache between builds (avif/webp generation)
RUN --mount=type=cache,target=/app/.astro \
  npm run build

FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY elasticvue.conf /etc/nginx/conf.d/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
