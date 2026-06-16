import ReactIcon from "../assets/favicon/tecnologies/ReactIcon";
import CssIcon from "../assets/favicon/tecnologies/CssIcon";
import SupaBaseIcon from "../assets/favicon/tecnologies/SupaBaseIcon";
import PostgreSqlIcon from "../assets/favicon/tecnologies/PostgreSqlIcon";
import NestJsIcon from "../assets/favicon/tecnologies/NestJs";
import Electron from "../assets/favicon/tecnologies/Electron"

export const projects = [
  {
    id: 1,
    images: ["/proyectImages/medirecord/mediIcon.ico","/proyectImages/medirecord/mediRecord.png"],
    title: "MediRecord",
    descriptionKey: "projectsData.mediRecord",
    problematicaKey: "projectsData.mediRecordProblematica",
    solucionKey: "projectsData.mediRecordSolucion",
    repository: "https://github.com/Carlostala04/Gestion-pacientes.git",
    preview: "https://medirecord-demo.com",
    technologies: [
      { name: "React", Icon: ReactIcon },
      { name: "CSS", Icon: CssIcon },
      { name: "Supabase", Icon: SupaBaseIcon },
      { name: "PostgreSQL", Icon: PostgreSqlIcon },
      {name:"Electron",Icon:Electron}
    ],
  },
  {
    id: 2,
    images: ["/proyectImages/myfarmer/MyFarmerIcon.png","/proyectImages/myfarmer/MyFarmer.png"],
    title: "My Farmer",
    descriptionKey: "projectsData.myFarmer",
    problematicaKey: "projectsData.myFarmerProblematica",
    solucionKey: "projectsData.myFarmerSolucion",
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
