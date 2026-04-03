import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import DonorList from "../components/DonorList";
import Reveal from "../components/Reveal";
import ImageLightbox from "../components/ImageLightbox";
import HeroBookSlideshow from "../components/HeroBookSlideshow";
import CopyField from "../components/CopyField";
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

function InteractiveCover({ src, alt, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src, alt)}
      className="group relative block w-full overflow-hidden rounded-lg border border-forest-800 text-left shadow-lg transition-all duration-300 hover:border-accent/40 hover:shadow-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-forest-950/80 via-transparent to-transparent pb-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-full bg-forest-950/90 px-3 py-1 text-xs font-medium text-accent-soft">
          Click to enlarge
        </span>
      </span>
    </button>
  );
}

export default function Home() {
  const topDonors = getDonorsSorted().slice(0, 5);
  const reduceMotion = useReducedMotion();

  const [lightbox, setLightbox] = useState(null);
  const [bookTab, setBookTab] = useState(0);
  const [openReason, setOpenReason] = useState(-1);
  const [letterOpen, setLetterOpen] = useState(false);

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
      };

  const stagger = reduceMotion ? 0 : 0.09;

  return (
    <>
      <ImageLightbox
        src={lightbox?.src}
        alt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
      />

      <section className="relative overflow-hidden border-b border-forest-800">
        <div className="hero-aurora pointer-events-none absolute inset-0 opacity-[0.18]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-12">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
              }}
            >
              <motion.p
                variants={fadeUp}
                className="mb-3 text-sm font-medium uppercase tracking-widest text-accent"
              >
                Hmong Language and Literacy Committee
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl font-semibold leading-tight tracking-tight text-forest-50 sm:text-5xl md:text-5xl lg:text-6xl"
              >
                IB HAIV NEEG
                <span className="block text-forest-100/95">IB TUG NTAWV</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-2xl text-lg text-forest-100/85 sm:text-xl"
              >
                One People, One Writing System — the first comprehensive Hmong writing guide since the
                Romanized Popular Alphabet (RPA) in 1953.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
                <motion.a
                  href="#books"
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-forest-950 shadow-lg shadow-accent/25"
                >
                  Explore the books
                </motion.a>
                <motion.a
                  href="#support"
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl border border-forest-700 bg-forest-900/50 px-5 py-3 text-sm font-medium text-forest-50 hover:border-accent/50 hover:bg-forest-800"
                >
                  How to contribute
                </motion.a>
              </motion.div>
            </motion.div>

            <div className="mt-12 hidden justify-center md:mt-0 md:flex">
              <HeroBookSlideshow onOpen={(src, alt) => setLightbox({ src, alt })} />
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">The books</h2>
          <p className="mt-2 max-w-2xl text-forest-100/75">
            Two publications supporting a stronger, clearer Hmong writing system for communities
            worldwide. On small screens, switch tabs; on large screens, compare side by side.
          </p>
        </Reveal>

        <div
          className="mt-8 flex gap-2 lg:hidden"
          role="tablist"
          aria-label="Choose a book"
        >
          {[
            { id: 0, label: "Main guide" },
            { id: 1, label: "Kawm Ntawv" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={bookTab === t.id}
              onClick={() => setBookTab(t.id)}
              className={`relative flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                bookTab === t.id
                  ? "bg-forest-800 text-white"
                  : "bg-forest-900/50 text-forest-100/70 hover:bg-forest-900 hover:text-forest-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 hidden gap-10 lg:grid lg:grid-cols-2 lg:gap-12">
          <motion.article
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="rounded-2xl border border-forest-800 bg-forest-900/30 p-6 shadow-lg shadow-black/20 sm:p-8"
          >
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
              <figure>
                <InteractiveCover
                  src="/front.png"
                  alt="Front cover: IB HAIV NEEG IB TUG NTAWV"
                  onOpen={(src, alt) => setLightbox({ src, alt })}
                />
                <figcaption className="sr-only">Front cover</figcaption>
              </figure>
              <figure>
                <InteractiveCover
                  src="/back.png"
                  alt="Back cover: IB HAIV NEEG IB TUG NTAWV"
                  onOpen={(src, alt) => setLightbox({ src, alt })}
                />
                <figcaption className="sr-only">Back cover</figcaption>
              </figure>
            </div>
          </motion.article>

          <motion.article
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="rounded-2xl border border-forest-800 bg-forest-900/30 p-6 shadow-lg shadow-black/20 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-forest-50">KAWM NTAWV HMOOB</h3>
            <p className="mt-1 text-sm text-accent">Learning the new Hmong language system</p>
            <p className="mt-4 text-forest-100/80 leading-relaxed">
              A companion volume focused on how to use and teach the updated Hmong orthography —
              practical guidance for classrooms, families, and self-study.
            </p>
            <figure className="mt-8">
              <InteractiveCover
                src="/new.png"
                alt="Cover: KAWM NTAWV HMOOB"
                onOpen={(src, alt) => setLightbox({ src, alt })}
              />
            </figure>
          </motion.article>
        </div>

        <div className="mt-8 lg:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={bookTab}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-forest-800 bg-forest-900/30 p-6 shadow-lg shadow-black/20 sm:p-8"
            >
              {bookTab === 0 ? (
                <>
                  <h3 className="font-display text-xl font-semibold text-forest-50">
                    IB HAIV NEEG · IB TUG NTAWV
                  </h3>
                  <p className="mt-1 text-sm text-accent">Main writing guide</p>
                  <p className="mt-4 text-forest-100/80 leading-relaxed">
                    A systematic explanation of Hmong words, tone markers, grammar, punctuation, and
                    rules for multi-syllabic and compound words — plus the historical development of
                    Hmong identity and language.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <InteractiveCover
                      src="/front.png"
                      alt="Front cover"
                      onOpen={(src, alt) => setLightbox({ src, alt })}
                    />
                    <InteractiveCover
                      src="/back.png"
                      alt="Back cover"
                      onOpen={(src, alt) => setLightbox({ src, alt })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-display text-xl font-semibold text-forest-50">
                    KAWM NTAWV HMOOB
                  </h3>
                  <p className="mt-1 text-sm text-accent">Learning the new Hmong language system</p>
                  <p className="mt-4 text-forest-100/80 leading-relaxed">
                    A companion volume focused on how to use and teach the updated Hmong orthography —
                    practical guidance for classrooms, families, and self-study.
                  </p>
                  <div className="mt-8">
                    <InteractiveCover
                      src="/new.png"
                      alt="Cover: KAWM NTAWV HMOOB"
                      onOpen={(src, alt) => setLightbox({ src, alt })}
                    />
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="border-y border-forest-800 bg-forest-900/25">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
              Why this book was written
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-forest-100/60">
              Tap a heading to read more — open one section at a time.
            </p>
          </Reveal>
          <div className="mt-8 space-y-3">
            {reasons.map((r, i) => {
              const isOpen = openReason === i;
              return (
                <Reveal key={r.title} delay={i * 0.05}>
                  <div
                    className={`overflow-hidden rounded-xl border transition-colors ${
                      isOpen
                        ? "border-accent/40 bg-forest-900/50 shadow-md shadow-black/20"
                        : "border-forest-800 bg-forest-900/25 hover:border-forest-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenReason(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-forest-50">
                        <span className="mr-2 text-accent">{i + 1}.</span>
                        {r.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-accent"
                        aria-hidden
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-forest-800/80 px-4 pb-4 pt-3 text-forest-100/80 leading-relaxed sm:px-5">
                            {r.body}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
            Letter of support
          </h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-forest-100/50">
            Request for publication support
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-2xl border border-forest-800 bg-forest-900/40 p-6 sm:p-10">
            <div
              className={`text-forest-100/85 leading-relaxed transition-all duration-300 ${
                letterOpen ? "" : "relative max-h-[min(28rem,70vh)] overflow-hidden"
              }`}
            >
              {!letterOpen ? (
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest-900 via-forest-900/80 to-transparent"
                  aria-hidden
                />
              ) : null}
              <p>
                Dear Hmong relatives and friends,
                <br />
                <br />
                The Hmong Language and Literacy Committee (HLLC) respectfully seeks your support
                for the publication of our newly completed Hmong writing guide titled{" "}
                <strong className="text-forest-50">IB HAIV NEEG IB TUG NTAWV</strong> (One People,
                One Writing System).
                <br />
                <br />
                The purpose of this book is to strengthen and advance the Hmong writing system so
                that it becomes grammatically structured, mechanically consistent, and academically
                compatible with the well-developed writing systems of other languages.
                <br />
                <br />
                This publication represents the first comprehensive Hmong writing guide since the
                creation of the Romanized Popular Alphabet (RPA) in 1953. The book provides a clear
                and systematic explanation of Hmong words, tone markers, grammar, punctuation, and
                rules governing multi-syllabic and compound words. In addition, it explores the
                historical development of Hmong identity and language from the earliest known
                periods.
                <br />
                <br />
                More importantly, this work is designed to establish a living, evolving writing
                system that can support advanced academic research, professional communication, and
                educational development for future generations.
                <br />
                <br />
                The HLLC was established in October 2022 with the mission of carefully re-evaluating
                the Hmong Latin-based writing system and discussing potential improvements to its
                consonants and vowels. Over the past three years, committee members have devoted
                countless hours to research, discussion, and collaboration to reach this milestone.
                <br />
                <br />
                We believe that such an inclusive and thoughtful process is the only way to help
                reconcile the diverse dialects that have developed within the Hmong language over
                many centuries of geographic separation.
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
              <ul className="mt-6 list-disc space-y-2 pl-5">
                <li>
                  Your name will be recorded and acknowledged as a supporter of this historic work.
                </li>
                <li>
                  You will receive copies of the book at printing cost according to the amount you
                  contribute.
                </li>
                <li>You will be free to distribute those copies within your community.</li>
              </ul>
              <p className="mt-6">
                Our goal is simple: To make this book available to as many Hmong people as possible
                at the lowest possible cost.
                <br />
                <br />
                We sincerely thank you for your support and partnership in preserving and
                strengthening the Hmong language for generations to come.
                <br />
                <br />
                Yours truly,
                <br />
                <span className="font-medium text-forest-50">Lumthawj Tsab</span>
                <br />
                Hmong Language and Literacy Committee
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <motion.button
                type="button"
                onClick={() => setLetterOpen((v) => !v)}
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="rounded-full border border-forest-600 bg-forest-800/80 px-5 py-2 text-sm font-semibold text-forest-50 hover:border-accent/50"
              >
                {letterOpen ? "Show less" : "Read full letter"}
              </motion.button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-forest-800 bg-forest-900/25">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
              Key contributions in this book
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:gap-8">
            {contributions.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <motion.article
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  className="group max-w-3xl rounded-r-xl border-l-2 border-accent/60 pl-5 transition-colors hover:border-accent sm:pl-6"
                >
                  <h3 className="text-lg font-semibold text-forest-50">
                    {i + 1}. {c.title}
                  </h3>
                  <p className="mt-2 text-forest-100/80 leading-relaxed">{c.body}</p>
                  {c.examples ? (
                    <ul className="mt-4 space-y-1.5 font-mono text-sm text-forest-100/70 transition-colors group-hover:text-forest-100/90">
                      {c.examples.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : null}
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
            How to submit funds
          </h2>
          <p className="mt-2 max-w-2xl text-forest-100/75">
            Ways you can help cover printing costs and bring these books to more Hmong readers.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <CopyField label="Zelle" value="dablaugzaj@gmail.com" />
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="rounded-xl border border-forest-800 bg-forest-900/40 p-5 transition-colors hover:border-forest-700"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">MoneyGram</h3>
              <p className="mt-2 text-forest-100/90">Chance V. Chang</p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.12} className="sm:col-span-2">
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="rounded-xl border border-forest-800 bg-forest-900/40 p-5 transition-colors hover:border-forest-700"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                Check or money order
              </h3>
              <p className="mt-2 text-forest-100/90">Payable to: Chance V. Chang</p>
              <p className="mt-1 text-sm text-forest-100/70">
                728 South Millard Ave, Fresno, CA 93727
              </p>
            </motion.div>
          </Reveal>
        </div>
        <Reveal delay={0.08}>
          <p className="mt-8 text-sm text-forest-100/65">
            For more information: <span className="text-forest-100/90">Lumthawj Tsab</span> ·{" "}
            <a href="tel:+15599707388" className="text-accent underline-offset-2 hover:underline">
              559-970-7388
            </a>
          </p>
        </Reveal>
      </section>

      <section className="border-t border-forest-800 bg-forest-900/25">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-forest-50 sm:text-3xl">
                Top supporters
              </h2>
              <p className="mt-1 text-sm text-forest-100/60">
                Listed by contribution amount (highest first). Thank you.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <Link
                to="/donors"
                className="inline-flex w-fit items-center justify-center rounded-xl border border-forest-700 px-4 py-2.5 text-sm font-medium text-forest-50 transition hover:border-accent/50 hover:bg-forest-800"
              >
                View all supporters
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <DonorList donors={topDonors} startRank={1} animated />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/donors"
                  className="inline-flex items-center justify-center rounded-xl bg-forest-800 px-6 py-3 text-sm font-semibold text-white hover:bg-forest-700"
                >
                  Load more — full supporter list
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
