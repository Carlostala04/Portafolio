import ReactIcon from "../assets/favicon/tecnologies/ReactIcon";
import CssIcon from "../assets/favicon/tecnologies/CssIcon";
import SupaBaseIcon from "../assets/favicon/tecnologies/SupaBaseIcon";
import PostgreSqlIcon from "../assets/favicon/tecnologies/PostgreSqlIcon";
import NestJsIcon from "../assets/favicon/tecnologies/NestJs";

export const projects = [
  {
    id: 1,
    image: "/proyectImages/mediRecord.png",
    title: "MediRecord",
    description: "Sistema web para gestionar pacientes, consultas e historial médico.",
    repository: "https://github.com/usuario/medirecord",
    preview: "https://medirecord-demo.com",
    technologies: [
      { name: "React", Icon: ReactIcon },
      { name: "CSS", Icon: CssIcon },
      { name: "Supabase", Icon: SupaBaseIcon },
      { name: "PostgreSQL", Icon: PostgreSqlIcon },
    ],
  },
  {
    id: 2,
    image: "/proyectImages/myFarrmer.png",
    title: "My Farmer",
    description: "Aplicación mobile de gestión de animales y cultivos para ganaderos.",
    repository: "https://github.com/Carlostala04/My-Farmer.git",
    preview: "#",
    technologies: [
      { name: "React", Icon: ReactIcon },
      { name: "CSS", Icon: CssIcon },
      { name: "NestJS", Icon: NestJsIcon },
      { name: "Supabase", Icon: SupaBaseIcon },
    ],
  },
];
