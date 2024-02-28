import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Header() {
	return (
		<header
			style={{ backgroundColor: "rgb(206, 214, 171)" }}
			className="text-black flex items-center justify-between p-4 px-8"
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
				<SocialIcon bgColor="transparent" fgColor="black" url="www.x.com" />
			</div>
		</header>
	);
}
