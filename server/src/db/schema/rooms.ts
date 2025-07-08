import { pgTable, text, timestamp, uuid} from 'drizzle-orm/pg-core';

export const rooms = pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
});