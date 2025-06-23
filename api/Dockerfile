# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Compile TypeScript
RUN npm run build

# Stage 2: Run
FROM node:18

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy compiled output and required files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

# Copy uploads directly (ensure uploads folder exists in the root)
COPY ./uploads ./uploads

EXPOSE 1985

CMD ["node", "dist/server.js"]
