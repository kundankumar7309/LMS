import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className='px-8 py-16 md:px-40'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='mt-3 text-sm text-gray-500 md:text-base'>
        Discover our top-rated courses across various categories. From coding and
        design to business and wellness, our courses are crafted to deliver results.
      </p>

      <div className='grid gap-4 px-4 grid-cols-auto md:px-0 md:my-10'>
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={'/course-list'}
        onClick={() => window.scrollTo(0, 0)}
        className='px-10 py-3 mt-12 text-gray-500 border rounded border-gray'
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
