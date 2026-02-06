import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
 <dev>
    <h1>Welcome to the Home Page</h1>
    <Button>
      Click Me
    </Button>
    <UserButton/>
 </dev>
  );
}
