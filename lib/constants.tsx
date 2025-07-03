import {
  MdHome,
  MdGroups,
  MdEvent,
  MdCoPresent,
  MdFamilyRestroom, 
  MdAppRegistration,
  MdAnalytics,
  MdAssignmentTurnedIn,
  MdClass,
  MdForum,
  MdLibraryBooks,
  MdArticle,
  MdOutlineStreetview,
  MdNotificationsActive,
} from 'react-icons/md';

export const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: MdHome,
        label: 'Inicio',
        href: '/dashboard',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MdCoPresent,
        label: 'Profesores',
        href: '/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: MdGroups,
        label: 'Estudiantes',
        href: '/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: MdFamilyRestroom,
        label: 'Tutores',
        href: '/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: MdLibraryBooks,
        label: 'Asignaturas',
        href: '/subjects',
        visible: ['admin'],
      },
      {
        icon: MdOutlineStreetview,
        label: 'Clases',
        href: '/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: MdClass,
        label: 'Lecciones',
        href: '/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: MdArticle,
        label: 'Exámenes',
        href: '/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MdAppRegistration,
        label: 'Tareas',
        href: '/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MdAnalytics,
        label: 'Resultados',
        href: '/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MdAssignmentTurnedIn,
        label: 'Asistencia',
        href: '/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MdEvent,
        label: 'Eventos',
        href: '/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MdForum,
        label: 'Mensajes',
        href: '/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: MdNotificationsActive,
        label: 'Anuncios',
        href: '/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  }
];
