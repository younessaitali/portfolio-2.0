declare module '@nuxt/schema' {
    interface RuntimeConfig {
        sendinblueAPi: string;
    }
}
// It is always important to ensure you import/export something when augmenting a type
export {};
