import Homepage from "@/components/Homepage/Homepage";


export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="h-screen">
          <Homepage></Homepage>
        </div>
      </main>
    </div>
  );
}
