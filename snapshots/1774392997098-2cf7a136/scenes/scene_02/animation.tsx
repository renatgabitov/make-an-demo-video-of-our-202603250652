import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

/* TRANSPILED_SHOWCASE_SCENE_2 */
/* COMPONENT_REFERENCE_ID:3e6c3d59-649a-4ff9-b775-1abfa91a51b9 */

const clamp = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const,
};

const CardIcon: React.FC<{color?: string}> = ({color = '#22c55e'}) => {
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

const WrenchIcon: React.FC<{color?: string}> = ({color = '#3b82f6'}) => {
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

const ClipIcon: React.FC = () => (
	<div
		style={{
			width: 28,
			height: 28,
			position: 'relative',
		}}
	>
		<div
			style={{
				position: 'absolute',
				left: 10,
				top: 3,
				width: 10,
				height: 20,
				border: '3px solid #8f98a3',
				borderTopLeftRadius: 10,
				borderTopRightRadius: 10,
				borderBottomLeftRadius: 10,
				borderBottomRightRadius: 10,
				borderLeftColor: '#8f98a3',
				borderTopColor: '#8f98a3',
				borderBottomColor: '#8f98a3',
				borderRightColor: '#8f98a3',
				boxSizing: 'border-box',
				transform: 'rotate(0deg)',
				clipPath: 'inset(0 0 0 2px)',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 13,
				top: 6,
				width: 4,
				height: 14,
				border: '3px solid #ffffff',
				borderRadius: 8,
				boxSizing: 'border-box',
			}}
		/>
	</div>
);

const MicIcon: React.FC = () => (
	<div
		style={{
			width: 28,
			height: 28,
			position: 'relative',
		}}
	>
		<div
			style={{
				position: 'absolute',
				left: 9,
				top: 3,
				width: 10,
				height: 14,
				border: '3px solid #8f98a3',
				borderRadius: 8,
				boxSizing: 'border-box',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 13,
				top: 17,
				width: 2,
				height: 6,
				backgroundColor: '#8f98a3',
				borderRadius: 2,
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 8,
				top: 20,
				width: 12,
				height: 2,
				backgroundColor: '#8f98a3',
				borderRadius: 2,
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 6,
				top: 13,
				width: 16,
				height: 10,
				border: '3px solid #8f98a3',
				borderTop: 'none',
				borderBottomLeftRadius: 10,
				borderBottomRightRadius: 10,
				boxSizing: 'border-box',
			}}
		/>
	</div>
);

const ArrowUpIcon: React.FC = () => (
	<div
		style={{
			width: 58,
			height: 58,
			borderRadius: 999,
			backgroundColor: '#87a9ff',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
		}}
	>
		<div
			style={{
				position: 'relative',
				width: 26,
				height: 30,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 11,
					top: 7,
					width: 4,
					height: 22,
					backgroundColor: '#ffffff',
					borderRadius: 4,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 4,
					top: 3,
					width: 18,
					height: 18,
					borderTop: '4px solid #ffffff',
					borderLeft: '4px solid #ffffff',
					transform: 'rotate(45deg)',
					boxSizing: 'border-box',
					borderTopLeftRadius: 3,
				}}
			/>
		</div>
	</div>
);

const Chip: React.FC<{
	label: string;
	type: 'green' | 'blue';
}> = ({label, type}) => (
	<div
		style={{
			height: 58,
			paddingLeft: 22,
			paddingRight: 24,
			borderRadius: 999,
			backgroundColor: '#ffffff',
			display: 'flex',
			alignItems: 'center',
			gap: 12,
			boxShadow: '0 0 0 1px rgba(15,23,42,0.03)',
		}}
	>
		{type === 'green' ? <CardIcon /> : <WrenchIcon />}
		<div
			style={{
				fontFamily: 'Inter, Arial, sans-serif',
				fontSize: 27,
				lineHeight: 1,
				color: '#2f3944',
				fontWeight: 400,
				letterSpacing: '-0.02em',
				whiteSpace: 'nowrap',
			}}
		>
			{label}
		</div>
	</div>
);

const BuildAppsPill: React.FC = () => (
	<div
		style={{
			height: 60,
			paddingLeft: 24,
			paddingRight: 28,
			borderRadius: 999,
			border: '2px solid #e1e5eb',
			display: 'flex',
			alignItems: 'center',
			gap: 12,
			backgroundColor: '#ffffff',
		}}
	>
		<div
			style={{
				width: 26,
				height: 26,
				position: 'relative',
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 1,
					top: 3,
					width: 19,
					height: 14,
					border: '2px solid #7d8793',
					borderRadius: 4,
					boxSizing: 'border-box',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 6,
					top: 8,
					width: 4,
					height: 2,
					backgroundColor: '#7d8793',
					borderRadius: 2,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 6,
					top: 12,
					width: 7,
					height: 2,
					backgroundColor: '#7d8793',
					borderRadius: 2,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					right: 0,
					top: 8,
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
						backgroundColor: '#7d8793',
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
						backgroundColor: '#7d8793',
						borderRadius: 2,
					}}
				/>
			</div>
		</div>
		<div
			style={{
				fontFamily: 'Inter, Arial, sans-serif',
				fontSize: 28,
				fontWeight: 500,
				color: '#222a35',
				letterSpacing: '-0.03em',
			}}
		>
			Build apps
		</div>
	</div>
);

const ReferenceShowcase: React.FC<{frame: number}> = ({frame}) => {
	const enter = interpolate(frame, [0, 18], [0, 1], {
		...clamp,
		easing: Easing.out(Easing.cubic),
	});
	const exit = interpolate(frame, [78, 89], [0, 1], {
		...clamp,
		easing: Easing.in(Easing.cubic),
	});
	const sceneOpacity = enter * (1 - exit);
	const sceneBlur = interpolate(frame, [0, 18, 78, 89], [18, 0, 0, 10], clamp);
	const sceneScale = interpolate(frame, [0, 18, 74, 89], [0.95, 1, 1.015, 1.045], clamp);
	const orbitX = Math.cos(frame / 32) * -2.2;
	const orbitY = Math.sin(frame / 28) * 2.8;
	const driftX = Math.sin(frame / 24) * 18;
	const driftY = Math.cos(frame / 34) * 10;
	const chipDrift = Math.sin(frame / 26) * 8;
	const titleRise = interpolate(frame, [0, 18], [22, 0], clamp);
	const titleOpacity = interpolate(frame, [0, 14, 80, 89], [0, 1, 1, 0], clamp);

	return (
		<div
			style={{
				position: 'absolute',
				inset: 0,
				opacity: sceneOpacity,
				filter: `blur(${sceneBlur}px)`,
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					transform: `translate3d(${driftX}px, ${driftY}px, 0) perspective(2200px) rotateX(${orbitX}deg) rotateY(${orbitY}deg) scale(${sceneScale})`,
					transformStyle: 'preserve-3d',
				}}
			>
				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: 104,
						transform: `translateX(-50%) translateY(${titleRise}px) translateZ(180px)`,
						opacity: titleOpacity,
						fontFamily: 'Inter, Arial, sans-serif',
						fontSize: 74,
						lineHeight: 1,
						fontWeight: 800,
						letterSpacing: '-0.055em',
						color: '#15202b',
						textShadow: '0 10px 30px rgba(255,255,255,0.32)',
						whiteSpace: 'nowrap',
					}}
				>
					Introducing The AI Workflow Builder
				</div>

				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: 552,
						width: 1160,
						height: 120,
						borderRadius: 999,
						background: 'rgba(76,56,0,0.16)',
						filter: 'blur(8px)',
						transform: 'translateX(-50%) scaleY(0.72)',
						opacity: 0.42,
					}}
				/>

				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: 708,
						width: 980,
						height: 90,
						borderRadius: 999,
						background: 'rgba(76,56,0,0.10)',
						filter: 'blur(8px)',
						transform: 'translateX(-50%) scaleY(0.68)',
						opacity: 0.34,
					}}
				/>

				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: 352,
						width: 860,
						height: 220,
						borderRadius: '50%',
						background: 'radial-gradient(circle, rgba(255,239,182,0.72) 0%, rgba(255,239,182,0.26) 46%, rgba(255,239,182,0) 74%)',
						filter: 'blur(8px)',
						transform: 'translateX(-50%)',
						opacity: 0.95,
					}}
				/>

				<div
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							marginTop: 289,
							fontSize: 72,
							fontWeight: 700,
							color: '#15202b',
							letterSpacing: '-0.05em',
							lineHeight: 1,
							fontFamily: 'Inter, Arial, sans-serif',
							transform: 'translateZ(120px)',
						}}
					>
						How can I help?
					</div>

					<div
						style={{
							marginTop: 76,
							width: 1228,
							height: 252,
							backgroundColor: '#ffffff',
							borderRadius: 34,
							boxShadow: '0 14px 28px rgba(157,166,179,0.18), 0 3px 8px rgba(157,166,179,0.12), inset 0 0 0 2px rgba(215,221,228,0.8)',
							position: 'relative',
							transform: 'translateZ(160px)',
						}}
					>
						<div
							style={{
								position: 'absolute',
								left: 29,
								top: 35,
								fontSize: 32,
								fontWeight: 400,
								color: '#6e7b8f',
								letterSpacing: '-0.03em',
								fontFamily: 'Inter, Arial, sans-serif',
							}}
						>
							Build an agent or perform a task
						</div>

						<div
							style={{
								position: 'absolute',
								left: 28,
								top: 142,
							}}
						>
							<BuildAppsPill />
						</div>

						<div
							style={{
								position: 'absolute',
								right: 145,
								top: 151,
								display: 'flex',
								alignItems: 'center',
								gap: 28,
							}}
						>
							<ClipIcon />
							<MicIcon />
						</div>

						<div
							style={{
								position: 'absolute',
								right: 28,
								top: 141,
							}}
						>
							<ArrowUpIcon />
						</div>
					</div>

					<div
						style={{
							marginTop: 60,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 16,
							transform: `translateZ(95px) translateY(${chipDrift}px)`,
						}}
					>
						<div
							style={{
								display: 'flex',
								gap: 16,
								alignItems: 'center',
							}}
						>
							<Chip label='Personal website' type='green' />
							<Chip label='Customer support email' type='blue' />
							<Chip label='Outbound sales calls' type='blue' />
							<Chip label='Lead gen' type='green' />
						</div>
						<div
							style={{
								display: 'flex',
								gap: 16,
								alignItems: 'center',
							}}
						>
							<Chip label='Meeting recorder' type='blue' />
							<Chip label='LinkedIn outreach' type='green' />
							<Chip label='Support chatbot' type='blue' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Scene02TranspiledWorkflowBuilderShowcase: React.FC = () => {
	const frame = useCurrentFrame();
	const ambientShift = Math.sin(frame / 34) * 26;
	const lightBreath = 0.88 + Math.sin(frame / 22) * 0.06;

	return (
		<AbsoluteFill
			style={{
				background: 'radial-gradient(circle at 50% 44%, rgba(255,244,209,0.96) 0%, rgba(255,243,207,0.74) 22%, rgba(255,247,229,0.42) 44%, rgba(255,250,241,0.18) 66%, rgba(255,255,255,0.98) 88%), linear-gradient(180deg, #fbf5ea 0%, #fffdfa 100%)',
				overflow: 'hidden',
				fontFamily: 'Inter, Arial, sans-serif',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: -120,
					background: 'repeating-radial-gradient(circle at 50% 50%, rgba(248,208,87,0.17) 0px, rgba(248,208,87,0.17) 2px, rgba(255,255,255,0) 18px, rgba(255,255,255,0) 44px)',
					opacity: 0.28,
					transform: `translateX(${ambientShift * -0.18}px) scaleY(0.92)`,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					left: -260,
					top: -120,
					width: 940,
					height: 940,
					borderRadius: '50%',
					background: 'radial-gradient(circle, rgba(255,220,120,0.34) 0%, rgba(255,220,120,0.12) 42%, rgba(255,220,120,0) 72%)',
					filter: 'blur(8px)',
					transform: `translateX(${ambientShift * 0.55}px) scale(${lightBreath})`,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					right: -280,
					bottom: -180,
					width: 980,
					height: 980,
					borderRadius: '50%',
					background: 'radial-gradient(circle, rgba(255,229,145,0.30) 0%, rgba(255,229,145,0.10) 46%, rgba(255,229,145,0) 72%)',
					filter: 'blur(8px)',
					transform: `translateX(${ambientShift * -0.42}px) scale(${lightBreath + 0.03})`,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: -100,
					background: 'linear-gradient(115deg, rgba(255,255,255,0) 18%, rgba(255,248,221,0.46) 44%, rgba(255,255,255,0) 72%)',
					opacity: 0.62,
					filter: 'blur(8px)',
					transform: `translateX(${ambientShift}px) rotate(-10deg) scale(1.06)`,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					background: 'linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0) 18%, rgba(255,255,255,0) 82%, rgba(255,255,255,0.24) 100%)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					background: 'radial-gradient(circle at 50% 52%, rgba(0,0,0,0) 58%, rgba(28,22,10,0.07) 100%)',
				}}
			/>

			<ReferenceShowcase frame={frame} />
		</AbsoluteFill>
	);
};

export default Scene02TranspiledWorkflowBuilderShowcase;