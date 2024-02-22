"use client";
// app/page.tsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Script from "next/script";
import "pico-css";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
`;

const Heading = styled.h1`
	margin-bottom: 40px;
`;

const SecondHeader = styled.h1`
	margin-bottom: 40px;
`;

const Message = styled.div`
	margin-bottom: 40px;
`;

const SocialIcons = styled.div`
	margin-bottom: 40px;
`;

const BlogLink = styled.button`
	text-decoration: none;
	font-weight: bold;
	font-size: 18px;
	transition: color 0.3s ease;
	padding: 20px;
	border-radius: 10px;

	&:hover {
		color: #ffd700; /* Set your desired hover color */
	}
`;

const FYIText = styled.p`
	position: fixed; /* Fix the text at the bottom */
	bottom: 10px; /* Adjust the distance from the bottom */
	left: 50%; /* Center horizontally */
	transform: translateX(-50%); /* Center horizontally */
	font-size: 14px;
	color: #888; /* Set your desired text color */
`;

const ThemeSwitcher = styled.div`
	position: fixed;
	top: 50px;
	right: 50px;
	width: 175px;
	font-size: 15px;
	display: flex;
	justify-content: space-between;
`;

const ComingSoon = () => {
	const [dark, setDark] = useState(true);
	useEffect(() => {
		const html = document.querySelector("html");
		html.dataset.theme = dark ? "dark" : "light";
	}, [dark]);

	return (
		<>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-X50BBT8YX6"
			></Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-X50BBT8YX6');
				`}
			</Script>
			<Container>
				<ThemeSwitcher>
					Use dark mode <br />
					<input
						onChange={(e) => {
							setDark(!dark);
						}}
						type="checkbox"
						role="switch"
						checked={dark}
						id="toggle"
					/>
				</ThemeSwitcher>
				{/* Your Name */}
				<Heading>Rakesh Katti</Heading>
				<SecondHeader>Frontend Engineer</SecondHeader>
				{/* Coming Soon Message */}
				<Message>
					<p>
						This website is under construction and will be available shortly.
						Stay tuned!
						<br />
						Follow on these co-ordinates to know more!
					</p>
				</Message>
				{/* Social Media Icons with Links */}
				<SocialIcons>
					<a
						href="https://www.linkedin.com/in/rakeshkatti/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size={30} style={{ margin: "0 10px" }} />
					</a>
					<a
						href="https://www.instagram.com/rakeshkatti/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram size={30} style={{ margin: "0 10px" }} />
					</a>
					<a
						href="https://twitter.com/rakesh_katti"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaXTwitter size={30} style={{ margin: "0 10px" }} />
					</a>
				</SocialIcons>
				{/* Link to Blog */}
				<p>
					<BlogLink
						href="https://blog.rakeshkatti.in/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Go to my Blog on Hashnode
					</BlogLink>
				</p>
				<FYIText>
					My previous site rakeshkatti.com got hijacked. Thought it&apos;s a
					good time for a redesign.
				</FYIText>
			</Container>
		</>
	);
};

export default ComingSoon;
