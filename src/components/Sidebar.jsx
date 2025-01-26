"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(true);
	const pathname = usePathname();

	return (
		isOpen ? <aside
			className="bg-gray-800 text-white transition-all h-screen w-64"
		>

			<button className='p-4' onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? "◀" : "▶"}
			</button>
			<nav className='mt-4'>
				<ul>
					<li>
						<Link
							href='/'
							className={clsx("block p-4 hover:bg-gray-700", {
								"bg-blue-500": pathname === "/",
							})}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href='/about'
							className={clsx("block p-4 hover:bg-gray-700", {
								"bg-blue-500": pathname === "/about",
							})}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</aside> :
			<aside className="w-6">
				<button className='absolute left-0 top-0 p-4' onClick={() => setIsOpen(!isOpen)}>
					▶
				</button>
			</aside>
	);
}
