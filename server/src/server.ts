import {fastify} from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import {fastifyCors} from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'https://localhost:5173' // Notebook: 3002 - PC: 5173
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get('/health', () => {
    return 'OK'
});

app.listen({ port: PORT }).then(() => {
    console.log(`HTTP server running on http://localhost:${PORT}`);
});