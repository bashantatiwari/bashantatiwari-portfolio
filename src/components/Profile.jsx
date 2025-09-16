import React from 'react'
import { motion } from 'framer-motion'
import ProfileCard from '../components/ProfileCard'
import profile from '/assets/Profile.png'
const Profile = () => {
  return (
    <>
      <motion.div
        className='pointer-events-auto'
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.05 }}
      >
        <ProfileCard
          name='Bashanta Tiwari'
          title='Full Stack Developer'
          handle='bashantatiwari'
          status='Online'
          contactText="Let's Connect"
          avatarUrl={profile}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => {
            window.location.href =
              "mailto:tiwaribashanta9@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Bashanta,"
          }}
        />
      </motion.div>
    </>
  )
}

export default Profile
