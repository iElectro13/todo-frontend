import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const Landing = ({title}) => {
  return (
    <MainLayout title={title}>
      <p className='text-neutral-700 text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam voluptas tempora illum perferendis ea, quas neque ducimus obcaecati sequi voluptates, quis placeat vero, temporibus dicta. Dolorem officiis incidunt neque sit atque ducimus dignissimos pariatur, assumenda officia velit. Dolore, iure!
      </p>
      <Link to="/tasks" className='btn btn-primary'>Watch all tasks!</Link>
    </MainLayout>
  )
}

export default Landing