import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { exec } from 'child_process';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
        this.$use(this.loggingMiddleware);
        console.log('Database connected successfully');
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }

    async runMigrations() {
        return new Promise((resolve, reject) => {
            exec(
                'npm run migrations:prod',
                { maxBuffer: 1024 * 500 },
                (error, stdout, stderr) => {
                    if (error) console.error('Track-and-Trace', `${error}`);
                    else if (stdout) console.error('Track-and-Trace', `${stdout}`);
                    else console.error('Track-and-Trace', `${stdout}`);
                    resolve(stdout ? true : false);
                },
            );
        });
    }

    async loggingMiddleware(params: any, next: any) {
        const before = Date.now();
        const result = await next(params);
        const after = Date.now();
        console.log(
            `Query ${params.model}.${params.action} took ${after - before}ms`,
        );
        return result;
    }
}