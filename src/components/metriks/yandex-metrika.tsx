// @ts-nocheck
"use client";
import Image from "next/image";

import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          return;
        }
      }
      (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]);
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(97881656, "init", {
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
    });
  }, []);

  return (
    <noscript>
      <div>
        <Image
          src="https://mc.yandex.ru/watch/97881656"
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
          width={0}
          height={0}
        />
      </div>
    </noscript>
  );
};

export default YandexMetrika;
