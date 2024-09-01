import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { PanelsTopLeft } from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
				<div className="container h-14 flex items-center">
					<Link
						href="/"
						className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
					>
						<PanelsTopLeft className="w-6 h-6 mr-3" />
						<span className="font-bold">sidebar-ui-template</span>
						<span className="sr-only">sidebar-ui-template</span>
					</Link>
					<nav className="ml-auto flex items-center gap-2">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full w-8 h-8 bg-background"
							asChild
						>
							<Link
								href="https://github.com/toshiaki-iizuka/sidebar-ui-template"
								target="_blank"
							>
								<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
							</Link>
						</Button>
						<ModeToggle />
					</nav>
				</div>
			</header>
		</div>
	);
}
