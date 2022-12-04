import { SKILLS } from "../skills.constant";
export default function Skills() {
  return (
    <section className="relative pb-28 pt-10  w-11/12 mx-auto md:w-10/12 lg:w-9/12">
      {/* Skills */}
      <div className="grid grid-cols-1 gap-14 gap-y-16 md:gap-y-24  md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, index) => (
          <div
            className="space-y-2 text-center md:text-left"
            key={index}
            aria-label="skill"
          >
            <h3 className="text-4xl font-semibold md:text-5xl">{skill.lang}</h3>
            <p className="text-xl md:text-2xl">{skill.exp} Years Experices</p>
          </div>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute right-[5rem] top-[1rem] md:right-[5rem]">
        <div className="w-32 h-32 bg-transparent  border-2 border-white rounded-full absolute left-[5rem]  top-0 skew-x-[-30deg] skew-y-[-30deg]"></div>
        <div className="w-32 h-32 bg-transparent  border-2 border-white rounded-full absolute left-[5rem]  top-16 skew-x-[-30deg] skew-y-[-30deg]"></div>
        <div className="w-32 h-32 bg-transparent  border-2 border-white rounded-full absolute left-[5rem]  top-28 skew-x-[-30deg] skew-y-[-30deg]"></div>
      </div>
    </section>
  );
}
