import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  random,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const AIWorkflowBuilderIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  const enterA = spring({
    fps,
    frame: frame - 1,
    config: {damping: 16, stiffness: 160, mass: 0.9},
  });

  const enterB = spring({
    fps,
    frame: frame - 5,
    config: {damping: 18, stiffness: 140, mass: 1},
  });

  const fadeIn = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const exit = interpolate(frame, [60, 72], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.33, 0, 0.67, 1),
  });

  const bgScale = interpolate(frame, [0, 72], [1, 1.06], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const bgY = interpolate(frame, [0, 72], [0, -30], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const line1Y = interpolate(enterA, [0, 1], [24, 0]);
  const line2Y = interpolate(enterB, [0, 1], [34, 0]);
  const textScale = interpolate(enterB, [0, 1], [0.88, 1]);
  const textBlur = interpolate(enterB, [0, 1], [20, 0]);
  const tracking = interpolate(enterB, [0, 1], [0.16, 0.01]);
  const titleOpacity = fadeIn * (1 - exit);
  const titleZoomOut = 1 + exit * 0.08;
  const titleBlurOut = exit * 18;
  const bloomPulse = 0.88 + Math.sin((frame / 72) * Math.PI * 2) * 0.08;

  const particles = new Array(26).fill(true).map((_, i) => {
    const x = width * (0.08 + 0.84 * random(i + 1));
    const y = height * (0.18 + 0.64 * random(i + 101));
    const size = 6 + 20 * random(i + 201);
    const speed = 8 + 18 * random(i + 301);
    const drift = -24 + 48 * random(i + 401);
    const opacity = 0.08 + 0.18 * random(i + 501);
    const scale = 0.8 + 0.8 * random(i + 601);
    const yAnim = y - ((frame * speed) / 72);
    const xAnim = x + Math.sin((frame / 16) + i * 0.7) * drift * 0.12;

    return (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: xAnim,
          top: yAnim,
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          opacity: opacity * (1 - exit * 0.4),
          filter: 'blur(1px)',
          transform: `translate(-50%, -50%) scale(${scale})`,
          boxShadow: '0 0 24px rgba(255,255,255,0.55)',
        }}
      />
    );
  });

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        backgroundColor: '#F8EFD9',
        transform: `translateY(${bgY}px) scale(${bgScale + exit * 0.03})`,
      }}
    >
      <AbsoluteFill
        style={{
          background: 'linear-gradient(135deg, #FFF9F0 0%, #F7E6BD 42%, #E8B45B 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: -120,
          background: 'radial-gradient(circle at 50% 42%, rgba(255,252,244,0.95) 0%, rgba(255,240,208,0.62) 28%, rgba(255,214,134,0.22) 54%, rgba(255,214,134,0) 72%)',
          opacity: 0.95,
          filter: 'blur(8px)',
          transform: `scale(${1 + frame * 0.0015})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: width * 0.72,
          height: width * 0.72,
          left: -width * 0.08,
          top: height * 0.48,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,209,120,0.44) 0%, rgba(255,209,120,0.14) 42%, rgba(255,209,120,0) 72%)',
          filter: 'blur(8px)',
          transform: `translateY(${Math.sin(frame / 22) * 10}px) scale(${1.02 + frame * 0.0008})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: width * 0.62,
          height: width * 0.62,
          right: -width * 0.06,
          top: -height * 0.06,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,244,209,0.92) 0%, rgba(255,226,158,0.36) 40%, rgba(255,226,158,0) 72%)',
          filter: 'blur(8px)',
          transform: `translateY(${Math.cos(frame / 18) * 8}px) scale(${1.04 + frame * 0.0006})`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,${0.18 * bloomPulse}) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0) 58%)`,
          mixBlendMode: 'screen',
        }}
      />

      {particles}

      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 110px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            opacity: titleOpacity,
            transform: `scale(${textScale * titleZoomOut})`,
            filter: `blur(${textBlur + titleBlurOut}px)`,
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, SF Pro Display, Helvetica, Arial, sans-serif',
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: `${tracking}em`,
              lineHeight: 0.9,
              color: '#1A1A1A',
              textTransform: 'uppercase',
              transform: `translateY(${line1Y}px)`,
              textShadow: '0 0 28px rgba(255,250,238,0.38)',
              whiteSpace: 'nowrap',
            }}
          >
            Introducing
          </div>
          <div
            style={{
              marginTop: 14,
              fontFamily: 'Inter, SF Pro Display, Helvetica, Arial, sans-serif',
              fontSize: 74,
              fontWeight: 800,
              letterSpacing: `${tracking * 0.55}em`,
              lineHeight: 0.94,
              color: '#141414',
              transform: `translateY(${line2Y}px)`,
              textShadow: '0 0 34px rgba(255,246,224,0.52)',
            }}
          >
            The AI Workflow Builder
          </div>
        </div>
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 22%, rgba(0,0,0,${0.08 + exit * 0.16}) 100%)`,
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};