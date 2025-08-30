import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full p-5">

      <h1 className="text-3xl text-center text-black">welcom to <Link href={"https://github.com/shane19shayan17"} target="_blank" className="text-5xl text-red-600">shayan</Link> next page</h1>

      <Link href={"/products"} className="w-full block text-xl text-center mt-10 text-black">click here to see api route in <span className=" text-3xl text-yellow-500">NEXT JS</span></Link>
    </div>
  );
}
