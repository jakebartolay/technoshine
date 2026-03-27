const team = [
  {
    name: "Erwin Torrefiel",
    role: "Managing Director",
    division: "Executive",
    img: "erwin.png",
  },
  {
    name: "Jo Torrefiel",
    role: "Head of Operations",
    division: "Coo",
    img: "jo.png",
  },
  {
    name: "RICH NICOLLIE TORREFIEL",
    role: "President",
    division: "President",
    img: "dj.png",
  },
  {
    name: "Mary-Lou Robellon",
    role: "Excutive Manager",
    division: "Manager",
    img: "mary-lou.png",
  },
  {
    name: "Mark Antony Daga",
    role: "Technical Manager",
    division: "Stonecare",
    img: "mark.png",
  },
  {
    name: "Monica Mangilit",
    role: "Trading",
    division: "Trading",
    img: "monica.png",
  },
];

const divisionColor: Record<string, string> = {
  Executive: "bg-gray-100 text-gray-700",
  Coo: "bg-orange-100 text-orange-700",
  President: "bg-orange-100 text-orange-700",
  Manager: "bg-amber-100 text-amber-700",
  Stonecare: "bg-yellow-100 text-yellow-700",
  Trading: "bg-yellow-100 text-yellow-700",
};

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Our People
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-1xl mx-auto">
            The dedicated people behind Technoshine — driving excellence across every division.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg leading-snug">{member.name}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{member.role}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${divisionColor[member.division]}`}>
                    {member.division}
                  </span>
                </div>

                {/* Orange accent bar */}
                <div className="mt-4 h-1 w-8 rounded-full bg-orange-400 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
