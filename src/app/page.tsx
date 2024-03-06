import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="cta p-12 bg-secondary text-black ">
				<h2 className="text-5xl font-bold mb-8">
					Transform Your <span className="block">Outdoor Space</span>
				</h2>

				<p>
					Elevate your property's curb appeal with expert landscaping
					services from The Lucky Scrub.
				</p>

				<a
					href="#"
					className="btn inline-block rounded font-bold my-8 p-2 px-4 bg-secondary2 text-white"
				>
					Learn More
				</a>
			</section>

			<section
				className="services p-8 bg-primary text-black"
				id="services"
			>
				<h2 className="text-center text-4xl mb-8 font-bold">
					Services
				</h2>

				<div className="mb-32 grid align-middle justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
					<a
						href="#"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className="rounded"
							alt="Lawn services image"
							src={"/lawn.jpg"}
							width={280}
							height={140}
						></Image>
						<h3 className="mt-3 text-2xl text-center font-semibold">
							Lawn Mowing and Trimming
						</h3>
					</a>
					<a
						href="#"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className="rounded"
							alt="Tree care image"
							src={"/tree.jpg"}
							width={280}
							height={140}
						></Image>
						<h3 className="mt-3 text-2xl text-center font-semibold">
							Tree Care and Maintenance
						</h3>
					</a>
					<a
						href="#"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className="rounded"
							alt="Hardscape installation image"
							src={"/hard.jpg"}
							width={280}
							height={140}
						></Image>
						<h3 className="mt-3 text-2xl text-center font-semibold">
							Hardscape Design and Installation
						</h3>
					</a>
				</div>
			</section>

			<section
				className="about-us p-12 bg-primary2 text-black "
				id="about"
			>
				<h2 className="text-4xl mb-8 font-bold">About us</h2>
				<p>
					Welcome to The Lucky Shrub, a leading landscaping company
					based in Arizona, Usa. With our expertise and passion for
					creating beautiful outdoor spaces, we strive to transform
					ordinary landscapes into extraordinary works of art.
				</p>
				<p>
					At The Lucky Shrub, we understand the importance of a
					well-maintained and visually appealing landscape. Our team
					of skilled professionals is dedicated to providing top-notch
					landscaping services tailored to meet the unique needs and
					preferences of our clients. Whether it's designing a
					stunning garden, installing irrigation systems, or
					maintaining existing landscapes, we take pride in delivering
					exceptional results that exceed expectations.
				</p>
			</section>

			<section className="contact-us" id="contact">
				<form action=""></form>
				<div className="contact-text">
					<h4>Get in touch</h4>
					<p>Contact us today to discuss your project.</p>
				</div>
			</section>

			<div className="z-10  max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					Get started by editing&nbsp;
					<code className="font-mono font-bold">
						src/app/page.tsx
					</code>
				</p>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className="dark:invert"
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Docs{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find in-depth information about Next.js features and
						API.
					</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Learn{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Learn about Next.js in an interactive course
						with&nbsp;quizzes!
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Templates{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Explore starter templates for Next.js.
					</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Deploy{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p
						className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}
					>
						Instantly deploy your Next.js site to a shareable URL
						with Vercel.
					</p>
				</a>
			</div>
		</main>
	);
}
