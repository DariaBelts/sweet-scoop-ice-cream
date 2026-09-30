# ---------- Build stage ----------
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first to take advantage of Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Production stage ----------
FROM nginx:alpine AS production

# Replace the default site with the SPA configuration and drop the "user" directive,
# which only applies when nginx starts as root
RUN rm -f /etc/nginx/conf.d/default.conf \
    && sed -i '/^user /d' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

# Run nginx as the unprivileged "nginx" user
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d \
    && touch /var/run/nginx.pid \
    && chown nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
