"use client";
// app/page.tsx
import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

const BlogLink = styled.a`
	color: #fff; /* Set your desired text color */
	text-decoration: none;
	font-weight: bold;
	font-size: 18px;
	transition: color 0.3s ease;
	background: rgba(255, 255, 255, 0.1);
	padding: 20px;
	border-radius: 10px;

	&:hover {
		color: #ffd700; /* Set your desired hover color */
	}
`;

const ComingSoon = () => {
	return (
		<Container>
			{/* Your Name */}
			<Heading>Rakesh Katti</Heading>
			<SecondHeader>Coming Soon</SecondHeader>

			{/* Coming Soon Message */}
			<Message>
				<p>
					This website is under construction and will be available shortly. Stay
					tuned!
					<br />
					Follow on these co-ordinates to know more!
				</p>
			</Message>

			{/* Social Media Icons with Links */}
			<SocialIcons>
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
				<a
					href="https://www.linkedin.com/in/rakeshkatti/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin size={30} style={{ margin: "0 10px" }} />
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
		</Container>
	);
};

export default ComingSoon;
