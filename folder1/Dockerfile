FROM oven/bun AS builder

WORKDIR /app
ADD package.json package.json
RUN bun install
CMD ["bun", "start"]