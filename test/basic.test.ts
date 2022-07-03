import { describe, expect, it } from 'vitest';

//waiting for nuxt teams to write doc

// import { setup, $fetch } from '@nuxt/test-utils-edge';

// await setup({
//   server: true,
//   browser: true
// });

describe('tests', () => {
    it('should works', () => {
        expect(1 + 1).toEqual(2);
    });
});

// describe('pages', () => {
//   it('render index', async () => {
//     const html = await $fetch('/');

//     // Snapshot
//     // expect(html).toMatchInlineSnapshot()

//     // should render text
//     expect(html).toContain('Hi Am Youness');
//   });

//   it('render 404', async () => {
//     const html = await $fetch('/not-found');

//     // Snapshot
//     // expect(html).toMatchInlineSnapshot()

//     expect(html).toContain('Not found');
//   });
// });
