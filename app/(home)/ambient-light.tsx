export const AmbientLight = () => (
  <svg width="0" height="0">
    <filter
      id="ambilight"
      width="300%"
      height="300%"
      x="-0.75"
      y="-0.75"
      colorInterpolationFilters="sRGB"
    >
      <feOffset in="SourceGraphic" result="source-copy" />

      <feComponentTransfer in="source-copy" result="wow">
        <feFuncR type="linear" slope="0.8" />
        <feFuncG type="linear" slope="0.8" />
        <feFuncB type="linear" slope="0.8" />
      </feComponentTransfer>

      <feColorMatrix
        in="wow"
        type="saturate"
        values="3"
        result="saturated-copy"
      />
      <feColorMatrix
        in="saturated-copy"
        type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                33 33 33 101 -132"
        result="bright-colors"
      />

      <feMorphology
        in="bright-colors"
        operator="dilate"
        radius="10"
        result="spread"
      />
      <feGaussianBlur in="spread" stdDeviation="30" result="ambilight-light" />

      <feOffset in="SourceGraphic" result="source" />

      <feComposite in="source" in2="ambilight-light" operator="over" />
    </filter>
  </svg>
);
