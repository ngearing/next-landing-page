import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Header() {
	return (
		<header
			className="text-black bg-secondary flex items-center justify-between p-4 px-8 shadow"
			id="top"
		>
			<div className="site-branding">
				<Link href="/">
					<Image
						alt="The lucky shrub Logo"
						src="/logo-green.png"
						width={64}
						height={64}
					/>
				</Link>
			</div>
			<nav className="flex items-center space-x-2 font-bold gap-3">
				<Link className="p-4" href="/#top">
					Home
				</Link>
				<Link className="p-4" href="#services">
					Services
				</Link>
				<Link className="p-4" href="#about">
					About
				</Link>
				<Link className="p-4" href="#contact">
					Contact
				</Link>
			</nav>
			<div className="site-socials flex">
				<SocialIcon
					bgColor="transparent"
					fgColor="black"
					url="www.facebook.com"
				/>
				<SocialIcon
					bgColor="transparent"
					fgColor="black"
					url="www.instagram.com"
				/>
				<SocialIcon
					bgColor="transparent"
					fgColor="black"
					url="www.x.com"
				/>
			</div>
		</header>
	);
}
