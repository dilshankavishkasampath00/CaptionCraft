import { useEffect, useRef } from "react";

const adConfigs = {
  "ad-slot-160x600": {
    inline: `atOptions = { key: '9e39b0b1eb48a214ed3f85cb0d4dceab', format: 'iframe', height: 600, width: 160, params: {} };`,
    src: "https://www.highperformanceformat.com/9e39b0b1eb48a214ed3f85cb0d4dceab/invoke.js"
  },
  "ad-slot-160x300": {
    inline: `atOptions = { key: 'f74888836cb3ed5a9237beb4a52972cc', format: 'iframe', height: 300, width: 160, params: {} };`,
    src: "https://www.highperformanceformat.com/f74888836cb3ed5a9237beb4a52972cc/invoke.js"
  },
  "ad-slot-300x250": {
    inline: `atOptions = { key: '69f318aa55b5983fc0c5fb3827a01167', format: 'iframe', height: 250, width: 300, params: {} };`,
    src: "https://www.highperformanceformat.com/69f318aa55b5983fc0c5fb3827a01167/invoke.js"
  },
  "ad-slot-320x50": {
    inline: `atOptions = { key: 'ea3890a3d0ae43f3b5eb226d2e643043', format: 'iframe', height: 50, width: 320, params: {} };`,
    src: "https://www.highperformanceformat.com/ea3890a3d0ae43f3b5eb226d2e643043/invoke.js"
  },
  "ad-slot-468x60": {
    inline: `atOptions = { key: 'df7f42f6964823b7a22e12ef123106af', format: 'iframe', height: 60, width: 468, params: {} };`,
    src: "https://www.highperformanceformat.com/df7f42f6964823b7a22e12ef123106af/invoke.js"
  },
  "ad-slot-728x90": {
    inline: `atOptions = { key: 'a9dfce01c9b314b44c3d7b63f20f2df0', format: 'iframe', height: 90, width: 728, params: {} };`,
    src: "https://www.highperformanceformat.com/a9dfce01c9b314b44c3d7b63f20f2df0/invoke.js"
  },
  "ad-slot-native-banner": {
    type: "native",
    src: "https://pl30123101.effectivecpmnetwork.com/06c285826fc9d72d9805a56411d42054/invoke.js",
    containerId: "container-06c285826fc9d72d9805a56411d42054"
  }
};

export default function AdPlacement({ containerId, label, size, className = "" }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.dataset.adInjected === "true") return;

    const config = adConfigs[containerId];
    if (!config) return;

    host.dataset.adInjected = "true";

    if (config.type === "native") {
      const script = document.createElement("script");
      script.src = config.src;
      script.async = true;
      script.defer = true;
      script.setAttribute("data-cfasync", "false");
      host.appendChild(script);

      const nativeContainer = document.createElement("div");
      nativeContainer.id = config.containerId;
      host.appendChild(nativeContainer);
      return;
    }

    const inlineScript = document.createElement("script");
    inlineScript.textContent = config.inline;
    host.appendChild(inlineScript);

    const script = document.createElement("script");
    script.src = config.src;
    script.async = true;
    script.defer = true;
    host.appendChild(script);
  }, [containerId]);

  return (
    <div
      ref={hostRef}
      id={containerId}
      className={`relative flex min-h-[72px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-400/80 backdrop-blur-sm ${className}`}
      aria-label={`${label} advertisement`}
      title={`${label} advertisement`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_70%)]" />
      <div className="relative z-10 px-3 py-2">
        <span className="text-[10px] font-semibold tracking-[0.35em] text-zinc-400">Sponsored</span>
        <div className="mt-1 text-[10px] text-zinc-500">{size}</div>
      </div>
    </div>
  );
}
