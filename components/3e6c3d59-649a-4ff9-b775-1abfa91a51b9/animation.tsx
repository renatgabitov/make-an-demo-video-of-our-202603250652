import React from 'react';
import {AbsoluteFill} from 'remotion';

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

export const ScreenshotRecreation: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background:
					'radial-gradient(circle at 50% 50%, rgba(255,244,209,0.9) 0%, rgba(255,243,207,0.72) 20%, rgba(255,247,229,0.46) 42%, rgba(255,250,241,0.18) 64%, rgba(255,255,255,0.95) 88%), linear-gradient(180deg, #fbf5ea 0%, #fffdfa 100%)',
				overflow: 'hidden',
				fontFamily: 'Inter, Arial, sans-serif',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'repeating-radial-gradient(circle at 50% 50%, rgba(248,208,87,0.17) 0px, rgba(248,208,87,0.17) 2px, rgba(255,255,255,0) 18px, rgba(255,255,255,0) 44px)',
					opacity: 0.35,
					transform: 'scaleY(0.92)',
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
						boxShadow:
							'0 14px 28px rgba(157,166,179,0.18), 0 3px 8px rgba(157,166,179,0.12), inset 0 0 0 2px rgba(215,221,228,0.8)',
						position: 'relative',
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
					}}
				>
					<div
						style={{
							display: 'flex',
							gap: 16,
							alignItems: 'center',
						}}
					>
						<Chip label="Personal website" type="green" />
						<Chip label="Customer support email" type="blue" />
						<Chip label="Outbound sales calls" type="blue" />
						<Chip label="Lead gen" type="green" />
					</div>
					<div
						style={{
							display: 'flex',
							gap: 16,
							alignItems: 'center',
						}}
					>
						<Chip label="Meeting recorder" type="blue" />
						<Chip label="LinkedIn outreach" type="green" />
						<Chip label="Support chatbot" type="blue" />
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

export default ScreenshotRecreation;