import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

type FragmentSpec = {
  text: string;
  x: number;
  y: number;
  rotate: number;
  delay: number;
  scale: number;
  color: string;
};

const fragments: FragmentSpec[] = [
  {text: '</', x: -430, y: -170, rotate: -12, delay: 0, scale: 1.12, color: '#2a2a28'},
  {text: 'ERR', x: 360, y: -150, rotate: 10, delay: 2, scale: 1.18, color: '#3a2f2a'},
  {text: '{', x: -300, y: 155, rotate: -8, delay: 4, scale: 1.2, color: '#5a4a3d'},
  {text: 'TSX', x: 290, y: 150, rotate: 7, delay: 6, scale: 0.98, color: '#6a5a4a'},
  {text: '()', x: 80, y: -245, rotate: -3, delay: 8, scale: 0.95, color: '#8d6a4b'},
  {text: 'import', x: -125, y: 235, rotate: 2, delay: 10, scale: 0.78, color: '#8f7a68'},
];

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const BrokenFragment: React.FC<{fragment: FragmentSpec; frame: number; fps: number}> = ({
  fragment,
  frame,
  fps,
}) => {
  const settle = spring({
    frame: Math.max(0, frame - fragment.delay),
    fps,
    config: {
      damping: 200,
      stiffness: 120,
      mass: 0.65,
    },
  });

  const opacity = interpolate(
    frame,
    [fragment.delay, fragment.delay + 8, fragment.delay + 24, 30],
    [0, 0.9, 0.68, 0],
    clamp,
  );

  const x = interpolate(settle, [0, 1], [fragment.x * 1.2, fragment.x * 0.16], clamp);
  const y = interpolate(settle, [0, 1], [fragment.y * 1.2, fragment.y * 0.16], clamp);
  const scale = interpolate(settle, [0, 1], [fragment.scale * 1.18, fragment.scale], clamp);
  const blur = interpolate(settle, [0, 1], [30, 1.5], clamp);

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(${x}px, ${y}px) rotate(${fragment.rotate}deg) scale(${scale})`,
        transformOrigin: 'center center',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        fontWeight: 900,
        fontSize: fragment.text === 'import' ? 64 : 112,
        letterSpacing: fragment.text === 'ERR' ? '-0.05em' : '-0.04em',
        color: fragment.color,
        opacity,
        filter: `blur(${blur}px)`,
        textShadow: '0 0 34px rgba(255,255,255,0.32)',
        whiteSpace: 'pre',
        userSelect: 'none',
      }}
    >
      {fragment.text}
    </div>
  );
};

export const Scene_01_CompileErrorBreaksIntoClarity: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const masterOpacity = interpolate(frame, [0, 4, 62, 71], [0, 1, 1, 0], clamp);
  const exitBlur = interpolate(frame, [62, 71], [0, 18], clamp);
  const dolly = interpolate(frame, [0, 71], [1.08, 1], clamp);

  const headlineSettle = spring({
    frame: Math.max(0, frame - 16),
    fps,
    config: {
      damping: 170,
      stiffness: 110,
      mass: 0.8,
    },
  });

  const headlineOpacity = interpolate(frame, [14, 28, 60, 71], [0, 1, 1, 0], clamp);
  const headlineBlur = interpolate(headlineSettle, [0, 1], [24, 0], clamp);
  const headlineY = interpolate(headlineSettle, [0, 1], [30, 0], clamp);

  const subOpacity = interpolate(frame, [18, 30, 56, 68], [0, 0.7, 0.7, 0], clamp);
  const subBlur = interpolate(frame, [18, 30], [14, 0], clamp);

  const silhouetteSettle = spring({
    frame: Math.max(0, frame - 8),
    fps,
    config: {
      damping: 160,
      stiffness: 92,
      mass: 0.9,
    },
  });

  const silhouetteOpacity = interpolate(frame, [8, 22, 60, 71], [0, 0.9, 0.9, 0], clamp);
  const silhouetteBlur = interpolate(silhouetteSettle, [0, 1], [54, 10], clamp);
  const silhouetteScale = interpolate(silhouetteSettle, [0, 1], [0.92, 1], clamp);
  const silhouetteY = interpolate(silhouetteSettle, [0, 1], [28, 0], clamp);

  const bloomStrength = interpolate(frame, [0, 16, 40, 71], [0.7, 1, 0.92, 0.75], clamp);
  const pulse = 0.5 + Math.sin(frame * 0.12) * 0.08;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#f7efe1',
        overflow: 'hidden',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      }}
    >
      <AbsoluteFill
        style={{
          opacity: masterOpacity,
          filter: `blur(${exitBlur}px)`,
          transform: `scale(${dolly})`,
        }}
      >
        <AbsoluteFill
          style={{
            background: [
              'radial-gradient(1200px 700px at 50% 52%, rgba(255,235,184,0.95), rgba(255,235,184,0.35) 34%, rgba(247,239,225,0) 70%)',
              'radial-gradient(900px 560px at 50% 28%, rgba(255,255,255,0.82), rgba(255,255,255,0) 70%)',
              'radial-gradient(1200px 900px at 50% 100%, rgba(255,215,120,0.20), rgba(255,215,120,0) 62%)',
              'linear-gradient(180deg, #fbf5ea 0%, #f6ecd8 100%)',
            ].join(','),
          }}
        />

        <AbsoluteFill
          style={{
            opacity: 0.13,
            backgroundImage: [
              'repeating-linear-gradient(0deg, rgba(120,90,55,0.05) 0px, rgba(120,90,55,0.05) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 4px)',
              'repeating-linear-gradient(90deg, rgba(120,90,55,0.03) 0px, rgba(120,90,55,0.03) 1px, rgba(255,255,255,0) 3px, rgba(255,255,255,0) 6px)',
            ].join(','),
            mixBlendMode: 'multiply',
          }}
        />

        <AbsoluteFill
          style={{
            background: `radial-gradient(820px 420px at 50% 58%, rgba(255,228,153,${0.28 * bloomStrength}), rgba(255,228,153,0) 72%)`,
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '56%',
            width: 760,
            height: 330,
            transform: `translate(-50%, -50%) translateY(${silhouetteY}px) scale(${silhouetteScale})`,
            opacity: silhouetteOpacity,
            filter: `blur(${silhouetteBlur}px)`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '52% 48% 50% 50% / 58% 52% 48% 42%',
              background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.92), rgba(255,243,210,0.82) 26%, rgba(255,221,146,0.46) 58%, rgba(255,221,146,0.06) 100%)',
              boxShadow: '0 0 180px rgba(255,215,122,0.38), 0 0 80px rgba(255,255,255,0.55)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '52%',
              width: 260,
              height: 220,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(255,255,255,${0.92 + pulse * 0.08}) 0%, rgba(255,246,225,0.7) 42%, rgba(255,246,225,0) 75%)`,
              boxShadow: '0 0 100px rgba(255,255,255,0.72)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 18,
              height: 165,
              transform: 'translate(-50%, -50%)',
              borderRadius: 999,
              background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.96) 35%, rgba(255,244,210,0.98) 65%, rgba(255,255,255,0))',
              boxShadow: '0 0 44px rgba(255,255,255,0.9)',
            }}
          />
        </div>

        {fragments.map((fragment, index) => (
          <BrokenFragment key={index} fragment={fragment} frame={frame} fps={fps} />
        ))}

        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '35%',
            transform: `translate(-50%, -50%) translateY(${headlineY}px)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            opacity: headlineOpacity,
            filter: `blur(${headlineBlur}px)`,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'rgba(64,48,32,0.62)',
            }}
          >
            recovery
          </div>
          <div
            style={{
              fontSize: 122,
              lineHeight: 0.9,
              fontWeight: 950,
              letterSpacing: '-0.07em',
              color: '#16191d',
              textAlign: 'center',
              textShadow: '0 10px 38px rgba(255,255,255,0.38)',
            }}
          >
            COMPILE FIXED
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '46%',
            transform: 'translateX(-50%)',
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(82,64,44,0.52)',
            opacity: subOpacity,
            filter: `blur(${subBlur}px)`,
            whiteSpace: 'nowrap',
          }}
        >
          error breaks into clarity
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};