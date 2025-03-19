import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Настраивает подключения WebSocket, что позволяет Neon использовать WebSocket для общения.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Создает новый пул подключений, используя предоставленную строку подключения, что позволяет использовать несколько одновременных подключений.
const pool = new Pool({ connectionString });

// Инициализирует адаптер Prisma с использованием пула подключений Neon для управления соединением между Prisma и Neon.
const adapter = new PrismaNeon(pool);

// Расширяет PrismaClient пользовательским преобразователем результатов для преобразования полей price и rating в строки.
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});

