import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Rakesh Katti",
	description: "Frontend Engineer",
};

export default function RootLayout({ children }) {
	return (
		<html data-theme="dark" lang="en">
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
