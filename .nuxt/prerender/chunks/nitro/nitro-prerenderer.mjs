import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/node-fetch-native@0.1.4/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, useQuery, useCookie, createError, defineLazyEventHandler, useBody, createApp, createRouter, lazyEventHandler } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/node.mjs';
import destr from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import { createRouter as createRouter$1 } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import { createCall, createFetch } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/scule@0.2.1/node_modules/scule/dist/index.mjs';
import { hash } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash, withBase, joinURL } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unstorage@0.4.1/node_modules/unstorage/dist/index.mjs';
import _unstorage_drivers_fs from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unstorage@0.4.1/node_modules/unstorage/dist/drivers/fs.mjs';
import { extname } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/pathe@0.3.0/node_modules/pathe/dist/index.mjs';
import defu from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs';
import remarkEmoji from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-emoji@3.0.2/node_modules/remark-emoji/index.js';
import rehypeSlug from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-slug@5.0.1/node_modules/rehype-slug/index.js';
import remarkSqueezeParagraphs from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import rehypeExternalLinks from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-external-links@1.0.1/node_modules/rehype-external-links/index.js';
import remarkGfm from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import rehypeSortAttributeValues from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import yaml from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs';
import flat from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/flat@5.0.2/node_modules/flat/index.js';
import { unified } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import remarkParse from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import { visit } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unist-util-visit@4.1.0/node_modules/unist-util-visit/index.js';
import { stringifyEntitiesLight } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/stringify-entities@4.0.3/node_modules/stringify-entities/index.js';
import { parseEntities } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/parse-entities@4.0.0/node_modules/parse-entities/index.js';
import { markdownLineEnding, markdownSpace, asciiAlpha, markdownLineEndingOrSpace, asciiAlphanumeric } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js';
import { factorySpace } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js';
import { factoryWhitespace } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js';
import { codeFenced } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/index.js';
import { all } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/mdast-util-to-hast@12.1.1/node_modules/mdast-util-to-hast/index.js';
import { detab } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/detab@3.0.1/node_modules/detab/index.js';
import { u } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js';
import { encode } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import { position } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js';
import htmlTags from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import slugify from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import { getHighlighter, BUNDLED_LANGUAGES, BUNDLED_THEMES } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{"content":{"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":{"theme":"one-dark-pro"},"wsUrl":""}},"sendinblueAPi":"","content":{"cacheVersion":2,"cacheIntegerity":"2895586844","transformers":["/home/youness/dev/portfolio-2.0/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/markdown.mjs","/home/youness/dev/portfolio-2.0/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/yaml.mjs","/home/youness/dev/portfolio-2.0/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/json.mjs","/home/youness/dev/portfolio-2.0/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/csv.mjs","/home/youness/dev/portfolio-2.0/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/path-meta.mjs","/home/youness/dev/portfolio-2.0/node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/transformers/shiki.mjs"],"base":"_content","watch":true,"sources":["content"],"ignores":["\\.","-"],"locales":[],"highlight":{"theme":"one-dark-pro"},"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"rehypePlugins":[],"remarkPlugins":[]},"yaml":{},"csv":{},"navigation":{"fields":[]}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const serverAssets = [{"baseName":"server","dir":"/home/youness/dev/portfolio-2.0/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, _unstorage_drivers_fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('content:source:content', _unstorage_drivers_fs({"name":"content","driver":"fs","prefix":"","base":"/home/youness/dev/portfolio-2.0/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', _unstorage_drivers_fs({"driver":"fs","base":"/home/youness/dev/portfolio-2.0","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', _unstorage_drivers_fs({"driver":"fs","base":"/home/youness/dev/portfolio-2.0/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', _unstorage_drivers_fs({"driver":"fs","base":"/home/youness/dev/portfolio-2.0/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', _unstorage_drivers_fs({"driver":"fs","base":"/home/youness/dev/portfolio-2.0/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, queryParams) => {
  const params = {
    ...queryParams
  };
  for (const key of arrayParams) {
    if (params[key]) {
      params[key] = ensureArray(params[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      params[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => Object.freeze(params),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(params.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(params.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    findOne: () => fetcher({ ...params, first: true }),
    find: () => fetcher(params),
    findSurround: (query2, options) => fetcher({ ...params, surround: { query: query2, ...options } }),
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some((cond) => match(item, cond)),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data),
    (data, params) => params.first ? data[0] : data
  ];
  return async (params) => {
    const data = await getContentsList();
    return pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
  };
}

const FRONTMATTER_DELIMITER = "---";
function stringifyFrontMatter(data, content = "") {
  data = flat.flatten(data, {
    safe: true
  });
  return [
    FRONTMATTER_DELIMITER,
    yaml.dump(data, { lineWidth: -1 }),
    FRONTMATTER_DELIMITER,
    content
  ].join("\n");
}
function parseFrontMatter(content) {
  let data = {};
  if (content.startsWith(FRONTMATTER_DELIMITER)) {
    const idx = content.indexOf("\n" + FRONTMATTER_DELIMITER);
    if (idx !== -1) {
      const frontmatter = content.slice(4, idx);
      if (frontmatter) {
        data = yaml.load(frontmatter);
        content = content.slice(idx + 4);
      }
    }
  }
  return {
    content,
    data: flat.unflatten(data || {}, {})
  };
}

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = ["h2", "h3", "h4"].reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
function containerFlow(parent, context, safeOptions = {}) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index = -1;
  indexStack.push(-1);
  while (++index < children.length) {
    const child = children[index];
    indexStack[indexStack.length - 1] = index;
    results.push(tracker.move(context.handle(child, parent, context, {
      before: "\n",
      after: "\n",
      ...tracker.current()
    })));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index < children.length - 1) {
      results.push(tracker.move(between(child, children[index + 1])));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index2 = context.join.length;
    while (index2--) {
      const result = context.join[index2](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index < children.length) {
    const child = children[index];
    let after;
    indexStack[indexStack.length - 1] = index;
    if (index + 1 < children.length) {
      let handle = context.handle.handlers[children[index + 1].type];
      if (handle && handle.peek) {
        handle = handle.peek;
      }
      after = handle ? handle(children[index + 1], parent, context, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = track(safeOptions);
      tracker.move(results.join(""));
    }
    results.push(tracker.move(context.handle(child, parent, context, {
      ...tracker.current(),
      before,
      after
    })));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
function checkQuote(context) {
  const marker = context.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
  }
  return marker;
}

const own = {}.hasOwnProperty;
const shortcut = /^[^\t\n\r "#'.<=>`}]+$/;
const baseFense = 2;
const toMarkdown = {
  unsafe: [
    {
      character: "\r",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      character: "\n",
      inConstruct: ["leafComponentLabel", "containerComponentLabel"]
    },
    {
      before: "[^:]",
      character: ":",
      after: "[A-Za-z]",
      inConstruct: ["phrasing"]
    },
    { atBreak: true, character: ":", after: ":" }
  ],
  handlers: {
    containerComponent: containerComponent$1,
    textComponent,
    componentContainerSection
  }
};
function componentContainerSection(node, _, context) {
  context.indexStack = context.stack;
  return `#${node.name}

${content(node, context)}`;
}
function textComponent(node, _, context) {
  context.indexStack = context.stack;
  const exit = context.enter(node.type);
  let value = ":" + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  value += "\n" + content(node, context);
  exit();
  return value;
}
let nest = 0;
function containerComponent$1(node, _, context) {
  context.indexStack = context.stack;
  const prefix = ":".repeat(baseFense + nest);
  nest += 1;
  const exit = context.enter(node.type);
  let value = prefix + (node.name || "") + label$3(node, context) + attributes$3(node, context);
  let subvalue;
  if (node.fmAttributes) {
    value += "\n" + stringifyFrontMatter(node.fmAttributes).trim();
  }
  if (node.type === "containerComponent") {
    subvalue = content(node, context);
    if (subvalue) {
      value += "\n" + subvalue;
    }
    value += "\n" + prefix;
    if (nest > 1) {
      value = value.split("\n").map((line) => "  " + line).join("\n");
    }
  }
  nest -= 1;
  exit();
  return value;
}
containerComponent$1.peek = function peekComponent() {
  return ":";
};
function label$3(node, context) {
  let label2 = node;
  if (node.type === "containerComponent") {
    if (!inlineComponentLabel(node)) {
      return "";
    }
    label2 = node.children[0];
  }
  const exit = context.enter("label");
  const subexit = context.enter(node.type + "Label");
  const value = containerPhrasing(label2, context, { before: "[", after: "]" });
  subexit();
  exit();
  return value ? "[" + value + "]" : "";
}
function attributes$3(node, context) {
  const quote = checkQuote(context);
  const subset = node.type === "textComponent" ? [quote] : [quote, "\n", "\r"];
  const attrs = node.attributes || {};
  const values = [];
  let id;
  let classesFull = "";
  let classes = "";
  let value;
  let key;
  let index;
  for (key in attrs) {
    if (own.call(attrs, key) && attrs[key] != null) {
      value = String(attrs[key]);
      if (key === "id") {
        id = shortcut.test(value) ? "#" + value : quoted("id", value);
      } else if (key === "class") {
        value = value.split(/[\t\n\r ]+/g);
        classesFull = [];
        classes = [];
        index = -1;
        while (++index < value.length) {
          (shortcut.test(value[index]) ? classes : classesFull).push(value[index]);
        }
        classesFull = classesFull.length ? quoted("class", classesFull.join(" ")) : "";
        classes = classes.length ? "." + classes.join(".") : "";
      } else if (key.startsWith(":") && value === "true") {
        values.push(key.slice(1));
      } else {
        values.push(quoted(key, value));
      }
    }
  }
  if (classesFull) {
    values.unshift(classesFull);
  }
  if (classes) {
    values.unshift(classes);
  }
  if (id) {
    values.unshift(id);
  }
  return values.length ? "{" + values.join(" ") + "}" : "";
  function quoted(key2, value2) {
    return key2 + "=" + quote + stringifyEntitiesLight(value2, { subset }) + quote;
  }
}
function content(node, context) {
  const content2 = inlineComponentLabel(node) ? Object.assign({}, node, { children: node.children.slice(1) }) : node;
  return containerFlow(content2, context);
}
function inlineComponentLabel(node) {
  return node.children && node.children[0] && node.children[0].data && node.children[0].data.componentLabel;
}

const canContainEols = ["textComponent"];
const enter = {
  componentContainer: enterContainer,
  componentContainerSection: enterContainerSection,
  componentContainerDataSection: enterContainerDataSection,
  componentContainerAttributes: enterAttributes,
  componentContainerLabel: enterContainerLabel,
  componentLeaf: enterLeaf,
  componentLeafAttributes: enterAttributes,
  componentText: enterText,
  textSpan: enterTextSpan,
  componentTextAttributes: enterAttributes
};
const exit = {
  componentContainerSectionTitle: exitContainerSectionTitle,
  listUnordered: conditionalExit,
  listOrdered: conditionalExit,
  listItem: conditionalExit,
  componentContainerSection: exitContainerSection,
  componentContainerDataSection: exitContainerDataSection,
  componentContainer: exitContainer,
  componentContainerAttributeClassValue: exitAttributeClassValue,
  componentContainerAttributeIdValue: exitAttributeIdValue,
  componentContainerAttributeName: exitAttributeName,
  componentContainerAttributeValue: exitAttributeValue,
  componentContainerAttributes: exitAttributes,
  componentContainerLabel: exitContainerLabel,
  componentContainerName: exitName,
  componentContainerAttributeInitializerMarker() {
    const attributes = this.getData("componentAttributes");
    attributes[attributes.length - 1][1] = "";
  },
  componentLeaf: exitToken,
  componentLeafAttributeClassValue: exitAttributeClassValue,
  componentLeafAttributeIdValue: exitAttributeIdValue,
  componentLeafAttributeName: exitAttributeName,
  componentLeafAttributeValue: exitAttributeValue,
  componentLeafAttributes: exitAttributes,
  componentLeafName: exitName,
  componentText: exitToken,
  textSpan: exitToken,
  componentTextAttributeClassValue: exitAttributeClassValue,
  componentTextAttributeIdValue: exitAttributeIdValue,
  componentTextAttributeName: exitAttributeName,
  componentTextAttributeValue: exitAttributeValue,
  componentTextAttributes: exitAttributes,
  componentTextName: exitName
};
function enterContainer(token) {
  enterToken.call(this, "containerComponent", token);
}
function exitContainer(token) {
  const container = this.stack[this.stack.length - 1];
  if (container.children.length > 1) {
    const dataSection = container.children.find((child) => child.rawData);
    container.rawData = dataSection?.rawData;
  }
  container.children = container.children.flatMap((child) => {
    if (child.rawData) {
      return [];
    }
    if (child.name === "default" || !child.name) {
      return child.children;
    }
    child.data = {
      hName: "component-slot",
      hProperties: {
        ...child.attributes,
        [`v-slot:${child.name}`]: ""
      }
    };
    return child;
  });
  this.exit(token);
}
function enterContainerSection(token) {
  enterToken.call(this, "componentContainerSection", token);
}
function enterContainerDataSection(token) {
  enterToken.call(this, "componentContainerDataSection", token);
}
function exitContainerSection(token) {
  this.exit(token);
}
function exitContainerDataSection(token) {
  let section = this.stack[this.stack.length - 1];
  while (section.type === "listItem" || section.type === "list") {
    const [stackToken] = this.tokenStack[this.tokenStack.length - 1];
    this.exit(stackToken);
    section = this.stack[this.stack.length - 1];
  }
  if (section.type === "componentContainerDataSection") {
    section.rawData = this.sliceSerialize(token);
    this.exit(token);
  }
}
function exitContainerSectionTitle(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterLeaf(token) {
  enterToken.call(this, "leafComponent", token);
}
function enterTextSpan(token) {
  this.enter({ type: "textComponent", name: "span", attributes: {}, children: [] }, token);
}
function enterText(token) {
  enterToken.call(this, "textComponent", token);
}
function enterToken(type, token) {
  this.enter({ type, name: "", attributes: {}, children: [] }, token);
}
function exitName(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}
function enterContainerLabel(token) {
  this.enter({ type: "paragraph", data: { componentLabel: true }, children: [] }, token);
}
function exitContainerLabel(token) {
  this.exit(token);
}
function enterAttributes() {
  this.setData("componentAttributes", []);
  this.buffer();
}
function exitAttributeIdValue(token) {
  this.getData("componentAttributes").push(["id", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeClassValue(token) {
  this.getData("componentAttributes").push(["class", parseEntities(this.sliceSerialize(token))]);
}
function exitAttributeValue(token) {
  const attributes = this.getData("componentAttributes");
  attributes[attributes.length - 1][1] = parseEntities(this.sliceSerialize(token));
}
function exitAttributeName(token) {
  this.getData("componentAttributes").push([this.sliceSerialize(token), true]);
}
function exitAttributes() {
  const attributes = this.getData("componentAttributes");
  const cleaned = {};
  let index = -1;
  let attribute;
  while (++index < attributes.length) {
    attribute = attributes[index];
    const name = kebabCase(attribute[0]);
    if (name === "class" && cleaned.class) {
      cleaned.class += " " + attribute[1];
    } else {
      cleaned[name] = attribute[1];
    }
  }
  this.setData("componentAttributes");
  this.resume();
  let stackTop = this.stack[this.stack.length - 1];
  if (stackTop.type === "paragraph") {
    stackTop = stackTop.children[stackTop.children.length - 1];
  }
  stackTop.attributes = cleaned;
}
function exitToken(token) {
  this.exit(token);
}
function conditionalExit(token) {
  const [section] = this.tokenStack[this.tokenStack.length - 1];
  if (section.type === token.type) {
    this.exit(token);
  }
}
const fromMarkdown = {
  canContainEols,
  enter,
  exit
};

const ContainerSequenceSize = 2;
const SectionSequenceSize = 3;
const slotSeparatorCode = 35;
const slotSeparatorLength = 1;
const Codes = {
  EOF: null,
  quotationMark: 34,
  hash: 35,
  apostrophe: 39,
  backTick: 96,
  backSlash: 92,
  colon: 58,
  LessThan: 60,
  equals: 61,
  greaterThan: 62,
  dash: 45,
  dot: 46,
  space: 32,
  openingSquareBracket: 91,
  closingSquareBracket: 93,
  openingCurlyBracket: 123,
  closingCurlyBracket: 125,
  openingParentheses: 40,
  closingParentheses: 41,
  underscore: 95,
  uppercaseX: 88,
  lowercaseX: 120
};

function createLabel(effects, ok, nok, type, markerType, stringType, disallowEol) {
  let size = 0;
  let balance = 0;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return afterStart;
  }
  function afterStart(code) {
    if (code === Codes.closingSquareBracket) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === Codes.EOF || size > 999) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      return atClosingBrace(code);
    }
    if (markdownLineEnding(code)) {
      if (disallowEol) {
        return nok(code);
      }
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkText", { contentType: "text" });
    return label(code);
  }
  function label(code) {
    if (code === Codes.EOF || markdownLineEnding(code) || size > 999) {
      effects.exit("chunkText");
      return atBreak(code);
    }
    if (code === Codes.openingSquareBracket && ++balance > 3) {
      return nok(code);
    }
    if (code === Codes.closingSquareBracket && !balance--) {
      effects.exit("chunkText");
      return atClosingBrace(code);
    }
    effects.consume(code);
    return code === Codes.backSlash ? labelEscape : label;
  }
  function atClosingBrace(code) {
    effects.exit(stringType);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.exit(type);
    return ok;
  }
  function labelEscape(code) {
    if (code === Codes.openingSquareBracket || code === Codes.backSlash || code === Codes.closingSquareBracket) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}

const label$2 = { tokenize: tokenizeLabel$2, partial: true };
const gfmCheck = { tokenize: checkGfmTaskCheckbox, partial: true };
function tokenize$4(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingSquareBracket) {
      throw new Error("expected `[`");
    }
    if (self.previous === Codes.EOF && self._gfmTasklistFirstContentOfListItem) {
      return effects.check(gfmCheck, nok, attemptLabel)(code);
    }
    return attemptLabel(code);
  }
  function attemptLabel(code) {
    effects.enter("textSpan");
    return effects.attempt(label$2, exit, nok)(code);
  }
  function exit(code) {
    if (code === Codes.openingParentheses || code === Codes.openingSquareBracket) {
      return nok(code);
    }
    effects.exit("textSpan");
    return ok(code);
  }
}
function tokenizeLabel$2(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
const tokenizeSpan = {
  tokenize: tokenize$4
};
function checkGfmTaskCheckbox(effects, ok, nok) {
  return enter;
  function enter(code) {
    effects.enter("formGfmTaskCheckbox");
    effects.consume(code);
    return check;
  }
  function check(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.uppercaseX || code === Codes.lowercaseX) {
      effects.consume(code);
      return check;
    }
    if (code === Codes.closingSquareBracket) {
      effects.exit("formGfmTaskCheckbox");
      return ok(code);
    }
    return nok(code);
  }
}

function createAttributes(effects, ok, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
  let type;
  let marker;
  return start;
  function start(code) {
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code);
    effects.exit(attributesMarkerType);
    return between;
  }
  function between(code) {
    if (code === Codes.hash) {
      type = attributeIdType;
      return shortcutStart(code);
    }
    if (code === Codes.dot) {
      type = attributeClassType;
      return shortcutStart(code);
    }
    if (code === Codes.colon || code === Codes.underscore || asciiAlpha(code)) {
      effects.enter(attributeType);
      effects.enter(attributeNameType);
      effects.consume(code);
      return code === Codes.colon ? bindAttributeName : name;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, between, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, between)(code);
    }
    return end(code);
  }
  function shortcutStart(code) {
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(type + "Marker");
    effects.consume(code);
    effects.exit(type + "Marker");
    return shortcutStartAfter;
  }
  function shortcutStartAfter(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.hash || code === Codes.apostrophe || code === Codes.dot || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }
    effects.enter(type + "Value");
    effects.consume(code);
    return shortcut;
  }
  function shortcut(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.hash || code === Codes.dot || code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(type + "Value");
      effects.exit(type);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return shortcut;
  }
  function bindAttributeName(code) {
    if (code === Codes.dash || asciiAlphanumeric(code)) {
      effects.consume(code);
      return bindAttributeName;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, bindAttributeNameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, bindAttributeNameAfter)(code);
    }
    return bindAttributeNameAfter(code);
  }
  function bindAttributeNameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.dot || code === Codes.colon || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(attributeNameType);
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, nameAfter, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, nameAfter)(code);
    }
    return nameAfter(code);
  }
  function nameAfter(code) {
    if (code === Codes.equals) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }
    effects.exit(attributeType);
    return between(code);
  }
  function valueBefore(code) {
    if (code === Codes.EOF || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick || code === Codes.closingCurlyBracket || disallowEol && markdownLineEnding(code)) {
      return nok(code);
    }
    if (code === Codes.quotationMark || code === Codes.apostrophe) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      marker = code;
      return valueQuotedStart;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, valueBefore, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, valueBefore)(code);
    }
    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code);
    marker = void 0;
    return valueUnquoted;
  }
  function valueUnquoted(code) {
    if (code === Codes.EOF || code === Codes.quotationMark || code === Codes.apostrophe || code === Codes.LessThan || code === Codes.equals || code === Codes.greaterThan || code === Codes.backTick) {
      return nok(code);
    }
    if (code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return valueUnquoted;
  }
  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter;
    }
    effects.enter(attributeValueType);
    return valueQuotedBetween(code);
  }
  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code);
    }
    if (code === Codes.EOF) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      return disallowEol ? nok(code) : factoryWhitespace(effects, valueQuotedBetween)(code);
    }
    effects.enter(attributeValueData);
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuoted(code) {
    if (code === marker || code === Codes.EOF || markdownLineEnding(code)) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code);
    }
    effects.consume(code);
    return valueQuoted;
  }
  function valueQuotedAfter(code) {
    return code === Codes.closingCurlyBracket || markdownLineEndingOrSpace(code) ? between(code) : end(code);
  }
  function end(code) {
    if (code === Codes.closingCurlyBracket) {
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok;
    }
    return nok(code);
  }
}

const attributes$2 = { tokenize: tokenizeAttributes$2, partial: true };
const validEvents = [
  "textSpan",
  "attentionSequence",
  "codeText",
  "link",
  "image"
];
function tokenize$3(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.openingCurlyBracket) {
      throw new Error("expected `{`");
    }
    const event = self.events[self.events.length - 1];
    if (markdownLineEnding(self.previous) || !event || !validEvents.includes(event[1].type)) {
      return nok;
    }
    return effects.attempt(attributes$2, ok, nok)(code);
  }
}
function tokenizeAttributes$2(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeAttribute = {
  tokenize: tokenize$3
};

function createName(effects, ok, nok, nameType) {
  const self = this;
  return start;
  function start(code) {
    if (asciiAlpha(code)) {
      effects.enter(nameType);
      effects.consume(code);
      return name;
    }
    return nok(code);
  }
  function name(code) {
    if (code === Codes.dash || code === Codes.underscore || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name;
    }
    effects.exit(nameType);
    return self.previous === Codes.underscore ? nok(code) : ok(code);
  }
}

const label$1 = { tokenize: tokenizeLabel$1, partial: true };
const attributes$1 = { tokenize: tokenizeAttributes$1, partial: true };
function previous(code) {
  return code !== Codes.colon || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenize$2(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    if (self.previous !== null && !markdownLineEndingOrSpace(self.previous) && ![Codes.openingSquareBracket].includes(self.previous)) {
      return nok(code);
    }
    if (!previous.call(self, self.previous)) {
      throw new Error("expected correct previous");
    }
    effects.enter("componentText");
    effects.enter("componentTextMarker");
    effects.consume(code);
    effects.exit("componentTextMarker");
    return createName.call(self, effects, afterName, nok, "componentTextName");
  }
  function afterName(code) {
    if (code === Codes.colon) {
      return nok(code);
    }
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, afterAttributes, afterAttributes)(code);
    }
    return exit(code);
  }
  function afterAttributes(code) {
    if (code === Codes.openingSquareBracket) {
      return effects.attempt(label$1, afterLabel, afterLabel)(code);
    }
    return exit(code);
  }
  function afterLabel(code) {
    if (code === Codes.openingCurlyBracket) {
      return effects.attempt(attributes$1, exit, exit)(code);
    }
    return exit(code);
  }
  function exit(code) {
    if (!markdownLineEndingOrSpace(code) && code !== null && ![Codes.closingSquareBracket].includes(code)) {
      return nok(code);
    }
    effects.exit("componentText");
    return ok(code);
  }
}
function tokenizeLabel$1(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
}
function tokenizeAttributes$1(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
}
const tokenizeInline = {
  tokenize: tokenize$2,
  previous
};

function sizeChunks(chunks) {
  let index = -1;
  let size = 0;
  while (++index < chunks.length) {
    size += typeof chunks[index] === "string" ? chunks[index].length : 1;
  }
  return size;
}
function prefixSize(events, type) {
  const tail = events[events.length - 1];
  if (!tail || tail[1].type !== type) {
    return 0;
  }
  return sizeChunks(tail[2].sliceStream(tail[1]));
}
function linePrefixSize(events) {
  let size = 0;
  let index = events.length - 1;
  let tail = events[index];
  while (index >= 0 && tail && tail[1].type === "linePrefix" && tail[0] === "exit") {
    size += sizeChunks(tail[2].sliceStream(tail[1]));
    index -= 1;
    tail = events[index];
  }
  return size;
}
const useTokenState = (tokenName) => {
  const token = {
    isOpen: false,
    enter: (effects) => {
      const initialState = token.isOpen;
      token.exit(effects);
      effects.enter(tokenName);
      token.isOpen = true;
      return () => {
        token.isOpen = initialState;
      };
    },
    enterOnce: (effects) => {
      const initialState = token.isOpen;
      if (!token.isOpen) {
        effects.enter(tokenName);
        token.isOpen = true;
      }
      return () => {
        token.isOpen = initialState;
      };
    },
    exit: (effects) => {
      const initialState = token.isOpen;
      if (token.isOpen) {
        effects.exit(tokenName);
        token.isOpen = false;
      }
      return () => {
        token.isOpen = initialState;
      };
    }
  };
  return token;
};

function tokenizeFrontMatter(effects, ok, _nok, next, initialPrefix) {
  let previous;
  return effects.attempt({
    tokenize: tokenizeDataSection,
    partial: true
  }, dataSectionOpen, next);
  function tokenizeDataSection(effects2, ok2, nok) {
    const self = this;
    let size = 0;
    let sectionIndentSize = 0;
    return closingPrefixAfter;
    function dataLineFirstSpaces(code) {
      if (markdownSpace(code)) {
        effects2.consume(code);
        sectionIndentSize += 1;
        return dataLineFirstSpaces;
      }
      effects2.exit("space");
      return closingPrefixAfter(code);
    }
    function closingPrefixAfter(code) {
      if (markdownSpace(code)) {
        effects2.enter("space");
        return dataLineFirstSpaces(code);
      }
      if (sectionIndentSize === 0) {
        sectionIndentSize = linePrefixSize(self.events);
      }
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === Codes.dash || markdownSpace(code)) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size < SectionSequenceSize) {
        return nok(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        return nok(code);
      }
      if (!markdownLineEnding(code)) {
        return nok(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function dataSectionOpen(code) {
    effects.enter("componentContainerDataSection");
    return effects.attempt({
      tokenize: tokenizeDataSection,
      partial: true
    }, dataSectionClose, dataChunkStart)(code);
  }
  function dataChunkStart(code) {
    if (code === null) {
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return dataContentContinue(code);
  }
  function dataContentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      effects.exit("componentContainerDataSection");
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return effects.attempt({
        tokenize: tokenizeDataSection,
        partial: true
      }, dataSectionClose, dataChunkStart);
    }
    effects.consume(code);
    return dataContentContinue;
  }
  function dataSectionClose(code) {
    effects.exit("componentContainerDataSection");
    return factorySpace(effects, next, "whitespace")(code);
  }
}

const label = { tokenize: tokenizeLabel, partial: true };
const attributes = { tokenize: tokenizeAttributes, partial: true };
function tokenize$1(effects, ok, nok) {
  const self = this;
  const initialPrefix = linePrefixSize(this.events);
  let sizeOpen = 0;
  let previous;
  const childContainersSequenceSize = [];
  let containerFirstLine = true;
  const section = useTokenState("componentContainerSection");
  return start;
  function start(code) {
    if (code !== Codes.colon) {
      throw new Error("expected `:`");
    }
    effects.enter("componentContainer");
    effects.enter("componentContainerFence");
    effects.enter("componentContainerSequence");
    return sequenceOpen(code);
  }
  function tokenizeSectionClosing(effects2, ok2, nok2) {
    let size = 0;
    let sectionIndentSize = 0;
    let revertSectionState;
    return closingPrefixAfter;
    function closingPrefixAfter(code) {
      sectionIndentSize = linePrefixSize(self.events);
      revertSectionState = section.exit(effects2);
      effects2.enter("componentContainerSectionSequence");
      return closingSectionSequence(code);
    }
    function closingSectionSequence(code) {
      if (code === slotSeparatorCode) {
        effects2.consume(code);
        size++;
        return closingSectionSequence;
      }
      if (size !== slotSeparatorLength) {
        revertSectionState();
        return nok2(code);
      }
      if (sectionIndentSize !== initialPrefix) {
        revertSectionState();
        return nok2(code);
      }
      if (!asciiAlpha(code)) {
        revertSectionState();
        return nok2(code);
      }
      effects2.exit("componentContainerSectionSequence");
      return factorySpace(effects2, ok2, "whitespace")(code);
    }
  }
  function sectionOpen(code) {
    section.enter(effects);
    if (markdownLineEnding(code)) {
      return factorySpace(effects, lineStart, "whitespace")(code);
    }
    effects.enter("componentContainerSectionTitle");
    return sectionTitle(code);
  }
  function sectionTitle(code) {
    if (markdownLineEnding(code)) {
      effects.exit("componentContainerSectionTitle");
      return factorySpace(effects, lineStart, "linePrefix", 4)(code);
    }
    effects.consume(code);
    return sectionTitle;
  }
  function sequenceOpen(code) {
    if (code === Codes.colon) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    if (sizeOpen < ContainerSequenceSize) {
      return nok(code);
    }
    effects.exit("componentContainerSequence");
    return createName.call(self, effects, afterName, nok, "componentContainerName")(code);
  }
  function afterName(code) {
    return code === Codes.openingSquareBracket ? effects.attempt(label, afterLabel, afterLabel)(code) : afterLabel(code);
  }
  function afterLabel(code) {
    return code === Codes.openingCurlyBracket ? effects.attempt(attributes, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }
  function afterAttributes(code) {
    return factorySpace(effects, openAfter, "whitespace")(code);
  }
  function openAfter(code) {
    effects.exit("componentContainerFence");
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return self.interrupt ? ok : contentStart;
    }
    return nok(code);
  }
  function contentStart(code) {
    if (code === null) {
      effects.exit("componentContainer");
      return ok(code);
    }
    if (containerFirstLine && (code === Codes.dash || markdownSpace(code))) {
      containerFirstLine = false;
      return tokenizeFrontMatter(effects, ok, nok, contentStart, initialPrefix)(code);
    }
    effects.enter("componentContainerContent");
    return lineStart(code);
  }
  function lineStartAfterPrefix(code) {
    if (code === null) {
      return after(code);
    }
    if (!childContainersSequenceSize.length && (code === slotSeparatorCode || code === Codes.space)) {
      return effects.attempt({ tokenize: tokenizeSectionClosing, partial: true }, sectionOpen, chunkStart)(code);
    }
    if (code === Codes.colon) {
      return effects.attempt({ tokenize: tokenizeClosingFence, partial: true }, after, chunkStart)(code);
    }
    return chunkStart(code);
  }
  function lineStart(code) {
    if (code === null) {
      return after(code);
    }
    return initialPrefix ? factorySpace(effects, lineStartAfterPrefix, "linePrefix", initialPrefix + 1)(code) : lineStartAfterPrefix(code);
  }
  function chunkStart(code) {
    if (code === null) {
      return after(code);
    }
    section.enterOnce(effects);
    const token = effects.enter("chunkDocument", {
      contentType: "document",
      previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return contentContinue(code);
  }
  function contentContinue(code) {
    if (code === null) {
      effects.exit("chunkDocument");
      return after(code);
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit("chunkDocument");
      return lineStart;
    }
    effects.consume(code);
    return contentContinue;
  }
  function after(code) {
    section.exit(effects);
    effects.exit("componentContainerContent");
    effects.exit("componentContainer");
    return ok(code);
  }
  function tokenizeClosingFence(effects2, ok2, nok2) {
    let size = 0;
    return factorySpace(effects2, closingPrefixAfter, "linePrefix", 4);
    function closingPrefixAfter(code) {
      effects2.enter("componentContainerFence");
      effects2.enter("componentContainerSequence");
      return closingSequence(code);
    }
    function closingSequence(code) {
      if (code === Codes.colon) {
        effects2.consume(code);
        size++;
        return closingSequence;
      }
      if (childContainersSequenceSize.length) {
        if (size === childContainersSequenceSize[childContainersSequenceSize.length - 1]) {
          childContainersSequenceSize.pop();
        }
        return nok2(code);
      }
      if (size !== sizeOpen) {
        return nok2(code);
      }
      effects2.exit("componentContainerSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code);
    }
    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects2.exit("componentContainerFence");
        return ok2(code);
      }
      childContainersSequenceSize.push(size);
      return nok2(code);
    }
  }
}
function tokenizeLabel(effects, ok, nok) {
  return createLabel(effects, ok, nok, "componentContainerLabel", "componentContainerLabelMarker", "componentContainerLabelString", true);
}
function tokenizeAttributes(effects, ok, nok) {
  return createAttributes(effects, ok, nok, "componentContainerAttributes", "componentContainerAttributesMarker", "componentContainerAttribute", "componentContainerAttributeId", "componentContainerAttributeClass", "componentContainerAttributeName", "componentContainerAttributeInitializerMarker", "componentContainerAttributeValueLiteral", "componentContainerAttributeValue", "componentContainerAttributeValueMarker", "componentContainerAttributeValueData", true);
}
const tokenizeContainer = {
  tokenize: tokenize$1,
  concrete: true
};

function tokenize(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, lineStart, "linePrefix");
  function lineStart(code) {
    if (prefixSize(self.events, "linePrefix") < 4) {
      return nok(code);
    }
    switch (code) {
      case Codes.backTick:
        return codeFenced.tokenize.call(self, effects, ok, nok)(code);
      case Codes.colon:
        return tokenizeContainer.tokenize.call(self, effects, ok, nok)(code);
      default:
        return nok(code);
    }
  }
}
const tokenizeContainerIndented = {
  tokenize
};

function micromarkComponentsExtension() {
  return {
    text: {
      [Codes.colon]: tokenizeInline,
      [Codes.openingSquareBracket]: [tokenizeSpan],
      [Codes.openingCurlyBracket]: tokenizeAttribute
    },
    flow: {
      [Codes.colon]: [tokenizeContainer]
    },
    flowInitial: {
      "-2": tokenizeContainerIndented,
      "-1": tokenizeContainerIndented,
      [Codes.space]: tokenizeContainerIndented
    }
  };
}

const toFrontMatter = (yamlString) => `---
${yamlString}
---`;
const remarkMDC = (function({ components = [] } = {}) {
  const data = this.data();
  add("micromarkExtensions", micromarkComponentsExtension());
  add("fromMarkdownExtensions", fromMarkdown);
  add("toMarkdownExtensions", toMarkdown);
  function add(field, value) {
    if (!data[field]) {
      data[field] = [];
    }
    data[field].push(value);
  }
  if (components.length) {
    return async (tree, { data: data2 }) => {
      const jobs = [];
      visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
        bindNode(node);
        const { instance: handler, options } = components.find((c) => c.name === node.name) || {};
        if (handler) {
          jobs.push(handler(options)(node, data2));
        }
      });
      await Promise.all(jobs);
      return tree;
    };
  }
  return (tree) => {
    visit(tree, ["textComponent", "leafComponent", "containerComponent"], (node) => {
      bindNode(node);
    });
  };
});
function bindNode(node) {
  const nodeData = node.data || (node.data = {});
  node.fmAttributes = getNodeData(node);
  nodeData.hName = kebabCase(node.name);
  nodeData.hProperties = bindData({
    ...node.attributes,
    ...node.fmAttributes
  });
}
function getNodeData(node) {
  if (!node.rawData) {
    return {};
  }
  const yaml = node.rawData.replace(/\s-+$/, "");
  const { data } = parseFrontMatter(toFrontMatter(yaml));
  return data;
}
function bindData(data) {
  const entries = Object.entries(data).map(([key, value]) => {
    if (key.startsWith(":")) {
      return [key, value];
    }
    if (typeof value === "string") {
      return [key, value];
    }
    return [`:${key}`, JSON.stringify(value)];
  });
  return Object.fromEntries(entries);
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(node.position, "code", {
    language,
    filename,
    highlights,
    code
  }, [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]);
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(h({}, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h({
    start: position(result[1]).start,
    end: position(result[result.length - 1]).end
  }, "tbody", wrap(result.slice(1), true));
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => plugins.reduce((stream2, plugin) => stream2.use(plugin[0] || plugin, plugin[1] || void 0), stream);
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process({
      value: content,
      data: options.data
    }, (error, file) => {
      if (error) {
        return reject(error);
      }
      Object.assign(options.data, file?.data || {});
      resolve(file?.result);
    });
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: [
    remarkEmoji,
    remarkSqueezeParagraphs,
    remarkGfm
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeExternalLinks,
    rehypeSortAttributeValues,
    rehypeSortAttributes,
    [rehypeRaw, { passThrough: ["element"] }]
  ]
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const importPlugin = async (p) => [
  await import(p[0]).then((res) => res.default || res),
  typeof p[1] === "object" ? { ...p[1] } : p[1]
];
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47markdown_46mjs = {
  name: "markdown",
  extentions: [".md"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.markdown || {} };
    config.rehypePlugins = await Promise.all((config.rehypePlugins || []).map(importPlugin));
    config.remarkPlugins = await Promise.all((config.remarkPlugins || []).map(importPlugin));
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
};

const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47yaml_46mjs = {
  name: "Yaml",
  extentions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
};

const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47json_46mjs = {
  name: "Json",
  extentions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed = content;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/json5@2.2.1/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
};

const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47csv_46mjs = {
  name: "csv",
  extentions: [".csv"],
  parse: async (_id, content) => {
    const config = { ...useRuntimeConfig().content?.csv || {} };
    const csvToJson = await import('file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/csvtojson@2.0.10/node_modules/csvtojson/v2/index.js').then((m) => m.default || m);
    const parsed = await csvToJson({ output: "json", ...config }).fromString(content);
    return {
      _id,
      _type: "csv",
      body: parsed
    };
  }
};

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47path_45meta_46mjs = {
  name: "path-meta",
  extentions: [".*"],
  transform(content) {
    const { locales, defaultLocale } = useRuntimeConfig().content || {};
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = parts.join("/");
    return {
      _path: generatePath(filePath),
      _draft: isDraft(filePath),
      _partial: isPartial(filePath),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
};
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path) => withLeadingSlash(withoutTrailingSlash(path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/")));
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index/, "").replace(/\.draft/, "");
}

const withContentBase = (url) => {
  return withBase(url, `/api/${useRuntimeConfig().public.content.base}`);
};
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47shiki_46mjs = {
  name: "markdown",
  extentions: [".md"],
  transform: async (content) => {
    const codeBlocks = [];
    visit(content.body, (node) => node.tag === "code" && node?.props.code, (node) => {
      codeBlocks.push(node);
    });
    await Promise.all(codeBlocks.map(highlightBlock));
    const inlineCodes = [];
    visit(content.body, (node) => node.tag === "code-inline" && (node.props?.lang || node.props?.language), (node) => {
      inlineCodes.push(node);
    });
    await Promise.all(inlineCodes.map(highlightInline));
    return content;
  }
};
const tokenSpan = ({ content, color }) => ({
  type: "element",
  tag: "span",
  props: { style: { color } },
  children: [{ type: "text", value: content }]
});
const highlightInline = async (node) => {
  const code = node.children[0].value;
  const lines = await $fetch(withContentBase("highlight"), {
    method: "POST",
    body: {
      code,
      lang: node.props.lang || node.props.language
    }
  });
  node.children = lines[0].map(tokenSpan);
  node.props = node.props || {};
  node.props.class = "colored";
  return node;
};
const highlightBlock = async (node) => {
  const { code, language: lang, highlights = [] } = node.props;
  const lines = await $fetch(withContentBase("highlight"), {
    method: "POST",
    body: {
      code,
      lang
    }
  });
  const innerCodeNode = node.children[0].children[0];
  innerCodeNode.children = lines.map((line, lineIndex) => ({
    type: "element",
    tag: "span",
    props: { class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim() },
    children: line.map(tokenSpan)
  }));
  return node;
};

const transformers = [_47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47markdown_46mjs, _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47yaml_46mjs, _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47json_46mjs, _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47csv_46mjs, _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47path_45meta_46mjs, _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47server_47transformers_47shiki_46mjs];
const getParser = (ext) => transformers.find(p => ext.match(new RegExp(p.extentions.join("|"),  "i")) && p.parse);
const getTransformers = (ext) => transformers.filter(p => ext.match(new RegExp(p.extentions.join("|"),  "i")) && p.transform);

async function parseContent(id, content) {
  const nitroApp = useNitroApp();
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const ext = extname(id);
  const plugin = getParser(ext);
  if (!plugin) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parsed = await plugin.parse(file._id, file.body);
  const transformers = getTransformers(ext);
  const result = await transformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    return cur.transform(next);
  }, Promise.resolve(parsed));
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}

const isPreview = (event) => {
  const previewToken = useQuery(event).previewToken || useCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = useQuery(event).previewToken || useCookie(event, "previewToken");
  return { key };
};

const sourceStorage = prefixStorage(useStorage(), "content:source");
prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map((p) => typeof p === "string" ? new RegExp(`^${p}`) : p);
const contentIgnorePredicate = (key) => !key.startsWith("preview:") && !contentIgnores.some((prefix) => key.split(":").some((k) => prefix.test(k)));
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(previewKeys.map(async (key2) => {
        const meta = await sourceStorage.getMeta(key2);
        if (meta?.__deleted) {
          keysSet.delete(key2.substring(previewPrefix.length));
        } else {
          keysSet.add(key2.substring(previewPrefix.length));
        }
      }));
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integerity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
function serverQueryContent(event, path, ...pathParts) {
  let params = path || {};
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    path = path.replace(/[-[\]{}()*+.,^$\s]/g, "\\$&");
    params = {
      where: [{ _path: new RegExp(`^${path}`) }]
    };
  }
  const pipelineFetcher = createPipelineFetcher(() => getContentsList(event));
  if (!params.sort?.length) {
    params.sort = [{ _file: 1, $numeric: true }];
  }
  return createQuery(pipelineFetcher, params);
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const { qid } = event.context.params;
  const query = useQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  query.where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      query.where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where[key] = query[key];
  }
  return query;
};

const _332874 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).find();
  if (query.first && Array.isArray(contents) && contents.length === 0) {
    throw createError({
      statusMessage: "Document not found!",
      statusCode: 404,
      data: {
        description: "Could not find document for the given query.",
        query
      }
    });
  }
  return contents;
});

const _278401 = defineEventHandler(async (event) => {
  const now = Date.now();
  await serverQueryContent(event).find();
  return {
    generatedAt: now,
    generateTime: Date.now() - now
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = pick(["title", ...navigation.fields]);
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => {
      return {
        title: content2.title,
        _path: content2._path,
        _file: content2._file,
        children: [],
        ...pickNavigationFields(content2),
        ...content2._draft ? { _draft: true } : {}
      };
    };
    const navItem = getNavItem(content);
    if (isIndex) {
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(navItem, pickNavigationFields(configs[navItem._path]));
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        const conf = configs[currentPathPart];
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}

const _363179 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const contents = await serverQueryContent(event, query).where({
    _partial: false
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

var information_for_contributors = [
	"This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
var version = "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json";
var name = "markdown";
var injectionSelector = "L:text.html.markdown";
var scopeName = "text.markdown.mdc";
var patterns = [
	{
		include: "text.html.markdown#frontMatter"
	},
	{
		include: "#component_block"
	},
	{
		include: "#block"
	}
];
var repository = {
	block: {
		comment: "Same as `text.html.markdown#block`, but without `raw_block`",
		patterns: [
			{
				include: "#component_block"
			},
			{
				include: "text.html.markdown#separator"
			},
			{
				include: "#heading"
			},
			{
				include: "#blockquote"
			},
			{
				include: "#lists"
			},
			{
				include: "#paragraph"
			},
			{
				include: "text.html.markdown#fenced_code_block"
			},
			{
				include: "text.html.markdown#link-def"
			},
			{
				include: "text.html.markdown#html"
			}
		]
	},
	inline: {
		patterns: [
			{
				include: "#component_inline"
			},
			{
				include: "#span"
			},
			{
				include: "#markdown_attributes"
			}
		]
	},
	markdown_attributes: {
		match: "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.component.attribute",
		captures: {
			"4": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	span: {
		match: "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
		name: "markup.component.span",
		captures: {
			"2": {
				name: "string.other.link.description.title.markdown"
			},
			"4": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	attributes: {
		match: "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.attributes",
		captures: {
			"3": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	component_inline: {
		match: "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
		name: "markup.component.inline",
		captures: {
			"2": {
				name: "punctuation.definition.tag.start.component"
			},
			"3": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			},
			"6": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"7": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"8": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	component_block: {
		begin: "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
		name: "markup.component.block",
		end: "(^|\\G)(\\2)(\\3)\\s*$",
		beginCaptures: {
			"4": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		},
		patterns: [
			{
				include: "#content"
			}
		]
	},
	content: {
		begin: "(^|\\G)(\\s*)(.*)",
		"while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
		contentName: "meta.embedded.block.component",
		patterns: [
			{
				begin: "(^|\\G)(\\s*)(-{3})(\\s*)$",
				end: "(^|\\G)(\\s*(-{3})(\\s*)$)",
				patterns: [
					{
						include: "source.yaml"
					}
				]
			},
			{
				match: "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						name: "comment.block.html"
					}
				}
			},
			{
				comment: "Block Repository created to disable 4-space raw block inside components",
				include: "#block"
			}
		]
	},
	attribute: {
		patterns: [
			{
				match: "(?x)\n  (\n    ([^=><\\s]*)  # attribute name\n    (             # attribute value\n        =[\"]([^\"]*)([\"])|[']([^']*)(['])\n      | =[^\\s'\"]*\n    )?\n    \\s*\n  )",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						patterns: [
							{
								include: "#attribute-interior"
							}
						]
					}
				}
			}
		]
	},
	"attribute-interior": {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
		patterns: [
			{
				begin: "=",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.key-value.html"
					}
				},
				end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
				patterns: [
					{
						match: "([^\\s\"'=<>`/]|/(?!>))+",
						name: "string.unquoted.html"
					},
					{
						begin: "\"",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "\"",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.double.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						begin: "'",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "'",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.single.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						match: "=",
						name: "invalid.illegal.unexpected-equals-sign.html"
					}
				]
			}
		]
	},
	entities: {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"912": {
						name: "punctuation.definition.entity.html"
					}
				},
				comment: "Yes this is a bit ridiculous, there are quite a lot of these",
				match: "(?x)\n\t\t\t\t\t\t(&)\t(?=[a-zA-Z])\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n\t\t\t\t\t\t  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n\t\t\t\t\t\t  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n\t\t\t\t\t\t  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n\t\t\t\t\t\t  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n\t\t\t\t\t\t  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n\t\t\t\t\t\t  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n\t\t\t\t\t\t  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n\t\t\t\t\t\t  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n\t\t\t\t\t\t  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n\t\t\t\t\t\t  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n\t\t\t\t\t\t  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n\t\t\t\t\t\t  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n\t\t\t\t\t\t  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n\t\t\t\t\t\t  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n\t\t\t\t\t\t  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n\t\t\t\t\t\t  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n\t\t\t\t\t\t  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n\t\t\t\t\t\t  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n\t\t\t\t\t\t  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n\t\t\t\t\t\t  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n\t\t\t\t\t\t  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n\t\t\t\t\t\t  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n\t\t\t\t\t\t  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n\t\t\t\t\t\t  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n\t\t\t\t\t\t  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(;)\n\t\t\t\t\t",
				name: "constant.character.entity.named.$2.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[0-9]+(;)",
				name: "constant.character.entity.numeric.decimal.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[xX][0-9a-fA-F]+(;)",
				name: "constant.character.entity.numeric.hexadecimal.html"
			},
			{
				match: "&(?=[a-zA-Z0-9]+;)",
				name: "invalid.illegal.ambiguous-ampersand.html"
			}
		]
	},
	heading: {
		match: "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
		captures: {
			"1": {
				patterns: [
					{
						match: "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.6.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.5.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.4.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.3.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.2.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.1.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					}
				]
			}
		},
		name: "markup.heading.markdown",
		patterns: [
			{
				include: "text.html.markdown#inline"
			}
		]
	},
	"heading-setext": {
		patterns: [
			{
				match: "^(={3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.1.markdown"
			},
			{
				match: "^(-{3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.2.markdown"
			}
		]
	},
	lists: {
		patterns: [
			{
				begin: "(^|\\G)([ ]*)([*+-])([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				comment: "Currently does not support un-indented second lines.",
				name: "markup.list.unnumbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			},
			{
				begin: "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				name: "markup.list.numbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			}
		]
	},
	paragraph: {
		begin: "(^|\\G)[ ]*(?=\\S)",
		name: "meta.paragraph.markdown",
		patterns: [
			{
				include: "#inline"
			},
			{
				include: "text.html.markdown#inline"
			},
			{
				include: "text.html.derivative"
			},
			{
				include: "#heading-setext"
			}
		],
		"while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
	},
	blockquote: {
		begin: "(^|\\G)[ ]*(>) ?",
		captures: {
			"2": {
				name: "punctuation.definition.quote.begin.markdown"
			}
		},
		name: "markup.quote.markdown",
		patterns: [
			{
				include: "#block"
			}
		],
		"while": "(^|\\G)\\s*(>) ?"
	}
};
const mdcTMLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	injectionSelector: injectionSelector,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang))?.id;
const resolveTheme = (theme) => BUNDLED_THEMES.find((t) => t === theme);
const resolveBody = (body) => {
  if (typeof body.code !== "string") {
    throw createError({ statusMessage: "Bad Request", statusCode: 400, message: "Missing code key." });
  }
  return {
    code: body.code.replace(/\n+$/, ""),
    lang: resolveLang(body.lang),
    theme: resolveTheme(body.theme)
  };
};
const _356242 = defineLazyEventHandler(async () => {
  const { theme, preload } = useRuntimeConfig().content.highlight;
  const highlighter = await getHighlighter({
    theme: theme || "dark-plus",
    langs: [
      ...preload || ["json", "js", "ts", "css"],
      "shell",
      "html",
      "md",
      "yaml",
      {
        id: "md",
        scopeName: "text.markdown.mdc",
        path: "mdc.tmLanguage.json",
        aliases: ["markdown"],
        grammar: mdcTMLanguage
      }
    ]
  });
  return async (event) => {
    const params = await useBody(event);
    const { code, lang, theme: theme2 } = resolveBody(params);
    if (!lang) {
      return [[{ content: code }]];
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      await highlighter.loadLanguage(lang);
    }
    if (theme2 && !highlighter.getLoadedThemes().includes(theme2)) {
      await highlighter.loadTheme(theme2);
    }
    const highlightedCode = highlighter.codeToThemedTokens(code, lang, theme2);
    for (const line of highlightedCode) {
      for (const token of line) {
        delete token.fontStyle;
        delete token.explanation;
      }
    }
    return highlightedCode;
  };
});

const _lazy_377271 = () => import('../contact.post.mjs');
const _lazy_350823 = () => import('../renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '/api/contact', handler: _lazy_377271, lazy: true, middleware: false, method: "post" },
  { route: '/api/_content/query/:qid', handler: _332874, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _332874, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache', handler: _278401, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _363179, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _363179, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/highlight', handler: _356242, lazy: false, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_350823, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}

export { localFetch as l, useRuntimeConfig as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
