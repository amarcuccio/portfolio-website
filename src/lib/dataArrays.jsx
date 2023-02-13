import hourglass from '@/images/hourglass.png'
import logoHSN from '@/images/logos/hsn.png'
import logoECM from '@/images/logos/ecm.png'
import logoCambrian from '@/images/logos/cambrian.png'

export const projectList = [
  {
    key: 'project0001',
    name: 'Project 1 - Placeholder',
    description:
      'Keep an eye on this section, I’ll be updating soon with exciting new projects!',
    link: { href: 'https://github.com/amarcuccio', label: 'github.com' },
    logo: hourglass,
  },
  {
    key: 'project0002',
    name: 'Project 2 - Placeholder',
    description:
      'Keep an eye on this section, I’ll be updating soon with exciting new projects!',
    link: { href: 'https://github.com/amarcuccio', label: 'github.com' },
    logo: hourglass,
  },
  {
    key: 'project0003',
    name: 'Project 3 - Placeholder',
    description:
      'Keep an eye on this section, I’ll be updating soon with exciting new projects!',
    link: { href: 'https://github.com/amarcuccio', label: 'github.com' },
    logo: hourglass,
  },
  {
    key: 'project0004',
    name: 'Project 4 - Placeholder',
    description:
      'Keep an eye on this section, I’ll be updating soon with exciting new projects!',
    link: { href: 'https://github.com/amarcuccio', label: 'github.com' },
    logo: hourglass,
  },
  {
    key: 'project0005',
    name: 'Project 5 - Placeholder',
    description:
      'Keep an eye on this section, I’ll be updating soon with exciting new projects!',
    link: { href: 'https://github.com/amarcuccio', label: 'github.com' },
    logo: hourglass,
  },
  {
    key: 'project0006',
    name: 'Project 6 - Placeholder',
    description:
      'Keep an eye on this section, I’ll be updating soon with exciting new projects!',
    link: { href: 'https://github.com/amarcuccio', label: 'github.com' },
    logo: hourglass,
  },
]

export const resumeList = [
  {
    company: 'Cambrian College',
    title: 'IT Technician',
    logo: logoCambrian,
    start: '2021',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Health Sciences North',
    title: 'Systems Analyst',
    logo: logoHSN,
    start: '2021',
    end: '2021',
  },
  {
    company: 'Cambrian College',
    title: 'Programmer',
    logo: logoCambrian,
    start: '2017',
    end: '2021',
  },
  {
    company: 'Cambrian College',
    title: 'IT Technician',
    logo: logoCambrian,
    start: '2016',
    end: '2017',
  },
  {
    company: 'Health Sciences North',
    title: 'Information Technologist',
    logo: logoHSN,
    start: '2014',
    end: '2016',
  },
  {
    company: 'ECM Networks',
    title: 'Automation Analyst',
    logo: logoECM,
    start: '2011',
    end: '2014',
  },
]

export const educationList = [
  {
    institution: 'Cambrian College',
    program: 'Business Analytics',
    logo: logoCambrian,
    start: '2023',
    end: '2024',
  },
  {
    institution: 'Cambrian College',
    program: 'Business',
    logo: logoCambrian,
    start: '2019',
    end: '2021',
  },
  {
    institution: 'Cambrian College',
    program: 'Computer Systems Technology',
    logo: logoCambrian,
    start: '2007',
    end: '2010',
  },
]
