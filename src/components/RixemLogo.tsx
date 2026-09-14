interface RixemLogoProps {
  size?: number;
}

/** The RIXEM wordmark. The "I" is three stacked rectangles (see .rixem-logo in index.css). */
export default function RixemLogo({ size = 28 }: RixemLogoProps) {
  return (
    <span className="rixem-logo" style={{ fontSize: size }}>
      R
      <i>
        <b></b>
        <u></u>
        <s></s>
      </i>
      XEM
    </span>
  );
}
