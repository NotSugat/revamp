"use client";
import { useEffect, useRef, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {MenuIcon, X} from "lucide-react";

const Navbar = () => {
	const [state, setState] = useState(false);

	const navRef = useRef<HTMLElement | null>(null);

	// Replace javascript:void(0) path with your path
	const navigation = [
		{ title: "Why Revamp", path: "/why-revamp" },
		{ title: "How It Works", path: "/how-it-works" },
		{ title: "Contact Us", path: "/contact" },
	];
	return (
		<nav
			ref={navRef}
			className="h-navbar-height sticky top-0 z-20 w-full bg-topbar text-topbar-foreground"
		>
			<div className="items-center px-4 md:px-8 lg:flex lg:flex-row justify-between">
				<section className="flex items-center gap-8 justify-between py-3 lg:block lg:py-4">
					<div className="lg:hidden">
					<MenuIcon
						size={24}
						className="h-8 w-8 lg:hidden hover:cursor-pointer"
						onClick={() => setState(!state)}
					/>
					</div>
					<Link href="/" className="absolute left-16">
						<Image src="/assets/logo3-dark.svg" width={120} height={60} alt="Revamp Logo" />
					</Link>
					<div className="lg:hidden">
						<SignedOut>
						
							<Link
							href="/sign-in"
							className="block rounded-md bg-indigo-600 hover:opacity-80 px-4 py-3 text-left w-full"
							>
							Sign In
							</Link>

						
						</SignedOut>

						<SignedIn>
							<Link
								href="/dashboard"
								className="block rounded-md bg-indigo-600 px-4 py-3 text-center text-white shadow hover:opacity-80 lg:inline"
							>
								Go to Dashboard
							</Link>
						</SignedIn>
					</div>
				</section>

{/* sidebar for mobile view */}
				<section
					className={`fixed h-full w-screen z-30 lg:hidden backdrop-blur-sm top-0 right-0 transition-transform ${
            state ? 'translate-x-0' : '-translate-x-full'
          }`} onClick={() => setState(!state)}
				>
					<div className="flex flex-col bg-secondary w-48 absolute left-0 top-0 h-screen p-8 gap-4 z-50"
					onClick={(e) => e.stopPropagation()}
					>
						<X 
						size={24}
						className="hover:cursor-pointer border border-white rounded-md"
						onClick={() => setState(!state)}
						/>
						<SignedOut>
						
							<Link
							href="/sign-up"
							className="block rounded-md bg-indigo-600 px-4 py-3 text-white shadow hover:opacity-80 text-left w-full"
							>
							Sign Up
							</Link>
						
						</SignedOut>

						<SignedIn>
							<Link
								href="/dashboard"
								className="block rounded-md bg-indigo-600 px-4 py-3 text-center text-white shadow hover:opacity-80 lg:inline"
							>
								Go to Dashboard
							</Link>
						</SignedIn>
						<ul className="items-center justify-between space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
							{navigation.map((item, idx) => {
								return (
									<li key={idx} className="  hover:opacity-80">
										<Link href={item.path}>{item.title}</Link>
									</li>
								);
							})}
						</ul>
					</div>
					
				</section>

				{/* middle section containing page links */}
				<section className="flex-row gap-4 hidden lg:flex">
						<ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
							{navigation.map((item, idx) => {
								return (
									<li key={idx} className="  hover:opacity-80">
										<Link href={item.path}>{item.title}</Link>
									</li>
								);
							})}
						</ul>
				</section>

				{/* right section containing SignedIn and SignedOut components */}

				<section className="flex-row gap-4 items-center justify-between hidden lg:flex">
				<SignedOut>
						<div className="w-full flex flex-row items-center jsutify-between gap-4">
							<Link
							href="/sign-in"
							className="block rounded-md hover:opacity-80 px-4 py-3 text-left "
							>
							Sign In
							</Link>

							<Link
							href="/sign-up"
							className="block rounded-md bg-indigo-600 px-4 py-3 text-white shadow hover:opacity-80 text-left"
							>
							Sign Up
							</Link>
						</div>
						</SignedOut>

						<SignedIn>
							<Link
								href="/dashboard"
								className="block rounded-md bg-indigo-600 px-4 py-3 text-center text-white shadow hover:opacity-80 lg:inline"
							>
								Go to Dashboard
							</Link>
						</SignedIn>
				</section>
			</div>
		</nav>
	);
};
export default Navbar;
