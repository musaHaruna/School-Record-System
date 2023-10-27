import Wrapper from '../../../assets/css/admin/Modal'

const AddTeachersModal = ({ onClose, isModalOpen }) => {
  if (!isModalOpen) {
    return null
  }
  return (
    <Wrapper>
      <section className='modal'>
        <section className='content'>
          <section>
            <div>
              <label>Class</label>
              <input type='text' />
            </div>
            <div>
              <label>Class</label>
              <input type='text' />
            </div>
            <div>
              <label>Class</label>
              <input type='text' />
            </div>
            <div>
              <label>Class</label>
              <input type='text' />
            </div>
            <div>
              <label>Class</label>
              <input type='text' />
            </div>
          </section>

          <section>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>

            <div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
            <div className='personal-details'>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
              <div>
                <label>Class</label>
                <input type='text' />
              </div>
            </div>
          </section>
          <button onClick={onClose}>Close</button>
        </section>
      </section>
    </Wrapper>
  )
}
export default AddTeachersModal
