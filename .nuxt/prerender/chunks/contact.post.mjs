import { defineEventHandler, useBody } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs';
import { z } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/zod@3.17.3/node_modules/zod/lib/index.mjs';
import { u as useRuntimeConfig } from './nitro/nitro-prerenderer.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/node-fetch-native@0.1.4/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/scule@0.2.1/node_modules/scule/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unstorage@0.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unstorage@0.4.1/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/pathe@0.3.0/node_modules/pathe/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-emoji@3.0.2/node_modules/remark-emoji/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-slug@5.0.1/node_modules/rehype-slug/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-external-links@1.0.1/node_modules/rehype-external-links/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/flat@5.0.2/node_modules/flat/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unist-util-visit@4.1.0/node_modules/unist-util-visit/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/stringify-entities@4.0.3/node_modules/stringify-entities/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/parse-entities@4.0.0/node_modules/parse-entities/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/mdast-util-to-hast@12.1.1/node_modules/mdast-util-to-hast/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/detab@3.0.1/node_modules/detab/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';

const contact_post = defineEventHandler(async (event) => {
  const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Email is invalid" }),
    message: z.string().min(1, { message: "Message is required" })
  });
  const body = await useBody(event);
  const result = schema.safeParse(body);
  if (!result.success) {
    event.res.statusCode = 400;
    return {
      success: false,
      errors: result.error.errors
    };
  }
  const { name, email, message } = result.data;
  await fetch("https://api.sendinblue.com/v3/smtp/email", {
    body: JSON.stringify({
      sender: { email: "younes.aitali95@gmail.com" },
      to: [
        {
          email: "younes.aitali95@gmail.com",
          name: "Youness Aitali "
        }
      ],
      subject: "Contact Form younessaitali.com",
      htmlContent: `<html>
										<body>
										Name: ${name}
										<br>
										Email: ${email}
										<br>
											<p>${message}</p>
										</body>
									</html>`
    }),
    headers: {
      Accept: "application/json",
      "Api-Key": `${useRuntimeConfig().sendinblueAPi}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });
  return { success: true, data: result.data };
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
