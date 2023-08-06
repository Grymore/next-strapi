import { getAllAccounts, getSelectedAccount } from "@/api/services";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function SlugPage({ data }) {
  console.log(data);

  // useEffect(() => {
  //   getAllAccount();
  // }, []);

  // useEffect(() => {
  //   getSelectedAccount("okk");
  // }, []);

  //call functions

  return (
    <main
      className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center gap-2 w-full mb-12">
        <h3 className="text-2xl font-bold">Ini halaman dinamis</h3>
        <p className="text-lg">Description</p>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer">
          <p>test glassmorphism</p>
        </div>
        <div className="h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer">
          <p>test glassmorphism</p>
        </div>
        <div className="h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer">
          <p>test glassmorphism</p>
        </div>
        <div className="h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer">
          <p>test glassmorphism</p>
        </div>
        <div className="h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer">
          <p>test glassmorphism</p>
        </div>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const accounts = await getAllAccounts();
  const dataAccounts = await accounts.data.data;

  const paths = dataAccounts.map((value) => {
    return {
      params: { slug: value.attributes.slug },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const selectedAccount = await getSelectedAccount(params.slug);

  return {
    props: {
      data: selectedAccount.data.data[0],
    },
    revalidate: 10,
  };
}
