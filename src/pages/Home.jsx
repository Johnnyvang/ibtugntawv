import { Link } from "react-router-dom";
import DonorList from "../components/DonorList";
import { getDonorsSorted } from "../lib/donors";

const reasons = [
  {
    title: "Preservation of the Hmong Language",
    body:
      "Across the world, many Hmong youth are gradually losing the ability to speak and write the Hmong language. Like thousands of languages that have already disappeared, our language faces the same risk if we do not act. This book is an effort to protect and preserve our linguistic heritage.",
  },
  {
    title: "Need for Writing Standards",
    body:
      "Today, thousands of Hmong people communicate using the RPA writing system through social media platforms such as Facebook, YouTube, and messaging applications. However, many users have never been taught standardized rules for capitalization, grammar, or punctuation because a comprehensive Hmong writing guide has never been widely available. This book seeks to provide that foundation so that Hmong writers can develop stronger literacy skills.",
  },
  {
    title: "Revisiting the RPA Writing System",
    body:
      "Since the creation of the RPA in 1953, there has been very little systematic review of the writing system. After seventy years of usage, we believe it is appropriate to re-examine the system and consider improvements that could make writing clearer, simpler, and more efficient.",
  },
  {
    title: "International Unification of Hmong Writing",
    body:
      "Another important goal is to promote this writing system among our Hmong relatives in China and other regions so that it may eventually serve as a common international writing system for Hmong speakers around the world.",
  },
];

const contributions = [
  {
    title: "Simplification of Consonant Structures",
    body:
      "This book introduces the letters B, G, and J as additional consonants to replace several four-letter and three-letter consonant clusters, reducing writing length and improving efficiency.",
    examples: [
      "NP → B, NPH → BH, NPL → BL, NPLH → BLH",
      "NK → G, NKH → GH",
      "NTS → J, NTSH → JH",
      "NTX → NX, NTXH → NXH",
    ],
  },
  {
    title: "Expanded Vowel System",
    body:
      "The book incorporates vowel forms used among Hmong communities in China, allowing the writing system to represent a broader range of dialects. This also improves the ability to translate other languages into Hmong.",
  },
  {
    title: "Standardized Grammar and Punctuation",
    body:
      "For the first time, this work presents a clearly defined system of Hmong grammar and punctuation, enabling the language to function effectively in academic, governmental, and professional contexts.",
  },
  {
    title: "Rules for Compound Words",
    body:
      "The book establishes consistent rules for forming compound words, helping writers maintain clarity and uniformity in written communication.",
  },
  {
    title: "Expanded Vocabulary",
    body:
      "A large collection of new vocabulary, including technical and academic terminology, has been researched, compiled, and explained to support higher levels of education and scholarship in the Hmong language.",
  },
  {
    title: "Historical and Cultural Identity",
    body:
      "Finally, the book explores the origins and evolution of the Hmong national name and identity, emphasizing the vision of one person, one name, and one writing system.",
  },
];

export default function Home() {
  const topDonors = getDonorsSorted().slice(0, 5);

  return (
    <>
      <section className="relative overflow-hidden border-b border-forest-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #c9a227 0%, transparent 45%), radial-gradient(circle at 80% 60%, #2a5242 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Hmong Language and Literacy Committee
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-forest-50 sm:text-5xl md:text-6xl">
            IB HAIV NEEG
            <span className="block text-forest-100/95">IB TUG NTAWV</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-forest-100/85 sm:text-xl">
            One People, One Writing System — the first comprehensive Hmong writing guide since the
            Romanized Popular Alphabet (RPA) in 1953.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#books"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-forest-950 shadow-lg shadow-accent/20 transition hover:bg-accent-soft"
            >
              Explore the books
            </a>
            <a
              href="#support"
              className="inline-flex items-center justify-center rounded-xl border border-forest-700 bg-forest-900/50 px-5 py-3 text-sm font-medium text-forest-50 transition hover:border-accent/50 hover:bg-forest-800"
            >
              How to contribute
            </a>
          </div>
        </div>
      </section>

      <section id="books" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">The books</h2>
        <p className="mt-2 max-w-2xl text-forest-100/75">
          Two publications supporting a stronger, clearer Hmong writing system for communities
          worldwide.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <article className="rounded-2xl border border-forest-800 bg-forest-900/30 p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-forest-50">
              IB HAIV NEEG · IB TUG NTAWV
            </h3>
            <p className="mt-1 text-sm text-accent">Main writing guide</p>
            <p className="mt-4 text-forest-100/80 leading-relaxed">
              A systematic explanation of Hmong words, tone markers, grammar, punctuation, and rules
              for multi-syllabic and compound words — plus the historical development of Hmong
              identity and language.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <figure className="overflow-hidden rounded-lg border border-forest-800 shadow-lg">
                <img
                  src="/front.png"
                  alt="Front cover: IB HAIV NEEG IB TUG NTAWV"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="sr-only">Front cover</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-lg border border-forest-800 shadow-lg">
                <img
                  src="/back.png"
                  alt="Back cover: IB HAIV NEEG IB TUG NTAWV"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="sr-only">Back cover</figcaption>
              </figure>
            </div>
          </article>

          <article className="rounded-2xl border border-forest-800 bg-forest-900/30 p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-forest-50">KAWM NTAWV HMOOB</h3>
            <p className="mt-1 text-sm text-accent">Learning the new Hmong language system</p>
            <p className="mt-4 text-forest-100/80 leading-relaxed">
              A companion volume focused on how to use and teach the updated Hmong orthography —
              practical guidance for classrooms, families, and self-study.
            </p>
            <figure className="mt-8 overflow-hidden rounded-lg border border-forest-800 shadow-lg">
              <img
                src="/new.png"
                alt="Cover: KAWM NTAWV HMOOB"
                className="w-full object-cover"
                loading="lazy"
              />
            </figure>
          </article>
        </div>
      </section>

      <section className="border-y border-forest-800 bg-forest-900/25">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
            Why this book was written
          </h2>
          <div className="mt-10 space-y-10">
            {reasons.map((r, i) => (
              <div key={r.title} className="max-w-3xl">
                <h3 className="text-lg font-semibold text-forest-50">
                  <span className="mr-2 text-accent">{i + 1}.</span>
                  {r.title}
                </h3>
                <p className="mt-3 text-forest-100/80 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
          Letter of support
        </h2>
        <p className="mt-2 text-sm uppercase tracking-widest text-forest-100/50">
          Request for publication support
        </p>
        <div className="mt-8 rounded-2xl border border-forest-800 bg-forest-900/40 p-6 sm:p-10">
          <p className="text-forest-100/85 leading-relaxed">
            Dear Hmong relatives and friends,
            <br />
            <br />
            The Hmong Language and Literacy Committee (HLLC) respectfully seeks your support for the
            publication of our newly completed Hmong writing guide titled{" "}
            <strong className="text-forest-50">IB HAIV NEEG IB TUG NTAWV</strong> (One People, One
            Writing System).
            <br />
            <br />
            The purpose of this book is to strengthen and advance the Hmong writing system so that
            it becomes grammatically structured, mechanically consistent, and academically
            compatible with the well-developed writing systems of other languages.
            <br />
            <br />
            This publication represents the first comprehensive Hmong writing guide since the
            creation of the Romanized Popular Alphabet (RPA) in 1953. The book provides a clear and
            systematic explanation of Hmong words, tone markers, grammar, punctuation, and rules
            governing multi-syllabic and compound words. In addition, it explores the historical
            development of Hmong identity and language from the earliest known periods.
            <br />
            <br />
            More importantly, this work is designed to establish a living, evolving writing system
            that can support advanced academic research, professional communication, and educational
            development for future generations.
            <br />
            <br />
            The HLLC was established in October 2022 with the mission of carefully re-evaluating the
            Hmong Latin-based writing system and discussing potential improvements to its consonants
            and vowels. Over the past three years, committee members have devoted countless hours to
            research, discussion, and collaboration to reach this milestone.
            <br />
            <br />
            We believe that such an inclusive and thoughtful process is the only way to help
            reconcile the diverse dialects that have developed within the Hmong language over many
            centuries of geographic separation.
            <br />
            <br />
            Your contribution to this historic effort will help reduce the printing cost of the
            book, making it accessible and affordable for members of our Hmong community. By
            supporting this project, you will become a partner in an important cultural and
            linguistic milestone for our people.
            <br />
            <br />
            <strong className="text-forest-50">As a contributor:</strong>
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-forest-100/85">
            <li>Your name will be recorded and acknowledged as a supporter of this historic work.</li>
            <li>
              You will receive copies of the book at printing cost according to the amount you
              contribute.
            </li>
            <li>You will be free to distribute those copies within your community.</li>
          </ul>
          <p className="mt-6 text-forest-100/85 leading-relaxed">
            Our goal is simple: To make this book available to as many Hmong people as possible at
            the lowest possible cost.
            <br />
            <br />
            We sincerely thank you for your support and partnership in preserving and strengthening
            the Hmong language for generations to come.
            <br />
            <br />
            Yours truly,
            <br />
            <span className="font-medium text-forest-50">Lumthawj Tsab</span>
            <br />
            Hmong Language and Literacy Committee
          </p>
        </div>
      </section>

      <section className="border-t border-forest-800 bg-forest-900/25">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
            Key contributions in this book
          </h2>
          <div className="mt-10 grid gap-8 sm:gap-10">
            {contributions.map((c, i) => (
              <article key={c.title} className="max-w-3xl border-l-2 border-accent/60 pl-5 sm:pl-6">
                <h3 className="text-lg font-semibold text-forest-50">
                  {i + 1}. {c.title}
                </h3>
                <p className="mt-2 text-forest-100/80 leading-relaxed">{c.body}</p>
                {c.examples ? (
                  <ul className="mt-4 space-y-1 font-mono text-sm text-forest-100/70">
                    {c.examples.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
          How to submit funds
        </h2>
        <p className="mt-2 max-w-2xl text-forest-100/75">
          Ways you can help cover printing costs and bring these books to more Hmong readers.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-forest-800 bg-forest-900/40 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Zelle</h3>
            <p className="mt-2 font-mono text-forest-50">dablaugzaj@gmail.com</p>
          </div>
          <div className="rounded-xl border border-forest-800 bg-forest-900/40 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">MoneyGram</h3>
            <p className="mt-2 text-forest-100/90">Chance V. Chang</p>
          </div>
          <div className="rounded-xl border border-forest-800 bg-forest-900/40 p-5 sm:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              Check or money order
            </h3>
            <p className="mt-2 text-forest-100/90">Payable to: Chance V. Chang</p>
            <p className="mt-1 text-sm text-forest-100/70">
              728 South Millard Ave, Fresno, CA 93727
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-forest-100/65">
          For more information: <span className="text-forest-100/90">Lumthawj Tsab</span> ·{" "}
          <a href="tel:+15599707388" className="text-accent underline-offset-2 hover:underline">
            559-970-7388
          </a>
        </p>
      </section>

      <section className="border-t border-forest-800 bg-forest-900/25">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
                Top supporters
              </h2>
              <p className="mt-1 text-sm text-forest-100/60">
                Listed by contribution amount (highest first). Thank you.
              </p>
            </div>
            <Link
              to="/donors"
              className="inline-flex w-fit items-center justify-center rounded-xl border border-forest-700 px-4 py-2.5 text-sm font-medium text-forest-50 transition hover:border-accent/50 hover:bg-forest-800"
            >
              View all supporters
            </Link>
          </div>
          <div className="mt-8">
            <DonorList donors={topDonors} startRank={1} />
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              to="/donors"
              className="inline-flex items-center justify-center rounded-xl bg-forest-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-700"
            >
              Load more — full supporter list
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
