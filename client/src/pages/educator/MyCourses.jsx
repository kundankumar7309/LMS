import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext)

  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
    setCourses(allCourses)
  }

  useEffect(() => {
    fetchEducatorCourses()
  }, []) // Added dependency array to avoid repeated fetching

  return courses ? (
    <div className='flex flex-col items-center justify-between h-screen pt-8 pb-0 md:p-8 md:pb-0'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-medium'>My Courses</h2>
        <div className='flex flex-col items-center w-full max-w-4xl overflow-auto bg-white border rounded-md border-gray-500/20'>
          <table className='table w-full overflow-hidden md:table-auto-fixed'>
            <thead className='text-sm text-left text-gray-900 border-b border-gray-500/20'>
              <tr>
                <th className='px-4 py-3 font-medium text-left text-gray-800 truncate'>All Courses</th>
                <th className='px-4 py-3 font-medium text-left text-gray-800 truncate'>Earning</th>
                <th className='px-4 py-3 font-medium text-left text-gray-800 truncate'>Students</th>
                <th className='px-4 py-3 font-medium text-left text-gray-800 truncate'>Published On</th>
              </tr>
            </thead>

            <tbody className='text-sm text-gray-500'>
              {courses.map((course) => (
                <tr key={course._id} className='border-b border-gray-500/20'>
                  <td className='flex items-center py-3 pl-2 space-x-3 truncate md:px-4 md:pl-4'>
                    <img src={course.courseThumbnail} alt="Course" className='w-16' />
                    <span className='hidden truncate md:block'>{course.courseTitle}</span>
                  </td>
                  <td className='px-4 py-3'>
                    {currency}
                    {Math.floor(
                      (course.enrolledStudents?.length || 0) * // Handle undefined `enrolledStudents`
                      (course.coursePrice - course.discount * course.coursePrice / 100)
                    )}
                  </td>
                  <td className='px-4 py-3'>{course.enrolledStudents?.length || 0}</td> {/* Handle undefined `enrolledStudents` */}
                  <td className='px-4 py-3'>
                    {new Date(course.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default MyCourses
