import { v as vue_cjs_prod, s as serverRenderer, r as require$$0 } from '../renderer.mjs';
import { hasProtocol, isEqual, withBase, withQuery, withLeadingSlash, withoutTrailingSlash, joinURL } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs';
import { useForm, useField } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/vee-validate@4.5.11/node_modules/vee-validate/dist/vee-validate.js';
import { toFormValidator } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/@vee-validate+zod@4.5.11_hr7p6edwbkgfis6mzy3bicj2fu/node_modules/@vee-validate/zod/dist/vee-validate-zod.js';
import { object, string } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/zod@3.17.3/node_modules/zod/lib/index.mjs';
import { defineStore, createPinia, setActivePinia } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/pinia@2.0.14_typescript@4.7.4/node_modules/pinia/dist/pinia.mjs';
import { gsap as gsap$2, Sine, Power2, Expo, Power4, SteppedEase, Elastic, Power0 } from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/gsap@3.10.4/node_modules/gsap/dist/gsap.js';
import htmlTags from 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import { u as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs';
import 'stream';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/node-fetch-native@0.1.4/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/scule@0.2.1/node_modules/scule/dist/index.mjs';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs';
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
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import 'file:///home/youness/dev/portfolio-2.0/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';

/*!
 * paths 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
    _DEG2RAD$1 = Math.PI / 180,
    _RAD2DEG = 180 / Math.PI,
    _sin = Math.sin,
    _cos = Math.cos,
    _abs = Math.abs,
    _sqrt = Math.sqrt,
    _atan2 = Math.atan2,
    _largeNum = 1e8,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _temp = {},
    _temp2 = {},
    _roundingNum = 1e5,
    _wrapProgress = function _wrapProgress(progress) {
  return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
},
    //if progress lands on 1, the % will make it 0 which is why we || 1, but not if it's negative because it makes more sense for motion to end at 0 in that case.
_round$1 = function _round(value) {
  return Math.round(value * _roundingNum) / _roundingNum || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 1e10) / 1e10 || 0;
},
    _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
  var segment = rawPath[segIndex],
      shift = t === 1 ? 6 : subdivideSegment(segment, i, t);

  if (shift && shift + i + 2 < segment.length) {
    rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
    segment.splice(0, i + shift);
    return 1;
  }
},
    _getSampleIndex = function _getSampleIndex(samples, length, progress) {
  // slightly slower way than doing this (when there's no lookup): segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0;
  var l = samples.length,
      i = ~~(progress * l);

  if (samples[i] > length) {
    while (--i && samples[i] > length) {}

    i < 0 && (i = 0);
  } else {
    while (samples[++i] < length && i < l) {}
  }

  return i < l ? i : l - 1;
},
    _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
  var i = rawPath.length;
  skipOuter || rawPath.reverse();

  while (i--) {
    rawPath[i].reversed || reverseSegment(rawPath[i]);
  }
},
    _copyMetaData = function _copyMetaData(source, copy) {
  copy.totalLength = source.totalLength;

  if (source.samples) {
    //segment
    copy.samples = source.samples.slice(0);
    copy.lookup = source.lookup.slice(0);
    copy.minLength = source.minLength;
    copy.resolution = source.resolution;
  } else if (source.totalPoints) {
    //rawPath
    copy.totalPoints = source.totalPoints;
  }

  return copy;
},
    //pushes a new segment into a rawPath, but if its starting values match the ending values of the last segment, it'll merge it into that same segment (to reduce the number of segments)
_appendOrMerge = function _appendOrMerge(rawPath, segment) {
  var index = rawPath.length,
      prevSeg = rawPath[index - 1] || [],
      l = prevSeg.length;

  if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
    segment = prevSeg.concat(segment.slice(2));
    index--;
  }

  rawPath[index] = segment;
};
/* TERMINOLOGY
 - RawPath - an array of arrays, one for each Segment. A single RawPath could have multiple "M" commands, defining Segments (paths aren't always connected).
 - Segment - an array containing a sequence of Cubic Bezier coordinates in alternating x, y, x, y format. Starting anchor, then control point 1, control point 2, and ending anchor, then the next control point 1, control point 2, anchor, etc. Uses less memory than an array with a bunch of {x, y} points.
 - Bezier - a single cubic Bezier with a starting anchor, two control points, and an ending anchor.
 - the variable "t" is typically the position along an individual Bezier path (time) and it's NOT linear, meaning it could accelerate/decelerate based on the control points whereas the "p" or "progress" value is linearly mapped to the whole path, so it shouldn't really accelerate/decelerate based on control points. So a progress of 0.2 would be almost exactly 20% along the path. "t" is ONLY in an individual Bezier piece.
 */
//accepts basic selector text, a path instance, a RawPath instance, or a Segment and returns a RawPath (makes it easy to homogenize things). If an element or selector text is passed in, it'll also cache the value so that if it's queried again, it'll just take the path data from there instead of parsing it all over again (as long as the path data itself hasn't changed - it'll check).


function getRawPath(value) {
  value = _isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
  var e = value.getAttribute ? value : 0,
      rawPath;

  if (e && (value = value.getAttribute("d"))) {
    //implements caching
    if (!e._gsPath) {
      e._gsPath = {};
    }

    rawPath = e._gsPath[value];
    return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
  }

  return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
} //copies a RawPath WITHOUT the length meta data (for speed)

function copyRawPath(rawPath) {
  var a = [],
      i = 0;

  for (; i < rawPath.length; i++) {
    a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
  }

  return _copyMetaData(rawPath, a);
}
function reverseSegment(segment) {
  var i = 0,
      y;
  segment.reverse(); //this will invert the order y, x, y, x so we must flip it back.

  for (; i < segment.length; i += 2) {
    y = segment[i];
    segment[i] = segment[i + 1];
    segment[i + 1] = y;
  }

  segment.reversed = !segment.reversed;
}

var _createPath = function _createPath(e, ignore) {
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      attr = [].slice.call(e.attributes),
      i = attr.length,
      name;
  ignore = "," + ignore + ",";

  while (--i > -1) {
    name = attr[i].nodeName.toLowerCase(); //in Microsoft Edge, if you don't set the attribute with a lowercase name, it doesn't render correctly! Super weird.

    if (ignore.indexOf("," + name + ",") < 0) {
      path.setAttributeNS(null, name, attr[i].nodeValue);
    }
  }

  return path;
},
    _typeAttrs = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
},
    _attrToObj = function _attrToObj(e, attrs) {
  var props = attrs ? attrs.split(",") : [],
      obj = {},
      i = props.length;

  while (--i > -1) {
    obj[props[i]] = +e.getAttribute(props[i]) || 0;
  }

  return obj;
}; //converts an SVG shape like <circle>, <rect>, <polygon>, <polyline>, <ellipse>, etc. to a <path>, swapping it in and copying the attributes to match.


function convertToPath(element, swap) {
  var type = element.tagName.toLowerCase(),
      circ = 0.552284749831,
      data,
      x,
      y,
      r,
      ry,
      path,
      rcirc,
      rycirc,
      points,
      w,
      h,
      x2,
      x3,
      x4,
      x5,
      x6,
      y2,
      y3,
      y4,
      y5,
      y6,
      attr;

  if (type === "path" || !element.getBBox) {
    return element;
  }

  path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
  attr = _attrToObj(element, _typeAttrs[type]);

  if (type === "rect") {
    r = attr.rx;
    ry = attr.ry || r;
    x = attr.x;
    y = attr.y;
    w = attr.width - r * 2;
    h = attr.height - ry * 2;

    if (r || ry) {
      //if there are rounded corners, render cubic beziers
      x2 = x + r * (1 - circ);
      x3 = x + r;
      x4 = x3 + w;
      x5 = x4 + r * circ;
      x6 = x4 + r;
      y2 = y + ry * (1 - circ);
      y3 = y + ry;
      y4 = y3 + h;
      y5 = y4 + ry * circ;
      y6 = y4 + ry;
      data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
    } else {
      data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
    }
  } else if (type === "circle" || type === "ellipse") {
    if (type === "circle") {
      r = ry = attr.r;
      rycirc = r * circ;
    } else {
      r = attr.rx;
      ry = attr.ry;
      rycirc = ry * circ;
    }

    x = attr.cx;
    y = attr.cy;
    rcirc = r * circ;
    data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
  } else if (type === "line") {
    data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2; //previously, we just converted to "Mx,y Lx,y" but Safari has bugs that cause that not to render properly when using a stroke-dasharray that's not fully visible! Using a cubic bezier fixes that issue.
  } else if (type === "polyline" || type === "polygon") {
    points = (element.getAttribute("points") + "").match(_numbersExp) || [];
    x = points.shift();
    y = points.shift();
    data = "M" + x + "," + y + " L" + points.join(",");

    if (type === "polygon") {
      data += "," + x + "," + y + "z";
    }
  }

  path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));

  if (swap && element.parentNode) {
    element.parentNode.insertBefore(path, element);
    element.parentNode.removeChild(element);
  }

  return path;
} //returns the rotation (in degrees) at a particular progress on a rawPath (the slope of the tangent)

function getRotationAtBezierT(segment, i, t) {
  var a = segment[i],
      b = segment[i + 2],
      c = segment[i + 4],
      x;
  a += (b - a) * t;
  b += (c - b) * t;
  a += (b - a) * t;
  x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
  a = segment[i + 1];
  b = segment[i + 3];
  c = segment[i + 5];
  a += (b - a) * t;
  b += (c - b) * t;
  a += (b - a) * t;
  return _round$1(_atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * _RAD2DEG);
}

function sliceRawPath(rawPath, start, end) {
  end = _isUndefined(end) ? 1 : _roundPrecise(end) || 0; // we must round to avoid issues like 4.15 / 8 = 0.8300000000000001 instead of 0.83 or 2.8 / 5 = 0.5599999999999999 instead of 0.56 and if someone is doing a loop like start: 2.8 / 0.5, end: 2.8 / 0.5 + 1.

  start = _roundPrecise(start) || 0;
  var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)),
      path = copyRawPath(rawPath);

  if (start > end) {
    start = 1 - start;
    end = 1 - end;

    _reverseRawPath(path);

    path.totalLength = 0;
  }

  if (start < 0 || end < 0) {
    var offset = Math.abs(~~Math.min(start, end)) + 1;
    start += offset;
    end += offset;
  }

  path.totalLength || cacheRawPathMeasurements(path);
  var wrap = end > 1,
      s = getProgressData(path, start, _temp, true),
      e = getProgressData(path, end, _temp2),
      eSeg = e.segment,
      sSeg = s.segment,
      eSegIndex = e.segIndex,
      sSegIndex = s.segIndex,
      ei = e.i,
      si = s.i,
      sameSegment = sSegIndex === eSegIndex,
      sameBezier = ei === si && sameSegment,
      wrapsBehind,
      sShift,
      eShift,
      i,
      copy,
      totalSegments,
      l,
      j;

  if (wrap || loops) {
    wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;

    if (_splitSegment(path, sSegIndex, si, s.t)) {
      sSegIndex++;

      if (!wrapsBehind) {
        eSegIndex++;

        if (sameBezier) {
          e.t = (e.t - s.t) / (1 - s.t);
          ei = 0;
        } else if (sameSegment) {
          ei -= si;
        }
      }
    }

    if (Math.abs(1 - (end - start)) < 1e-5) {
      eSegIndex = sSegIndex - 1;
    } else if (!e.t && eSegIndex) {
      eSegIndex--;
    } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
      sSegIndex++;
    }

    if (s.t === 1) {
      sSegIndex = (sSegIndex + 1) % path.length;
    }

    copy = [];
    totalSegments = path.length;
    l = 1 + totalSegments * loops;
    j = sSegIndex;
    l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;

    for (i = 0; i < l; i++) {
      _appendOrMerge(copy, path[j++ % totalSegments]);
    }

    path = copy;
  } else {
    eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);

    if (start !== end) {
      sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
      sameSegment && (eShift += sShift);
      eSeg.splice(ei + eShift + 2);
      (sShift || si) && sSeg.splice(0, si + sShift);
      i = path.length;

      while (i--) {
        //chop off any extra segments
        (i < sSegIndex || i > eSegIndex) && path.splice(i, 1);
      }
    } else {
      eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0); //record the value before we chop because it'll be impossible to determine the angle after its length is 0!

      ei += eShift;
      s = eSeg[ei];
      e = eSeg[ei + 1];
      eSeg.length = eSeg.totalLength = 0;
      eSeg.totalPoints = path.totalPoints = 8;
      eSeg.push(s, e, s, e, s, e, s, e);
    }
  }

  path.totalLength = 0;
  return path;
} //measures a Segment according to its resolution (so if segment.resolution is 6, for example, it'll take 6 samples equally across each Bezier) and create/populate a "samples" Array that has the length up to each of those sample points (always increasing from the start) as well as a "lookup" array that's broken up according to the smallest distance between 2 samples. This gives us a very fast way of looking up a progress position rather than looping through all the points/Beziers. You can optionally have it only measure a subset, starting at startIndex and going for a specific number of beziers (remember, there are 3 x/y pairs each, for a total of 6 elements for each Bezier). It will also populate a "totalLength" property, but that's not generally super accurate because by default it'll only take 6 samples per Bezier. But for performance reasons, it's perfectly adequate for measuring progress values along the path. If you need a more accurate totalLength, either increase the resolution or use the more advanced bezierToPoints() method which keeps adding points until they don't deviate by more than a certain precision value.

function measureSegment(segment, startIndex, bezierQty) {
  startIndex = startIndex || 0;

  if (!segment.samples) {
    segment.samples = [];
    segment.lookup = [];
  }

  var resolution = ~~segment.resolution || 12,
      inc = 1 / resolution,
      endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length,
      x1 = segment[startIndex],
      y1 = segment[startIndex + 1],
      samplesIndex = startIndex ? startIndex / 6 * resolution : 0,
      samples = segment.samples,
      lookup = segment.lookup,
      min = (startIndex ? segment.minLength : _largeNum) || _largeNum,
      prevLength = samples[samplesIndex + bezierQty * resolution - 1],
      length = startIndex ? samples[samplesIndex - 1] : 0,
      i,
      j,
      x4,
      x3,
      x2,
      xd,
      xd1,
      y4,
      y3,
      y2,
      yd,
      yd1,
      inv,
      t,
      lengthIndex,
      l,
      segLength;
  samples.length = lookup.length = 0;

  for (j = startIndex + 2; j < endIndex; j += 6) {
    x4 = segment[j + 4] - x1;
    x3 = segment[j + 2] - x1;
    x2 = segment[j] - x1;
    y4 = segment[j + 5] - y1;
    y3 = segment[j + 3] - y1;
    y2 = segment[j + 1] - y1;
    xd = xd1 = yd = yd1 = 0;

    if (_abs(x4) < .01 && _abs(y4) < .01 && _abs(x2) + _abs(y2) < .01) {
      //dump points that are sufficiently close (basically right on top of each other, making a bezier super tiny or 0 length)
      if (segment.length > 8) {
        segment.splice(j, 6);
        j -= 6;
        endIndex -= 6;
      }
    } else {
      for (i = 1; i <= resolution; i++) {
        t = inc * i;
        inv = 1 - t;
        xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
        yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
        l = _sqrt(yd * yd + xd * xd);

        if (l < min) {
          min = l;
        }

        length += l;
        samples[samplesIndex++] = length;
      }
    }

    x1 += x4;
    y1 += y4;
  }

  if (prevLength) {
    prevLength -= length;

    for (; samplesIndex < samples.length; samplesIndex++) {
      samples[samplesIndex] += prevLength;
    }
  }

  if (samples.length && min) {
    segment.totalLength = segLength = samples[samples.length - 1] || 0;
    segment.minLength = min;

    if (segLength / min < 9999) {
      // if the lookup would require too many values (memory problem), we skip this and instead we use a loop to lookup values directly in the samples Array
      l = lengthIndex = 0;

      for (i = 0; i < segLength; i += min) {
        lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
      }
    }
  } else {
    segment.totalLength = samples[0] = 0;
  }

  return startIndex ? length - samples[startIndex / 2 - 1] : length;
}

function cacheRawPathMeasurements(rawPath, resolution) {
  var pathLength, points, i;

  for (i = pathLength = points = 0; i < rawPath.length; i++) {
    rawPath[i].resolution = ~~resolution || 12; //steps per Bezier curve (anchor, 2 control points, to anchor)

    points += rawPath[i].length;
    pathLength += measureSegment(rawPath[i]);
  }

  rawPath.totalPoints = points;
  rawPath.totalLength = pathLength;
  return rawPath;
} //divide segment[i] at position t (value between 0 and 1, progress along that particular cubic bezier segment that starts at segment[i]). Returns how many elements were spliced into the segment array (either 0 or 6)

function subdivideSegment(segment, i, t) {
  if (t <= 0 || t >= 1) {
    return 0;
  }

  var ax = segment[i],
      ay = segment[i + 1],
      cp1x = segment[i + 2],
      cp1y = segment[i + 3],
      cp2x = segment[i + 4],
      cp2y = segment[i + 5],
      bx = segment[i + 6],
      by = segment[i + 7],
      x1a = ax + (cp1x - ax) * t,
      x2 = cp1x + (cp2x - cp1x) * t,
      y1a = ay + (cp1y - ay) * t,
      y2 = cp1y + (cp2y - cp1y) * t,
      x1 = x1a + (x2 - x1a) * t,
      y1 = y1a + (y2 - y1a) * t,
      x2a = cp2x + (bx - cp2x) * t,
      y2a = cp2y + (by - cp2y) * t;
  x2 += (x2a - x2) * t;
  y2 += (y2a - y2) * t;
  segment.splice(i + 2, 4, _round$1(x1a), //first control point
  _round$1(y1a), _round$1(x1), //second control point
  _round$1(y1), _round$1(x1 + (x2 - x1) * t), //new fabricated anchor on line
  _round$1(y1 + (y2 - y1) * t), _round$1(x2), //third control point
  _round$1(y2), _round$1(x2a), //fourth control point
  _round$1(y2a));
  segment.samples && segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
  return 6;
} // returns an object {path, segment, segIndex, i, t}

function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
  decoratee = decoratee || {};
  rawPath.totalLength || cacheRawPathMeasurements(rawPath);

  if (progress < 0 || progress > 1) {
    progress = _wrapProgress(progress);
  }

  var segIndex = 0,
      segment = rawPath[0],
      samples,
      resolution,
      length,
      min,
      max,
      i,
      t;

  if (!progress) {
    t = i = segIndex = 0;
    segment = rawPath[0];
  } else if (progress === 1) {
    t = 1;
    segIndex = rawPath.length - 1;
    segment = rawPath[segIndex];
    i = segment.length - 8;
  } else {
    if (rawPath.length > 1) {
      //speed optimization: most of the time, there's only one segment so skip the recursion.
      length = rawPath.totalLength * progress;
      max = i = 0;

      while ((max += rawPath[i++].totalLength) < length) {
        segIndex = i;
      }

      segment = rawPath[segIndex];
      min = max - segment.totalLength;
      progress = (length - min) / (max - min) || 0;
    }

    samples = segment.samples;
    resolution = segment.resolution; //how many samples per cubic bezier chunk

    length = segment.totalLength * progress;
    i = segment.lookup.length ? segment.lookup[~~(length / segment.minLength)] || 0 : _getSampleIndex(samples, length, progress);
    min = i ? samples[i - 1] : 0;
    max = samples[i];

    if (max < length) {
      min = max;
      max = samples[++i];
    }

    t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
    i = ~~(i / resolution) * 6;

    if (pushToNextIfAtEnd && t === 1) {
      if (i + 6 < segment.length) {
        i += 6;
        t = 0;
      } else if (segIndex + 1 < rawPath.length) {
        i = t = 0;
        segment = rawPath[++segIndex];
      }
    }
  }

  decoratee.t = t;
  decoratee.i = i;
  decoratee.path = rawPath;
  decoratee.segment = segment;
  decoratee.segIndex = segIndex;
  return decoratee;
}

function getPositionOnPath(rawPath, progress, includeAngle, point) {
  var segment = rawPath[0],
      result = point || {},
      samples,
      resolution,
      length,
      min,
      max,
      i,
      t,
      a,
      inv;

  if (progress < 0 || progress > 1) {
    progress = _wrapProgress(progress);
  }

  if (rawPath.length > 1) {
    //speed optimization: most of the time, there's only one segment so skip the recursion.
    length = rawPath.totalLength * progress;
    max = i = 0;

    while ((max += rawPath[i++].totalLength) < length) {
      segment = rawPath[i];
    }

    min = max - segment.totalLength;
    progress = (length - min) / (max - min) || 0;
  }

  samples = segment.samples;
  resolution = segment.resolution;
  length = segment.totalLength * progress;
  i = segment.lookup.length ? segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0 : _getSampleIndex(samples, length, progress);
  min = i ? samples[i - 1] : 0;
  max = samples[i];

  if (max < length) {
    min = max;
    max = samples[++i];
  }

  t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
  inv = 1 - t;
  i = ~~(i / resolution) * 6;
  a = segment[i];
  result.x = _round$1((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
  result.y = _round$1((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);

  if (includeAngle) {
    result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
  }

  return result;
} //applies a matrix transform to RawPath (or a segment in a RawPath) and returns whatever was passed in (it transforms the values in the array(s), not a copy).

function transformRawPath(rawPath, a, b, c, d, tx, ty) {
  var j = rawPath.length,
      segment,
      l,
      i,
      x,
      y;

  while (--j > -1) {
    segment = rawPath[j];
    l = segment.length;

    for (i = 0; i < l; i += 2) {
      x = segment[i];
      y = segment[i + 1];
      segment[i] = x * a + y * c + tx;
      segment[i + 1] = x * b + y * d + ty;
    }
  }

  rawPath._dirty = 1;
  return rawPath;
} // translates SVG arc data into a segment (cubic beziers). Angle is in degrees.

function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
  if (lastX === x && lastY === y) {
    return;
  }

  rx = _abs(rx);
  ry = _abs(ry);

  var angleRad = angle % 360 * _DEG2RAD$1,
      cosAngle = _cos(angleRad),
      sinAngle = _sin(angleRad),
      PI = Math.PI,
      TWOPI = PI * 2,
      dx2 = (lastX - x) / 2,
      dy2 = (lastY - y) / 2,
      x1 = cosAngle * dx2 + sinAngle * dy2,
      y1 = -sinAngle * dx2 + cosAngle * dy2,
      x1_sq = x1 * x1,
      y1_sq = y1 * y1,
      radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

  if (radiiCheck > 1) {
    rx = _sqrt(radiiCheck) * rx;
    ry = _sqrt(radiiCheck) * ry;
  }

  var rx_sq = rx * rx,
      ry_sq = ry * ry,
      sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

  if (sq < 0) {
    sq = 0;
  }

  var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq),
      cx1 = coef * (rx * y1 / ry),
      cy1 = coef * -(ry * x1 / rx),
      sx2 = (lastX + x) / 2,
      sy2 = (lastY + y) / 2,
      cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
      cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
      ux = (x1 - cx1) / rx,
      uy = (y1 - cy1) / ry,
      vx = (-x1 - cx1) / rx,
      vy = (-y1 - cy1) / ry,
      temp = ux * ux + uy * uy,
      angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)),
      angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));

  isNaN(angleExtent) && (angleExtent = PI); //rare edge case. Math.cos(-1) is NaN.

  if (!sweepFlag && angleExtent > 0) {
    angleExtent -= TWOPI;
  } else if (sweepFlag && angleExtent < 0) {
    angleExtent += TWOPI;
  }

  angleStart %= TWOPI;
  angleExtent %= TWOPI;

  var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
      rawPath = [],
      angleIncrement = angleExtent / segments,
      controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)),
      ma = cosAngle * rx,
      mb = sinAngle * rx,
      mc = sinAngle * -ry,
      md = cosAngle * ry,
      i;

  for (i = 0; i < segments; i++) {
    angle = angleStart + i * angleIncrement;
    x1 = _cos(angle);
    y1 = _sin(angle);
    ux = _cos(angle += angleIncrement);
    uy = _sin(angle);
    rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
  } //now transform according to the actual size of the ellipse/arc (the beziers were noramlized, between 0 and 1 on a circle).


  for (i = 0; i < rawPath.length; i += 2) {
    x1 = rawPath[i];
    y1 = rawPath[i + 1];
    rawPath[i] = x1 * ma + y1 * mc + cx;
    rawPath[i + 1] = x1 * mb + y1 * md + cy;
  }

  rawPath[i - 2] = x; //always set the end to exactly where it's supposed to be

  rawPath[i - 1] = y;
  return rawPath;
} //Spits back a RawPath with absolute coordinates. Each segment starts with a "moveTo" command (x coordinate, then y) and then 2 control points (x, y, x, y), then anchor. The goal is to minimize memory and maximize speed.


function stringToRawPath(d) {
  var a = (d + "").replace(_scientific, function (m) {
    var n = +m;
    return n < 0.0001 && n > -0.0001 ? 0 : n;
  }).match(_svgPathExp) || [],
      //some authoring programs spit out very small numbers in scientific notation like "1e-5", so make sure we round that down to 0 first.
  path = [],
      relativeX = 0,
      relativeY = 0,
      twoThirds = 2 / 3,
      elements = a.length,
      points = 0,
      errorMessage = "ERROR: malformed path: " + d,
      i,
      j,
      x,
      y,
      command,
      isRelative,
      segment,
      startX,
      startY,
      difX,
      difY,
      beziers,
      prevCommand,
      flag1,
      flag2,
      line = function line(sx, sy, ex, ey) {
    difX = (ex - sx) / 3;
    difY = (ey - sy) / 3;
    segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
  };

  if (!d || !isNaN(a[0]) || isNaN(a[1])) {
    console.log(errorMessage);
    return path;
  }

  for (i = 0; i < elements; i++) {
    prevCommand = command;

    if (isNaN(a[i])) {
      command = a[i].toUpperCase();
      isRelative = command !== a[i]; //lower case means relative
    } else {
      //commands like "C" can be strung together without any new command characters between.
      i--;
    }

    x = +a[i + 1];
    y = +a[i + 2];

    if (isRelative) {
      x += relativeX;
      y += relativeY;
    }

    if (!i) {
      startX = x;
      startY = y;
    } // "M" (move)


    if (command === "M") {
      if (segment) {
        if (segment.length < 8) {
          //if the path data was funky and just had a M with no actual drawing anywhere, skip it.
          path.length -= 1;
        } else {
          points += segment.length;
        }
      }

      relativeX = startX = x;
      relativeY = startY = y;
      segment = [x, y];
      path.push(segment);
      i += 2;
      command = "L"; //an "M" with more than 2 values gets interpreted as "lineTo" commands ("L").
      // "C" (cubic bezier)
    } else if (command === "C") {
      if (!segment) {
        segment = [0, 0];
      }

      if (!isRelative) {
        relativeX = relativeY = 0;
      } //note: "*1" is just a fast/short way to cast the value as a Number. WAAAY faster in Chrome, slightly slower in Firefox.


      segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
      i += 6; // "S" (continuation of cubic bezier)
    } else if (command === "S") {
      difX = relativeX;
      difY = relativeY;

      if (prevCommand === "C" || prevCommand === "S") {
        difX += relativeX - segment[segment.length - 4];
        difY += relativeY - segment[segment.length - 3];
      }

      if (!isRelative) {
        relativeX = relativeY = 0;
      }

      segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
      i += 4; // "Q" (quadratic bezier)
    } else if (command === "Q") {
      difX = relativeX + (x - relativeX) * twoThirds;
      difY = relativeY + (y - relativeY) * twoThirds;

      if (!isRelative) {
        relativeX = relativeY = 0;
      }

      relativeX += a[i + 3] * 1;
      relativeY += a[i + 4] * 1;
      segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
      i += 4; // "T" (continuation of quadratic bezier)
    } else if (command === "T") {
      difX = relativeX - segment[segment.length - 4];
      difY = relativeY - segment[segment.length - 3];
      segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
      i += 2; // "H" (horizontal line)
    } else if (command === "H") {
      line(relativeX, relativeY, relativeX = x, relativeY);
      i += 1; // "V" (vertical line)
    } else if (command === "V") {
      //adjust values because the first (and only one) isn't x in this case, it's y.
      line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
      i += 1; // "L" (line) or "Z" (close)
    } else if (command === "L" || command === "Z") {
      if (command === "Z") {
        x = startX;
        y = startY;
        segment.closed = true;
      }

      if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
        line(relativeX, relativeY, x, y);

        if (command === "L") {
          i += 2;
        }
      }

      relativeX = x;
      relativeY = y; // "A" (arc)
    } else if (command === "A") {
      flag1 = a[i + 4];
      flag2 = a[i + 5];
      difX = a[i + 6];
      difY = a[i + 7];
      j = 7;

      if (flag1.length > 1) {
        // for cases when the flags are merged, like "a8 8 0 018 8" (the 0 and 1 flags are WITH the x value of 8, but it could also be "a8 8 0 01-8 8" so it may include x or not)
        if (flag1.length < 3) {
          difY = difX;
          difX = flag2;
          j--;
        } else {
          difY = flag2;
          difX = flag1.substr(2);
          j -= 2;
        }

        flag2 = flag1.charAt(1);
        flag1 = flag1.charAt(0);
      }

      beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
      i += j;

      if (beziers) {
        for (j = 0; j < beziers.length; j++) {
          segment.push(beziers[j]);
        }
      }

      relativeX = segment[segment.length - 2];
      relativeY = segment[segment.length - 1];
    } else {
      console.log(errorMessage);
    }
  }

  i = segment.length;

  if (i < 6) {
    //in case there's odd SVG like a M0,0 command at the very end.
    path.pop();
    i = 0;
  } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
    segment.closed = true;
  }

  path.totalPoints = points + i;
  return path;
} //populates the points array in alternating x/y values (like [x, y, x, y...] instead of individual point objects [{x, y}, {x, y}...] to conserve memory and stay in line with how we're handling segment arrays
/*
function getAngleBetweenPoints(x0, y0, x1, y1, x2, y2) { //angle between 3 points in radians
	var dx1 = x1 - x0,
		dy1 = y1 - y0,
		dx2 = x2 - x1,
		dy2 = y2 - y1,
		dx3 = x2 - x0,
		dy3 = y2 - y0,
		a = dx1 * dx1 + dy1 * dy1,
		b = dx2 * dx2 + dy2 * dy2,
		c = dx3 * dx3 + dy3 * dy3;
	return Math.acos( (a + b - c) / _sqrt(4 * a * b) );
},
*/
//pointsToSegment() doesn't handle flat coordinates (where y is always 0) the way we need (the resulting control points are always right on top of the anchors), so this function basically makes the control points go directly up and down, varying in length based on the curviness (more curvy, further control points)

function flatPointsToSegment(points, curviness) {
  if (curviness === void 0) {
    curviness = 1;
  }

  var x = points[0],
      y = 0,
      segment = [x, y],
      i = 2;

  for (; i < points.length; i += 2) {
    segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
  }

  return segment;
} //points is an array of x/y points, like [x, y, x, y, x, y]

function pointsToSegment(points, curviness) {
  //points = simplifyPoints(points, tolerance);
  _abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2)); // if the first two points are super close, dump the first one.

  var l = points.length - 2,
      x = +points[0],
      y = +points[1],
      nextX = +points[2],
      nextY = +points[3],
      segment = [x, y, x, y],
      dx2 = nextX - x,
      dy2 = nextY - y,
      closed = Math.abs(points[l] - x) < 0.001 && Math.abs(points[l + 1] - y) < 0.001,
      prevX,
      prevY,
      i,
      dx1,
      dy1,
      r1,
      r2,
      r3,
      tl,
      mx1,
      mx2,
      mxm,
      my1,
      my2,
      mym;

  if (closed) {
    // if the start and end points are basically on top of each other, close the segment by adding the 2nd point to the end, and the 2nd-to-last point to the beginning (we'll remove them at the end, but this allows the curvature to look perfect)
    points.push(nextX, nextY);
    nextX = x;
    nextY = y;
    x = points[l - 2];
    y = points[l - 1];
    points.unshift(x, y);
    l += 4;
  }

  curviness = curviness || curviness === 0 ? +curviness : 1;

  for (i = 2; i < l; i += 2) {
    prevX = x;
    prevY = y;
    x = nextX;
    y = nextY;
    nextX = +points[i + 2];
    nextY = +points[i + 3];

    if (x === nextX && y === nextY) {
      continue;
    }

    dx1 = dx2;
    dy1 = dy2;
    dx2 = nextX - x;
    dy2 = nextY - y;
    r1 = _sqrt(dx1 * dx1 + dy1 * dy1); // r1, r2, and r3 correlate x and y (and z in the future). Basically 2D or 3D hypotenuse

    r2 = _sqrt(dx2 * dx2 + dy2 * dy2);
    r3 = _sqrt(Math.pow(dx2 / r2 + dx1 / r1, 2) + Math.pow(dy2 / r2 + dy1 / r1, 2));
    tl = (r1 + r2) * curviness * 0.25 / r3;
    mx1 = x - (x - prevX) * (r1 ? tl / r1 : 0);
    mx2 = x + (nextX - x) * (r2 ? tl / r2 : 0);
    mxm = x - (mx1 + ((mx2 - mx1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
    my1 = y - (y - prevY) * (r1 ? tl / r1 : 0);
    my2 = y + (nextY - y) * (r2 ? tl / r2 : 0);
    mym = y - (my1 + ((my2 - my1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));

    if (x !== prevX || y !== prevY) {
      segment.push(_round$1(mx1 + mxm), // first control point
      _round$1(my1 + mym), _round$1(x), // anchor
      _round$1(y), _round$1(mx2 + mxm), // second control point
      _round$1(my2 + mym));
    }
  }

  x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round$1(nextX), _round$1(nextY), _round$1(nextX), _round$1(nextY)) : segment.length -= 2;

  if (segment.length === 2) {
    // only one point!
    segment.push(x, y, x, y, x, y);
  } else if (closed) {
    segment.splice(0, 6);
    segment.length = segment.length - 6;
  }

  return segment;
} //returns the squared distance between an x/y coordinate and a segment between x1/y1 and x2/y2
/*
Takes any of the following and converts it to an all Cubic Bezier SVG data string:
- A <path> data string like "M0,0 L2,4 v20,15 H100"
- A RawPath, like [[x, y, x, y, x, y, x, y][[x, y, x, y, x, y, x, y]]
- A Segment, like [x, y, x, y, x, y, x, y]

Note: all numbers are rounded down to the closest 0.001 to minimize memory, maximize speed, and avoid odd numbers like 1e-13
*/

function rawPathToString(rawPath) {
  if (_isNumber(rawPath[0])) {
    //in case a segment is passed in instead
    rawPath = [rawPath];
  }

  var result = "",
      l = rawPath.length,
      sl,
      s,
      i,
      segment;

  for (s = 0; s < l; s++) {
    segment = rawPath[s];
    result += "M" + _round$1(segment[0]) + "," + _round$1(segment[1]) + " C";
    sl = segment.length;

    for (i = 2; i < sl; i++) {
      result += _round$1(segment[i++]) + "," + _round$1(segment[i++]) + " " + _round$1(segment[i++]) + "," + _round$1(segment[i++]) + " " + _round$1(segment[i++]) + "," + _round$1(segment[i]) + " ";
    }

    if (segment.closed) {
      result += "z";
    }
  }

  return result;
}
/*
// takes a segment with coordinates [x, y, x, y, ...] and converts the control points into angles and lengths [x, y, angle, length, angle, length, x, y, angle, length, ...] so that it animates more cleanly and avoids odd breaks/kinks. For example, if you animate from 1 o'clock to 6 o'clock, it'd just go directly/linearly rather than around. So the length would be very short in the middle of the tween.
export function cpCoordsToAngles(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		x, y, i;
	for (i = 0; i < segment.length; i+=6) {
		x = segment[i+2] - segment[i];
		y = segment[i+3] - segment[i+1];
		result[i+2] = Math.atan2(y, x);
		result[i+3] = Math.sqrt(x * x + y * y);
		x = segment[i+6] - segment[i+4];
		y = segment[i+7] - segment[i+5];
		result[i+4] = Math.atan2(y, x);
		result[i+5] = Math.sqrt(x * x + y * y);
	}
	return result;
}

// takes a segment that was converted with cpCoordsToAngles() to have angles and lengths instead of coordinates for the control points, and converts it BACK into coordinates.
export function cpAnglesToCoords(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		length = segment.length,
		rnd = 1000,
		angle, l, i, j;
	for (i = 0; i < length; i+=6) {
		angle = segment[i+2];
		l = segment[i+3]; //length
		result[i+2] = (((segment[i] + Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+3] = (((segment[i+1] + Math.sin(angle) * l) * rnd) | 0) / rnd;
		angle = segment[i+4];
		l = segment[i+5]; //length
		result[i+4] = (((segment[i+6] - Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+5] = (((segment[i+7] - Math.sin(angle) * l) * rnd) | 0) / rnd;
	}
	return result;
}

//adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
export function populateSmoothData(rawPath) {
	let j = rawPath.length,
		smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
	while (--j > -1) {
		segment = rawPath[j];
		isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
		smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
		isSmooth.length = 4;
		l = segment.length - 2;
		for (i = 6; i < l; i += 6) {
			x = segment[i] - segment[i - 2];
			y = segment[i + 1] - segment[i - 1];
			x2 = segment[i + 2] - segment[i];
			y2 = segment[i + 3] - segment[i + 1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			smooth = (Math.abs(a - a2) < 0.09);
			if (smooth) {
				smoothData[i - 2] = a;
				smoothData[i + 2] = a2;
				smoothData[i - 1] = _sqrt(x * x + y * y);
				smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
			}
			isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
		}
		//if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.
		if (segment[l] === segment[0] && segment[l+1] === segment[1]) {
			x = segment[0] - segment[l-2];
			y = segment[1] - segment[l-1];
			x2 = segment[2] - segment[0];
			y2 = segment[3] - segment[1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			if (Math.abs(a - a2) < 0.09) {
				smoothData[l-2] = a;
				smoothData[2] = a2;
				smoothData[l-1] = _sqrt(x * x + y * y);
				smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
				isSmooth[l-2] = isSmooth[l-1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
			}
		}
	}
	return rawPath;
}
export function pointToScreen(svgElement, point) {
	if (arguments.length < 2) { //by default, take the first set of coordinates in the path as the point
		let rawPath = getRawPath(svgElement);
		point = svgElement.ownerSVGElement.createSVGPoint();
		point.x = rawPath[0][0];
		point.y = rawPath[0][1];
	}
	return point.matrixTransform(svgElement.getScreenCTM());
}

*/

/*!
 * matrix 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _doc,
    _win,
    _docElement,
    _body,
    _divContainer,
    _svgContainer,
    _identityMatrix,
    _gEl,
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _hasOffsetBug,
    _setDoc = function _setDoc(element) {
  var doc = element.ownerDocument || element;

  if (!(_transformProp in element.style) && "msTransform" in element.style) {
    //to improve compatibility with old Microsoft browsers
    _transformProp = "msTransform";
    _transformOriginProp = _transformProp + "Origin";
  }

  while (doc.parentNode && (doc = doc.parentNode)) {}

  _win = window;
  _identityMatrix = new Matrix2D();

  if (doc) {
    _doc = doc;
    _docElement = doc.documentElement;
    _body = doc.body;
    _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g"); // prevent any existing CSS from transforming it

    _gEl.style.transform = "none"; // now test for the offset reporting bug. Use feature detection instead of browser sniffing to make things more bulletproof and future-proof. Hopefully Safari will fix their bug soon but it's 2020 and it's still not fixed.

    var d1 = doc.createElement("div"),
        d2 = doc.createElement("div");

    _body.appendChild(d1);

    d1.appendChild(d2);
    d1.style.position = "static";
    d1.style[_transformProp] = "translate3d(0,0,1px)";
    _hasOffsetBug = d2.offsetParent !== d1;

    _body.removeChild(d1);
  }

  return doc;
},
    _forceNonZeroScale = function _forceNonZeroScale(e) {
  // walks up the element's ancestors and finds any that had their scale set to 0 via GSAP, and changes them to 0.0001 to ensure that measurements work. Firefox has a bug that causes it to incorrectly report getBoundingClientRect() when scale is 0.
  var a, cache;

  while (e && e !== _body) {
    cache = e._gsap;
    cache && cache.uncache && cache.get(e, "x"); // force re-parsing of transforms if necessary

    if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
      cache.scaleX = cache.scaleY = 1e-4;
      cache.renderTransform(1, cache);
      a ? a.push(cache) : a = [cache];
    }

    e = e.parentNode;
  }

  return a;
},
    // possible future addition: pass an element to _forceDisplay() and it'll walk up all its ancestors and make sure anything with display: none is set to display: block, and if there's no parentNode, it'll add it to the body. It returns an Array that you can then feed to _revertDisplay() to have it revert all the changes it made.
// _forceDisplay = e => {
// 	let a = [],
// 		parent;
// 	while (e && e !== _body) {
// 		parent = e.parentNode;
// 		(_win.getComputedStyle(e).display === "none" || !parent) && a.push(e, e.style.display, parent) && (e.style.display = "block");
// 		parent || _body.appendChild(e);
// 		e = parent;
// 	}
// 	return a;
// },
// _revertDisplay = a => {
// 	for (let i = 0; i < a.length; i+=3) {
// 		a[i+1] ? (a[i].style.display = a[i+1]) : a[i].style.removeProperty("display");
// 		a[i+2] || a[i].parentNode.removeChild(a[i]);
// 	}
// },
_svgTemps = [],
    //we create 3 elements for SVG, and 3 for other DOM elements and cache them for performance reasons. They get nested in _divContainer and _svgContainer so that just one element is added to the DOM on each successive attempt. Again, performance is key.
_divTemps = [],
    _getDocScrollTop = function _getDocScrollTop() {
  return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
},
    _getDocScrollLeft = function _getDocScrollLeft() {
  return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
},
    _svgOwner = function _svgOwner(element) {
  return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
},
    _isFixed = function _isFixed(element) {
  if (_win.getComputedStyle(element).position === "fixed") {
    return true;
  }

  element = element.parentNode;

  if (element && element.nodeType === 1) {
    // avoid document fragments which will throw an error.
    return _isFixed(element);
  }
},
    _createSibling = function _createSibling(element, i) {
  if (element.parentNode && (_doc || _setDoc(element))) {
    var svg = _svgOwner(element),
        ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        type = svg ? i ? "rect" : "g" : "div",
        x = i !== 2 ? 0 : 100,
        y = i === 3 ? 100 : 0,
        css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

    if (i) {
      if (!svg) {
        if (!_divContainer) {
          _divContainer = _createSibling(element);
          _divContainer.style.cssText = css;
        }

        e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

        _divContainer.appendChild(e);
      } else {
        _svgContainer || (_svgContainer = _createSibling(element));
        e.setAttribute("width", 0.01);
        e.setAttribute("height", 0.01);
        e.setAttribute("transform", "translate(" + x + "," + y + ")");

        _svgContainer.appendChild(e);
      }
    }

    return e;
  }

  throw "Need document and parent.";
},
    _consolidate = function _consolidate(m) {
  // replaces SVGTransformList.consolidate() because a bug in Firefox causes it to break pointer events. See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
  var c = new Matrix2D(),
      i = 0;

  for (; i < m.numberOfItems; i++) {
    c.multiply(m.getItem(i).matrix);
  }

  return c;
},
    _getCTM = function _getCTM(svg) {
  var m = svg.getCTM(),
      transform;

  if (!m) {
    // Firefox returns null for getCTM() on root <svg> elements, so this is a workaround using a <g> that we temporarily append.
    transform = svg.style[_transformProp];
    svg.style[_transformProp] = "none"; // a bug in Firefox causes css transforms to contaminate the getCTM()

    svg.appendChild(_gEl);
    m = _gEl.getCTM();
    svg.removeChild(_gEl);
    transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
  }

  return m || _identityMatrix.clone(); // Firefox will still return null if the <svg> has a width/height of 0 in the browser.
},
    _placeSiblings = function _placeSiblings(element, adjustGOffset) {
  var svg = _svgOwner(element),
      isRootSVG = element === svg,
      siblings = svg ? _svgTemps : _divTemps,
      parent = element.parentNode,
      container,
      m,
      b,
      x,
      y,
      cs;

  if (element === _win) {
    return element;
  }

  siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
  container = svg ? _svgContainer : _divContainer;

  if (svg) {
    if (isRootSVG) {
      b = _getCTM(element);
      x = -b.e / b.a;
      y = -b.f / b.d;
      m = _identityMatrix;
    } else if (element.getBBox) {
      b = element.getBBox();
      m = element.transform ? element.transform.baseVal : {}; // IE11 doesn't follow the spec.

      m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix; // don't call m.consolidate().matrix because a bug in Firefox makes pointer events not work when consolidate() is called on the same tick as getBoundingClientRect()! See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800

      x = m.a * b.x + m.c * b.y;
      y = m.b * b.x + m.d * b.y;
    } else {
      // may be a <mask> which has no getBBox() so just use defaults instead of throwing errors.
      m = new Matrix2D();
      x = y = 0;
    }

    if (adjustGOffset && element.tagName.toLowerCase() === "g") {
      x = y = 0;
    }

    (isRootSVG ? svg : parent).appendChild(container);
    container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
  } else {
    x = y = 0;

    if (_hasOffsetBug) {
      // some browsers (like Safari) have a bug that causes them to misreport offset values. When an ancestor element has a transform applied, it's supposed to treat it as if it's position: relative (new context). Safari botches this, so we need to find the closest ancestor (between the element and its offsetParent) that has a transform applied and if one is found, grab its offsetTop/Left and subtract them to compensate.
      m = element.offsetParent;
      b = element;

      while (b && (b = b.parentNode) && b !== m && b.parentNode) {
        if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
          x = b.offsetLeft;
          y = b.offsetTop;
          b = 0;
        }
      }
    }

    cs = _win.getComputedStyle(element);

    if (cs.position !== "absolute" && cs.position !== "fixed") {
      m = element.offsetParent;

      while (parent && parent !== m) {
        // if there's an ancestor element between the element and its offsetParent that's scrolled, we must factor that in.
        x += parent.scrollLeft || 0;
        y += parent.scrollTop || 0;
        parent = parent.parentNode;
      }
    }

    b = container.style;
    b.top = element.offsetTop - y + "px";
    b.left = element.offsetLeft - x + "px";
    b[_transformProp] = cs[_transformProp];
    b[_transformOriginProp] = cs[_transformOriginProp]; // b.border = m.border;
    // b.borderLeftStyle = m.borderLeftStyle;
    // b.borderTopStyle = m.borderTopStyle;
    // b.borderLeftWidth = m.borderLeftWidth;
    // b.borderTopWidth = m.borderTopWidth;

    b.position = cs.position === "fixed" ? "fixed" : "absolute";
    element.parentNode.appendChild(container);
  }

  return container;
},
    _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
  m.a = a;
  m.b = b;
  m.c = c;
  m.d = d;
  m.e = e;
  m.f = f;
  return m;
};

var Matrix2D = /*#__PURE__*/function () {
  function Matrix2D(a, b, c, d, e, f) {
    if (a === void 0) {
      a = 1;
    }

    if (b === void 0) {
      b = 0;
    }

    if (c === void 0) {
      c = 0;
    }

    if (d === void 0) {
      d = 1;
    }

    if (e === void 0) {
      e = 0;
    }

    if (f === void 0) {
      f = 0;
    }

    _setMatrix(this, a, b, c, d, e, f);
  }

  var _proto = Matrix2D.prototype;

  _proto.inverse = function inverse() {
    var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f,
        determinant = a * d - b * c || 1e-10;
    return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
  };

  _proto.multiply = function multiply(matrix) {
    var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f,
        a2 = matrix.a,
        b2 = matrix.c,
        c2 = matrix.b,
        d2 = matrix.d,
        e2 = matrix.e,
        f2 = matrix.f;
    return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
  };

  _proto.clone = function clone() {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
  };

  _proto.equals = function equals(matrix) {
    var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
    return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
  };

  _proto.apply = function apply(point, decoratee) {
    if (decoratee === void 0) {
      decoratee = {};
    }

    var x = point.x,
        y = point.y,
        a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
    decoratee.x = x * a + y * c + e || 0;
    decoratee.y = x * b + y * d + f || 0;
    return decoratee;
  };

  return Matrix2D;
}(); // Feed in an element and it'll return a 2D matrix (optionally inverted) so that you can translate between coordinate spaces.
// Inverting lets you translate a global point into a local coordinate space. No inverting lets you go the other way.
// We needed this to work around various browser bugs, like Firefox doesn't accurately report getScreenCTM() when there
// are transforms applied to ancestor elements.
// The matrix math to convert any x/y coordinate is as follows, which is wrapped in a convenient apply() method of Matrix2D above:
//     tx = m.a * x + m.c * y + m.e
//     ty = m.b * x + m.d * y + m.f

function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
  // adjustGOffset is typically used only when grabbing an element's PARENT's global matrix, and it ignores the x/y offset of any SVG <g> elements because they behave in a special way.
  if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
    return new Matrix2D();
  }

  var zeroScales = _forceNonZeroScale(element),
      svg = _svgOwner(element),
      temps = svg ? _svgTemps : _divTemps,
      container = _placeSiblings(element, adjustGOffset),
      b1 = temps[0].getBoundingClientRect(),
      b2 = temps[1].getBoundingClientRect(),
      b3 = temps[2].getBoundingClientRect(),
      parent = container.parentNode,
      isFixed = !includeScrollInFixed && _isFixed(element),
      m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

  parent.removeChild(container);

  if (zeroScales) {
    b1 = zeroScales.length;

    while (b1--) {
      b2 = zeroScales[b1];
      b2.scaleX = b2.scaleY = 0;
      b2.renderTransform(1, b2);
    }
  }

  return inverse ? m.inverse() : m;
}
// 	_doc || _setDoc(element);
// 	let m = (_win.getComputedStyle(element)[_transformProp] + "").substr(7).match(/[-.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g),
// 		is2D = m && m.length === 6;
// 	return !m || m.length < 6 ? new Matrix2D() : new Matrix2D(+m[0], +m[1], +m[is2D ? 2 : 4], +m[is2D ? 3 : 5], +m[is2D ? 4 : 12], +m[is2D ? 5 : 13]);
// }

/*!
 * MotionPathPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

var _xProps = "x,translateX,left,marginLeft,xPercent".split(","),
    _yProps = "y,translateY,top,marginTop,yPercent".split(","),
    _DEG2RAD = Math.PI / 180,
    gsap$1,
    PropTween,
    _getUnit,
    _toArray,
    _getGSAP$1 = function _getGSAP() {
  return gsap$1 || "undefined" !== "undefined"   ;
},
    _populateSegmentFromArray = function _populateSegmentFromArray(segment, values, property, mode) {
  //mode: 0 = x but don't fill y yet, 1 = y, 2 = x and fill y with 0.
  var l = values.length,
      si = mode === 2 ? 0 : mode,
      i = 0;

  for (; i < l; i++) {
    segment[si] = parseFloat(values[i][property]);
    mode === 2 && (segment[si + 1] = 0);
    si += 2;
  }

  return segment;
},
    _getPropNum = function _getPropNum(target, prop, unit) {
  return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0;
},
    _relativize = function _relativize(segment) {
  var x = segment[0],
      y = segment[1],
      i;

  for (i = 2; i < segment.length; i += 2) {
    x = segment[i] += x;
    y = segment[i + 1] += y;
  }
},
    // feed in an array of quadratic bezier points like [{x: 0, y: 0}, ...] and it'll convert it to cubic bezier
// _quadToCubic = points => {
// 	let cubic = [],
// 		l = points.length - 1,
// 		i = 1,
// 		a, b, c;
// 	for (; i < l; i+=2) {
// 		a = points[i-1];
// 		b = points[i];
// 		c = points[i+1];
// 		cubic.push(a, {x: (2 * b.x + a.x) / 3, y: (2 * b.y + a.y) / 3}, {x: (2 * b.x + c.x) / 3, y: (2 * b.y + c.y) / 3});
// 	}
// 	cubic.push(points[l]);
// 	return cubic;
// },
_segmentToRawPath = function _segmentToRawPath(plugin, segment, target, x, y, slicer, vars, unitX, unitY) {
  if (vars.type === "cubic") {
    segment = [segment];
  } else {
    vars.fromCurrent !== false && segment.unshift(_getPropNum(target, x, unitX), y ? _getPropNum(target, y, unitY) : 0);
    vars.relative && _relativize(segment);
    var pointFunc = y ? pointsToSegment : flatPointsToSegment;
    segment = [pointFunc(segment, vars.curviness)];
  }

  segment = slicer(_align(segment, target, vars));

  _addDimensionalPropTween(plugin, target, x, segment, "x", unitX);

  y && _addDimensionalPropTween(plugin, target, y, segment, "y", unitY);
  return cacheRawPathMeasurements(segment, vars.resolution || (vars.curviness === 0 ? 20 : 12)); //when curviness is 0, it creates control points right on top of the anchors which makes it more sensitive to resolution, thus we change the default accordingly.
},
    _emptyFunc = function _emptyFunc(v) {
  return v;
},
    _numExp$1 = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
    _originToPoint = function _originToPoint(element, origin, parentMatrix) {
  // origin is an array of normalized values (0-1) in relation to the width/height, so [0.5, 0.5] would be the center. It can also be "auto" in which case it will be the top left unless it's a <path>, when it will start at the beginning of the path itself.
  var m = getGlobalMatrix(element),
      x = 0,
      y = 0,
      svg;

  if ((element.tagName + "").toLowerCase() === "svg") {
    svg = element.viewBox.baseVal;
    svg.width || (svg = {
      width: +element.getAttribute("width"),
      height: +element.getAttribute("height")
    });
  } else {
    svg = origin && element.getBBox && element.getBBox();
  }

  if (origin && origin !== "auto") {
    x = origin.push ? origin[0] * (svg ? svg.width : element.offsetWidth || 0) : origin.x;
    y = origin.push ? origin[1] * (svg ? svg.height : element.offsetHeight || 0) : origin.y;
  }

  return parentMatrix.apply(x || y ? m.apply({
    x: x,
    y: y
  }) : {
    x: m.e,
    y: m.f
  });
},
    _getAlignMatrix = function _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin) {
  var parentMatrix = getGlobalMatrix(fromElement.parentNode, true, true),
      m = parentMatrix.clone().multiply(getGlobalMatrix(toElement)),
      fromPoint = _originToPoint(fromElement, fromOrigin, parentMatrix),
      _originToPoint2 = _originToPoint(toElement, toOrigin, parentMatrix),
      x = _originToPoint2.x,
      y = _originToPoint2.y,
      p;

  m.e = m.f = 0;

  if (toOrigin === "auto" && toElement.getTotalLength && toElement.tagName.toLowerCase() === "path") {
    p = toElement.getAttribute("d").match(_numExp$1) || [];
    p = m.apply({
      x: +p[0],
      y: +p[1]
    });
    x += p.x;
    y += p.y;
  }

  if (p || toElement.getBBox && fromElement.getBBox && toElement.ownerSVGElement === fromElement.ownerSVGElement) {
    p = m.apply(toElement.getBBox());
    x -= p.x;
    y -= p.y;
  }

  m.e = x - fromPoint.x;
  m.f = y - fromPoint.y;
  return m;
},
    _align = function _align(rawPath, target, _ref) {
  var align = _ref.align,
      matrix = _ref.matrix,
      offsetX = _ref.offsetX,
      offsetY = _ref.offsetY,
      alignOrigin = _ref.alignOrigin;

  var x = rawPath[0][0],
      y = rawPath[0][1],
      curX = _getPropNum(target, "x"),
      curY = _getPropNum(target, "y"),
      alignTarget,
      m,
      p;

  if (!rawPath || !rawPath.length) {
    return getRawPath("M0,0L0,0");
  }

  if (align) {
    if (align === "self" || (alignTarget = _toArray(align)[0] || target) === target) {
      transformRawPath(rawPath, 1, 0, 0, 1, curX - x, curY - y);
    } else {
      if (alignOrigin && alignOrigin[2] !== false) {
        gsap$1.set(target, {
          transformOrigin: alignOrigin[0] * 100 + "% " + alignOrigin[1] * 100 + "%"
        });
      } else {
        alignOrigin = [_getPropNum(target, "xPercent") / -100, _getPropNum(target, "yPercent") / -100];
      }

      m = _getAlignMatrix(target, alignTarget, alignOrigin, "auto");
      p = m.apply({
        x: x,
        y: y
      });
      transformRawPath(rawPath, m.a, m.b, m.c, m.d, curX + m.e - (p.x - m.e), curY + m.f - (p.y - m.f));
    }
  }

  if (matrix) {
    transformRawPath(rawPath, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
  } else if (offsetX || offsetY) {
    transformRawPath(rawPath, 1, 0, 0, 1, offsetX || 0, offsetY || 0);
  }

  return rawPath;
},
    _addDimensionalPropTween = function _addDimensionalPropTween(plugin, target, property, rawPath, pathProperty, forceUnit) {
  var cache = target._gsap,
      harness = cache.harness,
      alias = harness && harness.aliases && harness.aliases[property],
      prop = alias && alias.indexOf(",") < 0 ? alias : property,
      pt = plugin._pt = new PropTween(plugin._pt, target, prop, 0, 0, _emptyFunc, 0, cache.set(target, prop, plugin));
  pt.u = _getUnit(cache.get(target, prop, forceUnit)) || 0;
  pt.path = rawPath;
  pt.pp = pathProperty;

  plugin._props.push(prop);
},
    _sliceModifier = function _sliceModifier(start, end) {
  return function (rawPath) {
    return start || end !== 1 ? sliceRawPath(rawPath, start, end) : rawPath;
  };
};

var MotionPathPlugin = {
  version: "3.10.4",
  name: "motionPath",
  register: function register(core, Plugin, propTween) {
    gsap$1 = core;
    _getUnit = gsap$1.utils.getUnit;
    _toArray = gsap$1.utils.toArray;
    PropTween = propTween;
  },
  init: function init(target, vars) {
    if (!gsap$1) {
      console.warn("Please gsap.registerPlugin(MotionPathPlugin)");
      return false;
    }

    if (!(typeof vars === "object" && !vars.style) || !vars.path) {
      vars = {
        path: vars
      };
    }

    var rawPaths = [],
        _vars = vars,
        path = _vars.path,
        autoRotate = _vars.autoRotate,
        unitX = _vars.unitX,
        unitY = _vars.unitY,
        x = _vars.x,
        y = _vars.y,
        firstObj = path[0],
        slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1),
        rawPath,
        p;

    this.rawPaths = rawPaths;
    this.target = target;

    if (this.rotate = autoRotate || autoRotate === 0) {
      //get the rotational data FIRST so that the setTransform() method is called in the correct order in the render() loop - rotation gets set last.
      this.rOffset = parseFloat(autoRotate) || 0;
      this.radians = !!vars.useRadians;
      this.rProp = vars.rotation || "rotation"; // rotation property

      this.rSet = target._gsap.set(target, this.rProp, this); // rotation setter

      this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0; // rotation units
    }

    if (Array.isArray(path) && !("closed" in path) && typeof firstObj !== "number") {
      for (p in firstObj) {
        if (!x && ~_xProps.indexOf(p)) {
          x = p;
        } else if (!y && ~_yProps.indexOf(p)) {
          y = p;
        }
      }

      if (x && y) {
        //correlated values
        rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], path, x, 0), path, y, 1), target, x, y, slicer, vars, unitX || _getUnit(path[0][x]), unitY || _getUnit(path[0][y])));
      } else {
        x = y = 0;
      }

      for (p in firstObj) {
        p !== x && p !== y && rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray([], path, p, 2), target, p, 0, slicer, vars, _getUnit(path[0][p])));
      }
    } else {
      rawPath = slicer(_align(getRawPath(vars.path), target, vars));
      cacheRawPathMeasurements(rawPath, vars.resolution);
      rawPaths.push(rawPath);

      _addDimensionalPropTween(this, target, vars.x || "x", rawPath, "x", vars.unitX || "px");

      _addDimensionalPropTween(this, target, vars.y || "y", rawPath, "y", vars.unitY || "px");
    }
  },
  render: function render(ratio, data) {
    var rawPaths = data.rawPaths,
        i = rawPaths.length,
        pt = data._pt;

    if (ratio > 1) {
      ratio = 1;
    } else if (ratio < 0) {
      ratio = 0;
    }

    while (i--) {
      getPositionOnPath(rawPaths[i], ratio, !i && data.rotate, rawPaths[i]);
    }

    while (pt) {
      pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio);
      pt = pt._next;
    }

    data.rotate && data.rSet(data.target, data.rProp, rawPaths[0].angle * (data.radians ? _DEG2RAD : 1) + data.rOffset + data.ru, data, ratio);
  },
  getLength: function getLength(path) {
    return cacheRawPathMeasurements(getRawPath(path)).totalLength;
  },
  sliceRawPath: sliceRawPath,
  getRawPath: getRawPath,
  pointsToSegment: pointsToSegment,
  stringToRawPath: stringToRawPath,
  rawPathToString: rawPathToString,
  transformRawPath: transformRawPath,
  getGlobalMatrix: getGlobalMatrix,
  getPositionOnPath: getPositionOnPath,
  cacheRawPathMeasurements: cacheRawPathMeasurements,
  convertToPath: function convertToPath$1(targets, swap) {
    return _toArray(targets).map(function (target) {
      return convertToPath(target, swap !== false);
    });
  },
  convertCoordinates: function convertCoordinates(fromElement, toElement, point) {
    var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
    return point ? m.apply(point) : m;
  },
  getAlignMatrix: _getAlignMatrix,
  getRelativePosition: function getRelativePosition(fromElement, toElement, fromOrigin, toOrigin) {
    var m = _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin);

    return {
      x: m.e,
      y: m.f
    };
  },
  arrayToRawPath: function arrayToRawPath(value, vars) {
    vars = vars || {};

    var segment = _populateSegmentFromArray(_populateSegmentFromArray([], value, vars.x || "x", 0), value, vars.y || "y", 1);

    vars.relative && _relativize(segment);
    return [vars.type === "cubic" ? segment : pointsToSegment(segment, vars.curviness)];
  }
};
_getGSAP$1() && gsap$1.registerPlugin(MotionPathPlugin);

/*!
 * CustomEase 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

var gsap,
    _coreInitted,
    _getGSAP = function _getGSAP() {
  return gsap || "undefined" !== "undefined"   ;
},
    _initCore = function _initCore() {
  gsap = _getGSAP();

  if (gsap) {
    gsap.registerEase("_CE", CustomEase.create);
    _coreInitted = 1;
  } else {
    console.warn("Please gsap.registerPlugin(CustomEase)");
  }
},
    _bigNum = 1e20,
    _round = function _round(value) {
  return ~~(value * 1000 + (value < 0 ? -.5 : .5)) / 1000;
},
    //<name>CustomEase</name>
_numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_needsParsingExp = /[cLlsSaAhHvVtTqQ]/g,
    _findMinimum = function _findMinimum(values) {
  var l = values.length,
      min = _bigNum,
      i;

  for (i = 1; i < l; i += 6) {
    +values[i] < min && (min = +values[i]);
  }

  return min;
},
    //takes all the points and translates/scales them so that the x starts at 0 and ends at 1.
_normalize = function _normalize(values, height, originY) {
  if (!originY && originY !== 0) {
    originY = Math.max(+values[values.length - 1], +values[1]);
  }

  var tx = +values[0] * -1,
      ty = -originY,
      l = values.length,
      sx = 1 / (+values[l - 2] + tx),
      sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty),
      i;

  if (sy) {
    //typically y ends at 1 (so that the end values are reached)
    sy = 1 / sy;
  } else {
    //in case the ease returns to its beginning value, scale everything proportionally
    sy = -sx;
  }

  for (i = 0; i < l; i += 2) {
    values[i] = (+values[i] + tx) * sx;
    values[i + 1] = (+values[i + 1] + ty) * sy;
  }
},
    //note that this function returns point objects like {x, y} rather than working with segments which are arrays with alternating x, y values as in the similar function in paths.js
_bezierToPoints = function _bezierToPoints(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
  var x12 = (x1 + x2) / 2,
      y12 = (y1 + y2) / 2,
      x23 = (x2 + x3) / 2,
      y23 = (y2 + y3) / 2,
      x34 = (x3 + x4) / 2,
      y34 = (y3 + y4) / 2,
      x123 = (x12 + x23) / 2,
      y123 = (y12 + y23) / 2,
      x234 = (x23 + x34) / 2,
      y234 = (y23 + y34) / 2,
      x1234 = (x123 + x234) / 2,
      y1234 = (y123 + y234) / 2,
      dx = x4 - x1,
      dy = y4 - y1,
      d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx),
      d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx),
      length;

  if (!points) {
    points = [{
      x: x1,
      y: y1
    }, {
      x: x4,
      y: y4
    }];
    index = 1;
  }

  points.splice(index || points.length - 1, 0, {
    x: x1234,
    y: y1234
  });

  if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
    length = points.length;

    _bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);

    _bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
  }

  return points;
};

var CustomEase = /*#__PURE__*/function () {
  function CustomEase(id, data, config) {
    _coreInitted || _initCore();
    this.id = id;
    this.setData(data, config);
  }

  var _proto = CustomEase.prototype;

  _proto.setData = function setData(data, config) {
    config = config || {};
    data = data || "0,0,1,1";
    var values = data.match(_numExp),
        closest = 1,
        points = [],
        lookup = [],
        precision = config.precision || 1,
        fast = precision <= 1,
        l,
        a1,
        a2,
        i,
        inc,
        j,
        point,
        prevPoint,
        p;
    this.data = data;

    if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
      values = stringToRawPath(data)[0];
    }

    l = values.length;

    if (l === 4) {
      values.unshift(0, 0);
      values.push(1, 1);
      l = 8;
    } else if ((l - 2) % 6) {
      throw "Invalid CustomEase";
    }

    if (+values[0] !== 0 || +values[l - 2] !== 1) {
      _normalize(values, config.height, config.originY);
    }

    this.segment = values;

    for (i = 2; i < l; i += 6) {
      a1 = {
        x: +values[i - 2],
        y: +values[i - 1]
      };
      a2 = {
        x: +values[i + 4],
        y: +values[i + 5]
      };
      points.push(a1, a2);

      _bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 200000), points, points.length - 1);
    }

    l = points.length;

    for (i = 0; i < l; i++) {
      point = points[i];
      prevPoint = points[i - 1] || point;

      if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
        //if a point goes BACKWARD in time or is a duplicate, just drop it. Also it shouldn't go past 1 on the x axis, as could happen in a string like "M0,0 C0,0 0.12,0.68 0.18,0.788 0.195,0.845 0.308,1 0.32,1 0.403,1.005 0.398,1 0.5,1 0.602,1 0.816,1.005 0.9,1 0.91,1 0.948,0.69 0.962,0.615 1.003,0.376 1,0 1,0".
        prevPoint.cx = point.x - prevPoint.x; //change in x between this point and the next point (performance optimization)

        prevPoint.cy = point.y - prevPoint.y;
        prevPoint.n = point;
        prevPoint.nx = point.x; //next point's x value (performance optimization, making lookups faster in getRatio()). Remember, the lookup will always land on a spot where it's either this point or the very next one (never beyond that)

        if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) {
          //if there's a sudden change in direction, prioritize accuracy over speed. Like a bounce ease - you don't want to risk the sampling chunks landing on each side of the bounce anchor and having it clipped off.
          fast = 0;
        }

        if (prevPoint.cx < closest) {
          if (!prevPoint.cx) {
            prevPoint.cx = 0.001; //avoids math problems in getRatio() (dividing by zero)

            if (i === l - 1) {
              //in case the final segment goes vertical RIGHT at the end, make sure we end at the end.
              prevPoint.x -= 0.001;
              closest = Math.min(closest, 0.001);
              fast = 0;
            }
          } else {
            closest = prevPoint.cx;
          }
        }
      } else {
        points.splice(i--, 1);
        l--;
      }
    }

    l = 1 / closest + 1 | 0;
    inc = 1 / l;
    j = 0;
    point = points[0];

    if (fast) {
      for (i = 0; i < l; i++) {
        //for fastest lookups, we just sample along the path at equal x (time) distance. Uses more memory and is slightly less accurate for anchors that don't land on the sampling points, but for the vast majority of eases it's excellent (and fast).
        p = i * inc;

        if (point.nx < p) {
          point = points[++j];
        }

        a1 = point.y + (p - point.x) / point.cx * point.cy;
        lookup[i] = {
          x: p,
          cx: inc,
          y: a1,
          cy: 0,
          nx: 9
        };

        if (i) {
          lookup[i - 1].cy = a1 - lookup[i - 1].y;
        }
      }

      lookup[l - 1].cy = points[points.length - 1].y - a1;
    } else {
      //this option is more accurate, ensuring that EVERY anchor is hit perfectly. Clipping across a bounce, for example, would never happen.
      for (i = 0; i < l; i++) {
        //build a lookup table based on the smallest distance so that we can instantly find the appropriate point (well, it'll either be that point or the very next one). We'll look up based on the linear progress. So it's it's 0.5 and the lookup table has 100 elements, it'd be like lookup[Math.floor(0.5 * 100)]
        if (point.nx < i * inc) {
          point = points[++j];
        }

        lookup[i] = point;
      }

      if (j < points.length - 1) {
        lookup[i - 1] = points[points.length - 2];
      }
    } //this._calcEnd = (points[points.length-1].y !== 1 || points[0].y !== 0); //ensures that we don't run into floating point errors. As long as we're starting at 0 and ending at 1, tell GSAP to skip the final calculation and use 0/1 as the factor.


    this.ease = function (p) {
      var point = lookup[p * l | 0] || lookup[l - 1];

      if (point.nx < p) {
        point = point.n;
      }

      return point.y + (p - point.x) / point.cx * point.cy;
    };

    this.ease.custom = this;
    this.id && gsap && gsap.registerEase(this.id, this.ease);
    return this;
  };

  _proto.getSVGData = function getSVGData(config) {
    return CustomEase.getSVGData(this, config);
  };

  CustomEase.create = function create(id, data, config) {
    return new CustomEase(id, data, config).ease;
  };

  CustomEase.register = function register(core) {
    gsap = core;

    _initCore();
  };

  CustomEase.get = function get(id) {
    return gsap.parseEase(id);
  };

  CustomEase.getSVGData = function getSVGData(ease, config) {
    config = config || {};
    var width = config.width || 100,
        height = config.height || 100,
        x = config.x || 0,
        y = (config.y || 0) + height,
        e = gsap.utils.toArray(config.path)[0],
        a,
        slope,
        i,
        inc,
        tx,
        ty,
        precision,
        threshold,
        prevX,
        prevY;

    if (config.invert) {
      height = -height;
      y = 0;
    }

    if (typeof ease === "string") {
      ease = gsap.parseEase(ease);
    }

    if (ease.custom) {
      ease = ease.custom;
    }

    if (ease instanceof CustomEase) {
      a = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
    } else {
      a = [x, y];
      precision = Math.max(5, (config.precision || 1) * 200);
      inc = 1 / precision;
      precision += 2;
      threshold = 5 / precision;
      prevX = _round(x + inc * width);
      prevY = _round(y + ease(inc) * -height);
      slope = (prevY - y) / (prevX - x);

      for (i = 2; i < precision; i++) {
        tx = _round(x + i * inc * width);
        ty = _round(y + ease(i * inc) * -height);

        if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
          //only add points when the slope changes beyond the threshold
          a.push(prevX, prevY);
          slope = (ty - prevY) / (tx - prevX);
        }

        prevX = tx;
        prevY = ty;
      }

      a = "M" + a.join(",");
    }

    e && e.setAttribute("d", a);
    return a;
  };

  return CustomEase;
}();
_getGSAP() && gsap.registerPlugin(CustomEase);
CustomEase.version = "3.10.4";

const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response._data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, {
          ...ctx.options,
          retry: retries - 1
        });
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: { ...globalOptions.defaults, ..._opts },
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = typeof ctx.options.body === "string" ? ctx.options.body : JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response._data = parseFn(data);
    } else {
      ctx.response._data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r._data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions = {}) => createFetch({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch2;
}
const _globalThis$2 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis$2.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));
const Headers = _globalThis$2.Headers;
const $fetch$1 = createFetch({ fetch, Headers });
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createContext() {
  let currentInstance = null;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  return {
    use: () => currentInstance,
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = null;
      isSingleton = false;
    },
    call: (instance, cb) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return cb();
      } finally {
        if (!isSingleton) {
          currentInstance = null;
        }
      }
    },
    async callAsync(instance, cb) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = cb();
        if (!isSingleton) {
          currentInstance = null;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace() {
  const contexts = {};
  return {
    get(key) {
      if (!contexts[key]) {
        contexts[key] = createContext();
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$1] || (_globalThis$1[globalKey$1] = createNamespace());
const getContext = (key) => defaultNamespace.get(key);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = /* @__PURE__ */ new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = /* @__PURE__ */ new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop2 = () => {
  };
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash2 = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash2 = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash2,
      path,
      query,
      hash: hash2
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash: hash2 } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash2.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash2.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash2;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse2(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2 && segments.length > 1) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse: parse2,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop2;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign(meta2, record.meta), {});
  }
  function mergeOptions(defaults2, partialOptions) {
    const options = {};
    for (const key in defaults2) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode2(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode2(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode2(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid2) => {
        if (valid2 === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid2 instanceof Error) {
          reject(valid2);
        } else if (isRouteLocation(valid2)) {
          reject(createRouterError(2, {
            from: to,
            to: valid2
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid2 === "function")
            enterCallbackArray.push(valid2);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop2);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode2);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode2(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash2 = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash2),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash: hash2,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop2);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop2);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop2);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const wrapInRef = (value) => vue_cjs_prod.isRef(value) ? value : vue_cjs_prod.ref(value);
const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  var _a, _b, _c, _d, _e;
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_b = (_a = options.lazy) != null ? _a : options.defer) != null ? _b : false;
  options.initialCache = (_c = options.initialCache) != null ? _c : true;
  const nuxt = useNuxtApp();
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      vue_cjs_prod.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      vue_cjs_prod.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: wrapInRef((_d = nuxt.payload.data[key]) != null ? _d : options.default()),
    pending: vue_cjs_prod.ref(!useInitialCache()),
    error: vue_cjs_prod.ref((_e = nuxt.payload._errors[key]) != null ? _e : null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = vue_cjs_prod.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer) {
    const promise = initialFetch();
    vue_cjs_prod.onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
const useError = () => {
  const nuxtApp = useNuxtApp();
  return useState("error", () => nuxtApp.ssrContext.error);
};
const throwError = (_err) => {
  const nuxtApp = useNuxtApp();
  useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  }
  return err;
};
function murmurHash(key, seed = 0) {
  if (typeof key === "string") {
    key = createBuffer(key);
  }
  let i = 0;
  let h1 = seed;
  let k1;
  let h1b;
  const remainder = key.length & 3;
  const bytes = key.length - remainder;
  const c1 = 3432918353;
  const c2 = 461845907;
  while (i < bytes) {
    k1 = key[i] & 255 | (key[++i] & 255) << 8 | (key[++i] & 255) << 16 | (key[++i] & 255) << 24;
    ++i;
    k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
    k1 = k1 << 15 | k1 >>> 17;
    k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
    h1 ^= k1;
    h1 = h1 << 13 | h1 >>> 19;
    h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
    h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
  }
  k1 = 0;
  switch (remainder) {
    case 3:
      k1 ^= (key[i + 2] & 255) << 16;
      break;
    case 2:
      k1 ^= (key[i + 1] & 255) << 8;
      break;
    case 1:
      k1 ^= key[i] & 255;
      k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
      k1 = k1 << 15 | k1 >>> 17;
      k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
      h1 ^= k1;
  }
  h1 ^= key.length;
  h1 ^= h1 >>> 16;
  h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 13;
  h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 16;
  return h1 >>> 0;
}
function createBuffer(val) {
  return new TextEncoder().encode(val);
}
const defaults = {
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false
};
function objectHash(object2, options = {}) {
  options = { ...defaults, ...options };
  const hasher = createHasher(options);
  hasher.dispatch(object2);
  return hasher.toString();
}
function createHasher(options) {
  const buff = [];
  let context = [];
  const write = (str) => {
    buff.push(str);
  };
  return {
    toString() {
      return buff.join("");
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this["_" + type](value);
    },
    _object(object2) {
      const pattern = /\[object (.*)\]/i;
      const objString = Object.prototype.toString.call(object2);
      const _objType = pattern.exec(objString);
      const objType = _objType ? _objType[1].toLowerCase() : "unknown:[" + objString.toLowerCase() + "]";
      let objectNumber = null;
      if ((objectNumber = context.indexOf(object2)) >= 0) {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      } else {
        context.push(object2);
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object2)) {
        write("buffer:");
        return write(object2.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this["_" + objType]) {
          this["_" + objType](object2);
        } else if (options.ignoreUnknown) {
          return write("[" + objType + "]");
        } else {
          throw new Error('Unknown object type "' + objType + '"');
        }
      } else {
        let keys = Object.keys(object2);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        if (options.respectType !== false && !isNativeFunction(object2)) {
          keys.splice(0, 0, "prototype", "__proto__", "letructor");
        }
        if (options.excludeKeys) {
          keys = keys.filter(function(key) {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + keys.length + ":");
        return keys.forEach((key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object2[key]);
          }
          write(",");
        });
      }
    },
    _array(arr, unordered) {
      unordered = typeof unordered !== "undefined" ? unordered : options.unorderedArrays !== false;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        return arr.forEach((entry2) => {
          return this.dispatch(entry2);
        });
      }
      const contextAdditions = [];
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        contextAdditions.push(hasher.getContext());
        return hasher.toString();
      });
      context = context.concat(contextAdditions);
      entries.sort();
      return this._array(entries, false);
    },
    _date(date) {
      return write("date:" + date.toJSON());
    },
    _symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    _error(err) {
      return write("error:" + err.toString());
    },
    _boolean(bool) {
      return write("bool:" + bool.toString());
    },
    _string(string2) {
      write("string:" + string2.length + ":");
      write(string2.toString());
    },
    _function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this._object(fn);
      }
    },
    _number(number2) {
      return write("number:" + number2.toString());
    },
    _xml(xml2) {
      return write("xml:" + xml2.toString());
    },
    _null() {
      return write("Null");
    },
    _undefined() {
      return write("Undefined");
    },
    _regexp(regex) {
      return write("regex:" + regex.toString());
    },
    _uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    _url(url) {
      return write("url:" + url.toString());
    },
    _map(map) {
      write("map:");
      const arr = Array.from(map);
      return this._array(arr, options.unorderedSets !== false);
    },
    _set(set) {
      write("set:");
      const arr = Array.from(set);
      return this._array(arr, options.unorderedSets !== false);
    },
    _file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    _blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
    },
    _domwindow() {
      return write("domwindow");
    },
    _bigint(number2) {
      return write("bigint:" + number2.toString());
    },
    _process() {
      return write("process");
    },
    _timer() {
      return write("timer");
    },
    _pipe() {
      return write("pipe");
    },
    _tcp() {
      return write("tcp");
    },
    _udp() {
      return write("udp");
    },
    _tty() {
      return write("tty");
    },
    _statwatcher() {
      return write("statwatcher");
    },
    _securecontext() {
      return write("securecontext");
    },
    _connection() {
      return write("connection");
    },
    _zlib() {
      return write("zlib");
    },
    _context() {
      return write("context");
    },
    _nodescript() {
      return write("nodescript");
    },
    _httpparser() {
      return write("httpparser");
    },
    _dataview() {
      return write("dataview");
    },
    _signal() {
      return write("signal");
    },
    _fsevent() {
      return write("fsevent");
    },
    _tlswrap() {
      return write("tlswrap");
    }
  };
}
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  const exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
  return exp.exec(Function.prototype.toString.call(f)) != null;
}
function hash(object2, options = {}) {
  const hashed = typeof object2 === "string" ? object2 : objectHash(object2, options);
  return String(murmurHash(hashed));
}
function useFetch(request, opts = {}) {
  const key = "$f_" + (opts.key || hash([request, { ...opts, transform: null }]));
  const _request = vue_cjs_prod.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return vue_cjs_prod.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
const decode = decodeURIComponent;
const encode = encodeURIComponent;
const pairSplitRegExp = /; */;
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  let obj = {};
  let opt = options || {};
  let pairs = str.split(pairSplitRegExp);
  let dec = opt.decode || decode;
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    let eq_idx = pair.indexOf("=");
    if (eq_idx < 0) {
      continue;
    }
    let key = pair.substr(0, eq_idx).trim();
    let val = pair.substr(++eq_idx, pair.length).trim();
    if (val[0] == '"') {
      val = val.slice(1, -1);
    }
    if (obj[key] == void 0) {
      obj[key] = tryDecode(val, dec);
    }
  }
  return obj;
}
function serialize(name, value, options) {
  let opt = options || {};
  let enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  let encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (opt.maxAge != null) {
    let maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    let sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      event.res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(event, type) {
  if (type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", type);
  }
}
function sendRedirect(event, location2, code = 302) {
  event.res.statusCode = code;
  event.res.setHeader("Location", location2);
  return send(event, "Redirecting to " + location2, MIMES.html);
}
function appendHeader(event, name, value) {
  let current = event.res.getHeader(name);
  if (!current) {
    event.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.res.setHeader(name, current.concat(value));
}
class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "Internal Server Error";
  }
}
function createError(input) {
  var _a;
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a = input.message) != null ? _a : input.statusMessage, input.cause ? { cause: input.cause } : void 0);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = wrapInRef((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
  };
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        checkPropConflicts();
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(vue_cjs_prod.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        checkPropConflicts();
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_1$1 = defineNuxtLink({ componentName: "NuxtLink" });
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString$1(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString$1(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString$1(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string2) {
  const str = "" + string2;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html2 = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html2 += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html2 += escaped;
  }
  return lastIndex !== index2 ? html2 + str.slice(lastIndex, index2) : html2;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$1;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString$1;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {
  Tes: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return tes;
  }).then((c) => c.default || c)),
  ContentDoc: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ContentDoc;
  }).then((c) => c.default || c)),
  ContentList: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ContentList$1;
  }).then((c) => c.default || c)),
  ContentNavigation: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ContentNavigation$1;
  }).then((c) => c.default || c)),
  ContentQuery: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ContentQuery$1;
  }).then((c) => c.default || c)),
  ContentRenderer: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ContentRenderer;
  }).then((c) => c.default || c)),
  Markdown: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Markdown$1;
  }).then((c) => c.default || c)),
  MarkdownRenderer: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return MarkdownRenderer$1;
  }).then((c) => c.default || c)),
  ProseA: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseA;
  }).then((c) => c.default || c)),
  ProseBlockquote: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseBlockquote$1;
  }).then((c) => c.default || c)),
  ProseCode: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseCode$1;
  }).then((c) => c.default || c)),
  ProseCodeInline: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseCodeInline$1;
  }).then((c) => c.default || c)),
  ProseEm: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseEm$1;
  }).then((c) => c.default || c)),
  ProseH1: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseH1$1;
  }).then((c) => c.default || c)),
  ProseH2: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseH2;
  }).then((c) => c.default || c)),
  ProseH3: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseH3;
  }).then((c) => c.default || c)),
  ProseH4: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseH4;
  }).then((c) => c.default || c)),
  ProseH5: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseH5$1;
  }).then((c) => c.default || c)),
  ProseH6: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseH6$1;
  }).then((c) => c.default || c)),
  ProseHr: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseHr$1;
  }).then((c) => c.default || c)),
  ProseImg: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseImg;
  }).then((c) => c.default || c)),
  ProseLi: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseLi$1;
  }).then((c) => c.default || c)),
  ProseOl: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseOl$1;
  }).then((c) => c.default || c)),
  ProseP: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseP$1;
  }).then((c) => c.default || c)),
  ProseStrong: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseStrong$1;
  }).then((c) => c.default || c)),
  ProseTable: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseTable$1;
  }).then((c) => c.default || c)),
  ProseTbody: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseTbody$1;
  }).then((c) => c.default || c)),
  ProseTd: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseTd$1;
  }).then((c) => c.default || c)),
  ProseTh: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseTh$1;
  }).then((c) => c.default || c)),
  ProseThead: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseThead$1;
  }).then((c) => c.default || c)),
  ProseTr: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseTr$1;
  }).then((c) => c.default || c)),
  ProseUl: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ProseUl$1;
  }).then((c) => c.default || c))
};
function _47home_47youness_47dev_47portfolio_452_460_47_46nuxt_47components_46plugin_46mjs(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults2, namespace = ".", merger) {
  if (!isObject(defaults2)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults2);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47nuxt_643_460_460_45rc_464_47node_modules_47nuxt_47dist_47head_47runtime_47lib_47vueuse_45head_46plugin = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  const titleTemplate = vue_cjs_prod.ref();
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    if ("titleTemplate" in meta2.value) {
      titleTemplate.value = meta2.value.titleTemplate;
    }
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta2.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta2.value.title) : titleTemplate.value.replace(/%s/g, meta2.value.title);
      }
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script2) => ({
    script: [script2]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "charset": "utf-8", "viewport": "width=device-width, initial-scale=1", "meta": [], "link": [], "style": [], "script": [] } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47nuxt_643_460_460_45rc_464_47node_modules_47nuxt_47dist_47head_47runtime_47plugin = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw({ title: "", ...metaConfig.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a;
          return routeProps.Component && _wrapIf(vue_cjs_prod.Transition, (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition, wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
            onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
            onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
          }, { default: () => vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) }))).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const meta$9 = void 0;
const layouts = {
  default: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _default$1;
  })),
  home: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return home;
  }))
};
const defaultLayoutTransition = { name: "layout", mode: "out-in" };
const __nuxt_component_0$1 = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = vue_cjs_prod.isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      return _wrapIf(vue_cjs_prod.Transition, hasLayout && ((_c = route.meta.layoutTransition) != null ? _c : defaultLayoutTransition), _wrapIf(layouts[layout], hasLayout, context.slots)).default();
    };
  }
});
const _sfc_main$11 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "HeadLine",
  __ssrInlineRender: true,
  props: {
    title: { default: "Default title" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative text-center isolate" }, _attrs))}><h4 class="xl:text-38 md:text-34 2xl:text-42 md:leading-40 text-8xl opacity-10 text-transparent text-stroke-champagne text-stroke-2"> Youness </h4><h1 class="md:text-4xl text-2xl text-canvas z-20 font-semibold absolute bottom-4 w-full">${serverRenderer.exports.ssrInterpolate(__props.title)}</h1></div>`);
    };
  }
});
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeadLine.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _sfc_main$10 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "BalanceAnimation",
  __ssrInlineRender: true,
  setup(__props) {
    const tl = gsap$2.timeline();
    vue_cjs_prod.onMounted(async () => {
      tl.restart();
      setTimeout(async () => {
        gsap$2.set("#balance", {
          y: 0,
          transformOrigin: "center bottom"
        });
        gsap$2.set("#balance-top-square", {
          transformOrigin: "center center"
        });
        gsap$2.set("#balance-circle", {
          transformOrigin: "center center"
        });
        gsap$2.set("#balance-top-half-circle", {
          transformOrigin: "center bottom"
        });
        gsap$2.fromTo("#balance", { rotation: -5 }, {
          duration: 1.5,
          rotation: 5,
          yoyo: true,
          repeat: -1,
          ease: Sine.easeInOut
        });
        tl.to("#balance-top-square", {
          keyframes: {
            "0%": { y: 0, rotate: -45 },
            "30%": { y: -8, rotate: -45 },
            "50%": { rotate: 45, ease: Power2.easeOut },
            "60%": { y: 0 },
            "70%": { x: 4, rotate: 50 },
            "80%": { rotate: 38 },
            "100%": { x: 0, rotate: 45, ease: Power2.easeInOut },
            easeEach: Expo.easeInOut
          },
          duration: 1.4
        }, "<0").to("#balance-circle", {
          keyframes: {
            "0%": { y: 0, x: 0 },
            "20%": { y: -2, x: 2, rotate: 60 },
            "40%": { y: 0, x: 5, rotate: 100 },
            "100%": { y: 0, x: 0, rotate: -100 },
            easeEach: Power2.easeInOut
          },
          duration: 1.4,
          transformOrigin: "center center"
        }, "<0.2").to("#balance-top-half-circle", {
          keyframes: {
            "0%": { rotate: 0 },
            "50%": { rotate: 5 },
            "75%": { rotate: -1 },
            "100%": { rotate: 0 },
            easeEach: Power4.easeOut
          },
          duration: 1.2
        }, "<0.4").to("#balance-top-square", {
          keyframes: {
            "0%": { y: 0, rotate: 45 },
            "40%": { y: -5, rotate: 45 },
            "80%": { rotate: -45, ease: Power2.easeOut },
            "100%": { y: 0 },
            easeEach: Expo.easeInOut
          },
          duration: 1.2
        }).to("#balance-circle", {
          keyframes: {
            "0%": { y: 0 },
            "50%": { y: -2 },
            "100%": { y: 0 },
            easeEach: Sine.easeInOut
          },
          duration: 0.4
        }, "<0.2").repeat(-1);
      }, 200);
    });
    vue_cjs_prod.onBeforeUnmount(() => {
      tl.restart();
      tl.kill();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        id: "animation",
        viewBox: "0 0 130 100"
      }, _attrs))}><g transform="translate(35 8)"><g id="balance"><rect id="balance-top-square" x="25" y="4" width="16.5" height="16.5" fill="#37b8af"></rect><circle id="balance-circle" cx="33" cy="30.92" r="7.33" fill="#f79a3e"></circle><path id="balance-top-half-circle" d="M33,56.58A18.32,18.32,0,0,0,51.33,38.25H14.67A18.32,18.32,0,0,0,33,56.58Z" fill="#75a640"></path><rect id="balance-rectangle" y="56.58" width="66" height="12.83" fill="#edc73d"></rect></g><path id="balance-base" d="M33,69.42A18.33,18.33,0,0,0,14.67,87.75H51.33A18.33,18.33,0,0,0,33,69.42Z" fill="#ff5256"></path></g></svg>`);
    };
  }
});
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BalanceAnimation.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
function tryOnScopeDispose(fn) {
  if (vue_cjs_prod.getCurrentScope()) {
    vue_cjs_prod.onScopeDispose(fn);
    return true;
  }
  return false;
}
const isString = (val) => typeof val === "string";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = vue_cjs_prod.unref(ms);
    const maxDuration = vue_cjs_prod.unref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = vue_cjs_prod.unref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
  };
  return filter;
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function useThrottleFn(fn, ms = 200, trailing = true, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn);
}
function tryOnBeforeMount(fn, sync = true) {
  if (vue_cjs_prod.getCurrentInstance())
    vue_cjs_prod.onBeforeMount(fn);
  else if (sync)
    fn();
  else
    vue_cjs_prod.nextTick(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = vue_cjs_prod.unref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = vue_cjs_prod.watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = Boolean(window2 && "matchMedia" in window2);
  let mediaQuery;
  const matches = vue_cjs_prod.ref(false);
  const update = () => {
    if (!isSupported)
      return;
    if (!mediaQuery)
      mediaQuery = window2.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}
const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
var __defProp$h = Object.defineProperty;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window: window2 = defaultWindow } = options;
  function match(query) {
    if (!window2)
      return false;
    return window2.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$h({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window: window2 = defaultWindow
  } = options;
  const coordsStart = vue_cjs_prod.reactive({ x: 0, y: 0 });
  const coordsEnd = vue_cjs_prod.reactive({ x: 0, y: 0 });
  const diffX = vue_cjs_prod.computed(() => coordsStart.x - coordsEnd.x);
  const diffY = vue_cjs_prod.computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = vue_cjs_prod.computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = vue_cjs_prod.ref(false);
  const direction = vue_cjs_prod.computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return diffY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window2 == null ? void 0 : window2.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document2) {
  if (!document2)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document2.addEventListener("x", noop, optionsBlock);
  document2.removeEventListener("x", noop);
  return supportsPassive;
}
function useWheel(element, options = {}) {
  const {
    throttle = 200,
    onScroll = noop,
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const isScrolling = vue_cjs_prod.ref(false);
  const directions = vue_cjs_prod.reactive({
    top: false,
    bottom: false
  });
  if (element) {
    const onScrollEnd = useDebounceFn(() => {
      isScrolling.value = false;
      directions.top = false;
      directions.bottom = false;
    }, throttle);
    const onScrollHandler = (e) => {
      const deltaY = e.deltaY;
      directions.top = deltaY < 0;
      directions.bottom = deltaY > 0;
      isScrolling.value = true;
      onScrollEnd();
      onScroll(directions);
    };
    useEventListener(element, "wheel", throttle ? useThrottleFn(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    isScrolling,
    directions
  };
}
const useNavigation = (options = {}) => {
  const { element, next = noop, prev = noop, keyStrokeDelay = 100 } = options;
  onKeyStroke("ArrowLeft", useDebounceFn(() => {
    prev();
  }, keyStrokeDelay));
  onKeyStroke("ArrowRight", useDebounceFn(() => {
    next();
  }, keyStrokeDelay));
  onKeyStroke("ArrowUp", useDebounceFn(() => {
    prev();
  }, keyStrokeDelay));
  onKeyStroke("ArrowDown", useDebounceFn(() => {
    next();
  }, keyStrokeDelay));
  if (element) {
    useWheel(element, {
      onScroll: ({ bottom, top }) => {
        if (bottom)
          next();
        if (top)
          prev();
      }
    });
    const { direction } = useSwipe(element, {
      onSwipeEnd() {
        if (direction.value === SwipeDirection.RIGHT)
          next();
        if (direction.value === SwipeDirection.LEFT)
          prev();
      },
      threshold: 200
    });
  }
};
const useBioTransition = defineStore("bio", () => {
  const route = useRoute();
  const router = useRouter();
  const enterTransition = vue_cjs_prod.ref("up");
  const leaveTransition = vue_cjs_prod.ref("down");
  const animateLeaveOnRouteChange = vue_cjs_prod.ref(true);
  const animateEnterOnRouteChange = vue_cjs_prod.ref(false);
  const setAnimaLeaveOnRouteChange = (value) => {
    animateLeaveOnRouteChange.value = value;
  };
  const setAnimateEnterOnRouteChange = (value) => {
    animateEnterOnRouteChange.value = value;
  };
  const breakPoints = useBreakpoints(breakpointsTailwind);
  const mdAndSmaller = breakPoints.smaller("lg");
  const bioLinks = vue_cjs_prod.ref([
    {
      label: "introduction",
      path: "/",
      isActive: false
    },
    {
      label: "build",
      path: "/build",
      isActive: false
    },
    {
      label: "fun",
      path: "/fun",
      isActive: false
    },
    {
      label: "balance",
      path: "/balance",
      isActive: false
    },
    {
      label: "support",
      path: "/support",
      isActive: false
    }
  ]);
  const activeLinkIndex = vue_cjs_prod.computed(() => {
    const linkIndex = bioLinks.value.findIndex((link) => link.isActive);
    if (linkIndex === -1)
      return 0;
    return linkIndex;
  });
  const uuid = vue_cjs_prod.ref("");
  const randomUid = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };
  const setNavigationElement = (el) => {
    useNavigation({
      element: el,
      next: () => {
        enterTransition.value = mdAndSmaller ? "right" : "up";
        leaveTransition.value = mdAndSmaller ? "left" : "down";
        uuid.value = randomUid();
        const index2 = (activeLinkIndex.value + 1 + bioLinks.value.length) % bioLinks.value.length;
        const link = bioLinks.value[index2];
        router.push({ path: link.path });
      },
      prev: () => {
        enterTransition.value = mdAndSmaller ? "left" : "down";
        leaveTransition.value = mdAndSmaller ? "right" : "up";
        uuid.value = randomUid();
        const index2 = (activeLinkIndex.value - 1 + bioLinks.value.length) % bioLinks.value.length;
        const link = bioLinks.value[index2];
        router.push({ path: link.path });
      }
    });
  };
  vue_cjs_prod.watch(route, () => {
    bioLinks.value.forEach((link) => {
      link.isActive = link.path === route.path;
    });
  }, { immediate: true, deep: true });
  return {
    bioLinks: vue_cjs_prod.readonly(bioLinks.value),
    leaveTransition: vue_cjs_prod.readonly(leaveTransition),
    enterTransition: vue_cjs_prod.readonly(enterTransition),
    uuid: vue_cjs_prod.readonly(uuid),
    setNavigationElement,
    setAnimaLeaveOnRouteChange,
    setAnimateEnterOnRouteChange,
    animateEnterOnRouteChange: vue_cjs_prod.readonly(animateEnterOnRouteChange),
    animateLeaveOnRouteChange: vue_cjs_prod.readonly(animateLeaveOnRouteChange),
    mdAndSmaller: vue_cjs_prod.readonly(mdAndSmaller)
  };
});
const pageTransition = {
  onLeave(el, done) {
    const { leaveTransition, animateLeaveOnRouteChange, mdAndSmaller } = useBioTransition();
    const transitionAxis = mdAndSmaller ? "xPercent" : "yPercent";
    const percent = leaveTransition === "down" || leaveTransition === "left" ? 100 : -100;
    const animation = animateLeaveOnRouteChange ? {
      duration: 0.6,
      [transitionAxis]: percent,
      opacity: 0,
      ease: Power2.easeInOut,
      onComplete: done
    } : {
      duration: 0.7,
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: done
    };
    gsap$2.to(el.querySelector("main"), {
      ...animation
    });
  },
  onEnter(el, done) {
    const { enterTransition, animateEnterOnRouteChange, mdAndSmaller } = useBioTransition();
    const transitionAxis = mdAndSmaller ? "xPercent" : "yPercent";
    const percent = enterTransition === "up" || enterTransition === "left" ? 100 : -100;
    const translation = {
      [transitionAxis]: percent
    };
    const animation = animateEnterOnRouteChange ? {
      keyframes: {
        "0%": {
          ...translation,
          opacity: 0
        },
        "40%": {
          ...translation,
          opacity: 0
        },
        "100%": {
          [transitionAxis]: 0,
          opacity: 1,
          onComplete: done
        },
        ease: Power2.easeInOut
      },
      duration: 1.3
    } : {};
    gsap$2.to(el.querySelector("main"), {
      ...animation
    });
  }
};
const _sfc_main$$ = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "balance",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_BalanceAnimation = _sfc_main$10;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full w-full flex flex-col justify-center items-center"${_scopeId}><div class="flex flex-col flex-1 xl:max-h-3xl lg:max-h-2xl md:max-h-xl gap-y-3 justify-evenly"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "Like to have fun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_BalanceAnimation, {
              class: "2xl:max-h-lg max-h-xs",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "h-full w-full flex flex-col justify-center items-center" }, [
                vue_cjs_prod.createVNode("div", { class: "flex flex-col flex-1 xl:max-h-3xl lg:max-h-2xl md:max-h-xl gap-y-3 justify-evenly" }, [
                  vue_cjs_prod.createVNode(_component_head_line, { title: "Like to have fun" }),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_BalanceAnimation, {
                    class: "2xl:max-h-lg max-h-xs",
                    key: vue_cjs_prod.unref(uuid)
                  })),
                  vue_cjs_prod.createVNode("p", {
                    font: "medium",
                    class: "mx-a px-2 xl:max-w-3xl lg:max-w-2xl",
                    text: "champagne center lg:xl md"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/balance.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const meta$8 = {
  layout: "home",
  pageTransition
};
function isUppercase(char = "") {
  return char.toUpperCase() === char;
}
const STR_SPLITTERS = ["-", "_", "/", "."];
function splitByCase(str, splitters = STR_SPLITTERS) {
  const parts = [];
  let buff = "";
  let previusUpper = isUppercase(str[0]);
  let previousSplitter = splitters.includes(str[0]);
  for (const char of str.split("")) {
    const isSplitter = splitters.includes(char);
    if (isSplitter) {
      parts.push(buff);
      buff = "";
      previusUpper = false;
      previousSplitter = true;
    } else if (!previousSplitter && !previusUpper && isUppercase(char)) {
      parts.push(buff);
      buff = char;
      previusUpper = true;
      previousSplitter = false;
    } else {
      buff += char;
      previusUpper = isUppercase(char);
      previousSplitter = isSplitter;
    }
  }
  if (buff) {
    parts.push(buff);
  }
  return parts;
}
function upperFirst(str) {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase() + str.substr(1);
}
function pascalCase(str = "") {
  return (Array.isArray(str) ? str : splitByCase(str)).map((p) => upperFirst(p)).join("");
}
class Schema {
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
}
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;
function merge(definitions, space) {
  const property = {};
  const normal = {};
  let index2 = -1;
  while (++index2 < definitions.length) {
    Object.assign(property, definitions[index2].property);
    Object.assign(normal, definitions[index2].normal);
  }
  return new Schema(property, normal, space);
}
function normalize(value) {
  return value.toLowerCase();
}
class Info {
  constructor(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }
}
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}
const types = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean,
  booleanish,
  overloadedBoolean,
  number,
  spaceSeparated,
  commaSeparated,
  commaOrSpaceSeparated
}, Symbol.toStringTag, { value: "Module" }));
const checks = Object.keys(types);
class DefinedInfo extends Info {
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    super(property, attribute);
    mark(this, "space", space);
    if (typeof mask === "number") {
      while (++index2 < checks.length) {
        const check = checks[index2];
        mark(this, checks[index2], (mask & types[check]) === types[check]);
      }
    }
  }
}
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
const own = {}.hasOwnProperty;
function create(definition) {
  const property = {};
  const normal = {};
  let prop;
  for (prop in definition.properties) {
    if (own.call(definition.properties, prop)) {
      const value = definition.properties[prop];
      const info = new DefinedInfo(prop, definition.transform(definition.attributes || {}, prop), value, definition.space);
      if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }
      property[prop] = info;
      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }
  return new Schema(property, normal, definition.space);
}
const xlink = create({
  space: "xlink",
  transform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
const xml = create({
  space: "xml",
  transform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}
const xmlns = create({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});
const aria = create({
  transform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});
const html$1 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});
const svg = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});
const valid = /^data[-\w.:]+$/i;
const dash = /-[a-z]/g;
const cap = /[A-Z]/g;
function find(schema, value) {
  const normal = normalize(value);
  let prop = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
const html = merge([xml, xlink, xmlns, aria, html$1], "html");
merge([xml, xlink, xmlns, aria, svg], "svg");
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const MarkdownRenderer = vue_cjs_prod.defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const { content: { tags = {} } } = useRuntimeConfig().public;
    const { tag: _t, value: _d, ...contentProps } = vue_cjs_prod.toRefs(props);
    return {
      tags,
      contentProps
    };
  },
  render(ctx) {
    var _a;
    const { tags, tag, value, contentProps } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (this.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta2 = {
      ...value,
      tags: {
        ...tags,
        ...(value == null ? void 0 : value.tags) || {}
      }
    };
    let component = meta2.component || tag;
    if (typeof meta2.component === "object") {
      component = meta2.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, vue_cjs_prod.h, meta2));
    return vue_cjs_prod.h(component, {
      ...contentProps,
      ...(_a = meta2.component) == null ? void 0 : _a.props,
      ...this.$attrs
    }, {
      default: createSlotFunction(children)
    });
  }
});
function renderNode(node, h2, documentMeta) {
  var _a;
  const originalTag = node.tag;
  const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[node.tag] || node.tag;
  if (node.type === "text") {
    return h2(vue_cjs_prod.Text, node.value);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  return h2(component, propsToData(node, documentMeta), renderSlots(node, h2, documentMeta));
}
function renderSlots(node, h2, documentMeta) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...node2.children.map((child) => renderNode(child, h2, documentMeta)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = node2.children.map((child) => renderNode(child, h2, documentMeta));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  return Object.fromEntries(Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]));
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number2 = (d) => +d;
  const trim = (d) => d.trim();
  const noop2 = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number2 : mods.trim ? trim : noop2;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!htmlTags.includes(component)) {
    const componentFn = vue_cjs_prod.resolveComponent(pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => nodes : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
const MarkdownRenderer$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": MarkdownRenderer
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_2$1 = vue_cjs_prod.defineComponent({
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    vue_cjs_prod.watch(() => props.excerpt, (newExcerpt) => {
      var _a, _b, _c;
      if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
        console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
        console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
      }
    }, {
      immediate: true
    });
  },
  render(ctx) {
    var _a, _b;
    const slots = vue_cjs_prod.useSlots();
    const { value, excerpt, tag } = ctx;
    if (value && (value == null ? void 0 : value._type) === "markdown" && ((_b = (_a = value == null ? void 0 : value.body) == null ? void 0 : _a.children) == null ? void 0 : _b.length)) {
      return vue_cjs_prod.h(MarkdownRenderer, {
        value,
        excerpt,
        tag,
        ...this.$attrs
      });
    }
    if (value && (slots == null ? void 0 : slots.default)) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    } else if (slots == null ? void 0 : slots.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    } else if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    return vue_cjs_prod.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2));
  }
});
const ContentRenderer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __nuxt_component_2$1
}, Symbol.toStringTag, { value: "Module" }));
const useColorMode = () => {
  return useState("color-mode").value;
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
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
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
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
const withContentBase = (url) => withBase(url, "/api/" + useRuntimeConfig().public.content.base);
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const queryFetch = (params) => {
  const apiPath = withContentBase(`/query/${hash(params)}`);
  {
    useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
};
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    let path = withLeadingSlash(withoutTrailingSlash(joinURL(query, ...pathParts)));
    path = path.replace(/[-[\]{}()*+.,^$\s]/g, "\\$&");
    return createQuery(queryFetch).where({ _path: new RegExp(`^${path}`) });
  }
  return createQuery(queryFetch, query);
}
const fetchContentNavigation = (queryBuilder) => {
  const params = queryBuilder == null ? void 0 : queryBuilder.params();
  const apiPath = withContentBase(params ? `/navigation/${hash(params)}` : "/navigation");
  {
    useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params || {}),
      previewToken: useCookie("previewToken").value
    }
  });
};
const ContentQuery = vue_cjs_prod.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    } = vue_cjs_prod.toRefs(props);
    const isPartial = vue_cjs_prod.computed(() => path.value.includes("/_"));
    const { data, refresh } = await useAsyncData(`content-query-${hash(props)}`, () => {
      let queryBuilder;
      if (path.value) {
        queryBuilder = queryContent(path.value);
      } else {
        queryBuilder = queryContent();
      }
      if (only.value) {
        queryBuilder = queryBuilder.only(only.value);
      }
      if (without.value) {
        queryBuilder = queryBuilder.without(without.value);
      }
      if (where.value) {
        queryBuilder = queryBuilder.where(where.value);
      }
      if (sort.value) {
        queryBuilder = queryBuilder.sort(sort.value);
      }
      if (limit.value) {
        queryBuilder = queryBuilder.limit(limit.value);
      }
      if (skip.value) {
        queryBuilder = queryBuilder.skip(skip.value);
      }
      if (locale.value) {
        queryBuilder = queryBuilder.where({ _locale: locale.value });
      }
      if (find2.value === "one") {
        return queryBuilder.findOne();
      }
      if (find2.value === "surround") {
        if (!path.value) {
          console.warn("[Content] Surround queries requires `path` prop to be set.");
          console.warn("[Content] Query without `path` will return regular `find()` results.");
          return queryBuilder.find();
        }
        return queryBuilder.findSurround(path);
      }
      return queryBuilder.find();
    });
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = vue_cjs_prod.useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    };
    if (props.find === "one") {
      if (!data && (slots == null ? void 0 : slots["not-found"])) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if (data._type && data._type === "markdown" && !((_a = data == null ? void 0 : data.body) == null ? void 0 : _a.children.length)) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots == null ? void 0 : slots["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => vue_cjs_prod.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
const ContentQuery$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ContentQuery
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_0 = vue_cjs_prod.defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: () => useRoute().path
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = vue_cjs_prod.useSlots();
    const { tag, excerpt, path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path, find: "one" });
    const emptyNode = (slot, data) => vue_cjs_prod.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    const addHead = (doc) => {
      if (path !== useRoute().path) {
        return;
      }
      const head = Object.assign({}, doc.head);
      head.title = head.title || doc.title;
      head.meta = head.meta || [];
      const description = head.description || doc.description;
      if (description && head.meta.filter((m) => m.name === "description").length === 0) {
        head.meta.push({
          name: "description",
          content: description
        });
      }
      if (head.image && head.meta.filter((m) => m.property === "og:image").length === 0) {
        head.meta.push({
          property: "og:image",
          content: head.image
        });
      }
      {
        useHead(head);
      }
    };
    return vue_cjs_prod.h(ContentQuery, contentQueryProps, {
      default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => {
        addHead(data);
        return slots.default({ doc: data, refresh, isPartial, excerpt, ...this.$attrs });
      } : ({ data }) => {
        addHead(data);
        return vue_cjs_prod.h(__nuxt_component_2$1, { value: data, excerpt, tag, ...this.$attrs }, { empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", data) });
      },
      empty: (bindings) => {
        var _a;
        return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, bindings)) || vue_cjs_prod.h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
      },
      "not-found": (bindings) => {
        var _a;
        return ((_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings)) || vue_cjs_prod.h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
      }
    });
  }
});
const ContentDoc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$_ = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_ContentRenderer = __nuxt_component_2$1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_ContentDoc, vue_cjs_prod.mergeProps({
        path: vue_cjs_prod.unref(route).path
      }, _attrs), {
        "not-found": vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"${_scopeId}><h1 class="text-4xl tracking-tight leading-10 font-semibold sm:text-5xl sm:leading-none md:text-6xl"${_scopeId}> Document not found </h1>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              class: "mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",
              to: "/"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to Home `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode("Back to Home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28" }, [
                vue_cjs_prod.createVNode("h1", { class: "text-4xl tracking-tight leading-10 font-semibold sm:text-5xl sm:leading-none md:text-6xl" }, " Document not found "),
                vue_cjs_prod.createVNode(_component_NuxtLink, {
                  class: "mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",
                  to: "/"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode("Back to Home ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: vue_cjs_prod.withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"${_scopeId}><h1 class="text-4xl tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(doc.title)}</h1><p class="mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(doc.excerpt)}</p></div><div class="relative mx-auto pb-6 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"${_scopeId}><article class="xl:px-8 px-6 w-full mx-auto text-lg prose text-left"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
            _push2(`</article></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28" }, [
                vue_cjs_prod.createVNode("h1", { class: "text-4xl tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl" }, vue_cjs_prod.toDisplayString(doc.title), 1),
                vue_cjs_prod.createVNode("p", { class: "mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" }, vue_cjs_prod.toDisplayString(doc.excerpt), 1)
              ]),
              vue_cjs_prod.createVNode("div", { class: "relative mx-auto pb-6 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28" }, [
                vue_cjs_prod.createVNode("article", { class: "xl:px-8 px-6 w-full mx-auto text-lg prose text-left" }, [
                  vue_cjs_prod.createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const meta$7 = void 0;
const meta$6 = void 0;
const _sfc_main$Z = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "BuildAnimation",
  __ssrInlineRender: true,
  setup(__props) {
    const timeline = gsap$2.timeline();
    vue_cjs_prod.onMounted(() => {
      setTimeout(() => {
        gsap$2.set("#frame", {
          opacity: 1
        });
        const drop = (elem, steps, initialY = -125, delay = 0.2) => gsap$2.fromTo(elem, {
          y: initialY,
          opacity: 0
        }, {
          y: "0",
          opacity: 1,
          ease: SteppedEase.config(steps),
          delay,
          duration: 1
        });
        const square = drop("#square", 10, -165);
        const LeftT = drop("#left-t", 10, -165);
        const s = drop("#s", 10, -165);
        const rightT = drop("#right-t", 9, -145);
        const leftL = drop("#left-l", 8, -145);
        const rightL = drop("#right-l", 9);
        const HorizontalStick = drop("#horizontal-stick", 7);
        const verticalStick = drop("#vertical-stick", 7);
        timeline.add(square).add(LeftT).add(s).add(rightT).add(leftL).add(rightL).add(HorizontalStick).add(verticalStick).to("#build-Shapes", {
          duration: 0.7,
          opacity: 0,
          ease: Power4.easeOut
        }).repeat(-1);
      }, 200);
    });
    vue_cjs_prod.onBeforeUnmount(() => {
      timeline.restart();
      timeline.kill();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        id: "animation",
        viewBox: "0 0 450 250"
      }, _attrs))}> &gt; <g id="composition-build" transform="translate(125 0)"><g id="frame"><g><rect x="2" y="22.53" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,24.53V37.67H4V24.53H17.39m0-4H4a4,4,0,0,0-4,4V37.67a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V24.53a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,4V17.14H4V4H17.39m0-4H4A4,4,0,0,0,0,4V17.14a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="22.53" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M37.92,4V17.14H24.53V4H37.92m0-4H24.53a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4H37.92a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="43.3" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M58.7,4V17.14H45.3V4H58.7m0-4H45.3a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4H58.7a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="63.83" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M79.22,4V17.14H65.83V4H79.22m0-4H65.83a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4H79.22a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="84.11" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M99.5,4V17.14H86.11V4H99.5m0-4H86.11a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4H99.5a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="104.89" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M120.28,4V17.14H106.89V4h13.39m0-4H106.89a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="125.41" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M140.8,4V17.14H127.41V4H140.8m0-4H127.41a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4H140.8a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="145.94" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M161.33,4V17.14H147.94V4h13.39m0-4H147.94a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="166.47" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M181.86,4V17.14H168.47V4h13.39m0-4H168.47a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="22.53" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M37.92,229.8v13.14H24.53V229.8H37.92m0-4H24.53a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H37.92a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="43.3" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M58.7,229.8v13.14H45.3V229.8H58.7m0-4H45.3a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H58.7a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="63.83" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M79.22,229.8v13.14H65.83V229.8H79.22m0-4H65.83a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H79.22a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="84.11" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M99.5,229.8v13.14H86.11V229.8H99.5m0-4H86.11a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H99.5a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="104.89" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M120.28,229.8v13.14H106.89V229.8h13.39m0-4H106.89a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="125.41" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M140.8,229.8v13.14H127.41V229.8H140.8m0-4H127.41a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H140.8a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="145.94" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M161.33,229.8v13.14H147.94V229.8h13.39m0-4H147.94a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="166.47" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M181.86,229.8v13.14H168.47V229.8h13.39m0-4H168.47a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="2" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,4V17.14h-13.4V4h13.4m0-4h-13.4a4,4,0,0,0-4,4V17.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="43.05" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,45.05V58.2H4V45.05H17.39m0-4H4a4,4,0,0,0-4,4V58.2a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V45.05a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="84.11" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,86.11V99.25H4V86.11H17.39m0-4H4a4,4,0,0,0-4,4V99.25a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V86.11a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="63.58" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,65.58V78.72H4V65.58H17.39m0-4H4a4,4,0,0,0-4,4V78.72a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V65.58a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="104.63" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,106.63v13.15H4V106.63H17.39m0-4H4a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V106.63a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="145.69" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,147.69v13.14H4V147.69H17.39m0-4H4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V147.69a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="125.16" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,127.16V140.3H4V127.16H17.39m0-4H4a4,4,0,0,0-4,4V140.3a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V127.16a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="166.22" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,168.22v13.14H4V168.22H17.39m0-4H4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="207.27" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,209.27v13.14H4V209.27H17.39m0-4H4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="186.74" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,188.74v13.15H4V188.74H17.39m0-4H4a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="2" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M17.39,229.8v13.14H4V229.8H17.39m0-4H4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H17.39a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="22.53" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,24.53V37.67h-13.4V24.53h13.4m0-4h-13.4a4,4,0,0,0-4,4V37.67a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V24.53a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="43.05" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,45.05V58.2h-13.4V45.05h13.4m0-4h-13.4a4,4,0,0,0-4,4V58.2a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V45.05a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="84.11" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,86.11V99.25h-13.4V86.11h13.4m0-4h-13.4a4,4,0,0,0-4,4V99.25a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V86.11a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="63.58" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,65.58V78.72h-13.4V65.58h13.4m0-4h-13.4a4,4,0,0,0-4,4V78.72a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V65.58a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="104.63" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,106.63v13.15h-13.4V106.63h13.4m0-4h-13.4a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V106.63a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="145.69" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,147.69v13.14h-13.4V147.69h13.4m0-4h-13.4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V147.69a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="125.16" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,127.16V140.3h-13.4V127.16h13.4m0-4h-13.4a4,4,0,0,0-4,4V140.3a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V127.16a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="166.22" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,168.22v13.14h-13.4V168.22h13.4m0-4h-13.4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="207.27" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,209.27v13.14h-13.4V209.27h13.4m0-4h-13.4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="186.74" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,188.74v13.15h-13.4V188.74h13.4m0-4h-13.4a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="186.74" y="227.8" width="17.39" height="17.14" rx="2" fill="#a0a0a0"></rect><path d="M202.14,229.8v13.14h-13.4V229.8h13.4m0-4h-13.4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V229.8a4,4,0,0,0-4-4Z"></path></g></g><g id="build-Shapes"><g id="left-l"><g><rect x="22.28" y="166.22" width="17.39" height="17.14" rx="2" fill="#f44335"></rect><path d="M37.67,168.22v13.14H24.28V168.22H37.67m0-4H24.28a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H37.67a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g><g><rect x="43.05" y="166.22" width="17.39" height="17.14" rx="2" fill="#f44335"></rect><path d="M58.45,168.22v13.14H45.05V168.22h13.4m0-4H45.05a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g><g><rect x="63.83" y="166.22" width="17.39" height="17.14" rx="2" fill="#f44335"></rect><path d="M79.22,168.22v13.14H65.83V168.22H79.22m0-4H65.83a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H79.22a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g><g><rect x="22.28" y="186.74" width="17.39" height="17.14" rx="2" fill="#f44335"></rect><path d="M37.67,188.74v13.15H24.28V188.74H37.67m0-4H24.28a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4H37.67a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g></g><g id="right-l"><g><rect x="146.19" y="145.94" width="17.39" height="17.14" rx="2" fill="#67b9cc"></rect><path d="M161.58,147.94v13.14H148.19V147.94h13.39m0-4H148.19a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V147.94a4,4,0,0,0-4-4Z"></path></g><g><rect x="125.41" y="145.94" width="17.39" height="17.14" rx="2" fill="#67b9cc"></rect><path d="M140.8,147.94v13.14H127.41V147.94H140.8m0-4H127.41a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H140.8a4,4,0,0,0,4-4V147.94a4,4,0,0,0-4-4Z"></path></g><g><rect x="104.63" y="145.94" width="17.39" height="17.14" rx="2" fill="#67b9cc"></rect><path d="M120,147.94v13.14h-13.4V147.94H120m0-4h-13.4a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H120a4,4,0,0,0,4-4V147.94a4,4,0,0,0-4-4Z"></path></g><g><rect x="146.19" y="166.47" width="17.39" height="17.14" rx="2" fill="#67b9cc"></rect><path d="M161.58,168.47v13.14H148.19V168.47h13.39m0-4H148.19a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V168.47a4,4,0,0,0-4-4Z"></path></g></g><g id="square"><g><rect x="125.41" y="186.74" width="17.39" height="17.14" rx="2" fill="#4caf50"></rect><path d="M140.8,188.74v13.15H127.41V188.74H140.8m0-4H127.41a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4H140.8a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="145.94" y="186.74" width="17.39" height="17.14" rx="2" fill="#4caf50"></rect><path d="M161.33,188.74v13.15H147.94V188.74h13.39m0-4H147.94a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="145.94" y="207.27" width="17.39" height="17.14" rx="2" fill="#4caf50"></rect><path d="M161.33,209.27v13.14H147.94V209.27h13.39m0-4H147.94a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g><g><rect x="125.41" y="207.27" width="17.39" height="17.14" rx="2" fill="#4caf50"></rect><path d="M140.8,209.27v13.14H127.41V209.27H140.8m0-4H127.41a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H140.8a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g></g><g id="s"><g><rect x="63.33" y="186.74" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M78.72,188.74v13.15H65.33V188.74H78.72m0-4H65.33a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4H78.72a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="84.11" y="186.74" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M99.5,188.74v13.15H86.11V188.74H99.5m0-4H86.11a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4H99.5a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="84.11" y="207.27" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M99.5,209.27v13.14H86.11V209.27H99.5m0-4H86.11a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H99.5a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g><g><rect x="104.89" y="207.27" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M120.28,209.27v13.14H106.89V209.27h13.39m0-4H106.89a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g></g><g id="left-t"><g><rect x="63.83" y="207.27" width="17.39" height="17.14" rx="2" fill="#fdd834"></rect><path d="M79.22,209.27v13.14H65.83V209.27H79.22m0-4H65.83a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H79.22a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g><g><rect x="43.05" y="207.27" width="17.39" height="17.14" rx="2" fill="#fdd834"></rect><path d="M58.45,209.27v13.14H45.05V209.27h13.4m0-4H45.05a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g><g><rect x="43.05" y="186.74" width="17.39" height="17.14" rx="2" fill="#fdd834"></rect><path d="M58.45,188.74v13.15H45.05V188.74h13.4m0-4H45.05a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="22.53" y="207.27" width="17.39" height="17.14" rx="2" fill="#fdd834"></rect><path d="M37.92,209.27v13.14H24.53V209.27H37.92m0-4H24.53a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H37.92a4,4,0,0,0,4-4V209.27a4,4,0,0,0-4-4Z"></path></g></g><g id="right-t"><g><rect x="84.11" y="166.22" width="17.39" height="17.14" rx="2" fill="#cd48f9"></rect><path d="M99.5,168.22v13.14H86.11V168.22H99.5m0-4H86.11a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H99.5a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g><g><rect x="104.89" y="166.22" width="17.39" height="17.14" rx="2" fill="#cd48f9"></rect><path d="M120.28,168.22v13.14H106.89V168.22h13.39m0-4H106.89a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g><g><rect x="104.89" y="186.74" width="17.39" height="17.14" rx="2" fill="#cd48f9"></rect><path d="M120.28,188.74v13.15H106.89V188.74h13.39m0-4H106.89a4,4,0,0,0-4,4v13.15a4,4,0,0,0,4,4h13.39a4,4,0,0,0,4-4V188.74a4,4,0,0,0-4-4Z"></path></g><g><rect x="125.41" y="166.22" width="17.39" height="17.14" rx="2" fill="#cd48f9"></rect><path d="M140.8,168.22v13.14H127.41V168.22H140.8m0-4H127.41a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H140.8a4,4,0,0,0,4-4V168.22a4,4,0,0,0-4-4Z"></path></g></g><g id="horizontal-stick"><g><rect x="22.28" y="145.69" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M37.67,147.69v13.14H24.28V147.69H37.67m0-4H24.28a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H37.67a4,4,0,0,0,4-4V147.69a4,4,0,0,0-4-4Z"></path></g><g><rect x="43.05" y="145.69" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M58.45,147.69v13.14H45.05V147.69h13.4m0-4H45.05a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4h13.4a4,4,0,0,0,4-4V147.69a4,4,0,0,0-4-4Z"></path></g><g><rect x="63.58" y="145.69" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M79,147.69v13.14H65.58V147.69H79m0-4H65.58a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H79a4,4,0,0,0,4-4V147.69a4,4,0,0,0-4-4Z"></path></g><g><rect x="83.86" y="145.69" width="17.39" height="17.14" rx="2" fill="#e91e63"></rect><path d="M99.25,147.69v13.14H85.86V147.69H99.25m0-4H85.86a4,4,0,0,0-4,4v13.14a4,4,0,0,0,4,4H99.25a4,4,0,0,0,4-4V147.69a4,4,0,0,0-4-4Z"></path></g></g><g id="vertical-stick"><g><rect x="166.59" y="207.39" width="17.14" height="17.39" rx="2" fill="#fdd834"></rect><path d="M181.73,209.39v13.4H168.59v-13.4h13.14m0-4H168.59a4,4,0,0,0-4,4v13.4a4,4,0,0,0,4,4h13.14a4,4,0,0,0,4-4v-13.4a4,4,0,0,0-4-4Z"></path></g><g><rect x="166.59" y="186.62" width="17.14" height="17.39" rx="2" fill="#fdd834"></rect><path d="M181.73,188.62V202H168.59V188.62h13.14m0-4H168.59a4,4,0,0,0-4,4V202a4,4,0,0,0,4,4h13.14a4,4,0,0,0,4-4V188.62a4,4,0,0,0-4-4Z"></path></g><g><rect x="166.59" y="166.09" width="17.14" height="17.39" rx="2" fill="#fdd834"></rect><path d="M181.73,168.09v13.39H168.59V168.09h13.14m0-4H168.59a4,4,0,0,0-4,4v13.39a4,4,0,0,0,4,4h13.14a4,4,0,0,0,4-4V168.09a4,4,0,0,0-4-4Z"></path></g><g><rect x="166.59" y="145.81" width="17.14" height="17.39" rx="2" fill="#fdd834"></rect><path d="M181.73,147.81v13.4H168.59v-13.4h13.14m0-4H168.59a4,4,0,0,0-4,4v13.4a4,4,0,0,0,4,4h13.14a4,4,0,0,0,4-4v-13.4a4,4,0,0,0-4-4Z"></path></g></g></g></g></svg>`);
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BuildAnimation.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const _sfc_main$Y = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "build",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_BuildAnimation = _sfc_main$Z;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center h-full flex-col justify-center"${_scopeId}><div class="max-h-3xl flex-1 flex flex-col justify-evenly gap-y-3"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "Like to build things" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_BuildAnimation, {
              class: "max-h-56",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl  md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex items-center h-full flex-col justify-center" }, [
                vue_cjs_prod.createVNode("div", { class: "max-h-3xl flex-1 flex flex-col justify-evenly gap-y-3" }, [
                  vue_cjs_prod.createVNode(_component_head_line, { title: "Like to build things" }),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_BuildAnimation, {
                    class: "max-h-56",
                    key: vue_cjs_prod.unref(uuid)
                  })),
                  vue_cjs_prod.createVNode("p", {
                    font: "medium",
                    class: "mx-a px-2 xl:max-w-3xl lg:max-w-2xl",
                    text: "champagne center lg:xl  md"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/build.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const meta$5 = {
  layout: "home",
  pageTransition
};
const _sfc_main$X = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    modelValue: null,
    errors: null,
    isDirty: { type: Boolean, default: false },
    isTextarea: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const updateModelValue = (event) => {
      const target = event.target;
      emit("update:modelValue", target.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "w-full mx-a sm:mt-0 sm:col-span-2 max-w-sm text-left" }, _attrs))}>`);
      if (__props.label) {
        _push(`<label${serverRenderer.exports.ssrRenderAttr("for", __props.label)} class="sr-only">${serverRenderer.exports.ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative rounded-md shadow-sm">`);
      serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(__props.isTextarea ? "textarea" : "input"), vue_cjs_prod.mergeProps(_ctx.$attrs, {
        onInput: updateModelValue,
        class: "block w-full py-6 text-base dark:bg-dark-blue placeholder-white/50 h-10 transition duration-150 ease-in-out border-b-3 border-champagne outline-none sm:text-lg sm:leading-5"
      }), null), _parent);
      if (__props.errors && __props.isDirty) {
        _push(`<div class="absolute inset-y-0 right-0 flex items-center pr-3"><svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.errors && __props.isDirty) {
        _push(`<p class="mt-2 text-sm text-red-600">${serverRenderer.exports.ssrInterpolate(__props.errors)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/TextInput.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const _sfc_main$W = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M5.81781 4.60334L15.3691 1.41959C19.6553 -0.00916251 21.9841 2.33084 20.5666 6.61709L17.3828 16.1683C15.2453 22.5921 11.7353 22.5921 9.59781 16.1683L8.65281 13.3333L5.81781 12.3883C-0.605937 10.2508 -0.605937 6.75209 5.81781 4.60334Z" stroke="#A6956E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.8667 12.8498L12.8942 8.81104" stroke="#A6956E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/SendIcon.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$V = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    let status = vue_cjs_prod.ref("idle");
    const validationSchema = toFormValidator(object({
      email: string().min(1, { message: "This filed is required" }).email({ message: "Must be a valid email" }),
      name: string().min(1, { message: "This filed is required" }),
      message: string().min(8, { message: "Too short" })
    }));
    const { handleSubmit, errors, meta: meta2 } = useForm({
      validationSchema,
      initialValues: {
        email: "",
        name: "",
        message: ""
      }
    });
    const { value: email } = useField("email");
    const { value: name } = useField("name");
    const { value: message } = useField("message");
    const onSubmit = handleSubmit(async (values) => {
      status.value = "pending";
      const { data } = await useFetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values)
      });
      const { success } = data.value;
      if (success) {
        status.value = "success";
        setTimeout(() => {
          status.value = "idle";
        }, 3e3);
      } else {
        status.value = "error";
      }
    });
    const buttonMessage = vue_cjs_prod.computed(() => {
      switch (status.value) {
        case "pending":
          return "Sending...";
        case "success":
          return "Message sent";
        case "error":
          return "Error sending message";
        default:
          return "Send";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_forms_text_input = _sfc_main$X;
      const _component_icons_send_icon = __nuxt_component_2;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex lg:flex-row flex-col-reverse lg:items-center lg:justify-center px-4 md:mt-28 mt-16 gap-y-10"${_scopeId}><form action="" id="contact-form" class="flex flex-1 flex-col gap-y-6xl"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_forms_text_input, {
              type: "text",
              modelValue: vue_cjs_prod.unref(name),
              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(name) ? name.value = $event : null,
              label: "Name",
              placeholder: "Your Name",
              "is-dirty": vue_cjs_prod.unref(meta2).touched,
              errors: vue_cjs_prod.unref(errors).name
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_forms_text_input, {
              modelValue: vue_cjs_prod.unref(email),
              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(email) ? email.value = $event : null,
              label: "email",
              type: "text",
              placeholder: "Your Email",
              errors: vue_cjs_prod.unref(errors).email,
              "is-dirty": vue_cjs_prod.unref(meta2).touched
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_forms_text_input, {
              modelValue: vue_cjs_prod.unref(message),
              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(message) ? message.value = $event : null,
              label: "description",
              placeholder: "Share your thought",
              errors: vue_cjs_prod.unref(errors).message,
              "is-dirty": vue_cjs_prod.unref(meta2).touched,
              "is-textarea": true
            }, null, _parent2, _scopeId));
            _push2(`</form><div class="flex-1 text-left mx-a relative text-base px-2"${_scopeId}><span lg="inline text-9rem" class="text-transparent hidden absolute -top-16 left-12 leading-46 text-stroke-2 text-stroke-champagne/20 text-13rem"${_scopeId}>Get In Touch</span><h2 class="font-medium text-6xl"${_scopeId}>Get In Touch</h2><p class="text-canvas mt-5 text-lg max-w-sm font-light"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam morbi etiam justo. Consequat, suspendisse tellus et at blandit. Mi malesuada elementum sagittis, posuere nam. </p></div></div><button type="submit" class="mt-24 mx-a mb-10 md:mb-0 text-2xl flex items-center justify-center gap-x-3 px-12 py-2.5 rounded-full text-base border border-champagne" form="contact-form"${_scopeId}>${serverRenderer.exports.ssrInterpolate(buttonMessage.value)} `);
            if (status.value === "idle") {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_icons_send_icon, null, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="${serverRenderer.exports.ssrRenderClass([{
                "animate-spin": status.value === "pending",
                "i-carbon:checkmark": status.value === "success",
                "i-carbon:close": status.value === "error"
              }, "ml-1 w-10 h-10"])}"${_scopeId}></div>`);
            }
            _push2(`</button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex lg:flex-row flex-col-reverse lg:items-center lg:justify-center px-4 md:mt-28 mt-16 gap-y-10" }, [
                vue_cjs_prod.createVNode("form", {
                  action: "",
                  id: "contact-form",
                  class: "flex flex-1 flex-col gap-y-6xl"
                }, [
                  vue_cjs_prod.createVNode(_component_forms_text_input, {
                    type: "text",
                    modelValue: vue_cjs_prod.unref(name),
                    "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(name) ? name.value = $event : null,
                    label: "Name",
                    placeholder: "Your Name",
                    "is-dirty": vue_cjs_prod.unref(meta2).touched,
                    errors: vue_cjs_prod.unref(errors).name
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "is-dirty", "errors"]),
                  vue_cjs_prod.createVNode(_component_forms_text_input, {
                    modelValue: vue_cjs_prod.unref(email),
                    "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(email) ? email.value = $event : null,
                    label: "email",
                    type: "text",
                    placeholder: "Your Email",
                    errors: vue_cjs_prod.unref(errors).email,
                    "is-dirty": vue_cjs_prod.unref(meta2).touched
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "is-dirty"]),
                  vue_cjs_prod.createVNode(_component_forms_text_input, {
                    modelValue: vue_cjs_prod.unref(message),
                    "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(message) ? message.value = $event : null,
                    label: "description",
                    placeholder: "Share your thought",
                    errors: vue_cjs_prod.unref(errors).message,
                    "is-dirty": vue_cjs_prod.unref(meta2).touched,
                    "is-textarea": true
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "is-dirty"])
                ]),
                vue_cjs_prod.createVNode("div", { class: "flex-1 text-left mx-a relative text-base px-2" }, [
                  vue_cjs_prod.createVNode("span", {
                    lg: "inline text-9rem",
                    class: "text-transparent hidden absolute -top-16 left-12 leading-46 text-stroke-2 text-stroke-champagne/20 text-13rem"
                  }, "Get In Touch"),
                  vue_cjs_prod.createVNode("h2", { class: "font-medium text-6xl" }, "Get In Touch"),
                  vue_cjs_prod.createVNode("p", { class: "text-canvas mt-5 text-lg max-w-sm font-light" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam morbi etiam justo. Consequat, suspendisse tellus et at blandit. Mi malesuada elementum sagittis, posuere nam. ")
                ])
              ]),
              vue_cjs_prod.createVNode("button", {
                type: "submit",
                onClick: vue_cjs_prod.withModifiers(vue_cjs_prod.unref(onSubmit), ["prevent"]),
                class: "mt-24 mx-a mb-10 md:mb-0 text-2xl flex items-center justify-center gap-x-3 px-12 py-2.5 rounded-full text-base border border-champagne",
                form: "contact-form"
              }, [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(buttonMessage.value) + " ", 1),
                status.value === "idle" ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_icons_send_icon, { key: 0 })) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                  key: 1,
                  class: [{
                    "animate-spin": status.value === "pending",
                    "i-carbon:checkmark": status.value === "success",
                    "i-carbon:close": status.value === "error"
                  }, "ml-1 w-10 h-10"]
                }, null, 2))
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const meta$4 = void 0;
const _sfc_main$U = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "FunAnimation",
  __ssrInlineRender: true,
  setup(__props) {
    gsap$2.registerPlugin(MotionPathPlugin, CustomEase);
    const tl = gsap$2.timeline();
    vue_cjs_prod.onMounted(() => {
      tl.set("#half-pipe", {
        clearProps: "all"
      });
      tl.set("#bike-path", {
        clearProps: "all"
      });
      tl.set("#reverse-bike-path", {
        clearProps: "all"
      });
      tl.set("#bike", {
        clearProps: "all"
      });
      tl.set("#back-wheel", {
        clearProps: "all"
      });
      tl.set("#front-wheel", {
        clearProps: "all"
      });
      tl.set("#center", {
        clearProps: "all"
      });
      tl.set("#teal", {
        clearProps: "all"
      });
      tl.set("#seat", {
        clearProps: "all"
      });
      tl.set("#handlebars", {
        clearProps: "all"
      });
      setTimeout(() => {
        const ease = CustomEase.create("custom", "M0,400C69.331,336.129,152.065,368.189,200,200,252.328,16.394,384.991,0.871,400,0");
        tl.to("#bike", {
          ease,
          duration: 1.7,
          motionPath: {
            path: "#bike-path",
            align: "#bike-path",
            alignOrigin: [0.5, 1],
            autoRotate: true,
            start: 0.05,
            end: 0.95
          }
        }).to("#front-wheel", {
          keyframes: {
            "0%": { yPercent: 0 },
            "16.5%": { scaleY: 1.2, scaleX: 0.8 },
            "33.33%": {
              yPercent: 130,
              xPercent: 0,
              scaleY: 1,
              scaleX: 1,
              ease: Power4.easeOut
            },
            "50%": { scaleX: 1.2, scaleY: 0.8 },
            "66.66%": {
              yPercent: 130,
              scaleX: 1,
              scaleY: 1,
              xPercent: -190,
              ease: Power4.easeOut
            },
            "83.16%": {
              scaleX: 0.8,
              scaleY: 1.2
            },
            "100%": { yPercent: 0, scaleX: 1, scaleY: 1 }
          },
          duration: 0.6
        }, "transform").to("#back-wheel", {
          rotate: -140,
          duration: 0.4,
          svgOrigin: "35 50",
          ease: Power4.easeOut
        }, "transform+=0.2").to("#handlebars", {
          rotate: -90,
          duration: 0.4,
          svgOrigin: "35 50",
          ease: Power4.easeOut
        }, "transform+=0.2").to("#seat", {
          xPercent: 130,
          yPercent: -50,
          duration: 0.4,
          ease: Power4.easeOut
        }, "transform+=0.4").to("#teal", {
          xPercent: 1400,
          yPercent: -70,
          rotate: 180,
          transformOrigin: "center center",
          duration: 1,
          ease: Elastic.easeOut
        }, "transform+=0.4").to("#bike", {
          ease,
          duration: 1.7,
          keyframes: {
            "0%": { scaleY: -1, scaleX: -1 }
          },
          motionPath: {
            path: "#reverse-bike-path",
            align: "#reverse-bike-path",
            alignOrigin: [0.55, 1],
            autoRotate: true,
            start: 0.05,
            end: 0.95
          }
        }).to("#front-wheel", {
          keyframes: {
            "0%": { yPercent: 0, xPercent: -190 },
            "16.5%": { scaleY: 1.2, scaleX: 0.8 },
            "33.33%": {
              yPercent: 130,
              xPercent: -190,
              scaleY: 1,
              scaleX: 1,
              ease: Power4.easeOut
            },
            "50%": { scaleX: 1.2, scaleY: 0.8 },
            "66.66%": {
              yPercent: 130,
              scaleX: 1,
              scaleY: 1,
              xPercent: 5,
              ease: Power4.easeOut
            },
            "83.16%": {
              scaleX: 0.8,
              scaleY: 1.2
            },
            "100%": { yPercent: 0, scaleX: 1, scaleY: 1 }
          },
          duration: 0.6
        }, "reverse-transform").to("#back-wheel", {
          rotate: 0,
          duration: 0.4,
          svgOrigin: "35 50",
          ease: Power4.easeOut
        }, "reverse-transform+=0.2").to("#handlebars", {
          rotate: 0,
          duration: 0.4,
          svgOrigin: "35 50",
          ease: Power4.easeOut
        }, "reverse-transform+=0.2").to("#seat", {
          xPercent: 0,
          yPercent: 0,
          duration: 0.4,
          ease: Power4.easeOut
        }, "reverse-transform+=0.4").to("#teal", {
          xPercent: 0,
          yPercent: 0,
          rotate: 0,
          transformOrigin: "center center",
          duration: 1,
          ease: Elastic.easeOut
        }, "reverse-transform+=0.4").repeat(Infinity);
      }, 500);
    });
    vue_cjs_prod.onBeforeUnmount(() => {
      tl.restart();
      tl.kill();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        id: "animation",
        viewBox: "0 0 500 250"
      }, _attrs))}><g transform="translate(0 20)"><g id="half-pipe"><path d="M439,69s6.1,94.49-94.49,88.4c-82.32,0-92.66.18-93.7.25s-11.38-.25-93.71-.25C56.56,163.53,61.65,68.73,61.65,68.73H1l-1,162,250.84-.14h0l249.14.14V69Z" fill="#37b8af"></path><path id="bike-path" d="M61.65,0V68.73s-4.69,94,94.58,88.76c101.27-.26,172.12-.3,196.19.22C386.5,155.23,434.5,149.23,439,69V0" opacity="0" stroke-miterlimit="1"></path><path id="reverse-bike-path" d="M439,0V69c-4.54,80.19-52.54,86.19-86.62,88.67-24.07-.52-94.92-.48-196.19-.22C57,162.74,61.65,68.73,61.65,68.73V0" opacity="0" stroke-miterlimit="10"></path></g><g id="bike"><circle id="back-wheel" cx="14.61" cy="57" r="10.97" fill="#043c42"></circle><circle id="front-wheel" cx="53.03" cy="57" r="10.97" class="dark:fill-white fill-orange-400"></circle><polygon id="center" points="19 41.74 47.5 39.25 34.74 57.55 19 41.74" fill="#75a640"></polygon><polygon id="teal" points="5.59 41.9 5.24 35.58 9.19 38.53 5.59 41.9" fill="#30bcb1"></polygon><rect id="seat" x="10.88" y="35.13" width="20.12" height="5.49" transform="translate(-2.07 1.22) rotate(-3.18)" class="dark:fill-white fill-yellow-400"></rect><polygon id="handlebars" points="47.43 29.44 60.24 29.39 60.29 42.19 53.88 42.22 53.86 35.81 47.46 35.84 47.43 29.44" fill="#ff5256"></polygon></g></g></svg>`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunAnimation.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "fun",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_FunAnimation = _sfc_main$U;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full items-center justify-center"${_scopeId}><div class="flex flex-1 flex-col max-h-3xl justify-evenly"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "love to have fun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_FunAnimation, {
              class: "md:h-86 xl:h-sm 2xl:h-md mt-6 md:mt-0",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 mt-6 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex flex-col h-full items-center justify-center" }, [
                vue_cjs_prod.createVNode("div", { class: "flex flex-1 flex-col max-h-3xl justify-evenly" }, [
                  vue_cjs_prod.createVNode(_component_head_line, { title: "love to have fun" }),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_FunAnimation, {
                    class: "md:h-86 xl:h-sm 2xl:h-md mt-6 md:mt-0",
                    key: vue_cjs_prod.unref(uuid)
                  })),
                  vue_cjs_prod.createVNode("p", {
                    font: "medium",
                    class: "mx-a px-2 mt-6 xl:max-w-3xl lg:max-w-2xl",
                    text: "champagne center lg:xl md"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fun.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const meta$3 = {
  layout: "home",
  pageTransition
};
const _sfc_main$S = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full mx-auto flex flex-col justify-center items-center text-center"${_scopeId}><h1 class="dark:text-white lg:text-8xl text-7xl capitalize font-light"${_scopeId}> hi Am <span class="text-transparent font-semibold text-stroke-champagne text-stroke-2"${_scopeId}>Youness</span></h1><h2 class="md:text-4xl text-3xl text-canvas md:mt-4 mt-2 font-semibold"${_scopeId}> Full-Stack Developer </h2><p font="medium" class="mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl" text="champagne lg:xl md"${_scopeId}> A web developer with experience building web applications in a variety of business domains using the latest and most appropriate technology. </p><a href="https://drive.google.com/file/d/1CLLjqPX1QJIQvaI1tosUTpjy8w1m9nHN/view?usp=sharing" target="_blank" md="py-3 px-10 text-lg" class="inline-block md:mt-16 my-10 hover:bg-blue/20 text-base bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium"${_scopeId}>View resume</a></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "h-full mx-auto flex flex-col justify-center items-center text-center" }, [
                vue_cjs_prod.createVNode("h1", { class: "dark:text-white lg:text-8xl text-7xl capitalize font-light" }, [
                  vue_cjs_prod.createTextVNode(" hi Am "),
                  vue_cjs_prod.createVNode("span", { class: "text-transparent font-semibold text-stroke-champagne text-stroke-2" }, "Youness")
                ]),
                vue_cjs_prod.createVNode("h2", { class: "md:text-4xl text-3xl text-canvas md:mt-4 mt-2 font-semibold" }, " Full-Stack Developer "),
                vue_cjs_prod.createVNode("p", {
                  font: "medium",
                  class: "mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl",
                  text: "champagne lg:xl md"
                }, " A web developer with experience building web applications in a variety of business domains using the latest and most appropriate technology. "),
                vue_cjs_prod.createVNode("a", {
                  href: "https://drive.google.com/file/d/1CLLjqPX1QJIQvaI1tosUTpjy8w1m9nHN/view?usp=sharing",
                  target: "_blank",
                  md: "py-3 px-10 text-lg",
                  class: "inline-block md:mt-16 my-10 hover:bg-blue/20 text-base bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium"
                }, "View resume")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const meta$2 = {
  layout: "home",
  pageTransition
};
const _sfc_main$R = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "SupportAnimation",
  __ssrInlineRender: true,
  setup(__props) {
    const tl = gsap$2.timeline();
    vue_cjs_prod.onMounted(() => {
      tl.restart();
      gsap$2.set("#support-rectangle", {
        transformOrigin: "bottom center"
      });
      gsap$2.set("#support-square", {
        transformOrigin: "bottom center",
        xPercent: 160
      });
      setTimeout(() => {
        tl.to("#support-square", {
          keyframes: {
            "0%": { yPercent: 0, scaleY: 1 },
            "10%": { yPercent: 0, scaleY: 0.7, rotate: 0 },
            "50%": { yPercent: -70, scaleY: 1 },
            "100%": { rotate: -18 }
          },
          duration: 0.7
        }, "support").to("#support-rectangle", {
          keyframes: {
            "0%": { yPercent: 0, scaleY: 1 },
            "10%": { yPercent: 0, scaleY: 0.7, rotate: 0 },
            "50%": { yPercent: -30, scaleY: 1 },
            "100%": { rotate: 8 }
          },
          duration: 0.7
        }, "<support").to("#support-rectangle", {
          keyframes: {
            "0%": { yPercent: -30 },
            "5%": { yPercent: 0, rotate: 8 },
            "10%": { yPercent: -20, ease: Power0.easeOut },
            "15%": {
              yPercent: 6,
              rotate: -10,
              transformOrigin: "bottom left",
              ease: Power0.easeOut
            },
            "25%": {
              yPercent: -10,
              rotate: -10,
              ease: Power0.easeInOut
            },
            "35%": {
              rotate: 8,
              yPercent: 13,
              transformOrigin: "bottom right",
              ease: Power0.easeOut
            },
            "45%": { rotate: 15, ease: Power0.easeOut },
            "85%": {
              rotate: 52,
              ease: CustomEase.create("custom", "M0,0,C0.89,0.084,0.874,0.394,1,1")
            },
            "95%": { rotate: 40, ease: Expo.easeOut },
            "100%": { rotate: 52, ease: Expo.easeIn }
          },
          duration: 2.5
        }, ">support").to("#support-square", {
          keyframes: {
            "0%": { yPercent: -70 },
            "10%": { yPercent: 0, rotate: 0 },
            "40%": {
              rotate: 10,
              xPercent: 160,
              ease: Expo.easeOut
            },
            "90%": {
              rotate: 20,
              xPercent: 210,
              ease: Expo.easeOut
            },
            "100%": {
              rotate: 0,
              xPercent: 47,
              ease: Expo.easeOut
            }
          },
          duration: 2.2
        }, "<support").to("#support-square", {
          keyframes: {
            "50%": { xPercent: 90, ease: Expo.easeIn },
            "100%": { xPercent: 10 }
          },
          duration: 0.8
        }).to("#support-rectangle", {
          keyframes: {
            "25%": {
              yPercent: 15,
              rotate: 56,
              ease: Expo.easeIn
            },
            "79%": {
              yPercent: 27,
              transformOrigin: "bottom center"
            },
            "80%": {
              rotate: 0,
              yPercent: 27,
              ease: CustomEase.create("custom", "M0,0 C0.446,0 0.395,0.999 0.6,1 0.668,1 0.688,0.692 0.79,0.692 0.88,0.692 1,1 1,1 ")
            }
          },
          duration: 1.6
        }, "<").to("#support-square", {
          keyframes: {
            "50%": { rotate: 90, yPercent: -200 },
            "100%": {
              xPercent: 180,
              rotate: 180,
              yPercent: -101
            }
          },
          duration: 0.8
        }).repeat(-1).repeatDelay(0.5);
      }, 500);
    });
    vue_cjs_prod.onBeforeUnmount(() => {
      tl.restart();
      tl.kill();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        id: "animation",
        viewBox: "0 0 5 50"
      }, _attrs))}><g id="support" transform="translate(-30 15)"><rect id="support-rectangle" width="14" height="32" fill="#78a300"></rect><rect id="support-square" x="25" y="19" width="13" height="13" class="dark:fill-white fill-sky-400"></rect></g></svg>`);
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SupportAnimation.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const _sfc_main$Q = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "support",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_SupportAnimation = _sfc_main$R;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex flex-col items-center justify-center"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "Like to have fun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_SupportAnimation, {
              md: "h-80",
              class: "h-48 w-full",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "h-full flex flex-col items-center justify-center" }, [
                vue_cjs_prod.createVNode(_component_head_line, { title: "Like to have fun" }),
                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_SupportAnimation, {
                  md: "h-80",
                  class: "h-48 w-full",
                  key: vue_cjs_prod.unref(uuid)
                })),
                vue_cjs_prod.createVNode("p", {
                  font: "medium",
                  class: "mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl",
                  text: "champagne center lg:xl md"
                }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const meta$1 = {
  layout: "home",
  pageTransition
};
const _sfc_main$P = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "project",
  __ssrInlineRender: true,
  props: {
    name: null,
    description: null,
    image: null,
    isActive: { type: Boolean },
    links: null,
    technologies: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        lg: "max-w-[75%]   mb-0",
        class: "flex-1 flex mb-24 relative flex-col items-center justify-center gap-y-8 mx-auto"
      }, _attrs))}><h1 class="absolute w-full h-full -top-16 uppercase break-words -left-4 leading-46 max-w-5xl hidden lg:block opacity-20" text="10rem stroke-champagne stroke-1 left  transparent">${serverRenderer.exports.ssrInterpolate(__props.name)}</h1><div xl="flex-row" class="flex z-10 flex-col w-11/12 lg:mt=0 mt-6 justify-center items-center gap-y-8 gap-x-8"><div lg="px-6" class="max-w-xl self-start"><h3 text="dark:white 3xl md:5xl xl:7xl" max-w- mb-5 font="bold">${serverRenderer.exports.ssrInterpolate(__props.name)}</h3><p text="md:lg   canvas left justify">${serverRenderer.exports.ssrInterpolate(__props.description)}</p><p m="t-1.5" text="md:lg  canvas left "> Technologies used: <!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.technologies, (tech, index2) => {
        _push(`<span inline-block text-base p="0.5" hover="underline">${serverRenderer.exports.ssrInterpolate(` #${tech} ${index2 === __props.technologies.length - 1 ? "" : ","}`)}</span>`);
      });
      _push(`<!--]--></p></div><img${serverRenderer.exports.ssrRenderAttr("src", __props.image.src)}${serverRenderer.exports.ssrRenderAttr("alt", __props.image.alt)} class="xl:max-w-sm mx-auto max-h-sm lg:max-h-xs xl:max-h-sm lg:mt-0 mt-5 max-w-[80%]"></div><div class="flex mb-16 md:mb-0 flex-grow z-30 gap-x-4"><!--[-->`);
      serverRenderer.exports.ssrRenderList(__props.links, (link) => {
        _push(`<a${serverRenderer.exports.ssrRenderAttr("href", link.url)} target="_blank" md="px-10 py-3 text-xl" class="inline-block bg-transparent text-base border border-champagne rounded-full py-1.5 px-5 text-md font-medium hover:bg-blue">${serverRenderer.exports.ssrInterpolate(link.title)}</a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const _sfc_main$O = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "work",
  __ssrInlineRender: true,
  setup(__props) {
    const wheel = vue_cjs_prod.ref(null);
    const projects = vue_cjs_prod.ref([
      {
        name: "Vue Vite Boilerplate",
        description: `opinionated Vue/Vite starter template allows you to make apps quickly. It supports file-based routing, Layout System, components auto-importing, State management via Pina, I18n, SSG, and PWAs, Format, and Lint, Unit Testing with Vitest, E2E Testing with Cypress, and Standards checking with pre-commit hooks. Test validation on pre-push with Husky, UnoCSS for UI, and TypeScript of course`,
        isActive: false,
        image: {
          src: "/projects/vue-vite.png",
          alt: "Vue and Vite logo"
        },
        links: [
          {
            title: "Try it out \u{1F680}",
            url: "https://github.com/younessaitali/vue_3-vite-typescript-boilerplate"
          }
        ],
        technologies: [
          "vue 3",
          "vite",
          "vue-i18n",
          "husky",
          "pre-commit",
          "UnoCSS",
          "Typescript"
        ]
      },
      {
        name: "Auto Filler",
        description: `desktop application that assists users with repetitive tasks and auto-fills forms from a
  spreadsheet. As a result, my client spent less time doing the repetitive tasks.`,
        isActive: false,
        image: {
          src: "/projects/auto-k.svg",
          alt: "Auto A Logo"
        },
        links: [],
        technologies: [
          "vue 3",
          "vite",
          "vue-i18n",
          "UnoCSS",
          "Node",
          "TypeORM",
          "SQLite",
          "EsBuild",
          "Electron",
          "Ajv",
          "Typescript"
        ]
      },
      {
        name: "Marrakech Invest",
        description: `Informational website for entrepreneurs and businesses looking for
            information about potential investment opportunities in the Marrakech
            region. More than 100 pages are available on the website on a variety
            of investment opportunities and business guides. This project was part of my work at the Digital-butterfly agency. Among my responsibilities was leading the development team. `,
        isActive: false,
        image: {
          src: "/projects/mi_logo.png",
          alt: "Marrakech invest logo"
        },
        links: [
          {
            title: "Visit website",
            url: "https://marrakechinvest.ma/"
          }
        ],
        technologies: [
          "Nuxt",
          "Vue",
          "Drupal",
          "GraphQL",
          "Gsap",
          "TailwindCSS"
        ]
      },
      {
        name: "Business Plan Interactive",
        description: `An interactive web app allows entrepreneurs to generate a business plan step-by-step
      and guide them through it. has already benefited thousands of small business owners. This project was part of my work at the Digital-butterfly agency. Among my responsibilities was leading the development team. `,
        technologies: ["Vue", "TailwindCSS", "Firebase", "Vuex"],
        image: {
          src: "/projects/bpi.png",
          alt: "BPI LOGO"
        },
        isActive: false,
        links: [
          {
            title: "Visit website",
            url: "https://cri-bpi.web.app/"
          }
        ]
      },
      {
        name: "Intaj",
        technologies: [
          "React",
          "Redux",
          "Laravel",
          "styled-Components",
          "Mysql",
          "Rest API"
        ],
        description: "A platform for business-to-business transactions. I worked on this piece at the Digital-butterfly agency. I handled the back end of this project.",
        image: {
          src: "/projects/intaj.svg",
          alt: "Intaj logo"
        },
        isActive: false,
        links: [
          {
            title: "Visit website",
            url: "https://intajoriental.com/"
          }
        ]
      },
      {
        name: "Tasks",
        technologies: [
          "Vue",
          "Vuex",
          "Vue Router",
          "TailwindCSS",
          "Laravel",
          "JWT",
          "Pusher"
        ],
        description: `This project management app provides a visual representation of what is being worked on by splitting projects into boards that contain tasks with a description and multiple to-do lists, and the user has the ability to add other members to a project ... I used Laravel as a backend to serve my Rest-API, VueJS as a frontend, Vuex as state management, and Pusher for Real-time communication, as well as JWT for authorization.
      this was a side project Inspired by Jira from Atlassian`,
        image: {
          src: "/projects/tasks.svg",
          alt: "Tasks logo"
        },
        isActive: false,
        links: [
          {
            title: "<code />",
            url: "https://github.com/younessaitali/Jira-Clone"
          },
          {
            title: "Video Demo",
            url: "https://www.youtube.com/watch?v=liIVa-zMERE"
          }
        ]
      },
      {
        name: "MediaTheque",
        image: {
          src: "/projects/media.svg",
          alt: "Marrakech invest logo"
        },
        description: `As part of my graduation project, I developed a library app. There are two parts to the app: a client-side dashboard and an admin dashboard.
      The client has the option to rent or buy books. In addition, you can subscribe to the membership for a monthly fee. Owners and Admins can also manage the inventory, client information, and employee roles `,
        technologies: ["laravel", "MySql", "Stripe API", "Axios", "Sass"],
        isActive: false,
        links: [
          {
            title: "<code />",
            url: "https://github.com/younessaitali/mediatheeque"
          }
        ]
      }
    ]);
    const activeProject = vue_cjs_prod.computed(() => {
      const projectIndex = projects.value.findIndex((project) => project.isActive);
      if (projectIndex === -1) {
        projects.value[0].isActive = true;
        return { project: projects.value[0], index: 0 };
      }
      return { project: projects.value[projectIndex], index: projectIndex };
    });
    const prevProject = () => {
      let { index: index2 } = activeProject.value;
      index2 = (index2 - 1 + projects.value.length) % projects.value.length;
      projectSelected(projects.value[index2].name);
    };
    const nextProject = () => {
      let { index: index2 } = activeProject.value;
      index2 = (index2 + 1) % projects.value.length;
      projectSelected(projects.value[index2].name);
    };
    useNavigation({ element: wheel, next: nextProject, prev: prevProject });
    function projectSelected(name) {
      projects.value.forEach((item) => {
        item.isActive = item.name === name;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_project = _sfc_main$P;
      const _directive_underline_animation = vue_cjs_prod.resolveDirective("underline-animation");
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        root: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div lg="-right-(10.75rem)  inset-y-0 my-auto w-96 h-10 rotate-270" class="fixed bottom-0 w-screen rotate-0 px-0.5 py-2 bg-champagne/42 z-36 flex items-center justify-between"${_scopeId}><button text="white 3xl"${_scopeId}><div class="i-carbon:chevron-down"${_scopeId}></div></button><h3 text="xl md:2xl white "${_scopeId}>${serverRenderer.exports.ssrInterpolate(activeProject.value.project.name)}</h3><button text="white 3xl"${_scopeId}><div class="i-carbon:chevron-up"${_scopeId}></div></button></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                lg: "-right-(10.75rem)  inset-y-0 my-auto w-96 h-10 rotate-270",
                class: "fixed bottom-0 w-screen rotate-0 px-0.5 py-2 bg-champagne/42 z-36 flex items-center justify-between"
              }, [
                vue_cjs_prod.createVNode("button", {
                  onClick: nextProject,
                  text: "white 3xl"
                }, [
                  vue_cjs_prod.createVNode("div", { class: "i-carbon:chevron-down" })
                ]),
                vue_cjs_prod.createVNode("h3", { text: "xl md:2xl white " }, vue_cjs_prod.toDisplayString(activeProject.value.project.name), 1),
                vue_cjs_prod.createVNode("button", {
                  onClick: prevProject,
                  text: "white 3xl"
                }, [
                  vue_cjs_prod.createVNode("div", { class: "i-carbon:chevron-up" })
                ])
              ])
            ];
          }
        }),
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute z-12 inset-0"${_scopeId}></div><section md="px-0 py-5" class="flex flex-1 h-full lg:items-center items-start justify-center px-2 gap-x-3"${_scopeId}><nav class="hidden lg:block"${_scopeId}><ul class="flex flex-col gap-y-2"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(projects.value, (project, index2) => {
              _push2(`<li${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
                key: project.name,
                font: "bold",
                text: "4xl center stroke-sm stroke-champagne",
                class: [
                  "py-5 px-9 z-20 inline-block relative capitalize after:-ml-16 cursor-pointer overflow-hidden group opacity-85",
                  {
                    "text-transparent": !project.isActive,
                    "text-champagne": project.isActive
                  }
                ]
              }, serverRenderer.exports.ssrGetDirectiveProps(_ctx, _directive_underline_animation, { isActive: project.isActive })))}${_scopeId}><span class="${serverRenderer.exports.ssrRenderClass([
                "absolute left-0 group-hover:translate-y-0 duration-300",
                {
                  "translate-y-0": project.isActive,
                  "translate-y-[140%]": !project.isActive
                }
              ])}"${_scopeId}>${serverRenderer.exports.ssrInterpolate(index2 + 1)}</span><h3${_scopeId}>project</h3></li>`);
            });
            _push2(`<!--]--></ul></nav>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_project, { ...activeProject.value.project }, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                ref_key: "wheel",
                ref: wheel,
                class: "absolute z-12 inset-0"
              }, null, 512),
              vue_cjs_prod.createVNode("section", {
                md: "px-0 py-5",
                class: "flex flex-1 h-full lg:items-center items-start justify-center px-2 gap-x-3"
              }, [
                vue_cjs_prod.createVNode("nav", { class: "hidden lg:block" }, [
                  vue_cjs_prod.createVNode("ul", { class: "flex flex-col gap-y-2" }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(projects.value, (project, index2) => {
                      return vue_cjs_prod.withDirectives((vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                        key: project.name,
                        onClick: ($event) => projectSelected(project.name),
                        font: "bold",
                        text: "4xl center stroke-sm stroke-champagne",
                        class: [
                          "py-5 px-9 z-20 inline-block relative capitalize after:-ml-16 cursor-pointer overflow-hidden group opacity-85",
                          {
                            "text-transparent": !project.isActive,
                            "text-champagne": project.isActive
                          }
                        ]
                      }, [
                        vue_cjs_prod.createVNode("span", {
                          class: [
                            "absolute left-0 group-hover:translate-y-0 duration-300",
                            {
                              "translate-y-0": project.isActive,
                              "translate-y-[140%]": !project.isActive
                            }
                          ]
                        }, vue_cjs_prod.toDisplayString(index2 + 1), 3),
                        vue_cjs_prod.createVNode("h3", null, "project")
                      ], 10, ["onClick"])), [
                        [_directive_underline_animation, { isActive: project.isActive }]
                      ]);
                    }), 128))
                  ])
                ]),
                vue_cjs_prod.createVNode(_component_project, { ...activeProject.value.project }, null, 16)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const meta = void 0;
const routes = [
  {
    name: "404",
    path: "/:catchAll(.*)*",
    file: "/home/youness/dev/portfolio-2.0/pages/404.vue",
    children: [],
    meta: meta$9,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _404$1;
    })
  },
  {
    name: "balance",
    path: "/balance",
    file: "/home/youness/dev/portfolio-2.0/pages/balance.vue",
    children: [],
    meta: meta$8,
    alias: (meta$8 == null ? void 0 : meta$8.alias) || [],
    component: () => Promise.resolve().then(function() {
      return balance;
    })
  },
  {
    name: "blog-slug",
    path: "/blog/:slug",
    file: "/home/youness/dev/portfolio-2.0/pages/blog/[slug].vue",
    children: [],
    meta: meta$7,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _slug_;
    })
  },
  {
    name: "blog",
    path: "/blog",
    file: "/home/youness/dev/portfolio-2.0/pages/blog/index.vue",
    children: [],
    meta: meta$6,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$2;
    })
  },
  {
    name: "build",
    path: "/build",
    file: "/home/youness/dev/portfolio-2.0/pages/build.vue",
    children: [],
    meta: meta$5,
    alias: (meta$5 == null ? void 0 : meta$5.alias) || [],
    component: () => Promise.resolve().then(function() {
      return build;
    })
  },
  {
    name: "contact",
    path: "/contact",
    file: "/home/youness/dev/portfolio-2.0/pages/contact.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return contact;
    })
  },
  {
    name: "fun",
    path: "/fun",
    file: "/home/youness/dev/portfolio-2.0/pages/fun.vue",
    children: [],
    meta: meta$3,
    alias: (meta$3 == null ? void 0 : meta$3.alias) || [],
    component: () => Promise.resolve().then(function() {
      return fun;
    })
  },
  {
    name: "index",
    path: "/",
    file: "/home/youness/dev/portfolio-2.0/pages/index.vue",
    children: [],
    meta: meta$2,
    alias: (meta$2 == null ? void 0 : meta$2.alias) || [],
    component: () => Promise.resolve().then(function() {
      return index;
    })
  },
  {
    name: "support",
    path: "/support",
    file: "/home/youness/dev/portfolio-2.0/pages/support.vue",
    children: [],
    meta: meta$1,
    alias: (meta$1 == null ? void 0 : meta$1.alias) || [],
    component: () => Promise.resolve().then(function() {
      return support;
    })
  },
  {
    name: "work",
    path: "/work",
    file: "/home/youness/dev/portfolio-2.0/pages/work.vue",
    children: [],
    meta,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return work;
    })
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const animation_45global = defineNuxtRouteMiddleware((to, from) => {
  const animationRoutes = ["/", "/balance", "/build", "/fun", "/support"];
  const { setAnimaLeaveOnRouteChange, setAnimateEnterOnRouteChange } = useBioTransition();
  if (!animationRoutes.includes(from.path)) {
    setAnimateEnterOnRouteChange(false);
  } else {
    setAnimateEnterOnRouteChange(true);
  }
  if (!animationRoutes.includes(to.path)) {
    setAnimaLeaveOnRouteChange(false);
  } else {
    setAnimaLeaveOnRouteChange(true);
  }
});
const globalMiddleware = [
  animation_45global
];
const namedMiddleware = {};
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47nuxt_643_460_460_45rc_464_47node_modules_47nuxt_47dist_47pages_47runtime_47router = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.createRouter({
    ...routerOptions,
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = vue_cjs_prod.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._activeRoute = vue_cjs_prod.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    callWithNuxt(nuxtApp, throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, throwError, [createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, throwError, [error2]);
    }
  });
  return { provide: { router } };
});
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47plugin_46mjs = defineNuxtPlugin(() => {
  useRuntimeConfig().public;
});
const preference = "system";
const script = 'const w=window,de=document.documentElement,knownColorSchemes=["dark","light"],preference=window.localStorage.getItem("nuxt-color-mode")||"system";let value=preference==="system"?getColorScheme():preference;const forcedColorMode=de.getAttribute("data-color-mode-forced");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w["__NUXT_COLOR_MODE__"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=""+e+"",t="";de.classList?de.classList.add(o):de.className+=" "+o,de.setAttribute("data-"+t,e)}function removeColorScheme(e){const o=""+e+"",t="";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,"g"),""),de.removeAttribute("data-"+t)}function prefersColorScheme(e){return w.matchMedia("(prefers-color-scheme"+e+")")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme("").media!=="not all"){for(const e of knownColorSchemes)if(prefersColorScheme(":"+e).matches)return e}return"light"}\n';
const _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxtjs_43color_45mode_643_461_464_47node_modules_47_64nuxtjs_47color_45mode_47dist_47runtime_47plugin_46server = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => vue_cjs_prod.reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({
      htmlAttrs,
      script: [{ children: script }]
    });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const PiniaNuxtPlugin = (context, inject2) => {
  const pinia = createPinia();
  {
    context.vueApp.use(pinia);
  }
  inject2("pinia", pinia);
  context.pinia = pinia;
  setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  {
    {
      context.nuxtState.pinia = pinia.state.value;
    }
  }
};
const _47home_47youness_47dev_47portfolio_452_460_47_46nuxt_47unocss_46mjs = () => {
};
const _47home_47youness_47dev_47portfolio_452_460_47plugins_47__typed_45router_46ts = defineNuxtPlugin((nuxtApp) => {
  const routesList = {
    "404": "404",
    balance: "balance",
    blogSlug: "blog-slug",
    blog: "blog",
    build: "build",
    contact: "contact",
    fun: "fun",
    index: "index",
    support: "support",
    work: "work"
  };
  return {
    provide: {
      typedRouter: nuxtApp.$router,
      routesList
    }
  };
});
const animationOut = (el) => {
  if (!el || !el.classList)
    return;
  el.classList.add("underline-out");
  setTimeout(() => {
    el.classList.remove("underline-out");
  }, 300);
};
const elementIsActive = (el, isActive = false) => {
  if (!el)
    return;
  if (!isActive && el.classList.contains("after:translate-x-0")) {
    animationOut(el);
    el.classList.remove("after:translate-x-0");
  } else if (isActive && !el.classList.contains("after:translate-x-0")) {
    el.classList.add("after:translate-x-0");
  }
};
const _47home_47youness_47dev_47portfolio_452_460_47plugins_47underLineDirective_46ts = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("underline-animation", {
    beforeMount(el, binding) {
      var _a;
      const { value } = binding;
      el.classList.add("underline-enter");
      elementIsActive(el, (_a = value == null ? void 0 : value.isActive) != null ? _a : false);
      useEventListener(el, "mouseleave", () => {
        animationOut(el);
      });
    },
    updated(el, binding) {
      var _a;
      const { value } = binding;
      el.classList.add("underline-enter");
      elementIsActive(el, (_a = value == null ? void 0 : value.isActive) != null ? _a : false);
    }
  });
});
const _plugins = [
  preload,
  _47home_47youness_47dev_47portfolio_452_460_47_46nuxt_47components_46plugin_46mjs,
  _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47nuxt_643_460_460_45rc_464_47node_modules_47nuxt_47dist_47head_47runtime_47lib_47vueuse_45head_46plugin,
  _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47nuxt_643_460_460_45rc_464_47node_modules_47nuxt_47dist_47head_47runtime_47plugin,
  _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47nuxt_643_460_460_45rc_464_47node_modules_47nuxt_47dist_47pages_47runtime_47router,
  _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxt_43content_642_460_461_47node_modules_47_64nuxt_47content_47dist_47runtime_47plugin_46mjs,
  _47home_47youness_47dev_47portfolio_452_460_47node_modules_47_46pnpm_47_64nuxtjs_43color_45mode_643_461_464_47node_modules_47_64nuxtjs_47color_45mode_47dist_47runtime_47plugin_46server,
  PiniaNuxtPlugin,
  _47home_47youness_47dev_47portfolio_452_460_47_46nuxt_47unocss_46mjs,
  _47home_47youness_47dev_47portfolio_452_460_47plugins_47__typed_45router_46ts,
  _47home_47youness_47dev_47portfolio_452_460_47plugins_47underLineDirective_46ts
];
const _sfc_main$N = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "404"
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-49db1bb2><div class="fixed left-0 right-0 spotlight z-10" data-v-49db1bb2></div><div class="max-w-520px text-center z-20" data-v-49db1bb2><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-49db1bb2>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-49db1bb2>${serverRenderer.exports.ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-49db1bb2>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-49db1bb2"]]);
const _sfc_main$M = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "500"
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-48d28fca><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-48d28fca></div><div class="max-w-520px text-center" data-v-48d28fca><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-48d28fca>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-48d28fca>${serverRenderer.exports.ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const Error500 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-48d28fca"]]);
const _sfc_main$K = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = (_a = error.statusMessage) != null ? _a : is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const ErrorTemplate = is404 ? Error404 : Error500;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, throwError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(_sfc_main$K), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: " Nuxt 3",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/nuxt.png"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$J);
    vueApp.component("App", _sfc_main$I);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const _sfc_main$H = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "tes",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = vue_cjs_prod.ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h2>${serverRenderer.exports.ssrInterpolate(counter.value)}</h2><button btn>+</button><button btn>-</button><!--]-->`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/tes.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const tes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const ContentList = vue_cjs_prod.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: "/"
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = vue_cjs_prod.useSlots();
    const { path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path });
    const emptyNode = (slot, data) => vue_cjs_prod.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return vue_cjs_prod.h(ContentQuery, contentQueryProps, {
      default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => slots == null ? void 0 : slots.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
      empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : ({ data }) => emptyNode("default", data),
      "not-found": (bindings) => {
        var _a;
        return (slots == null ? void 0 : slots["not-found"]) ? (_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings) : ({ data }) => emptyNode("not-found", data);
      }
    });
  }
});
const ContentList$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ContentList
}, Symbol.toStringTag, { value: "Module" }));
const ContentNavigation = vue_cjs_prod.defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = vue_cjs_prod.toRefs(props);
    const { data, refresh } = await useAsyncData(`content-navigation-${hash(query.value)}`, () => fetchContentNavigation(query.value));
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = vue_cjs_prod.useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => vue_cjs_prod.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if ((slots == null ? void 0 : slots.empty) && (!data || !(data == null ? void 0 : data.length))) {
      return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, { query, ...this.$attrs })) || emptyNode("empty", { query, data });
    }
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});
const ContentNavigation$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ContentNavigation
}, Symbol.toStringTag, { value: "Module" }));
const Markdown = vue_cjs_prod.defineComponent({
  name: "Markdown",
  functional: true,
  props: {
    use: {
      type: [String, Function],
      default: "default"
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = vue_cjs_prod.getCurrentInstance();
    const { between } = vue_cjs_prod.useSlots();
    const tags = vue_cjs_prod.computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap: unwrap2, between, tags, parent }) {
    var _a;
    try {
      const slot = typeof use === "string" ? (parent == null ? void 0 : parent.slots[use]) || ((_a = parent == null ? void 0 : parent.parent) == null ? void 0 : _a.slots[use]) : use;
      if (!slot) {
        return vue_cjs_prod.h("div");
      }
      if (!unwrap2) {
        return [slot()];
      }
      const { flatUnwrap: flatUnwrap2 } = useUnwrap();
      const unwrapped = flatUnwrap2(slot(), tags);
      if (between) {
        return unwrapped.flatMap((vnode, index2) => index2 === 0 ? [vnode] : [between(), vnode]);
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e) {
      return vue_cjs_prod.h("div");
    }
  }
});
const Markdown$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Markdown
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, vue_cjs_prod.mergeProps({ href: __props.href }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue_cjs_prod.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const ProseA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$G
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</blockquote>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const ProseBlockquote = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$o]]);
const ProseBlockquote$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseBlockquote
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = vue_cjs_prod.defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  }
});
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const ProseCode = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$n]]);
const ProseCode$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseCode
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<code${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</code>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const ProseCodeInline = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$m]]);
const ProseCodeInline$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseCodeInline
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<em${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</em>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const ProseEm = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$l]]);
const ProseEm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseEm
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const ProseH1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$k]]);
const ProseH1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseH1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "ProseH2",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<h2${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ id: __props.id }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        href: `#${__props.id}`
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue_cjs_prod.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h2>`);
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const ProseH2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<h3${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ id: __props.id }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        href: `#${__props.id}`
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue_cjs_prod.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const ProseH3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "ProseH4",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<h4${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ id: __props.id }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        href: `#${__props.id}`
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue_cjs_prod.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h4>`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const ProseH4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<h5${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h5>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const ProseH5 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$j]]);
const ProseH5$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseH5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<h6${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h6>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const ProseH6 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$i]]);
const ProseH6$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseH6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<hr${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const ProseHr = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$h]]);
const ProseHr$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseHr
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        src: __props.src,
        alt: __props.alt,
        width: __props.width,
        height: __props.height
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const ProseImg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<li${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const ProseLi = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$g]]);
const ProseLi$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseLi
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<ol${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ol>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const ProseOl = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$f]]);
const ProseOl$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseOl
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const ProseP = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$e]]);
const ProseP$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseP
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<strong${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</strong>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const ProseStrong = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$d]]);
const ProseStrong$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseStrong
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<table${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</table>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const ProseTable = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$c]]);
const ProseTable$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseTable
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<tbody${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tbody>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const ProseTbody = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$b]]);
const ProseTbody$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseTbody
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<td${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</td>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const ProseTd = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$a]]);
const ProseTd$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseTd
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<th${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</th>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const ProseTh = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$9]]);
const ProseTh$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseTh
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<thead${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</thead>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ProseThead = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$8]]);
const ProseThead$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseThead
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<tr${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tr>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const ProseTr = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$7]]);
const ProseTr$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseTr
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<ul${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ProseUl = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$6]]);
const ProseUl$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ProseUl
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "logo",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 376 413.6"
  }, _attrs))}><g id="main"><g id="borders"><rect id="right" x="178" y="243.53" width="413.6" height="12.94" transform="translate(618.18 -178) rotate(90)" fill="#a6956e"></rect><rect id="bottom" x="10.38" y="398.26" width="353" height="15.34" fill="#a6956e"></rect><rect id="left" x="-183.71" y="243.53" width="413.6" height="12.94" transform="translate(256.47 183.71) rotate(90)" fill="#a6956e"></rect><g id="top"><rect x="361.44" width="0.27" height="15.34" fill="#a6956e"></rect><rect x="9.38" width="284.7" height="15.34" fill="#a6956e"></rect></g></g><g id="dots"><circle id="dot-13" cx="187.33" cy="108.26" r="3.24" fill="#c5c7ca"></circle><circle id="dot-12" cx="187.33" cy="132.9" r="3.24" fill="#c5c7ca"></circle><circle id="dot-11" cx="187.33" cy="58.99" r="3.24" fill="#c5c7ca"></circle><circle id="dot-10" cx="187.33" cy="83.63" r="3.24" fill="#c5c7ca"></circle><circle id="dot-9" cx="187.33" cy="157.53" r="3.24" fill="#c5c7ca"></circle><circle id="dot-8" cx="187.33" cy="182.17" r="3.24" fill="#c5c7ca"></circle><circle id="dot-7" cx="187.33" cy="206.8" r="3.24" fill="#c5c7ca"></circle><circle id="dot-6" cx="187.33" cy="231.44" r="3.24" fill="#c5c7ca"></circle><circle id="dot-5" cx="187.33" cy="256.07" r="3.24" fill="#c5c7ca"></circle><circle id="dot-4" cx="187.33" cy="280.71" r="3.24" fill="#c5c7ca"></circle><circle id="dot-3" cx="187.33" cy="305.34" r="3.24" fill="#c5c7ca"></circle><circle id="dot-2" cx="187.33" cy="329.98" r="3.24" fill="#c5c7ca"></circle><circle id="dot-1" cx="187.33" cy="354.61" r="3.24" fill="#c5c7ca"></circle></g><g id="name"><text transform="translate(128.42 115.29)" font-size="65.81" fill="#a6956e" font-family="Leelawadee-Bold, Leelawadee" font-weight="700"> Y </text><text transform="translate(206.21 152.5)" font-size="65.81" fill="#a6956e" font-family="Leelawadee-Bold, Leelawadee" font-weight="700"> O </text><text transform="translate(128.42 189.71)" font-size="65.81" fill="#a6956e" font-family="Leelawadee-Bold, Leelawadee" font-weight="700"> U </text><text transform="translate(206.21 226.92)" font-size="65.81" fill="#a6956e" font-family="Leelawadee-Bold, Leelawadee" font-weight="700"> N </text><text transform="translate(128.42 264.12)" font-size="65.81" fill="#a6956e" font-family="Leelawadee-Bold, Leelawadee" font-weight="700"> E </text><g id="S-2"><text transform="translate(206.21 301.33)" font-size="65.81" fill="#a6956e" font-family="Leelawadee-Bold, Leelawadee" font-weight="700"> S </text></g><g id="S-1"><text transform="translate(128.42 338.54)" font-size="65.81" fill="#a6956e" font-family="Leelawadee-Bold, Leelawadee" font-weight="700"> S </text></g></g></g></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$h = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "DarkModeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const color = useColorMode();
    const isDark = vue_cjs_prod.computed(() => {
      return color.value === "dark";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: [
          "relative inline-flex  flex-shrink-0 h-6 w-11 border-2 border-champagne rounded-full cursor-pointer transition-colors ease-in-out duration-200",
          {
            "bg-dark-blue": vue_cjs_prod.unref(isDark),
            "bg-gray-200": !vue_cjs_prod.unref(isDark)
          }
        ],
        role: "switch",
        "aria-checked": "false"
      }, _attrs))}><span class="sr-only">Dark Mode Switch</span><span class="${serverRenderer.exports.ssrRenderClass([
        "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-champagne shadow transform ring-0 transition ease-in-out duration-200",
        {
          "translate-x-5": vue_cjs_prod.unref(isDark),
          "translate-x-0": !vue_cjs_prod.unref(isDark)
        }
      ])}"><span class="${serverRenderer.exports.ssrRenderClass([
        "absolute inset-0 h-full w-full flex  text-white items-center justify-center transition-opacity",
        {
          "opacity-0 ease-out duration-100": vue_cjs_prod.unref(isDark),
          "opacity-100 ease-in duration-200": !vue_cjs_prod.unref(isDark)
        }
      ])}" aria-hidden="true"><div i-carbon-sun text-sm></div></span><span class="${serverRenderer.exports.ssrRenderClass([
        "absolute inset-0 text-white h-full w-full flex items-center  justify-center transition-opacity",
        {
          "opacity-100 ease-in duration-200": vue_cjs_prod.unref(isDark),
          "opacity-0 ease-out duration-100": !vue_cjs_prod.unref(isDark)
        }
      ])}" aria-hidden="true"><div i-carbon-moon text-sm></div></span></span><span class="text-lg inline hidden lg:inline font-medium text-base absolute -top-1 -right-28">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(isDark) ? "Dark Mode" : "Light Mode")}</span></button>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DarkModeToggle.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "26",
    height: "16",
    viewBox: "0 0 26 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1 1L14 1" stroke="#A6956E" stroke-width="1.5" stroke-linecap="round"></path><path d="M1 8H25" stroke="#A6956E" stroke-width="1.5" stroke-linecap="round"></path><path d="M14 15L25 15" stroke="#A6956E" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/MenuIcon.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$f = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  serverRenderer.exports.ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FadeTransition.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$e = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const navItems = vue_cjs_prod.ref([
      {
        name: "Work",
        path: "/work",
        isActive: false
      },
      {
        name: "Contact",
        path: "/contact",
        isActive: false
      }
    ]);
    const route = useRoute();
    const open = vue_cjs_prod.ref(false);
    vue_cjs_prod.watch(route, () => {
      navItems.value.forEach((item) => {
        item.isActive = item.path === route.path;
      });
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_logo = __nuxt_component_1;
      const _component_DarkModeToggle = _sfc_main$h;
      const _component_icons_menu_icon = __nuxt_component_3;
      const _component_fade_transition = __nuxt_component_4;
      const _component_nuxt_link = __nuxt_component_1$1;
      const _component_dark_mode_toggle = _sfc_main$h;
      _push(`<header${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "items-end border-b z-36 border-champagne md:border-b-0 h-24 flex justify-between items-center" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        class: "w-28",
        to: "/"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Logo</span>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_logo, { class: "md:w-14 w-12 my-2 mx-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode("span", { class: "sr-only" }, "Logo"),
              vue_cjs_prod.createVNode(_component_logo, { class: "md:w-14 w-12 my-2 mx-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav md="border-b border-l" class="text-base flex-1 flex items-center justify-end h-full border-champagne"><div class="mr-8 xl:mr-28 md:flex items-center justify-center gap-x-1 hidden"><!--[-->`);
      serverRenderer.exports.ssrRenderList(navItems.value, (item) => {
        _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          class: "text-xl relative pl-4 uppercase pr-7 group overflow-hidden font-medium",
          to: item.path
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="${serverRenderer.exports.ssrRenderClass([
                "absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300",
                {
                  "translate-y-0": item.isActive,
                  "translate-y-[140%]": !item.isActive
                }
              ])}"${_scopeId}>&lt;</span> ${serverRenderer.exports.ssrInterpolate(item.name)} <span class="${serverRenderer.exports.ssrRenderClass([
                "absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300",
                {
                  "translate-y-0": item.isActive,
                  "translate-y-[140%]": !item.isActive
                }
              ])}"${_scopeId}>/&gt;</span>`);
            } else {
              return [
                vue_cjs_prod.createVNode("span", {
                  class: [
                    "absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300",
                    {
                      "translate-y-0": item.isActive,
                      "translate-y-[140%]": !item.isActive
                    }
                  ]
                }, "<", 2),
                vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(item.name) + " ", 1),
                vue_cjs_prod.createVNode("span", {
                  class: [
                    "absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300",
                    {
                      "translate-y-0": item.isActive,
                      "translate-y-[140%]": !item.isActive
                    }
                  ]
                }, "/>", 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_DarkModeToggle, { class: "hidden lg:hidden md:inline-flex" }, null, _parent));
      _push(`</div><button class="md:hidden mr-4">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_icons_menu_icon, { class: "h-6 w-6" }, null, _parent));
      _push(`</button></nav>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_fade_transition, null, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (open.value) {
              _push2(`<div class="absolute inset-0 top-0 h-screen md:hidden"${_scopeId}><div class="h-full bg-base"${_scopeId}><div class="border-b border-champagne"${_scopeId}><div class="flex px-8 items-center py-3 justify-between"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.exports.ssrRenderComponent(_component_logo, { class: "w-12" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vue_cjs_prod.createVNode(_component_logo, { class: "w-12" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="-mr-2"${_scopeId}><button type="button" class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-offset-champagne"${_scopeId}><span class="sr-only"${_scopeId}>Close menu</span><div i-carbon:close text-5xl text-base${_scopeId}></div></button></div></div></div><nav class="flex h-full items-center justify-start gap-y-8 flex-col mt-12"${_scopeId}><!--[-->`);
              serverRenderer.exports.ssrRenderList(navItems.value, (item) => {
                _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                  key: item.name,
                  class: "text-xl relative pl-4 text-base uppercase pr-7 group overflow-hidden font-medium",
                  to: item.path
                }, {
                  default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="${serverRenderer.exports.ssrRenderClass([
                        "absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300",
                        {
                          "translate-y-0": item.isActive,
                          "translate-y-[140%]": !item.isActive
                        }
                      ])}"${_scopeId2}>&lt;</span> ${serverRenderer.exports.ssrInterpolate(item.name)} <span class="${serverRenderer.exports.ssrRenderClass([
                        "absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300",
                        {
                          "translate-y-0": item.isActive,
                          "translate-y-[140%]": !item.isActive
                        }
                      ])}"${_scopeId2}>/&gt;</span>`);
                    } else {
                      return [
                        vue_cjs_prod.createVNode("span", {
                          class: [
                            "absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300",
                            {
                              "translate-y-0": item.isActive,
                              "translate-y-[140%]": !item.isActive
                            }
                          ]
                        }, "<", 2),
                        vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(item.name) + " ", 1),
                        vue_cjs_prod.createVNode("span", {
                          class: [
                            "absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300",
                            {
                              "translate-y-0": item.isActive,
                              "translate-y-[140%]": !item.isActive
                            }
                          ]
                        }, "/>", 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_dark_mode_toggle, null, null, _parent2, _scopeId));
              _push2(`</nav></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              open.value ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                key: 0,
                class: "absolute inset-0 top-0 h-screen md:hidden"
              }, [
                vue_cjs_prod.createVNode("div", { class: "h-full bg-base" }, [
                  vue_cjs_prod.createVNode("div", { class: "border-b border-champagne" }, [
                    vue_cjs_prod.createVNode("div", { class: "flex px-8 items-center py-3 justify-between" }, [
                      vue_cjs_prod.createVNode(_component_nuxt_link, { to: "/" }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode(_component_logo, { class: "w-12" })
                        ]),
                        _: 1
                      }),
                      vue_cjs_prod.createVNode("div", { class: "-mr-2" }, [
                        vue_cjs_prod.createVNode("button", {
                          type: "button",
                          onClick: ($event) => open.value = false,
                          class: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-offset-champagne"
                        }, [
                          vue_cjs_prod.createVNode("span", { class: "sr-only" }, "Close menu"),
                          vue_cjs_prod.createVNode("div", {
                            "i-carbon:close": "",
                            "text-5xl": "",
                            "text-base": ""
                          })
                        ], 8, ["onClick"])
                      ])
                    ])
                  ]),
                  vue_cjs_prod.createVNode("nav", { class: "flex h-full items-center justify-start gap-y-8 flex-col mt-12" }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(navItems.value, (item) => {
                      return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                        key: item.name,
                        class: "text-xl relative pl-4 text-base uppercase pr-7 group overflow-hidden font-medium",
                        to: item.path
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("span", {
                            class: [
                              "absolute left-0 text-champagne dark:text-white group-hover:translate-y-0 duration-300",
                              {
                                "translate-y-0": item.isActive,
                                "translate-y-[140%]": !item.isActive
                              }
                            ]
                          }, "<", 2),
                          vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(item.name) + " ", 1),
                          vue_cjs_prod.createVNode("span", {
                            class: [
                              "absolute text-champagne dark:text-white right-0 group-hover:translate-y-0 duration-300",
                              {
                                "translate-y-0": item.isActive,
                                "translate-y-[140%]": !item.isActive
                              }
                            ]
                          }, "/>", 2)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128)),
                    vue_cjs_prod.createVNode(_component_dark_mode_toggle)
                  ])
                ])
              ])) : vue_cjs_prod.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const socialMedia = [
      {
        path: "https://github.com/younessaitali",
        icon: "i-carbon:logo-github",
        title: "Github"
      },
      {
        path: "https://twitter.com/younesaitali",
        icon: "i-carbon:logo-twitter",
        title: "Twitter"
      },
      {
        path: "https://www.linkedin.com/in/younessaitali/",
        icon: "i-carbon:logo-linkedin",
        title: "linkedIn"
      },
      {
        path: "mailto:younes.aitali95@gmail.com",
        icon: "i-carbon:email",
        title: "Contact me by Email"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_dark_mode_toggle = _sfc_main$h;
      const _component_nuxt_link = __nuxt_component_1$1;
      _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "lg:flex hidden border-t z-36 border-champagne h-20 justify-between" }, _attrs))}><div class="ml-28 flex items-center">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_dark_mode_toggle, null, null, _parent));
      _push(`</div><div class="flex justify-center text-base items-center gap-x-5 mr-28">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        "font-medium": "",
        "text-lg": "",
        to: "/contact"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get in touch`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("Get in touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="w-16 h-0.5 dark:bg-champagne bg-darkBlue"></span><!--[-->`);
      serverRenderer.exports.ssrRenderList(socialMedia, (link) => {
        _push(`<a${serverRenderer.exports.ssrRenderAttr("href", link.path)} target="_blank" class="${serverRenderer.exports.ssrRenderClass(["inline-block text-2xl", link.icon])}"></a>`);
      });
      _push(`<!--]--></div></footer>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_App_header = _sfc_main$e;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_app_footer = _sfc_main$d;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative flex-col flex justify-between h-full min-h-screen" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_App_header, null, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "root", {}, null, _push, _parent);
  _push(`<main md="ml-28 border-l border-champagne" class="h-full flex-1"><div class="container mx-auto h-full w-full">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main><p class="text-lg md:block hidden text-base fixed -left-17 bottom-1/2 rotate-270"> Want to Work \u{1F91D} `);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
    to: { path: "/contact" },
    class: "underline"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Together?`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Together?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_app_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$2]]);
const _default$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _default
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "BioNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { bioLinks } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1$1;
      _push(`<nav${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        "aria-label": "Tabs",
        xl: "-right-16  ",
        lg: "w-80 -right-28 bottom-1/2 inset-x-auto rotate-90",
        class: "px-10 w-58 fixed z-50 inset-x-0 mx-auto bottom-5"
      }, _attrs))}><ul class="items-center grid gap-x-6 grid-cols-5"><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(bioLinks), (link) => {
        _push(`<li class="h-5 w-5 border-2 flex items-center justify-center border-darkBlue dark:border-champagne rounded-md">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
          to: link.path,
          class: [
            "h-3 w-3 rounded-sm",
            {
              "bg-darkBlue dark:bg-champagne": link.isActive
            }
          ]
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.exports.ssrInterpolate(link.label)}</span>`);
            } else {
              return [
                vue_cjs_prod.createVNode("span", { class: "sr-only" }, vue_cjs_prod.toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BioNav.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const bio = vue_cjs_prod.ref(null);
    const transition = useBioTransition();
    transition.setNavigationElement(bio);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App_header = _sfc_main$e;
      const _component_nuxt_link = __nuxt_component_1$1;
      const _component_bio_nav = _sfc_main$b;
      const _component_app_footer = _sfc_main$d;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative flex-col flex justify-between h-full min-h-screen" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_App_header, null, null, _parent));
      _push(`<div md="ml-28 border-l mr-0 border-champagne " class="z-24 ml-auto mr-auto flex-1 h-full"><main class="h-full container mx-auto overflow-hidden">`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div><p class="text-lg md:block hidden text-base fixed -left-17 bottom-1/2 rotate-270"> Want to Work \u{1F91D} `);
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        to: "/contact",
        class: "underline"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Together? `);
          } else {
            return [
              vue_cjs_prod.createTextVNode("Together? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_bio_nav, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_app_footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const home = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "w-full h-full flex flex-col gap-y-8 justify-center items-center text-4xl md:text-6xl text-center teal-700 dark:gray-200" }, _attrs))}><div i-carbon-warning></div><div>Page Not found</div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    btn: "",
    "text-sm": "",
    m: "3 t8",
    to: { path: "/" }
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Back to Home`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Back to Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "balance",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_BalanceAnimation = _sfc_main$10;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full w-full flex flex-col justify-center items-center"${_scopeId}><div class="flex flex-col flex-1 xl:max-h-3xl lg:max-h-2xl md:max-h-xl gap-y-3 justify-evenly"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "Like to have fun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_BalanceAnimation, {
              class: "2xl:max-h-lg max-h-xs",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "h-full w-full flex flex-col justify-center items-center" }, [
                vue_cjs_prod.createVNode("div", { class: "flex flex-col flex-1 xl:max-h-3xl lg:max-h-2xl md:max-h-xl gap-y-3 justify-evenly" }, [
                  vue_cjs_prod.createVNode(_component_head_line, { title: "Like to have fun" }),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_BalanceAnimation, {
                    class: "2xl:max-h-lg max-h-xs",
                    key: vue_cjs_prod.unref(uuid)
                  })),
                  vue_cjs_prod.createVNode("p", {
                    font: "medium",
                    class: "mx-a px-2 xl:max-w-3xl lg:max-w-2xl",
                    text: "champagne center lg:xl md"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/balance.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const balance = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_ContentRenderer = __nuxt_component_2$1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_ContentDoc, vue_cjs_prod.mergeProps({
        path: vue_cjs_prod.unref(route).path
      }, _attrs), {
        "not-found": vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"${_scopeId}><h1 class="text-4xl tracking-tight leading-10 font-semibold sm:text-5xl sm:leading-none md:text-6xl"${_scopeId}> Document not found </h1>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              class: "mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",
              to: "/"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to Home `);
                } else {
                  return [
                    vue_cjs_prod.createTextVNode("Back to Home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28" }, [
                vue_cjs_prod.createVNode("h1", { class: "text-4xl tracking-tight leading-10 font-semibold sm:text-5xl sm:leading-none md:text-6xl" }, " Document not found "),
                vue_cjs_prod.createVNode(_component_NuxtLink, {
                  class: "mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",
                  to: "/"
                }, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode("Back to Home ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: vue_cjs_prod.withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"${_scopeId}><h1 class="text-4xl tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(doc.title)}</h1><p class="mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"${_scopeId}>${serverRenderer.exports.ssrInterpolate(doc.excerpt)}</p></div><div class="relative mx-auto pb-6 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"${_scopeId}><article class="xl:px-8 px-6 w-full mx-auto text-lg prose text-left"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
            _push2(`</article></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "mx-auto text-center max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28" }, [
                vue_cjs_prod.createVNode("h1", { class: "text-4xl tracking-tight leading-10 font-bold sm:text-5xl sm:leading-none md:text-6xl" }, vue_cjs_prod.toDisplayString(doc.title), 1),
                vue_cjs_prod.createVNode("p", { class: "mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" }, vue_cjs_prod.toDisplayString(doc.excerpt), 1)
              ]),
              vue_cjs_prod.createVNode("div", { class: "relative mx-auto pb-6 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28" }, [
                vue_cjs_prod.createVNode("article", { class: "xl:px-8 px-6 w-full mx-auto text-lg prose text-left" }, [
                  vue_cjs_prod.createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.exports.ssrRenderAttrs(_attrs)}>Blog</h1>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "build",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_BuildAnimation = _sfc_main$Z;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center h-full flex-col justify-center"${_scopeId}><div class="max-h-3xl flex-1 flex flex-col justify-evenly gap-y-3"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "Like to build things" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_BuildAnimation, {
              class: "max-h-56",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl  md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex items-center h-full flex-col justify-center" }, [
                vue_cjs_prod.createVNode("div", { class: "max-h-3xl flex-1 flex flex-col justify-evenly gap-y-3" }, [
                  vue_cjs_prod.createVNode(_component_head_line, { title: "Like to build things" }),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_BuildAnimation, {
                    class: "max-h-56",
                    key: vue_cjs_prod.unref(uuid)
                  })),
                  vue_cjs_prod.createVNode("p", {
                    font: "medium",
                    class: "mx-a px-2 xl:max-w-3xl lg:max-w-2xl",
                    text: "champagne center lg:xl  md"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/build.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const build = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    let status = vue_cjs_prod.ref("idle");
    const validationSchema = toFormValidator(object({
      email: string().min(1, { message: "This filed is required" }).email({ message: "Must be a valid email" }),
      name: string().min(1, { message: "This filed is required" }),
      message: string().min(8, { message: "Too short" })
    }));
    const { handleSubmit, errors, meta: meta2 } = useForm({
      validationSchema,
      initialValues: {
        email: "",
        name: "",
        message: ""
      }
    });
    const { value: email } = useField("email");
    const { value: name } = useField("name");
    const { value: message } = useField("message");
    const onSubmit = handleSubmit(async (values) => {
      status.value = "pending";
      const { data } = await useFetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values)
      });
      const { success } = data.value;
      if (success) {
        status.value = "success";
        setTimeout(() => {
          status.value = "idle";
        }, 3e3);
      } else {
        status.value = "error";
      }
    });
    const buttonMessage = vue_cjs_prod.computed(() => {
      switch (status.value) {
        case "pending":
          return "Sending...";
        case "success":
          return "Message sent";
        case "error":
          return "Error sending message";
        default:
          return "Send";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_forms_text_input = _sfc_main$X;
      const _component_icons_send_icon = __nuxt_component_2;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex lg:flex-row flex-col-reverse lg:items-center lg:justify-center px-4 md:mt-28 mt-16 gap-y-10"${_scopeId}><form action="" id="contact-form" class="flex flex-1 flex-col gap-y-6xl"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_forms_text_input, {
              type: "text",
              modelValue: vue_cjs_prod.unref(name),
              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(name) ? name.value = $event : null,
              label: "Name",
              placeholder: "Your Name",
              "is-dirty": vue_cjs_prod.unref(meta2).touched,
              errors: vue_cjs_prod.unref(errors).name
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_forms_text_input, {
              modelValue: vue_cjs_prod.unref(email),
              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(email) ? email.value = $event : null,
              label: "email",
              type: "text",
              placeholder: "Your Email",
              errors: vue_cjs_prod.unref(errors).email,
              "is-dirty": vue_cjs_prod.unref(meta2).touched
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_forms_text_input, {
              modelValue: vue_cjs_prod.unref(message),
              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(message) ? message.value = $event : null,
              label: "description",
              placeholder: "Share your thought",
              errors: vue_cjs_prod.unref(errors).message,
              "is-dirty": vue_cjs_prod.unref(meta2).touched,
              "is-textarea": true
            }, null, _parent2, _scopeId));
            _push2(`</form><div class="flex-1 text-left mx-a relative text-base px-2"${_scopeId}><span lg="inline text-9rem" class="text-transparent hidden absolute -top-16 left-12 leading-46 text-stroke-2 text-stroke-champagne/20 text-13rem"${_scopeId}>Get In Touch</span><h2 class="font-medium text-6xl"${_scopeId}>Get In Touch</h2><p class="text-canvas mt-5 text-lg max-w-sm font-light"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam morbi etiam justo. Consequat, suspendisse tellus et at blandit. Mi malesuada elementum sagittis, posuere nam. </p></div></div><button type="submit" class="mt-24 mx-a mb-10 md:mb-0 text-2xl flex items-center justify-center gap-x-3 px-12 py-2.5 rounded-full text-base border border-champagne" form="contact-form"${_scopeId}>${serverRenderer.exports.ssrInterpolate(buttonMessage.value)} `);
            if (status.value === "idle") {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_icons_send_icon, null, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="${serverRenderer.exports.ssrRenderClass([{
                "animate-spin": status.value === "pending",
                "i-carbon:checkmark": status.value === "success",
                "i-carbon:close": status.value === "error"
              }, "ml-1 w-10 h-10"])}"${_scopeId}></div>`);
            }
            _push2(`</button>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex lg:flex-row flex-col-reverse lg:items-center lg:justify-center px-4 md:mt-28 mt-16 gap-y-10" }, [
                vue_cjs_prod.createVNode("form", {
                  action: "",
                  id: "contact-form",
                  class: "flex flex-1 flex-col gap-y-6xl"
                }, [
                  vue_cjs_prod.createVNode(_component_forms_text_input, {
                    type: "text",
                    modelValue: vue_cjs_prod.unref(name),
                    "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(name) ? name.value = $event : null,
                    label: "Name",
                    placeholder: "Your Name",
                    "is-dirty": vue_cjs_prod.unref(meta2).touched,
                    errors: vue_cjs_prod.unref(errors).name
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "is-dirty", "errors"]),
                  vue_cjs_prod.createVNode(_component_forms_text_input, {
                    modelValue: vue_cjs_prod.unref(email),
                    "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(email) ? email.value = $event : null,
                    label: "email",
                    type: "text",
                    placeholder: "Your Email",
                    errors: vue_cjs_prod.unref(errors).email,
                    "is-dirty": vue_cjs_prod.unref(meta2).touched
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "is-dirty"]),
                  vue_cjs_prod.createVNode(_component_forms_text_input, {
                    modelValue: vue_cjs_prod.unref(message),
                    "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(message) ? message.value = $event : null,
                    label: "description",
                    placeholder: "Share your thought",
                    errors: vue_cjs_prod.unref(errors).message,
                    "is-dirty": vue_cjs_prod.unref(meta2).touched,
                    "is-textarea": true
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "is-dirty"])
                ]),
                vue_cjs_prod.createVNode("div", { class: "flex-1 text-left mx-a relative text-base px-2" }, [
                  vue_cjs_prod.createVNode("span", {
                    lg: "inline text-9rem",
                    class: "text-transparent hidden absolute -top-16 left-12 leading-46 text-stroke-2 text-stroke-champagne/20 text-13rem"
                  }, "Get In Touch"),
                  vue_cjs_prod.createVNode("h2", { class: "font-medium text-6xl" }, "Get In Touch"),
                  vue_cjs_prod.createVNode("p", { class: "text-canvas mt-5 text-lg max-w-sm font-light" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam morbi etiam justo. Consequat, suspendisse tellus et at blandit. Mi malesuada elementum sagittis, posuere nam. ")
                ])
              ]),
              vue_cjs_prod.createVNode("button", {
                type: "submit",
                onClick: vue_cjs_prod.withModifiers(vue_cjs_prod.unref(onSubmit), ["prevent"]),
                class: "mt-24 mx-a mb-10 md:mb-0 text-2xl flex items-center justify-center gap-x-3 px-12 py-2.5 rounded-full text-base border border-champagne",
                form: "contact-form"
              }, [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(buttonMessage.value) + " ", 1),
                status.value === "idle" ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_icons_send_icon, { key: 0 })) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                  key: 1,
                  class: [{
                    "animate-spin": status.value === "pending",
                    "i-carbon:checkmark": status.value === "success",
                    "i-carbon:close": status.value === "error"
                  }, "ml-1 w-10 h-10"]
                }, null, 2))
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "fun",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_FunAnimation = _sfc_main$U;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col h-full items-center justify-center"${_scopeId}><div class="flex flex-1 flex-col max-h-3xl justify-evenly"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "love to have fun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_FunAnimation, {
              class: "md:h-86 xl:h-sm 2xl:h-md mt-6 md:mt-0",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 mt-6 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex flex-col h-full items-center justify-center" }, [
                vue_cjs_prod.createVNode("div", { class: "flex flex-1 flex-col max-h-3xl justify-evenly" }, [
                  vue_cjs_prod.createVNode(_component_head_line, { title: "love to have fun" }),
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_FunAnimation, {
                    class: "md:h-86 xl:h-sm 2xl:h-md mt-6 md:mt-0",
                    key: vue_cjs_prod.unref(uuid)
                  })),
                  vue_cjs_prod.createVNode("p", {
                    font: "medium",
                    class: "mx-a px-2 mt-6 xl:max-w-3xl lg:max-w-2xl",
                    text: "champagne center lg:xl md"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fun.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const fun = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full mx-auto flex flex-col justify-center items-center text-center"${_scopeId}><h1 class="dark:text-white lg:text-8xl text-7xl capitalize font-light"${_scopeId}> hi Am <span class="text-transparent font-semibold text-stroke-champagne text-stroke-2"${_scopeId}>Youness</span></h1><h2 class="md:text-4xl text-3xl text-canvas md:mt-4 mt-2 font-semibold"${_scopeId}> Full-Stack Developer </h2><p font="medium" class="mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl" text="champagne lg:xl md"${_scopeId}> A web developer with experience building web applications in a variety of business domains using the latest and most appropriate technology. </p><a href="https://drive.google.com/file/d/1CLLjqPX1QJIQvaI1tosUTpjy8w1m9nHN/view?usp=sharing" target="_blank" md="py-3 px-10 text-lg" class="inline-block md:mt-16 my-10 hover:bg-blue/20 text-base bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium"${_scopeId}>View resume</a></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "h-full mx-auto flex flex-col justify-center items-center text-center" }, [
                vue_cjs_prod.createVNode("h1", { class: "dark:text-white lg:text-8xl text-7xl capitalize font-light" }, [
                  vue_cjs_prod.createTextVNode(" hi Am "),
                  vue_cjs_prod.createVNode("span", { class: "text-transparent font-semibold text-stroke-champagne text-stroke-2" }, "Youness")
                ]),
                vue_cjs_prod.createVNode("h2", { class: "md:text-4xl text-3xl text-canvas md:mt-4 mt-2 font-semibold" }, " Full-Stack Developer "),
                vue_cjs_prod.createVNode("p", {
                  font: "medium",
                  class: "mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl",
                  text: "champagne lg:xl md"
                }, " A web developer with experience building web applications in a variety of business domains using the latest and most appropriate technology. "),
                vue_cjs_prod.createVNode("a", {
                  href: "https://drive.google.com/file/d/1CLLjqPX1QJIQvaI1tosUTpjy8w1m9nHN/view?usp=sharing",
                  target: "_blank",
                  md: "py-3 px-10 text-lg",
                  class: "inline-block md:mt-16 my-10 hover:bg-blue/20 text-base bg-transparent border border-champagne rounded-full py-1.5 px-5 text-md font-medium"
                }, "View resume")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "support",
  __ssrInlineRender: true,
  setup(__props) {
    const { uuid } = useBioTransition();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_head_line = _sfc_main$11;
      const _component_SupportAnimation = _sfc_main$R;
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-full flex flex-col items-center justify-center"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_head_line, { title: "Like to have fun" }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_SupportAnimation, {
              md: "h-80",
              class: "h-48 w-full",
              key: vue_cjs_prod.unref(uuid)
            }, null, _parent2, _scopeId));
            _push2(`<p font="medium" class="mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl" text="champagne center lg:xl md"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, </p></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "h-full flex flex-col items-center justify-center" }, [
                vue_cjs_prod.createVNode(_component_head_line, { title: "Like to have fun" }),
                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_SupportAnimation, {
                  md: "h-80",
                  class: "h-48 w-full",
                  key: vue_cjs_prod.unref(uuid)
                })),
                vue_cjs_prod.createVNode("p", {
                  font: "medium",
                  class: "mx-a px-2 lg:mt-16 mt-8 xl:max-w-3xl lg:max-w-2xl",
                  text: "champagne center lg:xl md"
                }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu consectetur consectetur, ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/support.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const support = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __name: "work",
  __ssrInlineRender: true,
  setup(__props) {
    const wheel = vue_cjs_prod.ref(null);
    const projects = vue_cjs_prod.ref([
      {
        name: "Vue Vite Boilerplate",
        description: `opinionated Vue/Vite starter template allows you to make apps quickly. It supports file-based routing, Layout System, components auto-importing, State management via Pina, I18n, SSG, and PWAs, Format, and Lint, Unit Testing with Vitest, E2E Testing with Cypress, and Standards checking with pre-commit hooks. Test validation on pre-push with Husky, UnoCSS for UI, and TypeScript of course`,
        isActive: false,
        image: {
          src: "/projects/vue-vite.png",
          alt: "Vue and Vite logo"
        },
        links: [
          {
            title: "Try it out \u{1F680}",
            url: "https://github.com/younessaitali/vue_3-vite-typescript-boilerplate"
          }
        ],
        technologies: [
          "vue 3",
          "vite",
          "vue-i18n",
          "husky",
          "pre-commit",
          "UnoCSS",
          "Typescript"
        ]
      },
      {
        name: "Auto Filler",
        description: `desktop application that assists users with repetitive tasks and auto-fills forms from a
  spreadsheet. As a result, my client spent less time doing the repetitive tasks.`,
        isActive: false,
        image: {
          src: "/projects/auto-k.svg",
          alt: "Auto A Logo"
        },
        links: [],
        technologies: [
          "vue 3",
          "vite",
          "vue-i18n",
          "UnoCSS",
          "Node",
          "TypeORM",
          "SQLite",
          "EsBuild",
          "Electron",
          "Ajv",
          "Typescript"
        ]
      },
      {
        name: "Marrakech Invest",
        description: `Informational website for entrepreneurs and businesses looking for
            information about potential investment opportunities in the Marrakech
            region. More than 100 pages are available on the website on a variety
            of investment opportunities and business guides. This project was part of my work at the Digital-butterfly agency. Among my responsibilities was leading the development team. `,
        isActive: false,
        image: {
          src: "/projects/mi_logo.png",
          alt: "Marrakech invest logo"
        },
        links: [
          {
            title: "Visit website",
            url: "https://marrakechinvest.ma/"
          }
        ],
        technologies: [
          "Nuxt",
          "Vue",
          "Drupal",
          "GraphQL",
          "Gsap",
          "TailwindCSS"
        ]
      },
      {
        name: "Business Plan Interactive",
        description: `An interactive web app allows entrepreneurs to generate a business plan step-by-step
      and guide them through it. has already benefited thousands of small business owners. This project was part of my work at the Digital-butterfly agency. Among my responsibilities was leading the development team. `,
        technologies: ["Vue", "TailwindCSS", "Firebase", "Vuex"],
        image: {
          src: "/projects/bpi.png",
          alt: "BPI LOGO"
        },
        isActive: false,
        links: [
          {
            title: "Visit website",
            url: "https://cri-bpi.web.app/"
          }
        ]
      },
      {
        name: "Intaj",
        technologies: [
          "React",
          "Redux",
          "Laravel",
          "styled-Components",
          "Mysql",
          "Rest API"
        ],
        description: "A platform for business-to-business transactions. I worked on this piece at the Digital-butterfly agency. I handled the back end of this project.",
        image: {
          src: "/projects/intaj.svg",
          alt: "Intaj logo"
        },
        isActive: false,
        links: [
          {
            title: "Visit website",
            url: "https://intajoriental.com/"
          }
        ]
      },
      {
        name: "Tasks",
        technologies: [
          "Vue",
          "Vuex",
          "Vue Router",
          "TailwindCSS",
          "Laravel",
          "JWT",
          "Pusher"
        ],
        description: `This project management app provides a visual representation of what is being worked on by splitting projects into boards that contain tasks with a description and multiple to-do lists, and the user has the ability to add other members to a project ... I used Laravel as a backend to serve my Rest-API, VueJS as a frontend, Vuex as state management, and Pusher for Real-time communication, as well as JWT for authorization.
      this was a side project Inspired by Jira from Atlassian`,
        image: {
          src: "/projects/tasks.svg",
          alt: "Tasks logo"
        },
        isActive: false,
        links: [
          {
            title: "<code />",
            url: "https://github.com/younessaitali/Jira-Clone"
          },
          {
            title: "Video Demo",
            url: "https://www.youtube.com/watch?v=liIVa-zMERE"
          }
        ]
      },
      {
        name: "MediaTheque",
        image: {
          src: "/projects/media.svg",
          alt: "Marrakech invest logo"
        },
        description: `As part of my graduation project, I developed a library app. There are two parts to the app: a client-side dashboard and an admin dashboard.
      The client has the option to rent or buy books. In addition, you can subscribe to the membership for a monthly fee. Owners and Admins can also manage the inventory, client information, and employee roles `,
        technologies: ["laravel", "MySql", "Stripe API", "Axios", "Sass"],
        isActive: false,
        links: [
          {
            title: "<code />",
            url: "https://github.com/younessaitali/mediatheeque"
          }
        ]
      }
    ]);
    const activeProject = vue_cjs_prod.computed(() => {
      const projectIndex = projects.value.findIndex((project) => project.isActive);
      if (projectIndex === -1) {
        projects.value[0].isActive = true;
        return { project: projects.value[0], index: 0 };
      }
      return { project: projects.value[projectIndex], index: projectIndex };
    });
    const prevProject = () => {
      let { index: index2 } = activeProject.value;
      index2 = (index2 - 1 + projects.value.length) % projects.value.length;
      projectSelected(projects.value[index2].name);
    };
    const nextProject = () => {
      let { index: index2 } = activeProject.value;
      index2 = (index2 + 1) % projects.value.length;
      projectSelected(projects.value[index2].name);
    };
    useNavigation({ element: wheel, next: nextProject, prev: prevProject });
    function projectSelected(name) {
      projects.value.forEach((item) => {
        item.isActive = item.name === name;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_layout = __nuxt_component_0$1;
      const _component_project = _sfc_main$P;
      const _directive_underline_animation = vue_cjs_prod.resolveDirective("underline-animation");
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_layout, _attrs, {
        root: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div lg="-right-10.75rem  inset-y-0 my-auto w-96 h-10 rotate-270" class="fixed bottom-0 w-screen rotate-0 px-0.5 py-2 bg-champagne/42 z-36 flex items-center justify-between"${_scopeId}><button text="white 3xl"${_scopeId}><div class="i-carbon:chevron-down"${_scopeId}></div></button><h3 text="xl md:2xl white "${_scopeId}>${serverRenderer.exports.ssrInterpolate(activeProject.value.project.name)}</h3><button text="white 3xl"${_scopeId}><div class="i-carbon:chevron-up"${_scopeId}></div></button></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                lg: "-right-10.75rem  inset-y-0 my-auto w-96 h-10 rotate-270",
                class: "fixed bottom-0 w-screen rotate-0 px-0.5 py-2 bg-champagne/42 z-36 flex items-center justify-between"
              }, [
                vue_cjs_prod.createVNode("button", {
                  onClick: nextProject,
                  text: "white 3xl"
                }, [
                  vue_cjs_prod.createVNode("div", { class: "i-carbon:chevron-down" })
                ]),
                vue_cjs_prod.createVNode("h3", { text: "xl md:2xl white " }, vue_cjs_prod.toDisplayString(activeProject.value.project.name), 1),
                vue_cjs_prod.createVNode("button", {
                  onClick: prevProject,
                  text: "white 3xl"
                }, [
                  vue_cjs_prod.createVNode("div", { class: "i-carbon:chevron-up" })
                ])
              ])
            ];
          }
        }),
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute z-12 inset-0"${_scopeId}></div><section md="px-0 py-5" class="flex flex-1 h-full lg:items-center items-start justify-center px-2 gap-x-3"${_scopeId}><nav class="hidden lg:block"${_scopeId}><ul class="flex flex-col gap-y-2"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(projects.value, (project, index2) => {
              _push2(`<li${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
                key: project.name,
                font: "bold",
                text: "4xl center stroke-sm stroke-champagne",
                class: [
                  "py-5 px-9 z-20 inline-block relative capitalize after:-ml-16 cursor-pointer overflow-hidden group opacity-85",
                  {
                    "text-transparent": !project.isActive,
                    "text-champagne": project.isActive
                  }
                ]
              }, serverRenderer.exports.ssrGetDirectiveProps(_ctx, _directive_underline_animation, { isActive: project.isActive })))}${_scopeId}><span class="${serverRenderer.exports.ssrRenderClass([
                "absolute left-0 group-hover:translate-y-0 duration-300",
                {
                  "translate-y-0": project.isActive,
                  "translate-y-[140%]": !project.isActive
                }
              ])}"${_scopeId}>${serverRenderer.exports.ssrInterpolate(index2 + 1)}</span><h3${_scopeId}>project</h3></li>`);
            });
            _push2(`<!--]--></ul></nav>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_project, { ...activeProject.value.project }, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                ref_key: "wheel",
                ref: wheel,
                class: "absolute z-12 inset-0"
              }, null, 512),
              vue_cjs_prod.createVNode("section", {
                md: "px-0 py-5",
                class: "flex flex-1 h-full lg:items-center items-start justify-center px-2 gap-x-3"
              }, [
                vue_cjs_prod.createVNode("nav", { class: "hidden lg:block" }, [
                  vue_cjs_prod.createVNode("ul", { class: "flex flex-col gap-y-2" }, [
                    (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(projects.value, (project, index2) => {
                      return vue_cjs_prod.withDirectives((vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", {
                        key: project.name,
                        onClick: ($event) => projectSelected(project.name),
                        font: "bold",
                        text: "4xl center stroke-sm stroke-champagne",
                        class: [
                          "py-5 px-9 z-20 inline-block relative capitalize after:-ml-16 cursor-pointer overflow-hidden group opacity-85",
                          {
                            "text-transparent": !project.isActive,
                            "text-champagne": project.isActive
                          }
                        ]
                      }, [
                        vue_cjs_prod.createVNode("span", {
                          class: [
                            "absolute left-0 group-hover:translate-y-0 duration-300",
                            {
                              "translate-y-0": project.isActive,
                              "translate-y-[140%]": !project.isActive
                            }
                          ]
                        }, vue_cjs_prod.toDisplayString(index2 + 1), 3),
                        vue_cjs_prod.createVNode("h3", null, "project")
                      ], 10, ["onClick"])), [
                        [_directive_underline_animation, { isActive: project.isActive }]
                      ]);
                    }), 128))
                  ])
                ]),
                vue_cjs_prod.createVNode(_component_project, { ...activeProject.value.project }, null, 16)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const work = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { entry$1 as default };
//# sourceMappingURL=server.mjs.map
