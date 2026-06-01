import { motion } from "framer-motion";

function SkillCategory({ title, skills }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <motion.section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mb-12">
        <p className="mb-3 text-blue-400">
          Technical Toolkit
        </p>

        <h2 className="text-4xl font-bold">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SkillCategory
          title="Languages"
          skills={[
            "Java",
            "Python",
            "C++",
            "SQL",
            "Assembly",
          ]}
        />

        <SkillCategory
          title="Frameworks & Libraries"
          skills={[
            "scikit-learn",
            "JUnit",
            "ROS2",
            "React",
          ]}
        />

        <SkillCategory
          title="Tools & Platforms"
          skills={[
            "Git",
            "AWS",
            "Jenkins",
            "PostgreSQL",
            "Unix",
            "VS Code",
            "IntelliJ",
            "Eclipse",
          ]}
        />

        <SkillCategory
          title="Concepts"
          skills={[
            "Machine Learning",
            "REST APIs",
            "Software Architecture",
            "Software Testing",
            "Database Systems",
            "SCRUM",
            "Object-Oriented Design",
          ]}
        />
      </div>
    </motion.section>
  );
}

export default Skills;