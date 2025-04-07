import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled} from '../../assets/assets'
import Loading from '../../components/student/Loading'

const StudentsEnrolled = () => {

  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudents = async() => {
    setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(() => {
    fetchEnrolledStudents()
  }, [])

  return enrolledStudents ?(
    <div className='flex flex-col items-center justify-between min-h-screen p-4 pt-8 pb-0 md:p-8 md:pb-0'>
      <div className='flex flex-col items-center w-full max-w-4xl overflow-hidden bg-white border rounded-md border-gray-500/20'>
        <table className='w-full pb-4 overflow-hidden table-fixed md:table-auto'>
          <thead className='text-sm text-left text-gray-900 border-b border-gray-500/20' >
            <tr>
              <th className='hidden px-4 py-3 font-semibold text-center sm:table-cell'>#</th>
              <th className='px-4 py-3 font-semibold'>Student Name</th>
              <th className='px-4 py-3 font-semibold'>Course Title</th>
              <th className='px-4 py-3 font-semibold sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-500'>
            {enrolledStudents.map((item, index) => (
              <tr key={index} className='border-b border-gray-500/20'>
                <td className='hidden px-4 py-3 text-center sm:table-cell'>
                {index + 1}
                </td>
                <td className='flex items-center px-4 py-3 space-x-3'>
                  <img 
                  src={item.student.imageUrl} 
                  alt=""
                  className='rounded-full w-9 h-9' />
                  <span className='truncate'>{item.student.name}</span>
                </td>
                <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                <td className='hidden px-4 py-3 sm:table-cell'>
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading/>
}

export default StudentsEnrolled