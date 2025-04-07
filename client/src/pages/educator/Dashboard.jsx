import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(null)
  const {currency} = useContext(AppContext)

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData)
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return dashboardData ? (
    <div className='flex flex-col items-center justify-between gap-8 p-4 pt-8 pb-0 min-h--screen md:p-8 md:pb-0'>
       <div className='space-y-5'>
          <div className='flex flex-wrap items-center gap-5'>
            
            <div className='flex items-center w-56 gap-3 p-4 border border-blue-500 rounded-md shadow-card'>
              <img src={assets.patients_icon} alt="patient_icon" />
              <div>
                <p className='text-2xl font-medium text-gray-600'>
                  {dashboardData.enrolledStudentsData.length}</p>
                  <p className='text-base text-gray-500'>Total Enrollments</p>
              </div>
            </div>
            
            
            <div className='flex items-center w-56 gap-3 p-4 border border-blue-500 rounded-md shadow-card'>
              <img src={assets.appointments_icon} alt="patient_icon" />
              <div>
                <p className='text-2xl font-medium text-gray-600'>
                  {dashboardData.totalCourses}</p>
                  <p className='text-base text-gray-500'>Total Courses</p>
              </div>
            </div>
            
            
            <div className='flex items-center w-56 gap-3 p-4 border border-blue-500 rounded-md shadow-card'>
              <img src={assets.earning_icon} alt="patient_icon" />
              <div>
                <p className='text-2xl font-medium text-gray-600'>{currency}
                  {dashboardData.totalEarnings}</p>
                  <p className='text-base text-gray-500'>Total Earning</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className='pb-4 text-lg font-medium'>Latest Enrollments</h2>
            <div className='flex flex-col items-center w-full max-w-4xl overflow-hidden bg-white border rounded-md border-gray-500/20'>
              <table className='w-full overflow-hidden table-fixed md:table-auto'>
                  <thead className='text-sm text-left text-gray-900 border border-b border-gray-500/20'>
                    <tr>
                      <th className='hidden px-4 py-3 font-semibold text-center sm:table-cell'>#</th>
                      <th className='px-4 py-3 font-semibold'>Student Name</th>
                      <th className='px-4 py-3 font-semibold'>Course Title</th>
                    </tr>
                  </thead>
                  <tbody className='text-sm text-gray-500'>
                    {dashboardData.enrolledStudentsData.map((item, index) => (
                      <tr key={index} className='border border-b border-gray-500/20'>
                        <td className='flex items-center px-2 py-3 space-x-3 md:px-4'>{index + 1}</td>
                        <td className='flex items-center px-2 px-3 space-x-3 md:px-4'>
                          <img 
                          src={item.student.imageUrl} 
                          alt="Profile" 
                          className='rounded-full w-9 h-9'/>
                          <span className='truncate'>{item.student.name}</span>
                        </td>
                        <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>
          </div>
        </div> 
    </div>
  ) : <Loading/>
}

export default Dashboard