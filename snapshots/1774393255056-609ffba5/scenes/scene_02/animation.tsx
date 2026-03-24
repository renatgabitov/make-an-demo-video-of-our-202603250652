import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

/* TRANSPILED_SHOWCASE_SCENE_2 */
/* COMPONENT_REFERENCE_ID:3e6c3d59-649a-4ff9-b775-1abfa91a51b9 */

const PillIconDocument: React.FC<{color?: string}> = ({color = '#22c55e'}) => {
	return (
		<div
			style={{
				width: 22,
				height: 22,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					width: 18,
					height: 14,
					border: `2px solid ${color}`,
					borderRadius: 4,
					position: 'relative',
					boxSizing: 'border-box',
				}}
			>
				<div
					style={{
						position: 'absolute',
						left: 3,
						top: 3,
						width: 6,
						height: 2,
						backgroundColor: color,
						borderRadius: 2,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						left: 3,
						top: 7,
						width: 8,
						height: 2,
						backgroundColor: color,
						borderRadius: 2,
					}}
				/>
			</div>
		</div>
	);
};

const PillIconWrench: React.FC<{color?: string}> = ({color = '#3b82f6'}) => {
	return (
		<div
			style={{
				width: 22,
				height: 22,
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					position: 'absolute',
					width: 4,
					height: 18,
					backgroundColor: color,
					borderRadius: 3,
					transform: 'rotate(42deg)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					width: 10,
					height: 10,
					border: `3px solid ${color}`,
					borderRadius: 999,
					borderRightColor: 'transparent',
					borderBottomColor: 'transparent',
					transform: 'translate(3px,-5px) rotate(42deg)',
					boxSizing: 'border-box',
				}}
			/>
		</div>
	);
};

const PromptPill: React.FC<{label: string; type: 'doc' | 'tool'}> = ({label, type}) => {
	return (
		<div
			style={{
				height: 58,
				padding: '0 24px',
				backgroundColor: '#ffffff',
				borderRadius: 999,
				display: 'flex',
				alignItems: 'center',
				gap: 12,
				boxShadow: '0 0 0 1px rgba(15,23,42,0.03)',
				fontFamily: 'Inter, Arial, sans-serif',
				fontSize: 29,
				color: '#2f3944',
				fontWeight: 500,
				whiteSpace: 'nowrap',
			}}
		>
			{type === 'doc' ? <PillIconDocument /> : <PillIconWrench />}
			<div>{label}</div>
		</div>
	);
};

const PaperclipIcon: React.FC = () => {
	return (
		<div
			style={{
				width: 34,
				height: 34,
				position: 'relative',
				opacity: 0.78,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 12,
					top: 5,
					width: 10,
					height: 20,
					border: '4px solid #7b8794',
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
					borderBottomColor: 'transparent',
					transform: 'rotate(0deg)',
					boxSizing: 'border-box',
				}}
			/>
		</div>
	);
};

const MicIcon: React.FC = () => {
	return (
		<div
			style={{
				width: 34,
				height: 34,
				position: 'relative',
				opacity: 0.78,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 11,
					top: 4,
					width: 12,
					height: 17,
					border: '4px solid #7b8794',
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
					borderBottomWidth: 3,
					boxSizing: 'border-box',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 8,
					top: 18,
					width: 18,
					height: 10,
					borderLeft: '3px solid #7b8794',
					borderRight: '3px solid #7b8794',
					borderBottom: '3px solid #7b8794',
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
					boxSizing: 'border-box',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 15,
					bottom: 2,
					width: 4,
					height: 8,
					backgroundColor: '#7b8794',
					borderRadius: 2,
				}}
			/>
		</div>
	);
};

const BuildAppsIcon: React.FC = () => {
	return (
		<div
			style={{
				width: 24,
				height: 24,
				position: 'relative',
				marginLeft: 2,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 1,
					top: 3,
					width: 16,
					height: 16,
					border: '2px solid #7b8794',
					borderRadius: 4,
					boxSizing: 'border-box',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 5,
					top: 7,
					width: 3,
					height: 3,
					backgroundColor: '#7b8794',
					borderRadius: 2,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 10,
					top: 7,
					width: 3,
					height: 3,
					backgroundColor: '#7b8794',
					borderRadius: 2,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					right: 1,
					top: 10,
					width: 10,
					height: 10,
				}}
			>
				<div
					style={{
						position: 'absolute',
						left: 4,
						top: 0,
						width: 2,
						height: 10,
						backgroundColor: '#7b8794',
						borderRadius: 2,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						left: 0,
						top: 4,
						width: 10,
						height: 2,
						backgroundColor: '#7b8794',
						borderRadius: 2,
					}}
				/>
			</div>
		</div>
	);
};

const UpArrowButton: React.FC = () => {
	return (
		<div
			style={{
				width: 62,
				height: 62,
				borderRadius: '50%',
				backgroundColor: '#88a9ff',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.42)',
			}}
		>
			<div
				style={{
					position: 'relative',
					width: 28,
					height: 30,
				}}
			>
				<div
					style={{
						position: 'absolute',
						left: 12,
						top: 7,
						width: 4,
						height: 22,
						backgroundColor: '#ffffff',
						borderRadius: 3,
					}}
				/>
				<div
					style={{
						position: 'absolute',
						left: 4,
						top: 2,
						width: 16,
						height: 16,
						borderTop: '4px solid #ffffff',
						borderLeft: '4px solid #ffffff',
						transform: 'rotate(45deg)',
						boxSizing: 'border-box',
					}}
				/>
			</div>
		</div>
	);
};

const LandingScreenshotSeed: React.FC<{frame: number; reveal: number}> = ({frame, reveal}) => {
	const headlineY = interpolate(reveal, [0, 1], [10, 0]);
	const surfaceY = interpolate(reveal, [0, 1], [18, 0]);
	const chipsY = interpolate(reveal, [0, 1], [26, 0]) + Math.sin(frame / 28) * 1.2;
	const microX = Math.sin(frame / 36) * 1.1;

	return (
		<div style={{position: 'absolute', inset: 0, backgroundColor: 'transparent'}}>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'repeating-radial-gradient(circle at 50% 55%, rgba(255,214,72,0.08) 0px, rgba(255,214,72,0.08) 3px, rgba(255,255,255,0) 32px, rgba(255,255,255,0) 56px)',
					opacity: 0.24,
					transform: 'scaleY(1.2)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					top: 284 + headlineY,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontFamily: 'Inter, Arial, sans-serif',
					fontSize: 72,
					fontWeight: 700,
					lineHeight: 1,
					letterSpacing: '-0.05em',
					color: '#111a24',
				}}
			>
				How can I help?
			</div>

			<div
				style={{
					position: 'absolute',
					left: 346 + microX,
					top: 390 + surfaceY,
					width: 1228,
					height: 206,
					backgroundColor: '#ffffff',
					borderRadius: 30,
					boxShadow:
						'0 20px 28px rgba(236, 198, 112, 0.22), 0 6px 18px rgba(18, 30, 44, 0.12), inset 0 0 0 2px rgba(193, 201, 214, 0.55)',
					display: 'flex',
					flexDirection: 'column',
					padding: '32px 28px 22px 28px',
					boxSizing: 'border-box',
				}}
			>
				<div
					style={{
						fontFamily: 'Inter, Arial, sans-serif',
						fontSize: 31,
						color: '#6f7d92',
						fontWeight: 400,
						letterSpacing: '-0.02em',
					}}
				>
					Build an agent or perform a task
				</div>

				<div
					style={{
						marginTop: 40,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div
						style={{
							height: 60,
							padding: '0 26px 0 18px',
							borderRadius: 999,
							border: '2px solid #dde3eb',
							display: 'flex',
							alignItems: 'center',
							gap: 10,
							color: '#1d2733',
							fontFamily: 'Inter, Arial, sans-serif',
							fontSize: 28,
							fontWeight: 500,
							backgroundColor: '#ffffff',
						}}
					>
						<BuildAppsIcon />
						<div>Build apps</div>
					</div>

					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: 22,
						}}
					>
						<PaperclipIcon />
						<MicIcon />
						<UpArrowButton />
					</div>
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					top: 638 + chipsY,
					left: 0,
					right: 0,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 16,
				}}
			>
				<div
					style={{
						display: 'flex',
						gap: 12,
						alignItems: 'center',
					}}
				>
					<PromptPill label={'Personal website'} type={'doc'} />
					<PromptPill label={'Customer support email'} type={'tool'} />
					<PromptPill label={'Outbound sales calls'} type={'tool'} />
					<PromptPill label={'Lead gen'} type={'doc'} />
				</div>

				<div
					style={{
						display: 'flex',
						gap: 12,
						alignItems: 'center',
						marginLeft: 42,
					}}
				>
					<PromptPill label={'Meeting recorder'} type={'tool'} />
					<PromptPill label={'LinkedIn outreach'} type={'doc'} />
					<PromptPill label={'Support chatbot'} type={'tool'} />
				</div>
			</div>
		</div>
	);
};

export const Scene02TranspiledReferenceShowcase: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, width, height} = useVideoConfig();
	const artboardScale = Math.min(width / 1920, height / 1080);
	const reveal = spring({
		fps,
		frame: Math.max(0, frame - 2),
		config: {
			damping: 18,
			stiffness: 120,
			mass: 0.85,
		},
	});

	const opacity = interpolate(frame, [0, 8, 76, 83], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const blur = interpolate(frame, [0, 12, 76, 83], [18, 0, 0, 14], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const introScale = interpolate(reveal, [0, 1], [0.965, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const exitScale = interpolate(frame, [76, 83], [1, 1.02], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const heroY = interpolate(reveal, [0, 1], [26, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const lightDrift = Math.sin(frame / 40) * 10;
	const spotlightOpacity = interpolate(frame, [0, 14], [0.35, 0.82], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background:
					'radial-gradient(circle at 50% 44%, rgba(255,239,171,0.92) 0%, rgba(255,239,171,0.46) 18%, rgba(252,246,236,0.2) 45%, rgba(249,245,238,0.02) 66%), linear-gradient(180deg, #f7f2ea 0%, #fbf7f1 52%, #f7f3ec 100%)',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'repeating-linear-gradient(100deg, rgba(255,213,88,0.05) 0px, rgba(255,213,88,0.05) 22px, rgba(255,255,255,0) 22px, rgba(255,255,255,0) 70px)',
					opacity: 0.18,
					transform: 'scale(1.08)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					width: 1180,
					height: 520,
					borderRadius: '50%',
					background:
						'radial-gradient(circle, rgba(255,232,141,0.7) 0%, rgba(255,232,141,0.34) 34%, rgba(255,241,206,0.08) 62%, rgba(255,255,255,0) 78%)',
					filter: 'blur(8px)',
					opacity: spotlightOpacity,
					transform: `translate(-50%, -50%) translateY(${40 + lightDrift}px) scale(${interpolate(reveal, [0, 1], [0.92, 1.02])})`,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					width: 1440,
					height: 760,
					borderRadius: '50%',
					background:
						'radial-gradient(circle, rgba(255,247,214,0.52) 0%, rgba(255,247,214,0.18) 48%, rgba(255,255,255,0) 76%)',
					filter: 'blur(8px)',
					opacity: 0.7,
					transform: `translate(-50%, -50%) translateY(${10 + lightDrift * 0.5}px)`,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					width: 1920,
					height: 1080,
					backgroundColor: 'transparent',
					transform: `translate(-50%, -50%) scale(${artboardScale})`,
					transformOrigin: 'center center',
				}}
			>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundColor: 'transparent',
						opacity,
						filter: `blur(${blur}px)`,
						transform: `translateY(${heroY}px) scale(${introScale * exitScale})`,
						transformOrigin: 'center center',
					}}
				>
					<LandingScreenshotSeed frame={frame} reveal={reveal} />
				</div>
			</div>
		</AbsoluteFill>
	);
};

export default Scene02TranspiledReferenceShowcase;