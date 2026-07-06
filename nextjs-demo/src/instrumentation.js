export async function register() {
    if (globalThis.__bootstrapInitialized) return;
    globalThis.__bootstrapInitialized = true;
    if (process.env.NEXT_RUNTIME !== 'nodejs') return;
    const {default: logger} = await import("@/app/_utils/logger");
    logger.info('bootstrap initialized...');
    try {
        //
        logger.info('seed database initialized...');
        await (await import("@/app/_bootstraps/seed-database")).bootstrap();
        //
        logger.info('socket server initialized...');
        await (await import("@/app/_bootstraps/socket-server")).bootstrap();
        //
    } catch (e) {
        logger.error('failed to bootstrap!', e);
        process.exit(0);
    }
}
