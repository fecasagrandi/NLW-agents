import {fastify} from 'fastify';
import{fastifyCors} from '@fastify/cors'

import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { sql } from './db/connection.ts';
import { env } from './env.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'https://localhost:5173' 
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

const PORT = env.PORT;

app.get('/health', () => {
    return 'OK'
});

app.listen({ port: PORT })