# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Capa de cache para dependencias
COPY package*.json ./
RUN npm ci

# Build de la aplicación
COPY . .
RUN npm run build
RUN ls -la /app/dist

# Production stage
FROM nginx:1.24-alpine


# Copiar configuración y archivos buildeados
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/crown-test-front-end/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]