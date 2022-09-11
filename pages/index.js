import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Akash Moradiya</title>
        <meta
          content="Portfolio of Akash Moradiya, an experienced React.js developer"
          name="description"
        ></meta>
        <meta
          content="Akash Moradiya, Akash3444, React Developer, Front-end developer, Akash, Portfolio"
          name="keywords"
        ></meta>
        <meta content="https://akash3444.vercel.app" property="og:url"></meta>
        <meta content="Akash Moradiya" property="og:title"></meta>
        <link rel="canonical" href="https://akash3444.vercel.app"></link>
      </Head>
      <header className="background">
        <Navbar />
        <Hero />
      </header>

      <main className="px-6">
        <Skills />
        <ProjectList />
        <section className="mx-auto max-w-screen-md py-10">
          <h2 className="section-heading">Work Experience</h2>

          <div className="mt-8 flex flex-col gap-8 border-slate-700">
            <div className="px-8">
              <div className="relative rounded-xl bg-slate-800 p-6">
                {/* <!-- <div className="absolute -top-0 -left-8 h-[1px] w-10 bg-slate-700"></div> --> */}
                <div className="absolute -left-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 font-bold text-primary-100">
                  1
                </div>
                <h3 className="text-[1.3rem] tracking-tight font-semibold text-slate-300">
                  React.js Developer at Tagline Infotech
                </h3>
                <span className="text-sm text-slate-500">
                  Feb 2022 - Present
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
