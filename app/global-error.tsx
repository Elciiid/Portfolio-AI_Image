"use client";

// Replaces the root layout when it fails, so globals.css is not available:
// styles are inline and mirror the site's near-black / cream / serif palette.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          margin: 0,
          background: "#0a0807",
          color: "#efe7d8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "32px",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Something went wrong
        </h2>
        <button
          onClick={reset}
          style={{
            height: "44px",
            padding: "0 22px",
            background: "#efe7d8",
            color: "#0a0807",
            borderRadius: "3px",
            border: "none",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
