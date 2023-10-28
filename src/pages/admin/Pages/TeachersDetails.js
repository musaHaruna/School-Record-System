import '../../../assets/css/admin/teachersPage.css'
import Wrapper from '../../../assets/css/admin/TeachersDetails'
import profile from '../../../assets/images/avatar.png'
import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import Overview from '../../../components/admin/teachers-details/Overview'

// import { useNavigate } from 'react-router-dom'

const TeachersDetails = () => {
  // const [selectedFile, setSelectedFile] = useState(null)
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const navigate = useNavigate()

  // function showModal() {
  //   setIsModalOpen(true)
  // }
  // function closeModal() {
  //   setIsModalOpen(false)
  // }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]
  //   setSelectedFile(file)
  // }

  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <article className='admin-dashboard teachers-page'>
      <section className='admin-dashboard-heading'>
        <h1>Teachers Details</h1>
        <p>
          <span className='gray'>Teahcers</span>/ <span>Teachers Details</span>
        </p>
      </section>
      <Wrapper>
        <h2>Profile</h2>
        <div className='banner-bg'></div>
        <div className='profile-summary'>
          <div className='profile-info'>
            <div className='profile-img'>
              <img src={profile} alt='profile' />
            </div>
            <div>
              <h2>Janelle Levi</h2>
              <p>Janellelevi@gmail.com</p>
            </div>
          </div>
          <div>
            <button className='import-btn'>
              <AiOutlineEdit /> Edit Profile
            </button>
          </div>
        </div>
        <section className='profile-details'>
          <article>
            <section className='tabs'>
              <div
                onClick={() => setActiveTab('Overview')}
                className={`tab-btn ${
                  activeTab === 'Overview' ? 'active' : ''
                }`}
              >
                <h4>Overview</h4>
              </div>
              <div
                onClick={() => setActiveTab('Experiences')}
                className={`tab-btn ${
                  activeTab === 'Experiences' ? 'active' : ''
                }`}
              >
                <h4>Experiences</h4>
              </div>
              <div
                onClick={() => setActiveTab('Classes')}
                className={`tab-btn ${activeTab === 'Classes' ? 'active' : ''}`}
              >
                <h4>Classes</h4>
              </div>
              <div
                onClick={() => setActiveTab('Subjects')}
                className={`tab-btn ${
                  activeTab === 'Subjects' ? 'active' : ''
                }`}
              >
                <h4>Subjects</h4>
              </div>
            </section>

            <section>
              {activeTab === 'Overview' && <Overview />}
              {activeTab === 'Experiences' && 'Hello 2'}
              {activeTab === 'Classes' && 'Hello 3'}
              {activeTab === 'Subjects' && 'Hello 4'}
            </section>
          </article>
        </section>
      </Wrapper>
    </article>
  )
}

export default TeachersDetails
