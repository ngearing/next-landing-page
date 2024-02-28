import Image from "next/image";

export default function Home() {
	return (
		<main className="group flex flex-col h-screen overflow-y-auto w-full scroll-smooth no-scrollbar">
			<div className="relative z-10">
				<header
					id="website-header"
					className="relative z-20 pointer-events-none transition-colors shadow"
					style="background-color: rgb(206, 214, 171); color: rgb(0, 0, 0)"
				>
					<div
						className="grid items-center lg:gap-6 xl:gap-10 mx-auto px-5 md:px-6 pt-6 pb-6 lg:px-12"
						style="grid-template-columns: auto auto auto"
					>
						<div className="col-span-2 lg:col-span-1 flex items-center">
							<div className="flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left">
								<div className="flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12">
									<div
										className="absolute w-full h-full"
										style="
									background-color: rgb(0, 0, 0);
									mask-image: url('https://static.thenounproject.com/png/3683216-200.png');
									mask-position: center center;
									mask-repeat: no-repeat;
									mask-size: contain;
								"
									></div>
								</div>
								<h2 className="heading-small lg:heading-medium">
									The lucky scrub
								</h2>
							</div>
						</div>
						<div className="hidden lg:flex item-center justify-end gap-10 lg:col-span-2">
							<ul className="lg:flex items-center gap-x-4 gap-y-2 flex-wrap justify-end hidden">
								<li>
									<div className="flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="icon w-8 h-8"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M10.4375 21.8784C5.65941 21.1274 2 16.9877 2 12 2 6.48086 6.48086 2 12 2c5.5191 0 10 4.48086 10 10 0 4.9877-3.6594 9.1274-8.4375 9.8784v-6.9878h2.3301L16.3359 12h-2.7734v-1.8758c0-.79084.3874-1.5617 1.6296-1.5617h1.261V6.10156s-1.1443-.19531-2.2385-.19531c-2.2842 0-3.7771 1.38438-3.7771 3.89063V12H7.89844v2.8906h2.53906v6.9878Z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
								</li>
								<li>
									<div className="flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="icon w-8 h-8"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M12 2c5.5191 0 10 4.48086 10 10 0 5.5191-4.4809 10-10 10-5.51914 0-10-4.4809-10-10C2 6.48086 6.48086 2 12 2Zm0 3.75c-1.6974 0-1.9102.00719-2.57688.03762-.66523.03035-1.11957.13601-1.51714.29051-.41098.15972-.75953.37343-1.107.72089-.34746.34746-.56117.69602-.72089 1.107-.1545.39753-.26012.85187-.29051 1.5171C5.75719 10.0898 5.75 10.3026 5.75 12s.00719 1.9102.03758 2.5769c.03039.6652.13601 1.1195.29051 1.5171.15972.411.37343.7595.72089 1.107.34747.3475.69602.5612 1.107.7209.39757.1545.85191.2601 1.51714.2905.66668.0304.87948.0376 2.57688.0376s1.9102-.0072 2.5769-.0376c.6652-.0304 1.1195-.136 1.5171-.2905.411-.1597.7595-.3734 1.107-.7209.3475-.3475.5612-.696.7209-1.107.1545-.3976.2601-.8519.2905-1.5171.0304-.6667.0376-.8795.0376-2.5769 0-1.6974-.0072-1.9102-.0376-2.57688-.0304-.66523-.136-1.11957-.2905-1.5171-.1597-.41098-.3734-.75954-.7209-1.107s-.696-.56117-1.107-.72089c-.3976-.1545-.8519-.26016-1.5171-.29051C13.9102 5.75719 13.6974 5.75 12 5.75Zm0 1.12613c1.6688 0 1.8665.00637 2.5255.03645.6094.02781.9403.12961 1.1606.21519.2917.11336.4999.24883.7186.46754.2187.21867.3542.42692.4675.71864.0856.22023.1874.55113.2152 1.1605.0301.65905.0365.85675.0365 2.52555s-.0064 1.8665-.0365 2.5255c-.0278.6094-.1296.9403-.2152 1.1606-.1133.2917-.2488.4999-.4675.7186-.2187.2187-.4269.3542-.7186.4675-.2203.0856-.5512.1874-1.1606.2152-.6589.0301-.8566.0365-2.5255.0365s-1.8666-.0064-2.52555-.0365c-.60937-.0278-.94027-.1296-1.1605-.2152-.29176-.1133-.49997-.2488-.71868-.4675-.21871-.2187-.35414-.4269-.4675-.7186-.08558-.2203-.18742-.5512-.21523-1.1606-.03008-.659-.03641-.8567-.03641-2.5255s.00633-1.8665.03641-2.52555c.02781-.60937.12965-.94027.21523-1.1605.11336-.29172.24879-.49997.4675-.71864.21871-.21871.42692-.35418.71868-.46754.22023-.08558.55113-.18738 1.1605-.21519.65905-.03008.85675-.03645 2.52555-.03645Zm0 1.91442c-1.7725 0-3.20945 1.43695-3.20945 3.20945S10.2275 15.2095 12 15.2095s3.2095-1.437 3.2095-3.2095c0-1.7725-1.437-3.20945-3.2095-3.20945Zm0 5.29275c-1.1506 0-2.08332-.9327-2.08332-2.0833 0-1.1506.93272-2.08332 2.08332-2.08332S14.0833 10.8494 14.0833 12 13.1506 14.0833 12 14.0833Zm4.0863-5.41955c0 .41422-.3358.74996-.7501.74996-.4141 0-.7499-.33574-.7499-.74996s.3358-.75.7499-.75c.4143 0 .7501.33578.7501.75Z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
								</li>
								<li>
									<div className="flex justify-center items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="icon w-8 h-8"
											aria-hidden="true"
										>
											<path d="M13.6756 10.6218 20.2324 3h-1.5537l-5.6933 6.61788L8.43817 3H3.1935l6.8763 10.0074L3.1935 21h1.55384l6.01226-6.9887L15.5618 21h5.2447l-7.1313-10.3782h.0004Zm-2.1282 2.4738-.6967-.9965-5.54349-7.92939h2.38662l4.47367 6.39919.6967.9966 5.8152 8.318h-2.3866l-4.7454-6.7875v-.0004Z"></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="ml-auto lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="icon w-5 h-5 ml-auto mr-0"
							>
								<path
									fill-rule="evenodd"
									d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
									clip-rule="evenodd"
								></path>
							</svg>
						</div>
					</div>
				</header>
			</div>
			<div className="relative">
				<section className="relative" style="z-index: 41">
					<div
						className="flex relative fix-safari-flickering"
						data-text-color="#000000"
						style="min-height: calc(17px); padding-top: 0px; padding-bottom: 0px"
					>
						<div className="flex break-word transition-all duration-300 pointer-events-none w-full items-center">
							<div className="absolute inset-0 pointer-events-none">
								<div
									className="absolute inset-0 z-5 transition-all duration-300"
									style="background-color: rgb(219, 226, 186); opacity: 0.7"
								></div>
								<div
									className="absolute inset-0 z-0 transition-all duration-300"
									style="
								background-image: url('https://images.unsplash.com/photo-1563210199-6ec2cfedd11e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwzfHxnYXJkZW4lMjB0b29sc3xlbnwwfHx8fDE3MDY3NDAwNjB8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080');
								background-position: center center;
								background-size: cover;
							"
								></div>
							</div>
							<div className="relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300 pt-8 lg:pt-32 pb-8 lg:pb-32">
								<div
									className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined"
									style=""
								>
									<div className="flex w-full gap-10 lg:gap-20 transition-all duration-300 flex-col lg:flex-row justify-start">
										<div className="flex-1 flex flex-col w-full max-w-3xl items-start">
											<h2
												className="mb-6 break-word transition-all duration-300 text-left heading-xlarge"
												style="
											color: rgb(0, 0, 0);
											font-family: var(--head-fontFamily);
											font-weight: var(--head-fontWeight);
											font-style: var(--head-fontStyle);
										"
											>
												Transform Your Outdoor Space
											</h2>
											<p
												className="transition-all duration-300 body-large"
												style="
											color: rgb(0, 0, 0);
											scroll-behavior: smooth;
											font-family: var(--body-fontFamily);
											font-weight: var(--body-fontWeight);
											font-style: var(--body-fontStyle);
										"
											>
												Elevate your property's curb appeal with expert
												landscaping services from The Lucky Scrub.
											</p>
											<div className="flex md:inline-flex flex-col md:flex-row md:gap-4 w-full md:w-max">
												<button
													className="website-button xl w-full md:w-max mt-6 lg:mt-8"
													style="
												border-width: 2px;
												border-style: solid;
												box-shadow: none;
												scroll-behavior: smooth;
												font-family: var(--body-fontFamily);
												font-weight: var(--body-fontWeight);
												font-style: var(--body-fontStyle);
												background-color: rgb(73, 89, 0);
												color: rgb(255, 255, 255);
												border-radius: 8px;
												border-color: rgb(73, 89, 0);
											"
												>
													Learn More
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative" style="z-index: 38">
				<section className="relative">
					<div
						className="relative flex flex-none break-word transition-all duration-300 pointer-events-none items-center fix-safari-flickering"
						style="min-height: calc(134px); padding-top: 0px; padding-bottom: 0px"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(254, 251, 235)"
							></div>
						</div>
						<div className="relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300 pt-12 lg:pt-20 pb-12 lg:pb-20">
							<div
								className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined"
								style=""
							>
								<div
									className="rich-text-block website-wysiwyg w-full max-w-5xl transition-all duration-300 text-left ml-0 mr-auto"
									style="color: rgb(0, 0, 0)"
								>
									<h2 style="white-space: pre-line">About us</h2>
									<p>
										Welcome to The Lucky Scrub, a leading landscaping company
										based in Arizona, USA. With our expertise and passion for
										creating beautiful outdoor spaces, we strive to transform
										ordinary landscapes into extraordinary works of art.
									</p>
									<p>
										At The Lucky Scrub, we understand the importance of a
										well-maintained and visually appealing landscape. Our team
										of skilled professionals is dedicated to providing top-notch
										landscaping services tailored to meet the unique needs and
										preferences of our clients. Whether it's designing a
										stunning garden, installing irrigation systems, or
										maintaining existing landscapes, we take pride in delivering
										exceptional results that exceed expectations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative" style="z-index: 37">
				<section className="relative">
					<div
						className="relative flex flex-none break-word transition-all duration-300 pointer-events-none items-center fix-safari-flickering"
						style="min-height: calc(134px); padding-top: 0px; padding-bottom: 0px"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(242, 234, 215)"
							></div>
						</div>
						<div className="relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300 pt-8 lg:pt-12 pb-8 lg:pb-12">
							<div
								className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined"
								style=""
							>
								<h2
									className="heading-large mb-6 transition-all duration-300 text-center"
									style="
								color: rgb(0, 0, 0);
								font-family: var(--head-fontFamily);
								font-weight: var(--head-fontWeight);
								font-style: var(--head-fontStyle);
							"
								>
									Services
								</h2>
							</div>
							<div
								className="flex flex-wrap w-full justify-center"
								style="gap: 24px"
							>
								<div
									className="relative flex flex-col overflow-hidden rounded-sm md:rounded-md lg:rounded-lg"
									style="flex: 0 0 calc(25% - 18px)"
								>
									<div style="" className="opacity-100 translate-y-0 undefined">
										<div className="relative z-10 w-full h-full">
											<div className="flex-shrink-0 relative w-full mx-auto transition-all duration-300 aspect-w-16 aspect-h-9">
												<span
													style="
												box-sizing: border-box;
												display: block;
												overflow: hidden;
												width: initial;
												height: initial;
												background: none;
												opacity: 1;
												border: 0px;
												margin: 0px;
												padding: 0px;
												position: absolute;
												inset: 0px;
											"
												>
													<img
														alt="white concrete building under blue sky during daytime"
														src="https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxNHx8TGFuZHNjYXBpbmd8ZW58MHx8fHwxNzA2NzMzMTU1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
														decoding="async"
														data-nimg="fill"
														className="rounded-sm md:rounded-md lg:rounded-lg"
														style="
													position: absolute;
													inset: 0px;
													box-sizing: border-box;
													padding: 0px;
													border: none;
													margin: auto;
													display: block;
													width: 0px;
													height: 0px;
													min-width: 100%;
													max-width: 100%;
													min-height: 100%;
													max-height: 100%;
													object-fit: cover;
													object-position: center center;
												"
													/>
												</span>
											</div>
											<div className="">
												<div
													className="flex flex-col text-center items-center py-6"
													style="color: rgb(0, 0, 0)"
												>
													<p
														className="heading-medium mb-4 transition-all duration-300"
														style="
													color: currentcolor;
													font-family: var(--head-fontFamily);
													font-weight: var(--head-fontWeight);
													font-style: var(--head-fontStyle);
												"
													>
														Lawn Mowing and Trimming
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="relative flex flex-col overflow-hidden rounded-sm md:rounded-md lg:rounded-lg"
									style="flex: 0 0 calc(25% - 18px)"
								>
									<div style="" className="opacity-100 translate-y-0 undefined">
										<div className="relative z-10 w-full h-full">
											<div className="flex-shrink-0 relative w-full mx-auto transition-all duration-300 aspect-w-16 aspect-h-9">
												<span
													style="
												box-sizing: border-box;
												display: block;
												overflow: hidden;
												width: initial;
												height: initial;
												background: none;
												opacity: 1;
												border: 0px;
												margin: 0px;
												padding: 0px;
												position: absolute;
												inset: 0px;
											"
												>
													<img
														alt="man in green t-shirt and black pants holding black and brown shovel"
														src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxfHxMYW5kc2NhcGluZ3xlbnwwfHx8fDE3MDY3MzMxNTV8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
														decoding="async"
														data-nimg="fill"
														className="rounded-sm md:rounded-md lg:rounded-lg"
														style="
													position: absolute;
													inset: 0px;
													box-sizing: border-box;
													padding: 0px;
													border: none;
													margin: auto;
													display: block;
													width: 0px;
													height: 0px;
													min-width: 100%;
													max-width: 100%;
													min-height: 100%;
													max-height: 100%;
													object-fit: cover;
													object-position: center center;
												"
													/>
												</span>
											</div>
											<div className="">
												<div
													className="flex flex-col text-center items-center py-6"
													style="color: rgb(0, 0, 0)"
												>
													<p
														className="heading-medium mb-4 transition-all duration-300"
														style="
													color: currentcolor;
													font-family: var(--head-fontFamily);
													font-weight: var(--head-fontWeight);
													font-style: var(--head-fontStyle);
												"
													>
														Irrigation Installation and Repair
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="relative flex flex-col overflow-hidden rounded-sm md:rounded-md lg:rounded-lg"
									style="flex: 0 0 calc(25% - 18px)"
								>
									<div style="" className="opacity-100 translate-y-0 undefined">
										<div className="relative z-10 w-full h-full">
											<div className="flex-shrink-0 relative w-full mx-auto transition-all duration-300 aspect-w-16 aspect-h-9">
												<span
													style="
												box-sizing: border-box;
												display: block;
												overflow: hidden;
												width: initial;
												height: initial;
												background: none;
												opacity: 1;
												border: 0px;
												margin: 0px;
												padding: 0px;
												position: absolute;
												inset: 0px;
											"
												>
													<img
														alt="green grass field with trees under blue sky during daytime"
														src="https://images.unsplash.com/photo-1600540520314-cbc1ddc91f3b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxMHx8eWFyZHxlbnwwfHx8fDE3MDY3NDAwMDV8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
														decoding="async"
														data-nimg="fill"
														className="rounded-sm md:rounded-md lg:rounded-lg"
														style="
													position: absolute;
													inset: 0px;
													box-sizing: border-box;
													padding: 0px;
													border: none;
													margin: auto;
													display: block;
													width: 0px;
													height: 0px;
													min-width: 100%;
													max-width: 100%;
													min-height: 100%;
													max-height: 100%;
													object-fit: cover;
													object-position: center center;
												"
													/>
												</span>
											</div>
											<div className="">
												<div
													className="flex flex-col text-center items-center py-6"
													style="color: rgb(0, 0, 0)"
												>
													<p
														className="heading-medium mb-4 transition-all duration-300"
														style="
													color: currentcolor;
													font-family: var(--head-fontFamily);
													font-weight: var(--head-fontWeight);
													font-style: var(--head-fontStyle);
												"
													>
														Tree Care and Maintenance
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="relative flex flex-col overflow-hidden rounded-sm md:rounded-md lg:rounded-lg"
									style="flex: 0 0 calc(25% - 18px)"
								>
									<div style="" className="opacity-100 translate-y-0 undefined">
										<div className="relative z-10 w-full h-full">
											<div className="flex-shrink-0 relative w-full mx-auto transition-all duration-300 aspect-w-16 aspect-h-9">
												<span
													style="
												box-sizing: border-box;
												display: block;
												overflow: hidden;
												width: initial;
												height: initial;
												background: none;
												opacity: 1;
												border: 0px;
												margin: 0px;
												padding: 0px;
												position: absolute;
												inset: 0px;
											"
												>
													<img
														alt="green flower garden viewing sea under white and blue skies"
														src="https://images.unsplash.com/photo-1532302780319-95689ab9d79a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxMXx8TGFuZHNjYXBpbmd8ZW58MHx8fHwxNzA2NzMzMTU1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
														decoding="async"
														data-nimg="fill"
														className="rounded-sm md:rounded-md lg:rounded-lg"
														style="
													position: absolute;
													inset: 0px;
													box-sizing: border-box;
													padding: 0px;
													border: none;
													margin: auto;
													display: block;
													width: 0px;
													height: 0px;
													min-width: 100%;
													max-width: 100%;
													min-height: 100%;
													max-height: 100%;
													object-fit: cover;
													object-position: center center;
												"
													/>
												</span>
											</div>
											<div className="">
												<div
													className="flex flex-col text-center items-center py-6"
													style="color: rgb(0, 0, 0)"
												>
													<p
														className="heading-medium mb-4 transition-all duration-300"
														style="
													color: currentcolor;
													font-family: var(--head-fontFamily);
													font-weight: var(--head-fontWeight);
													font-style: var(--head-fontStyle);
												"
													>
														Hardscape Design and Installation
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="relative flex flex-col overflow-hidden rounded-sm md:rounded-md lg:rounded-lg"
									style="flex: 0 0 calc(25% - 18px)"
								>
									<div style="" className="opacity-100 translate-y-0 undefined">
										<div className="relative z-10 w-full h-full">
											<div className="flex-shrink-0 relative w-full mx-auto transition-all duration-300 aspect-w-16 aspect-h-9">
												<span
													style="
												box-sizing: border-box;
												display: block;
												overflow: hidden;
												width: initial;
												height: initial;
												background: none;
												opacity: 1;
												border: 0px;
												margin: 0px;
												padding: 0px;
												position: absolute;
												inset: 0px;
											"
												>
													<img
														alt="several shovels on grass"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														decoding="async"
														data-nimg="fill"
														className="rounded-sm md:rounded-md lg:rounded-lg"
														style="
													position: absolute;
													inset: 0px;
													box-sizing: border-box;
													padding: 0px;
													border: none;
													margin: auto;
													display: block;
													width: 0px;
													height: 0px;
													min-width: 100%;
													max-width: 100%;
													min-height: 100%;
													max-height: 100%;
													object-fit: cover;
													object-position: center center;
												"
													/>
													<noscript></noscript>
												</span>
											</div>
											<div className="">
												<div
													className="flex flex-col text-center items-center py-6"
													style="color: rgb(0, 0, 0)"
												>
													<p
														className="heading-medium mb-4 transition-all duration-300"
														style="
													color: currentcolor;
													font-family: var(--head-fontFamily);
													font-weight: var(--head-fontWeight);
													font-style: var(--head-fontStyle);
												"
													>
														Seasonal Cleanup Services
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="relative flex flex-col overflow-hidden rounded-sm md:rounded-md lg:rounded-lg"
									style="flex: 0 0 calc(25% - 18px)"
								>
									<div style="" className="opacity-100 translate-y-0 undefined">
										<div className="relative z-10 w-full h-full">
											<div className="flex-shrink-0 relative w-full mx-auto transition-all duration-300 aspect-w-16 aspect-h-9">
												<span
													style="
												box-sizing: border-box;
												display: block;
												overflow: hidden;
												width: initial;
												height: initial;
												background: none;
												opacity: 1;
												border: 0px;
												margin: 0px;
												padding: 0px;
												position: absolute;
												inset: 0px;
											"
												>
													<img
														alt="green and black lawnmower on green grass"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														decoding="async"
														data-nimg="fill"
														className="rounded-sm md:rounded-md lg:rounded-lg"
														style="
													position: absolute;
													inset: 0px;
													box-sizing: border-box;
													padding: 0px;
													border: none;
													margin: auto;
													display: block;
													width: 0px;
													height: 0px;
													min-width: 100%;
													max-width: 100%;
													min-height: 100%;
													max-height: 100%;
													object-fit: cover;
													object-position: center center;
												"
													/>
													<noscript></noscript>
												</span>
											</div>
											<div className="">
												<div
													className="flex flex-col text-center items-center py-6"
													style="color: rgb(0, 0, 0)"
												>
													<p
														className="heading-medium mb-4 transition-all duration-300"
														style="
													color: currentcolor;
													font-family: var(--head-fontFamily);
													font-weight: var(--head-fontWeight);
													font-style: var(--head-fontStyle);
												"
													>
														Sod Installation and Replacement
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative" style="z-index: 36">
				<section className="relative">
					<div
						className="relative flex flex-none transition-all duration-300 pointer-events-none items-center fix-safari-flickering"
						style="
					min-height: calc(0px + 100vh);
					padding-top: 0px;
					padding-bottom: 0px;
				"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(255, 255, 255)"
							></div>
						</div>
						<div className="relative z-10 transition-all duration-300 w-full">
							<div
								className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined"
								style=""
							>
								<div className="flex justify-center items-center overflow-hidden transition-all duration-300">
									<div
										className="relative overflow-hidden w-full transition-all duration-300 w-full"
										style="min-height: calc(0px + 100vh)"
									></div>
								</div>
							</div>
						</div>
						<div
							className="absolute z-10 inset-0 w-full h-full opacity-100 translate-y-0 undefined"
							style=""
						>
							<div className="absolute z-10 inset-0 w-full h-full">
								<span
									style="
								box-sizing: border-box;
								display: block;
								overflow: hidden;
								width: initial;
								height: initial;
								background: none;
								opacity: 1;
								border: 0px;
								margin: 0px;
								padding: 0px;
								position: absolute;
								inset: 0px;
							"
								>
									<img
										alt="a man cutting a tree with a chainsaw"
										src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
										decoding="async"
										data-nimg="fill"
										className="absolute inset-0 w-full h-full"
										style="
									position: absolute;
									inset: 0px;
									box-sizing: border-box;
									padding: 0px;
									border: none;
									margin: auto;
									display: block;
									width: 0px;
									height: 0px;
									min-width: 100%;
									max-width: 100%;
									min-height: 100%;
									max-height: 100%;
									object-fit: cover;
									object-position: center center;
								"
									/>
									<noscript></noscript>
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative" style="z-index: 35">
				<section className="relative">
					<div
						className="relative flex flex-none break-word transition-all duration-300 pointer-events-none items-center fix-safari-flickering"
						style="min-height: calc(134px); padding-top: 0px; padding-bottom: 0px"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(242, 234, 215)"
							></div>
						</div>
						<div className="relative z-10 container mx-auto px-5 md:px-6 testimonials-carousel transition-all duration-300 pt-12 lg:pt-20 pb-12 lg:pb-20">
							<div
								className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined"
								style=""
							>
								<div className="slider-container" style="position: relative">
									<div
										aria-live="off"
										aria-atomic="true"
										tabindex="-1"
										style="
									position: absolute;
									width: 1px;
									height: 1px;
									overflow: hidden;
									padding: 0px;
									margin: -1px;
									clip: rect(0px, 0px, 0px, 0px);
									white-space: nowrap;
									border: 0px;
								"
									>
										Slide 2 of 3
									</div>
									<div
										style="
									align-items: center;
									justify-content: flex-start;
									position: absolute;
									display: flex;
									z-index: 1;
									inset: 0px;
									pointer-events: none;
								"
									>
										<div
											className="slider-control-centerleft"
											style="pointer-events: auto"
										>
											<button
												className=""
												aria-label="previous"
												type="button"
												style="
											border: 0px;
											background: transparent;
											color: white;
											padding: 10px;
											text-transform: uppercase;
											opacity: 1;
											cursor: pointer;
										"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													width="24"
													height="24"
													className="icon w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0 text-gray-900"
													aria-hidden="true"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="1.5"
														d="m15 19-7-7 7-7"
													></path>
												</svg>
											</button>
										</div>
									</div>
									<div
										style="
									align-items: center;
									justify-content: flex-end;
									position: absolute;
									display: flex;
									z-index: 1;
									inset: 0px;
									pointer-events: none;
								"
									>
										<div
											className="slider-control-centerright"
											style="pointer-events: auto"
										>
											<button
												className=""
												aria-label="next"
												type="button"
												style="
											border: 0px;
											background: transparent;
											color: white;
											padding: 10px;
											text-transform: uppercase;
											opacity: 1;
											cursor: pointer;
										"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													width="24"
													height="24"
													className="icon w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0 text-gray-900"
													aria-hidden="true"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="1.5"
														d="m9 5 7 7-7 7"
													></path>
												</svg>
											</button>
										</div>
									</div>
									<div
										style="
									align-items: flex-end;
									justify-content: center;
									position: absolute;
									display: flex;
									z-index: 1;
									inset: 0px;
									pointer-events: none;
								"
									>
										<div
											className="slider-control-bottomcenter"
											style="pointer-events: auto"
										>
											<ul className="flex gap-4 lg:gap-5 w-full justify-start">
												<li>
													<button className="w-2.5 h-2.5 rounded-full transition-all bg-gray-600"></button>
												</li>
												<li>
													<button className="w-2.5 h-2.5 rounded-full transition-all bg-gray-900 ring-4 ring-gray-200"></button>
												</li>
												<li>
													<button className="w-2.5 h-2.5 rounded-full transition-all bg-gray-900"></button>
												</li>
											</ul>
										</div>
									</div>
									<div
										className="slider-frame"
										aria-label="carousel-slider"
										role="region"
										tabindex="-1"
										style="
									overflow: hidden;
									width: 100%;
									position: relative;
									outline: none;
									height: auto;
									transition: height 300ms ease-in-out 0s;
									will-change: height;
									user-select: none;
								"
									>
										<div
											className="slider-list"
											style="
										width: 900%;
										text-align: left;
										user-select: auto;
										transform: translateX(calc(-44.4444% + 97.4998px));
										display: flex;
									"
										>
											<div
												className="slide prev-cloned"
												inert="true"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping services
															exceeded my expectations. The team was
															professional, efficient, and truly brought my
															vision to life. Thank you, Lucky Scrub, for your
															outstanding work!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Alex
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide prev-cloned"
												inert="true"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping expertise and
															attention to detail were exceptional. The team was
															friendly, professional, and provided outstanding
															customer service. I highly recommend The Lucky
															Scrub for all your landscaping needs. Thank you
															for creating my dream outdoor space!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Olivia
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide prev-cloned"
												inert="true"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping expertise and
															dedication to quality were truly impressive. Thank
															you for creating a stunning outdoor space for me
															to enjoy!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Aiden
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
												inert="true"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping services
															exceeded my expectations. The team was
															professional, efficient, and truly brought my
															vision to life. Thank you, Lucky Scrub, for your
															outstanding work!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Alex
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide slide-current slide-visible"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping expertise and
															attention to detail were exceptional. The team was
															friendly, professional, and provided outstanding
															customer service. I highly recommend The Lucky
															Scrub for all your landscaping needs. Thank you
															for creating my dream outdoor space!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Olivia
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
												inert="true"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping expertise and
															dedication to quality were truly impressive. Thank
															you for creating a stunning outdoor space for me
															to enjoy!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Aiden
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide next-cloned"
												inert="true"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping services
															exceeded my expectations. The team was
															professional, efficient, and truly brought my
															vision to life. Thank you, Lucky Scrub, for your
															outstanding work!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Alex
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide next-cloned"
												inert="true"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping expertise and
															attention to detail were exceptional. The team was
															friendly, professional, and provided outstanding
															customer service. I highly recommend The Lucky
															Scrub for all your landscaping needs. Thank you
															for creating my dream outdoor space!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Olivia
														</p>
													</div>
												</div>
											</div>
											<div
												className="slide next-cloned"
												inert="true"
												style="
											width: 11.1111%;
											flex: 1 1 0%;
											height: auto;
											padding: 0px;
											opacity: 1;
										"
											>
												<div className="my-auto h-full flex transition-all duration-300 px-8 md:px-28">
													<div className="max-w-5xl flex flex-col gap-4 justify-center transition-all duration-300 text-left ml-0 mr-auto items-start">
														<h3
															className="heading-medium transition-all duration-300"
															style="
														color: rgb(0, 0, 0);
														font-family: var(--head-fontFamily);
														font-weight: var(--head-fontWeight);
														font-style: var(--head-fontStyle);
													"
														>
															The Lucky Scrub transformed my backyard into a
															beautiful oasis! Their landscaping expertise and
															dedication to quality were truly impressive. Thank
															you for creating a stunning outdoor space for me
															to enjoy!
														</h3>
														<p
															className="body-large transition-all duration-300"
															style="color: rgb(0, 0, 0)"
														>
															- Aiden
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative" style="z-index: 34">
				<section className="relative">
					<div
						className="relative flex flex-none transition-all duration-300 pointer-events-none items-center fix-safari-flickering"
						style="min-height: calc(134px); padding-top: 0px; padding-bottom: 0px"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(242, 234, 215)"
							></div>
						</div>
						<div className="relative z-10 transition-all duration-300 container mx-auto px-5 md:px-6 pt-16 lg:pt-32 pb-16 lg:pb-32">
							<div
								className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined"
								style=""
							>
								<div className="transition-all duration-300"></div>
								<div className="transition-all duration-300">
									<div className="grid grid-cols-1 lg:grid-cols-3 transition-all duration-300 gap-6 md:gap-10">
										<div className="relative overflow-hidden transition-all duration-300 aspect-w-3 aspect-h-2">
											<span
												style="
											box-sizing: border-box;
											display: block;
											overflow: hidden;
											width: initial;
											height: initial;
											background: none;
											opacity: 1;
											border: 0px;
											margin: 0px;
											padding: 0px;
											position: absolute;
											inset: 0px;
										"
											>
												<img
													alt="red and white flower garden"
													src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
													decoding="async"
													data-nimg="fill"
													className="w-full h-full object-center object-cover rounded-sm md:rounded-md lg:rounded-lg"
													style="
												position: absolute;
												inset: 0px;
												box-sizing: border-box;
												padding: 0px;
												border: none;
												margin: auto;
												display: block;
												width: 0px;
												height: 0px;
												min-width: 100%;
												max-width: 100%;
												min-height: 100%;
												max-height: 100%;
												object-fit: cover;
												object-position: center center;
											"
												/>
												<noscript></noscript>
											</span>
										</div>
										<div className="relative overflow-hidden transition-all duration-300 aspect-w-3 aspect-h-2">
											<span
												style="
											box-sizing: border-box;
											display: block;
											overflow: hidden;
											width: initial;
											height: initial;
											background: none;
											opacity: 1;
											border: 0px;
											margin: 0px;
											padding: 0px;
											position: absolute;
											inset: 0px;
										"
											>
												<img
													alt="black pruning shears beside green gloves"
													src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
													decoding="async"
													data-nimg="fill"
													className="w-full h-full object-center object-cover rounded-sm md:rounded-md lg:rounded-lg"
													style="
												position: absolute;
												inset: 0px;
												box-sizing: border-box;
												padding: 0px;
												border: none;
												margin: auto;
												display: block;
												width: 0px;
												height: 0px;
												min-width: 100%;
												max-width: 100%;
												min-height: 100%;
												max-height: 100%;
												object-fit: cover;
												object-position: center center;
											"
												/>
												<noscript></noscript>
											</span>
										</div>
										<div className="relative overflow-hidden transition-all duration-300 aspect-w-3 aspect-h-2">
											<span
												style="
											box-sizing: border-box;
											display: block;
											overflow: hidden;
											width: initial;
											height: initial;
											background: none;
											opacity: 1;
											border: 0px;
											margin: 0px;
											padding: 0px;
											position: absolute;
											inset: 0px;
										"
											>
												<img
													alt="white and gray house near green grass field and trees during daytime"
													src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
													decoding="async"
													data-nimg="fill"
													className="w-full h-full object-center object-cover rounded-sm md:rounded-md lg:rounded-lg"
													style="
												position: absolute;
												inset: 0px;
												box-sizing: border-box;
												padding: 0px;
												border: none;
												margin: auto;
												display: block;
												width: 0px;
												height: 0px;
												min-width: 100%;
												max-width: 100%;
												min-height: 100%;
												max-height: 100%;
												object-fit: cover;
												object-position: center center;
											"
												/>
												<noscript></noscript>
											</span>
										</div>
										<div className="relative overflow-hidden transition-all duration-300 aspect-w-3 aspect-h-2">
											<span
												style="
											box-sizing: border-box;
											display: block;
											overflow: hidden;
											width: initial;
											height: initial;
											background: none;
											opacity: 1;
											border: 0px;
											margin: 0px;
											padding: 0px;
											position: absolute;
											inset: 0px;
										"
											>
												<img
													alt="green leaves beside brown wooden rolling pin"
													src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
													decoding="async"
													data-nimg="fill"
													className="w-full h-full object-center object-cover rounded-sm md:rounded-md lg:rounded-lg"
													style="
												position: absolute;
												inset: 0px;
												box-sizing: border-box;
												padding: 0px;
												border: none;
												margin: auto;
												display: block;
												width: 0px;
												height: 0px;
												min-width: 100%;
												max-width: 100%;
												min-height: 100%;
												max-height: 100%;
												object-fit: cover;
												object-position: center center;
											"
												/>
												<noscript></noscript>
											</span>
										</div>
										<div className="relative overflow-hidden transition-all duration-300 aspect-w-3 aspect-h-2">
											<span
												style="
											box-sizing: border-box;
											display: block;
											overflow: hidden;
											width: initial;
											height: initial;
											background: none;
											opacity: 1;
											border: 0px;
											margin: 0px;
											padding: 0px;
											position: absolute;
											inset: 0px;
										"
											>
												<img
													alt="gray concrete house with red flowers on the side"
													src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
													decoding="async"
													data-nimg="fill"
													className="w-full h-full object-center object-cover rounded-sm md:rounded-md lg:rounded-lg"
													style="
												position: absolute;
												inset: 0px;
												box-sizing: border-box;
												padding: 0px;
												border: none;
												margin: auto;
												display: block;
												width: 0px;
												height: 0px;
												min-width: 100%;
												max-width: 100%;
												min-height: 100%;
												max-height: 100%;
												object-fit: cover;
												object-position: center center;
											"
												/>
												<noscript></noscript>
											</span>
										</div>
										<div className="relative overflow-hidden transition-all duration-300 aspect-w-3 aspect-h-2">
											<span
												style="
											box-sizing: border-box;
											display: block;
											overflow: hidden;
											width: initial;
											height: initial;
											background: none;
											opacity: 1;
											border: 0px;
											margin: 0px;
											padding: 0px;
											position: absolute;
											inset: 0px;
										"
											>
												<img
													alt="white wooden house near green grass field"
													src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
													decoding="async"
													data-nimg="fill"
													className="w-full h-full object-center object-cover rounded-sm md:rounded-md lg:rounded-lg"
													style="
												position: absolute;
												inset: 0px;
												box-sizing: border-box;
												padding: 0px;
												border: none;
												margin: auto;
												display: block;
												width: 0px;
												height: 0px;
												min-width: 100%;
												max-width: 100%;
												min-height: 100%;
												max-height: 100%;
												object-fit: cover;
												object-position: center center;
											"
												/>
												<noscript></noscript>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative" style="z-index: 33">
				<section className="relative">
					<div
						className="relative flex break-word transition-all duration-300 pointer-events-none fix-safari-flickering"
						style="padding-top: 0px; padding-bottom: 0px"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(254, 251, 235)"
							></div>
						</div>
						<div className="relative z-10 container mx-auto px-5 md:px-6 flex-grow transition-all duration-300 pt-12 lg:pt-20 pb-12 lg:pb-20">
							<div className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined">
								<div className="flex flex-col w-full h-full gap-10 lg:gap-20 transition-all duration-300 lg:!flex-row-reverse">
									<div className="w-full md:w-1/2 h-full overflow-hidden transition-all duration-300 rounded-sm md:rounded-md lg:rounded-lg">
										<div
											className="w-full z-5 transition-all duration-300 h-40 md:h-72 lg:h-96 leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
											id="map-205262a6-06f7-4551-9f96-94b2fc3cc2d5"
											tabindex="0"
											style="position: relative"
										>
											<div
												className="leaflet-pane leaflet-map-pane"
												style="transform: translate3d(0px, 0px, 0px)"
											>
												<div className="leaflet-pane leaflet-tile-pane">
													<div className="leaflet-layer" style="z-index: 1">
														<div
															className="leaflet-tile-container leaflet-zoom-animated"
															style="
														z-index: 18;
														transform: translate3d(0px, 0px, 0px) scale(1);
													"
														></div>
													</div>
													<div
														className="leaflet-layer"
														style="z-index: 1; opacity: 1"
													>
														<div
															className="leaflet-tile-container leaflet-zoom-animated"
															style="
														z-index: 18;
														transform: translate3d(0px, 0px, 0px) scale(1);
													"
														>
															<img
																alt=""
																role="presentation"
																src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/16/12483/26130@2x?access_token=pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw"
																className="leaflet-tile leaflet-tile-loaded"
																style="
															width: 512px;
															height: 512px;
															backface-visibility: hidden;
															transform: translate3d(-401px, -391px, 0px);
															opacity: 1;
														"
															/>
															<img
																alt=""
																role="presentation"
																src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/16/12484/26130@2x?access_token=pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw"
																className="leaflet-tile leaflet-tile-loaded"
																style="
															width: 512px;
															height: 512px;
															backface-visibility: hidden;
															transform: translate3d(111px, -391px, 0px);
															opacity: 1;
														"
															/>
															<img
																alt=""
																role="presentation"
																src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/16/12483/26131@2x?access_token=pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw"
																className="leaflet-tile leaflet-tile-loaded"
																style="
															width: 512px;
															height: 512px;
															backface-visibility: hidden;
															transform: translate3d(-401px, 121px, 0px);
															opacity: 1;
														"
															/>
															<img
																alt=""
																role="presentation"
																src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/16/12484/26131@2x?access_token=pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw"
																className="leaflet-tile leaflet-tile-loaded"
																style="
															width: 512px;
															height: 512px;
															backface-visibility: hidden;
															transform: translate3d(111px, 121px, 0px);
															opacity: 1;
														"
															/>
														</div>
													</div>
												</div>
												<div className="leaflet-pane leaflet-shadow-pane"></div>
												<div className="leaflet-pane leaflet-overlay-pane"></div>
												<div className="leaflet-pane leaflet-marker-pane">
													<img
														src="https://api.mapbox.com/v4/marker/pin-m+7A6E52@2x.png?access_token=pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw"
														className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
														alt=""
														tabindex="0"
														style="
													margin-left: -15px;
													margin-top: -35px;
													width: 30px;
													height: 70px;
													transform: translate3d(224px, 192px, 0px);
													z-index: 192;
												"
													/>
												</div>
												<div className="leaflet-pane leaflet-tooltip-pane"></div>
												<div className="leaflet-pane leaflet-popup-pane"></div>
												<div
													className="leaflet-proxy leaflet-zoom-animated"
													style="
												transform: translate3d(1.67772e7px, 1.67772e7px, 0px)
													scale(65536);
											"
												></div>
											</div>
											<div className="leaflet-control-container">
												<div className="leaflet-top leaflet-left">
													<div className="leaflet-control-zoom leaflet-bar leaflet-control">
														<a
															className="leaflet-control-zoom-in"
															href="#"
															title="Zoom in"
															role="button"
															aria-label="Zoom in"
														>
															+
														</a>
														<a
															className="leaflet-control-zoom-out"
															href="#"
															title="Zoom out"
															role="button"
															aria-label="Zoom out"
														>
															−
														</a>
													</div>
												</div>
												<div className="leaflet-top leaflet-right">
													<div
														className="leaflet-control-grid map-tooltip leaflet-control"
														style="display: none"
													>
														<a className="close" href="#" title="close">
															close
														</a>
														<div className="map-tooltip-content"></div>
													</div>
												</div>
												<div className="leaflet-bottom leaflet-left">
													<div className="mapbox-logo leaflet-control mapbox-logo-true"></div>
												</div>
												<div className="leaflet-bottom leaflet-right">
													<div
														className="map-legends wax-legends leaflet-control"
														style="display: none"
													></div>
													<div className="leaflet-control-attribution leaflet-control leaflet-compact-attribution">
														<a
															href="https://www.mapbox.com/about/maps/"
															target="_blank"
															title="Mapbox"
														>
															© Mapbox
														</a>
														<a
															href="https://www.openstreetmap.org/about/"
															target="_blank"
															title="OpenStreetMap"
														>
															© OpenStreetMap
														</a>
														<a
															className="mapbox-improve-map"
															href="https://www.mapbox.com/contribute/#/-111.422/34.220/17"
															target="_blank"
															title="Improve this map"
														>
															Improve this map
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="w-full md:w-1/2 flex flex-col gap-4 lg:mt-10 transition-all duration-300 justify-center">
										<div>
											<p
												className="heading-medium mb-2 transition-all duration-300"
												style="
											color: rgb(0, 0, 0);
											font-family: var(--head-fontFamily);
											font-weight: var(--head-fontWeight);
											font-style: var(--head-fontStyle);
										"
											>
												Location
											</p>
											<pre
												className="body-normal transition-all duration-300"
												style="
											color: rgb(0, 0, 0);
											scroll-behavior: smooth;
											font-family: var(--body-fontFamily);
											font-weight: var(--body-fontWeight);
											font-style: var(--body-fontStyle);
										"
											>
												Arizona, USA
											</pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative" style="z-index: 32">
				<section className="relative">
					<div
						className="relative flex flex-none break-word transition-all duration-300 pointer-events-none items-center fix-safari-flickering"
						style="min-height: calc(134px); padding-top: 0px; padding-bottom: 0px"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(242, 234, 215)"
							></div>
						</div>
						<div className="container mx-auto px-5 md:px-6 relative z-10 transition-all duration-300 pt-16 lg:pt-32 pb-16 lg:pb-32">
							<div
								className="relative z-10 w-full h-full opacity-100 translate-y-0 undefined"
								style=""
							>
								<div className="flex flex-col w-full gap-10 lg:gap-20 transition-all duration-300 lg:!flex-row-reverse">
									<div className="w-full md:w-1/2 lg:mt-10">
										<div
											className="rich-text-block website-wysiwyg"
											style="color: rgb(0, 0, 0)"
										>
											<h3>Get in Touch</h3>
											<p>
												Reach out to us using the contact form below. We look
												forward to hearing from you and assisting you with your
												landscaping needs.
											</p>
										</div>
									</div>
									<div
										className="w-full md:w-1/2 lg:mt-10"
										data-dashlane-rid="ca44e407ace41a30"
										data-form-type="contact"
									>
										<div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full mb-4">
											<div className="">
												<label
													className="mb-1 body-small"
													style="color: rgb(0, 0, 0)"
												>
													Name
												</label>
												<input
													className="input border-none !shadow-none !placeholder-current"
													type="text"
													style="
												border-radius: 8px;
												background-color: rgba(0, 0, 0, 0.07);
												color: rgb(0, 0, 0);
											"
													data-dashlane-rid="d7643136b737b936"
													data-form-type="name"
													data-kwimpalastatus="alive"
													data-kwimpalaid="1709081709136-2"
												/>
												<span
													id="1709081709136-2"
													data-dashlanecreated="true"
													style="
												color: initial;
												font: initial;
												font-palette: initial;
												font-synthesis: initial;
												forced-color-adjust: initial;
												position: absolute;
												text-orientation: initial;
												text-rendering: initial;
												-webkit-font-smoothing: initial;
												-webkit-locale: initial;
												-webkit-text-orientation: initial;
												-webkit-writing-mode: initial;
												writing-mode: initial;
												zoom: initial;
												accent-color: initial;
												place-content: initial;
												place-items: initial;
												place-self: initial;
												alignment-baseline: initial;
												animation-composition: initial;
												animation: initial;
												app-region: initial;
												appearance: initial;
												aspect-ratio: initial;
												backdrop-filter: initial;
												backface-visibility: initial;
												background: url('chrome-extension://fdjamakpfbbddfjaooikfcpapjohcfmg/content/injected/logo-autofill-known.svg')
													center center / contain no-repeat;
												background-blend-mode: initial;
												baseline-shift: initial;
												baseline-source: initial;
												block-size: initial;
												border-block: initial;
												border: none;
												border-radius: initial;
												border-collapse: initial;
												border-end-end-radius: initial;
												border-end-start-radius: initial;
												border-inline: initial;
												border-start-end-radius: initial;
												border-start-start-radius: initial;
												bottom: initial;
												box-shadow: initial;
												box-sizing: initial;
												break-after: initial;
												break-before: initial;
												break-inside: initial;
												buffered-rendering: initial;
												caption-side: initial;
												caret-color: initial;
												clear: initial;
												clip: initial;
												clip-path: initial;
												clip-rule: initial;
												color-interpolation: initial;
												color-interpolation-filters: initial;
												color-rendering: initial;
												color-scheme: initial;
												columns: initial;
												column-fill: initial;
												gap: initial;
												column-rule: initial;
												column-span: initial;
												contain: initial;
												contain-intrinsic-block-size: initial;
												contain-intrinsic-size: initial;
												contain-intrinsic-inline-size: initial;
												container: initial;
												content: initial;
												content-visibility: initial;
												counter-increment: initial;
												counter-reset: initial;
												counter-set: initial;
												cursor: pointer;
												cx: initial;
												cy: initial;
												d: initial;
												display: inline;
												dominant-baseline: initial;
												empty-cells: initial;
												fill: initial;
												fill-opacity: initial;
												fill-rule: initial;
												filter: initial;
												flex: initial;
												flex-flow: initial;
												float: initial;
												flood-color: initial;
												flood-opacity: initial;
												grid: initial;
												grid-area: initial;
												height: 16px;
												hyphenate-character: initial;
												hyphenate-limit-chars: initial;
												hyphens: initial;
												image-orientation: initial;
												image-rendering: initial;
												initial-letter: initial;
												inline-size: initial;
												inset-block: initial;
												inset-inline: initial;
												isolation: initial;
												left: 197px;
												letter-spacing: initial;
												lighting-color: initial;
												line-break: initial;
												list-style: initial;
												margin-block: initial;
												margin: initial;
												margin-inline: initial;
												marker: initial;
												mask: initial;
												mask-type: initial;
												math-depth: initial;
												math-shift: initial;
												math-style: initial;
												max-block-size: initial;
												max-height: initial;
												max-inline-size: initial;
												max-width: initial;
												min-block-size: initial;
												min-height: initial;
												min-inline-size: initial;
												min-width: 16px;
												mix-blend-mode: initial;
												object-fit: initial;
												object-position: initial;
												object-view-box: initial;
												offset: initial;
												opacity: 1;
												order: initial;
												orphans: initial;
												outline: initial;
												outline-offset: initial;
												overflow-anchor: initial;
												overflow-clip-margin: initial;
												overflow-wrap: initial;
												overflow: initial;
												overlay: initial;
												overscroll-behavior-block: initial;
												overscroll-behavior-inline: initial;
												overscroll-behavior: initial;
												padding-block: initial;
												padding: initial;
												padding-inline: initial;
												page: initial;
												page-orientation: initial;
												paint-order: initial;
												perspective: initial;
												perspective-origin: initial;
												pointer-events: initial;
												quotes: initial;
												r: initial;
												resize: initial;
												right: initial;
												rotate: initial;
												ruby-position: initial;
												rx: initial;
												ry: initial;
												scale: initial;
												scroll-behavior: initial;
												scroll-margin-block: initial;
												scroll-margin: initial;
												scroll-margin-inline: initial;
												scroll-padding-block: initial;
												scroll-padding: initial;
												scroll-padding-inline: initial;
												scroll-snap-align: initial;
												scroll-snap-stop: initial;
												scroll-snap-type: initial;
												scroll-timeline: initial;
												scrollbar-color: initial;
												scrollbar-gutter: initial;
												scrollbar-width: initial;
												shape-image-threshold: initial;
												shape-margin: initial;
												shape-outside: initial;
												shape-rendering: initial;
												size: initial;
												speak: initial;
												stop-color: initial;
												stop-opacity: initial;
												stroke: initial;
												stroke-dasharray: initial;
												stroke-dashoffset: initial;
												stroke-linecap: initial;
												stroke-linejoin: initial;
												stroke-miterlimit: initial;
												stroke-opacity: initial;
												stroke-width: initial;
												tab-size: initial;
												table-layout: initial;
												text-align: initial;
												text-align-last: initial;
												text-anchor: initial;
												text-combine-upright: initial;
												text-decoration: initial;
												text-decoration-skip-ink: initial;
												text-emphasis: initial;
												text-emphasis-position: initial;
												text-indent: initial;
												text-overflow: initial;
												text-shadow: initial;
												text-size-adjust: initial;
												text-transform: initial;
												text-underline-offset: initial;
												text-underline-position: initial;
												white-space: initial;
												timeline-scope: initial;
												top: 77px;
												touch-action: initial;
												transform: initial;
												transform-box: initial;
												transform-origin: initial;
												transform-style: initial;
												transition: initial;
												translate: initial;
												user-select: initial;
												vector-effect: initial;
												vertical-align: initial;
												view-timeline: initial;
												view-transition-name: initial;
												visibility: visible;
												border-spacing: initial;
												-webkit-box-align: initial;
												-webkit-box-decoration-break: initial;
												-webkit-box-direction: initial;
												-webkit-box-flex: initial;
												-webkit-box-ordinal-group: initial;
												-webkit-box-orient: initial;
												-webkit-box-pack: initial;
												-webkit-box-reflect: initial;
												-webkit-line-break: initial;
												-webkit-line-clamp: initial;
												-webkit-mask-box-image: initial;
												-webkit-print-color-adjust: initial;
												-webkit-rtl-ordering: initial;
												-webkit-ruby-position: initial;
												-webkit-tap-highlight-color: initial;
												-webkit-text-combine: initial;
												-webkit-text-decorations-in-effect: initial;
												-webkit-text-fill-color: initial;
												-webkit-text-security: initial;
												-webkit-text-stroke: initial;
												-webkit-user-drag: initial;
												widows: initial;
												width: 16px;
												will-change: initial;
												word-break: initial;
												word-spacing: initial;
												x: initial;
												y: initial;
												z-index: auto;
											"
												></span>
											</div>
											<div className="">
												<label
													className="mb-1 body-small"
													style="color: rgb(0, 0, 0)"
												>
													Email
												</label>
												<input
													className="input border-none !shadow-none !placeholder-current"
													type="text"
													style="
												border-radius: 8px;
												background-color: rgba(0, 0, 0, 0.07);
												color: rgb(0, 0, 0);
											"
													data-dashlane-rid="70c9f054cee25c32"
													data-form-type="email"
													data-kwimpalastatus="alive"
													data-kwimpalaid="1709081709136-3"
												/>
												<span
													id="1709081709136-3"
													data-dashlanecreated="true"
													style="
												color: initial;
												font: initial;
												font-palette: initial;
												font-synthesis: initial;
												forced-color-adjust: initial;
												position: absolute;
												text-orientation: initial;
												text-rendering: initial;
												-webkit-font-smoothing: initial;
												-webkit-locale: initial;
												-webkit-text-orientation: initial;
												-webkit-writing-mode: initial;
												writing-mode: initial;
												zoom: initial;
												accent-color: initial;
												place-content: initial;
												place-items: initial;
												place-self: initial;
												alignment-baseline: initial;
												animation-composition: initial;
												animation: initial;
												app-region: initial;
												appearance: initial;
												aspect-ratio: initial;
												backdrop-filter: initial;
												backface-visibility: initial;
												background: url('chrome-extension://fdjamakpfbbddfjaooikfcpapjohcfmg/content/injected/logo-autofill-known.svg')
													center center / contain no-repeat;
												background-blend-mode: initial;
												baseline-shift: initial;
												baseline-source: initial;
												block-size: initial;
												border-block: initial;
												border: none;
												border-radius: initial;
												border-collapse: initial;
												border-end-end-radius: initial;
												border-end-start-radius: initial;
												border-inline: initial;
												border-start-end-radius: initial;
												border-start-start-radius: initial;
												bottom: initial;
												box-shadow: initial;
												box-sizing: initial;
												break-after: initial;
												break-before: initial;
												break-inside: initial;
												buffered-rendering: initial;
												caption-side: initial;
												caret-color: initial;
												clear: initial;
												clip: initial;
												clip-path: initial;
												clip-rule: initial;
												color-interpolation: initial;
												color-interpolation-filters: initial;
												color-rendering: initial;
												color-scheme: initial;
												columns: initial;
												column-fill: initial;
												gap: initial;
												column-rule: initial;
												column-span: initial;
												contain: initial;
												contain-intrinsic-block-size: initial;
												contain-intrinsic-size: initial;
												contain-intrinsic-inline-size: initial;
												container: initial;
												content: initial;
												content-visibility: initial;
												counter-increment: initial;
												counter-reset: initial;
												counter-set: initial;
												cursor: pointer;
												cx: initial;
												cy: initial;
												d: initial;
												display: inline;
												dominant-baseline: initial;
												empty-cells: initial;
												fill: initial;
												fill-opacity: initial;
												fill-rule: initial;
												filter: initial;
												flex: initial;
												flex-flow: initial;
												float: initial;
												flood-color: initial;
												flood-opacity: initial;
												grid: initial;
												grid-area: initial;
												height: 16px;
												hyphenate-character: initial;
												hyphenate-limit-chars: initial;
												hyphens: initial;
												image-orientation: initial;
												image-rendering: initial;
												initial-letter: initial;
												inline-size: initial;
												inset-block: initial;
												inset-inline: initial;
												isolation: initial;
												left: 429px;
												letter-spacing: initial;
												lighting-color: initial;
												line-break: initial;
												list-style: initial;
												margin-block: initial;
												margin: initial;
												margin-inline: initial;
												marker: initial;
												mask: initial;
												mask-type: initial;
												math-depth: initial;
												math-shift: initial;
												math-style: initial;
												max-block-size: initial;
												max-height: initial;
												max-inline-size: initial;
												max-width: initial;
												min-block-size: initial;
												min-height: initial;
												min-inline-size: initial;
												min-width: 16px;
												mix-blend-mode: initial;
												object-fit: initial;
												object-position: initial;
												object-view-box: initial;
												offset: initial;
												opacity: 1;
												order: initial;
												orphans: initial;
												outline: initial;
												outline-offset: initial;
												overflow-anchor: initial;
												overflow-clip-margin: initial;
												overflow-wrap: initial;
												overflow: initial;
												overlay: initial;
												overscroll-behavior-block: initial;
												overscroll-behavior-inline: initial;
												overscroll-behavior: initial;
												padding-block: initial;
												padding: initial;
												padding-inline: initial;
												page: initial;
												page-orientation: initial;
												paint-order: initial;
												perspective: initial;
												perspective-origin: initial;
												pointer-events: initial;
												quotes: initial;
												r: initial;
												resize: initial;
												right: initial;
												rotate: initial;
												ruby-position: initial;
												rx: initial;
												ry: initial;
												scale: initial;
												scroll-behavior: initial;
												scroll-margin-block: initial;
												scroll-margin: initial;
												scroll-margin-inline: initial;
												scroll-padding-block: initial;
												scroll-padding: initial;
												scroll-padding-inline: initial;
												scroll-snap-align: initial;
												scroll-snap-stop: initial;
												scroll-snap-type: initial;
												scroll-timeline: initial;
												scrollbar-color: initial;
												scrollbar-gutter: initial;
												scrollbar-width: initial;
												shape-image-threshold: initial;
												shape-margin: initial;
												shape-outside: initial;
												shape-rendering: initial;
												size: initial;
												speak: initial;
												stop-color: initial;
												stop-opacity: initial;
												stroke: initial;
												stroke-dasharray: initial;
												stroke-dashoffset: initial;
												stroke-linecap: initial;
												stroke-linejoin: initial;
												stroke-miterlimit: initial;
												stroke-opacity: initial;
												stroke-width: initial;
												tab-size: initial;
												table-layout: initial;
												text-align: initial;
												text-align-last: initial;
												text-anchor: initial;
												text-combine-upright: initial;
												text-decoration: initial;
												text-decoration-skip-ink: initial;
												text-emphasis: initial;
												text-emphasis-position: initial;
												text-indent: initial;
												text-overflow: initial;
												text-shadow: initial;
												text-size-adjust: initial;
												text-transform: initial;
												text-underline-offset: initial;
												text-underline-position: initial;
												white-space: initial;
												timeline-scope: initial;
												top: 77px;
												touch-action: initial;
												transform: initial;
												transform-box: initial;
												transform-origin: initial;
												transform-style: initial;
												transition: initial;
												translate: initial;
												user-select: initial;
												vector-effect: initial;
												vertical-align: initial;
												view-timeline: initial;
												view-transition-name: initial;
												visibility: visible;
												border-spacing: initial;
												-webkit-box-align: initial;
												-webkit-box-decoration-break: initial;
												-webkit-box-direction: initial;
												-webkit-box-flex: initial;
												-webkit-box-ordinal-group: initial;
												-webkit-box-orient: initial;
												-webkit-box-pack: initial;
												-webkit-box-reflect: initial;
												-webkit-line-break: initial;
												-webkit-line-clamp: initial;
												-webkit-mask-box-image: initial;
												-webkit-print-color-adjust: initial;
												-webkit-rtl-ordering: initial;
												-webkit-ruby-position: initial;
												-webkit-tap-highlight-color: initial;
												-webkit-text-combine: initial;
												-webkit-text-decorations-in-effect: initial;
												-webkit-text-fill-color: initial;
												-webkit-text-security: initial;
												-webkit-text-stroke: initial;
												-webkit-user-drag: initial;
												widows: initial;
												width: 16px;
												will-change: initial;
												word-break: initial;
												word-spacing: initial;
												x: initial;
												y: initial;
												z-index: auto;
											"
												></span>
											</div>
											<div className="col-span-2">
												<label
													className="mb-1 body-small"
													style="color: rgb(0, 0, 0)"
												>
													Message
												</label>
												<textarea
													className="input border-none !shadow-none !placeholder-current"
													rows="5"
													style="
												border-radius: 8px;
												background-color: rgba(0, 0, 0, 0.07);
												color: rgb(0, 0, 0);
											"
													data-dashlane-rid="10c03c2e6cccd231"
													data-form-type="other"
												></textarea>
											</div>
										</div>
										<div className="text-right">
											<button
												className="website-button lg w-36"
												style="
											border-width: 2px;
											border-style: solid;
											box-shadow: none;
											scroll-behavior: smooth;
											font-family: var(--body-fontFamily);
											font-weight: var(--body-fontWeight);
											font-style: var(--body-fontStyle);
											background-color: rgb(122, 110, 82);
											color: rgb(255, 255, 255);
											border-radius: 8px;
											border-color: rgb(122, 110, 82);
										"
												data-dashlane-rid="f2468f1fc979a768"
												data-dashlane-label="true"
												data-form-type="other"
											>
												Send
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="relative z-10">
				<footer className="flex flex-col relative h-full">
					<div
						className="relative flex-1 pointer-events-none fix-safari-flickering"
						style="color: rgb(0, 0, 0); padding-top: 0px; padding-bottom: 0px"
					>
						<div className="absolute inset-0 pointer-events-none">
							<div
								className="absolute inset-0 z-5 transition-all duration-300"
								style="background-color: rgb(219, 226, 186)"
							></div>
						</div>
						<div className="container mx-auto px-5 md:px-6 relative z-10 pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
							<div className="flex flex-col lg:flex-row items-start lg:justify-between gap-12">
								<div className="flex flex-col gap-6 items-start lg:max-w-[30vw]">
									<div className="flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left">
										<div className="flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12">
											<div
												className="absolute w-full h-full"
												style="
											background-color: rgb(0, 0, 0);
											mask-image: url('https://static.thenounproject.com/png/3683216-200.png');
											mask-position: center center;
											mask-repeat: no-repeat;
											mask-size: contain;
										"
											></div>
										</div>
										<h2
											className="heading-small lg:heading-medium"
											style="
										color: rgb(0, 0, 0);
										font-size: 23.32px;
										line-height: 1.2;
										font-family: var(--header-logo-fontFamily);
										font-weight: var(--header-logo-fontWeight);
										width: 164.406px;
									"
										>
											The lucky scrub
										</h2>
									</div>
								</div>
								<div className="flex flex-col gap-12 lg:gap-6">
									<div className="flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end">
										<ul className="flex items-center gap-x-4 gap-y-2 flex-wrap">
											<li>
												<div className="flex justify-center items-center">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 24 24"
														width="24"
														height="24"
														className="icon w-8 h-8"
														aria-hidden="true"
														style="color: rgb(0, 0, 0)"
													>
														<path
															fill-rule="evenodd"
															d="M10.4375 21.8784C5.65941 21.1274 2 16.9877 2 12 2 6.48086 6.48086 2 12 2c5.5191 0 10 4.48086 10 10 0 4.9877-3.6594 9.1274-8.4375 9.8784v-6.9878h2.3301L16.3359 12h-2.7734v-1.8758c0-.79084.3874-1.5617 1.6296-1.5617h1.261V6.10156s-1.1443-.19531-2.2385-.19531c-2.2842 0-3.7771 1.38438-3.7771 3.89063V12H7.89844v2.8906h2.53906v6.9878Z"
															clip-rule="evenodd"
														></path>
													</svg>
												</div>
											</li>
											<li>
												<div className="flex justify-center items-center">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 24 24"
														width="24"
														height="24"
														className="icon w-8 h-8"
														aria-hidden="true"
														style="color: rgb(0, 0, 0)"
													>
														<path
															fill-rule="evenodd"
															d="M12 2c5.5191 0 10 4.48086 10 10 0 5.5191-4.4809 10-10 10-5.51914 0-10-4.4809-10-10C2 6.48086 6.48086 2 12 2Zm0 3.75c-1.6974 0-1.9102.00719-2.57688.03762-.66523.03035-1.11957.13601-1.51714.29051-.41098.15972-.75953.37343-1.107.72089-.34746.34746-.56117.69602-.72089 1.107-.1545.39753-.26012.85187-.29051 1.5171C5.75719 10.0898 5.75 10.3026 5.75 12s.00719 1.9102.03758 2.5769c.03039.6652.13601 1.1195.29051 1.5171.15972.411.37343.7595.72089 1.107.34747.3475.69602.5612 1.107.7209.39757.1545.85191.2601 1.51714.2905.66668.0304.87948.0376 2.57688.0376s1.9102-.0072 2.5769-.0376c.6652-.0304 1.1195-.136 1.5171-.2905.411-.1597.7595-.3734 1.107-.7209.3475-.3475.5612-.696.7209-1.107.1545-.3976.2601-.8519.2905-1.5171.0304-.6667.0376-.8795.0376-2.5769 0-1.6974-.0072-1.9102-.0376-2.57688-.0304-.66523-.136-1.11957-.2905-1.5171-.1597-.41098-.3734-.75954-.7209-1.107s-.696-.56117-1.107-.72089c-.3976-.1545-.8519-.26016-1.5171-.29051C13.9102 5.75719 13.6974 5.75 12 5.75Zm0 1.12613c1.6688 0 1.8665.00637 2.5255.03645.6094.02781.9403.12961 1.1606.21519.2917.11336.4999.24883.7186.46754.2187.21867.3542.42692.4675.71864.0856.22023.1874.55113.2152 1.1605.0301.65905.0365.85675.0365 2.52555s-.0064 1.8665-.0365 2.5255c-.0278.6094-.1296.9403-.2152 1.1606-.1133.2917-.2488.4999-.4675.7186-.2187.2187-.4269.3542-.7186.4675-.2203.0856-.5512.1874-1.1606.2152-.6589.0301-.8566.0365-2.5255.0365s-1.8666-.0064-2.52555-.0365c-.60937-.0278-.94027-.1296-1.1605-.2152-.29176-.1133-.49997-.2488-.71868-.4675-.21871-.2187-.35414-.4269-.4675-.7186-.08558-.2203-.18742-.5512-.21523-1.1606-.03008-.659-.03641-.8567-.03641-2.5255s.00633-1.8665.03641-2.52555c.02781-.60937.12965-.94027.21523-1.1605.11336-.29172.24879-.49997.4675-.71864.21871-.21871.42692-.35418.71868-.46754.22023-.08558.55113-.18738 1.1605-.21519.65905-.03008.85675-.03645 2.52555-.03645Zm0 1.91442c-1.7725 0-3.20945 1.43695-3.20945 3.20945S10.2275 15.2095 12 15.2095s3.2095-1.437 3.2095-3.2095c0-1.7725-1.437-3.20945-3.2095-3.20945Zm0 5.29275c-1.1506 0-2.08332-.9327-2.08332-2.0833 0-1.1506.93272-2.08332 2.08332-2.08332S14.0833 10.8494 14.0833 12 13.1506 14.0833 12 14.0833Zm4.0863-5.41955c0 .41422-.3358.74996-.7501.74996-.4141 0-.7499-.33574-.7499-.74996s.3358-.75.7499-.75c.4143 0 .7501.33578.7501.75Z"
															clip-rule="evenodd"
														></path>
													</svg>
												</div>
											</li>
											<li>
												<div className="flex justify-center items-center">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 24 24"
														width="24"
														height="24"
														className="icon w-8 h-8"
														aria-hidden="true"
														style="color: rgb(0, 0, 0)"
													>
														<path d="M13.6756 10.6218 20.2324 3h-1.5537l-5.6933 6.61788L8.43817 3H3.1935l6.8763 10.0074L3.1935 21h1.55384l6.01226-6.9887L15.5618 21h5.2447l-7.1313-10.3782h.0004Zm-2.1282 2.4738-.6967-.9965-5.54349-7.92939h2.38662l4.47367 6.39919.6967.9966 5.8152 8.318h-2.3866l-4.7454-6.7875v-.0004Z"></path>
													</svg>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</main>
	);
}

