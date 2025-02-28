import type { NextConfig } from "next";

const formatTime = () => {
	const now = new Date();
	return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

// Kiểm tra và thiết lập logger chỉ một lần
if (!Reflect.has(globalThis, "__customLoggerSet")) {
	Reflect.set(globalThis, "__customLoggerSet", true);

	const originalConsoleLog = console.log;
	console.log = (...args) => {
		originalConsoleLog(`[${formatTime()}]`, ...args);
	};

	const originalConsoleError = console.error;
	console.error = (...args) => {
		originalConsoleError(`[${formatTime()}]`, ...args);
	};

	const originalConsoleWarn = console.warn;
	console.warn = (...args) => {
		originalConsoleWarn(`[${formatTime()}]`, ...args);
	};
}

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ hostname: "42.113.122.118" }],
	},
};

export default nextConfig;
