export default function Header() {
	return (
		<header className="bg-white text-black flex items-center justify-between p-24">
			<div className="site-branding">Logo</div>
			<div className="site-socials flex gap-2">
				<a className="social-link" href="#">
					Facebook
				</a>
				<a className="social-link" href="#">
					Twitter
				</a>
				<a className="social-link" href="#">
					Instagram
				</a>
			</div>
		</header>
	);
}
