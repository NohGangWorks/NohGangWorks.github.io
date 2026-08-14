(() => {
  "use strict";

  const payload = window.location.hash.slice(1);
  const status = document.getElementById("status");
  history.replaceState(null, "", `${location.pathname}${location.search}`);

  const showError = (message) => {
    if (status) status.textContent = message;
  };

  const decodeBase64Url = (value) => {
    const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  };

  const decodePayload = async () => {
    const separator = payload.indexOf(".");
    if (separator < 1) throw new Error("인쇄 데이터가 없습니다.");
    const format = payload.slice(0, separator);
    const bytes = decodeBase64Url(payload.slice(separator + 1));
    if (format === "u1") return new TextDecoder().decode(bytes);
    if (format !== "g1" || typeof DecompressionStream === "undefined") {
      throw new Error("이 브라우저는 압축된 인쇄 데이터를 지원하지 않습니다.");
    }
    const stream = new Blob([bytes])
      .stream()
      .pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream).text();
  };

  const documentReady = document.readyState === "loading"
    ? new Promise((resolve) => document.addEventListener("DOMContentLoaded", resolve, { once: true }))
    : Promise.resolve();

  Promise.all([documentReady, decodePayload()])
    .then(([, html]) => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch((error) => {
      const message = error instanceof Error ? error.message : String(error);
      showError(`인쇄 문서를 열지 못했습니다. ${message}`);
    });
})();
