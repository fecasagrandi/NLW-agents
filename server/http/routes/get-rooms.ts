import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { db } from '../../src/db/connection.ts';
import { schema } from '../../src/db/schema/index.ts';

export const getRoomsRoute: FastifyPluginCallbackZod = async (app) => {
    app.get('/rooms', async () => {
      const results = await db
      .select({
        id: schema.rooms.id,
        title: schema.rooms.title
      }).from(schema.rooms).orderBy(schema.rooms.createdAt)
      return results
    })
}
