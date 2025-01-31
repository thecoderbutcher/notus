import { 
    MdHome, 
    MdGroups,
    MdEvent, 
    MdCoPresent,
    MdFamilyRestroom,
    MdLogout,
    MdSettings,
    MdPerson,
    MdAppRegistration,
    MdAnalytics,
    MdAssignmentTurnedIn, 
    MdClass,
    MdForum,
    MdLibraryBooks,
    MdArticle,
    MdOutlineStreetview, 
    MdNotificationsActive

} from "react-icons/md";

export const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: MdHome,
          label: "Inicio",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdCoPresent,
          label: "Profesores",
          href: "/list/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: MdGroups,
          label: "Estudiantes",
          href: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: MdFamilyRestroom,
          label: "Tutores",
          href: "/list/parents",
          visible: ["admin", "teacher"],
        },
        {
          icon: MdLibraryBooks,
          label: "Asignaturas",
          href: "/list/subjects",
          visible: ["admin"],
        },
        {
          icon: MdOutlineStreetview,
          label: "Clases",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: MdClass,
          label: "Lecciones",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
        {
          icon: MdArticle,
          label: "Exámenes",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdAppRegistration,
          label: "Tareas",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdAnalytics,
          label: "Resultados",
          href: "/list/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdAssignmentTurnedIn,
          label: "Asistencia",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdEvent,
          label: "Eventos",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdForum,
          label: "Mensajes",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdNotificationsActive,
          label: "Anuncios",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: MdPerson,
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdSettings,
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: MdLogout,
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];