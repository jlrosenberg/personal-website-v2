type ExperienceType = `Education` | `Internship` | `Co-op` | `Job`;

export interface Experience {
  description?: string | Array<string>;
  endDate: Date | null;
  location: string;
  name: string;
  startDate: Date;
  title: string;
  type: ExperienceType;
}

const getExperiences = (): Array<Experience> => {
  return [
    {
      endDate: new Date(`2013-09-01`),
      location: `Freehold, NJ`,
      name: `Computer Science Academy`,
      startDate: new Date(`2017-06-30`),
      title: `Student`,
      type: `Education`,
    },
    {
      endDate: new Date(`2018-08-31`),
      location: `Freehold, NJ`,
      name: `The RockNRoll Chorus`,
      startDate: new Date(`2015-05-01`),
      title: `Web Developer`,
      type: `Job`,
    },
    {
      endDate: null,
      location: `Boston, MA`,
      name: `Northeastern University`,
      startDate: new Date(`2017-09-01`),
      title: `Student, B.S. of Computer Sciences`,
      type: `Education`,
    },
    {
      endDate: new Date(`2018-06-30`),
      location: `Boston, MA`,
      name: `Khoury College of Computer Sciences`,
      startDate: new Date(`2018-05-01`),
      title: `Course Assistant for Object Oriented Design`,
      type: `Job`,
    },
    {
      endDate: new Date(`2018-12-15`),
      location: `Boston, MA`,
      name: `Khoury College of Computer Sciences`,
      startDate: new Date(`2018-09-01`),
      title: `Course Assistant for Object Oriented Design`,
      type: `Job`,
    },
    {
      endDate: new Date(`2019-08-31`),
      location: `Boston, MA`,
      name: `Wellframe`,
      startDate: new Date(`2019-01-01`),
      title: `Software Engineering Co-op`,
      type: `Co-op`,
    },
    {
      endDate: new Date(`2020-06-30`),
      location: `Boston, MA`,
      name: `NeighborSchools`,
      startDate: new Date(`2020-01-01`),
      title: `Software Engineer`,
      type: `Co-op`,
    },
  ];
};

export default getExperiences;
