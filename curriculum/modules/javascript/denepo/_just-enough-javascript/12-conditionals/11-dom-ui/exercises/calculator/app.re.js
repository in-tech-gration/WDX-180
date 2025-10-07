const _0x42b4cb = _0x52b1;
!(function (n, t) {
  const r = _0x52b1,
    e = _0xb7ed();
  for (;;)
    try {
      if (
        525013 ===
        (parseInt(r(181)) / 1) * (parseInt(r(177)) / 2) +
          -parseInt(r(167)) / 3 +
          (parseInt(r(172)) / 4) * (parseInt(r(182)) / 5) +
          -parseInt(r(180)) / 6 +
          (parseInt(r(162)) / 7) * (parseInt(r(166)) / 8) +
          parseInt(r(174)) / 9 +
          -parseInt(r(168)) / 10
      )
        break;
      e.push(e.shift());
    } catch (n) {
      e.push(e.shift());
    }
})();
import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';
function _0x52b1(n, t) {
  const r = _0xb7ed();
  return (_0x52b1 = function (n, t) {
    return r[(n -= 161)];
  })(n, t);
}
function _0xb7ed() {
  const n = [
    '8126RRUNpb',
    'left',
    'inputs',
    '1676934fdyUel',
    '35PDgIYQ',
    '110030FpnQbi',
    'kyzKZ',
    'PaXWl',
    'lmszA',
    'zYTkG',
    'ution',
    'secret-sol',
    'PWBQb',
    '234066CHAKxp',
    'gyfsB',
    'XSIrz',
    'operator',
    '200aLkbHQ',
    '1388718tqKcSy',
    '9328040ZBYAQH',
    'omfDv',
    'right',
    'TzHbw',
    '108NYAtmC',
    'BZUWW',
    '5651055GaQMXG',
    'QvFiU',
    'tqtVB',
  ];
  return (_0xb7ed = function () {
    return n;
  })();
}
whenFormDataChanges(_0x42b4cb(179), () => {
  const n = _0x42b4cb,
    t = {
      zYTkG: function (n, t) {
        return n(t);
      },
      tqtVB: n(178),
      PaXWl: n(170),
      XSIrz: n(165),
      lmszA: function (n, t) {
        return n === t;
      },
      kyzKZ: function (n, t) {
        return n + t;
      },
      BZUWW: function (n, t) {
        return n - t;
      },
      gyfsB: function (n, t) {
        return n === t;
      },
      QvFiU: function (n, t) {
        return n * t;
      },
      TzHbw: function (n, t) {
        return n / t;
      },
      PWBQb: function (n, t, r) {
        return n(t, r);
      },
      omfDv: n(188) + n(187),
    };
  let r,
    e = t[n(186)](readNumber, t[n(176)]),
    i = t[n(186)](readNumber, t[n(184)]),
    u = t[n(186)](readString, t[n(164)]);
  (r = t[n(185)](u, '+')
    ? t[n(183)](e, i)
    : t[n(185)](u, '-')
    ? t[n(173)](e, i)
    : t[n(163)](u, '*')
    ? t[n(175)](e, i)
    : t[n(171)](e, i)),
    t[n(161)](displayString, t[n(169)], t[n(183)]('$ ', r));
});
