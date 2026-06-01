import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      id="education"
      className="mx-auto max-w-6xl px-6 py-24"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mb-12">
        <p className="mb-3 text-blue-400">
          Education
        </p>

        <h2 className="text-4xl font-bold">
          Academic Background
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h3 className="text-2xl font-semibold text-white">
          California State University San Marcos
        </h3>

        <p className="mt-2 text-slate-300">
          Bachelor of Science in Software Engineering
        </p>

        <p className="mt-1 text-green-400">
          Cum Laude • Graduated May 2026
        </p>

        <div className="mt-8">
          <h4 className="mb-4 text-lg font-semibold text-white">
            Relevant Coursework
          </h4>

          <div className="flex flex-wrap gap-2">
            {[
              "Data Structures & Algorithms",
              "Operating Systems",
              "Machine Learning",
              "Software Architecture",
              "Software Testing",
              "Database Systems",
              "Computer Architecture",
              "Embedded Systems",
              "Discrete Mathematics",
            ].map((course) => (
              <span
                key={course}
                className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;