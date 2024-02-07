import api from '../../services/index.js'

class UserOBJ {
  //update profile
  updateProfile = async (data) => {
    try {
      // Check if data is not empty

      const response = await api.put('api/users/profile', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //update about
  updateAbout = async (data) => {
    try {
      // Check if data is not empty

      const response = await api.put('api/users/about', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //add education
  addEducation = async (data) => {
    try {
      // Check if data is not empty

      const response = await api.put('api/users/education', data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
  //update education
  updateEducation = async (params, data) => {
    try {
      // Check if data is not empty

      const response = await api.put(`api/users/education/${params}`, data)
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get app members
  getMembers = async () => {
    try {
      // Check if data is not empty

      const response = await api.get('api/users/members')
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }

  //Get user's feeds
  getFeeds = async (page, limit) => {
    try {
      // Check if data is not empty

      const response = await api.get(
        `api/users/feeds?page=${page}&limit=${limit}`
      )
      return response.data
    } catch (err) {
      throw err?.response?.data || err.message
    }
  }
}

const user = new UserOBJ()
export default user
