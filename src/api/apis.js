import { account, storage, databases, Query, avatars, ID } from '@/utils/appwrite'
import { LOGGED_IN_KEY } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookieHelper'
import { STATUS_ENUM, CONTENT_TYPE_ENUM } from '../utils/constants'
import store from '../store/index'

const DB_ID = import.meta.env.VITE_DATABASE_ID
const BUCKET_ID = import.meta.env.VITE_IMAGE_BUCKET_ID

const middleWare = async (fun) => {
  let response = null
  try {
    const apiResult = await fun()
    response = {
      success: true,
      data: apiResult
    }
  } catch (error) {
    if (error.code == 401) {
      deleteCookie(LOGGED_IN_KEY)
      logout()
      window.location.replace('/login')
    }
    response = {
      success: false,
      error
    }
  }
  return response
}
const getDocuments = async (COLLECTION_ID, QUERRY) => {
  let response = await middleWare(() => databases.listDocuments(DB_ID, COLLECTION_ID, QUERRY))
  return response
}

const getSingleDocument = async (COLLECTION_ID, DOCUMENT_ID, QUERRY) => {
  let response = await middleWare(() =>
    databases.getDocument(DB_ID, COLLECTION_ID, DOCUMENT_ID, QUERRY)
  )
  return response
}

const createDocuments = async (COLLECTION_ID, paylaod) => {
  let response = await middleWare(() =>
    databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), paylaod)
  )
  return response
}

const updateDocuments = async (COLLECTION_ID, DOCUMENT_ID, paylaod) => {
  let response = await middleWare(() =>
    databases.updateDocument(DB_ID, COLLECTION_ID, DOCUMENT_ID, paylaod)
  )
  return response
}

const getAvatar = async () => {
  let response = await middleWare(() => avatars.getInitials())
  return response
}

const deleteDocuments = async (COLLECTION_ID, DOCUMENT_ID) => {
  let response = await middleWare(() => databases.deleteDocument(DB_ID, COLLECTION_ID, DOCUMENT_ID))
  return response
}

const login = async (email, password) => {
  let response = await middleWare(() => account.createEmailSession(email, password))
  return response
}

const logout = async () => {
  let response = await middleWare(() => account.deleteSessions())
  return response
}

const signup = async (email, password, name) => {
  let response = await middleWare(() => account.create(ID.unique(), email, password, name))
  return response
}

const sendVerificationEmail = async (redirectinLink) => {
  let response = await middleWare(() => account.createVerification(redirectinLink))
  return response
}

const verifyEmail = async (userId, secret) => {
  let response = await middleWare(() => account.updateVerification(userId, secret))
  return response
}

const sendPasswordRecoveryEmail = async (email, redirectinLink) => {
  let response = await middleWare(() => account.createRecovery(email, redirectinLink))
  return response
}

const changePasswordUsingEmailLink = async (userId, secret, password) => {
  let response = await middleWare(() => account.updateRecovery(userId, secret, password, password))
  return response
}

const changePassword = async (password, oldpassword) => {
  let response = await middleWare(() => account.updatePassword(password, oldpassword))
  return response
}

const changeEmail = async (email, password) => {
  let response = await middleWare(() => account.updateEmail(email, password))
  return response
}

const changeName = async (name) => {
  let response = await middleWare(() => account.updateName(name))
  return response
}

const changeUserName = async (newUserName) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const DOCUMENT_ID = store.getters['auth/getUserName']
  let response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  if (response.success) {
    response = response.data
    const UID = store.getters['auth/getUserId']
    const paylaod = { uid: UID, count: response.count }
    response = await deleteDocuments(COLLECTION_ID, DOCUMENT_ID)
    if (response.success) {
      response = await middleWare(() =>
        databases.createDocument(DB_ID, COLLECTION_ID, newUserName, paylaod)
      )
    }
  }
  return response
}

const getAccount = async () => {
  let response = await middleWare(() => account.get())
  return response
}

const getFileUrlPostUpload = async (file) => {
  let response = await uploadFile(file)
  if (response.success) {
    const fileId = response.data.$id
    response = await getFileUrlBaseOnFileId(fileId)
  }
  return response
}

const getFileUrlBaseOnFileId = async (fileId) => {
  let response = await middleWare(() => storage.getFilePreview(BUCKET_ID, fileId))
  return response
}

const uploadFile = async (file) => {
  let response = await middleWare(() => storage.createFile(BUCKET_ID, ID.unique(), file))
  return response
}

const getProjects = async (status, pageNo, customLimit) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const UID = store.getters['auth/getUserId']
  const LIMIT = customLimit ? customLimit : import.meta.env.VITE_PAGINATION_LIMIT
  const OFFSET = (pageNo - 1) * LIMIT
  const QUERRY =
    status != STATUS_ENUM.ALL
      ? [
          Query.equal('uid', [UID]),
          Query.equal('status', [status]),
          Query.orderDesc('published_on'),
          Query.limit(LIMIT),
          Query.offset(OFFSET)
        ]
      : [
          Query.equal('uid', [UID]),
          Query.orderDesc('published_on'),
          Query.limit(LIMIT),
          Query.offset(OFFSET)
        ]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const createProject = async (paylaod) => {
  const UID = store.getters['auth/getUserId']
  const finalPayload = {
    uid: UID,
    ...paylaod
  }
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  let response = await createDocuments(COLLECTION_ID, finalPayload)
  if (response.success) {
    response = await addContentCounts(CONTENT_TYPE_ENUM.PROJECT, finalPayload.status)
  }
  return response
}

const editProject = async (documentId, paylaod, previousStatus) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  let response = await updateDocuments(COLLECTION_ID, documentId, paylaod)
  if (response.success) {
    response = await editContentCounts(CONTENT_TYPE_ENUM.PROJECT, previousStatus, paylaod.status)
  }
  return response
}

const deleteProject = async (documentId, state) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  let response = await deleteDocuments(COLLECTION_ID, documentId)
  if (response.success) {
    response = await deleteContentCounts(CONTENT_TYPE_ENUM.PROJECT, state)
  }
  return response
}

const getBlogs = async (status, pageNo, customLimit) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const UID = store.getters['auth/getUserId']
  const LIMIT = customLimit ? customLimit : import.meta.env.VITE_PAGINATION_LIMIT
  const OFFSET = (pageNo - 1) * LIMIT
  const QUERRY =
    status != STATUS_ENUM.ALL
      ? [
          Query.equal('uid', [UID]),
          Query.equal('status', [status]),
          Query.orderDesc('published_on'),
          Query.limit(LIMIT),
          Query.offset(OFFSET)
        ]
      : [
          Query.equal('uid', [UID]),
          Query.orderDesc('published_on'),
          Query.limit(LIMIT),
          Query.offset(OFFSET)
        ]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getBlog = async (DOCUMENT_ID) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  return response
}

const getProject = async (DOCUMENT_ID) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  return response
}

const createBlog = async (paylaod) => {
  const UID = store.getters['auth/getUserId']
  const finalPayload = {
    uid: UID,
    ...paylaod
  }
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  let response = await createDocuments(COLLECTION_ID, finalPayload)
  if (response.success) {
    response = await addContentCounts(CONTENT_TYPE_ENUM.BLOG, finalPayload.status)
  }
  return response
}

const editBlog = async (documentId, paylaod, previousStatus) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  let response = await updateDocuments(COLLECTION_ID, documentId, paylaod)
  if (response.success) {
    response = await editContentCounts(CONTENT_TYPE_ENUM.BLOG, previousStatus, paylaod.status)
  }
  return response
}

const deleteBlog = async (documentId, state) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  let response = await deleteDocuments(COLLECTION_ID, documentId)
  if (response.success) {
    response = await deleteContentCounts(CONTENT_TYPE_ENUM.BLOG, state)
  }
  return response
}

const getAllPortfolios = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [Query.equal('uid', [UID]), Query.orderDesc('$createdAt')]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getActivePortfolio = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [
    Query.equal('uid', [UID]),
    Query.equal('active', [true]),
    Query.orderDesc('$createdAt')
  ]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getUserIdFromUserName = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const response = await getSingleDocument(COLLECTION_ID, documentId)
  return response
}

const getUserNameFromUserId = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [Query.equal('uid', [UID])]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getProtfolioDocument = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const response = await getSingleDocument(COLLECTION_ID, documentId)
  return response
}

const addTemplateToProfile = async (payload) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const DOCUMENT_ID = store.getters['auth/getUserName']
  let response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  if (response.success) {
    if (response.data.count >= 10) {
      return {
        error: 'Limit Exceeded',
        success: false
      }
    }
    let existingCount = response.data.count
    existingCount++
    const pl = {
      count: existingCount
    }
    response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, pl)
    if (response.success) {
      const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
      const UID = store.getters['auth/getUserId']
      const finalPayload = {
        uid: UID,
        ...payload
      }
      response = await createDocuments(COLLECTION_ID, finalPayload)
    }
  }
  return response
}

const deletePortfolio = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  let response = await deleteDocuments(COLLECTION_ID, documentId)
  if (response.success) {
    const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
    const DOCUMENT_ID = store.getters['auth/getUserName']
    response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
    if (response.success) {
      let existingCount = response.data.count
      existingCount--
      const pl = {
        count: existingCount
      }
      response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, pl)
    }
  }
  return response
}

const toggleSiteActiveStatus = async (documentId, isActive) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const pl = {
    active: !isActive
  }
  let response = await updateDocuments(COLLECTION_ID, documentId, pl)
  if (response.success && !isActive) {
    response = await getActivePortfolio()
    if (response.success) {
      const data = response.data.documents
      const pl2 = {
        active: false
      }
      for (let i = 0; i < data.length; i++) {
        if (data.$id != documentId) {
          await updateDocuments(COLLECTION_ID, data.$id, pl2)
        }
      }
    }
  }
  return response
}

const updatePortfolio = async (DOCUMENT_ID, payload) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  let response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, payload)
  return response
}

const overrideTemplateData = async (payload) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  let response = await createDocuments(COLLECTION_ID, payload)
  return response
}

const updateUserSettings = async (paylaod) => {
  let response
  if (paylaod.name) {
    response = await changeName(paylaod.name)
    if (!response.success) return response
  }

  if (paylaod.email) {
    response = await changeEmail(paylaod.email, paylaod.password)
    if (!response.success) return response
  }

  if (paylaod.userName) {
    response = await changeUserName(paylaod.userName)
    if (!response.success) return response
  }

  return response
}

const createUserDetailsLink = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const UID = store.getters['auth/getUserId']
  const payload = { uid: UID, count: 0 }
  let response = await middleWare(() =>
    databases.createDocument(DB_ID, COLLECTION_ID, documentId, payload)
  )
  return response
}

const checkUserNameExsists = async (userName) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  let response = await getSingleDocument(COLLECTION_ID, userName)
  return response
}

const addContentCounts = async (contentType, status) => {
  const COLLECTION_ID =
    contentType == CONTENT_TYPE_ENUM.BLOG
      ? import.meta.env.VITE_COLLECTION_BLOG_COUNT
      : import.meta.env.VITE_COLLECTION_PROJECT_COUNT
  const UID = store.getters['auth/getUserId']
  let response = await getSingleDocument(COLLECTION_ID, UID)
  if (response.success) {
    // update
    const paylaod = {
      online: status == STATUS_ENUM.ONLINE ? response.data.online + 1 : response.data.online,
      draft: status == STATUS_ENUM.DRAFT ? response.data.draft + 1 : response.data.draft,
      all: response.data.all + 1
    }
    response = await updateDocuments(COLLECTION_ID, UID, paylaod)
  } else {
    // create if required
    const paylaod = {
      online: status == STATUS_ENUM.ONLINE ? 1 : 0,
      draft: status == STATUS_ENUM.DRAFT ? 1 : 0,
      all: 1
    }
    response = await middleWare(() => databases.createDocument(DB_ID, COLLECTION_ID, UID, paylaod))
  }
  return response
}

const editContentCounts = async (contentType, previousStatus, currentStatus) => {
  if (previousStatus == currentStatus) {
    return {
      success: true,
      data: true
    }
  }
  const COLLECTION_ID =
    contentType == CONTENT_TYPE_ENUM.BLOG
      ? import.meta.env.VITE_COLLECTION_BLOG_COUNT
      : import.meta.env.VITE_COLLECTION_PROJECT_COUNT
  const UID = store.getters['auth/getUserId']
  let response = await getSingleDocument(COLLECTION_ID, UID)
  if (response.success) {
    // update
    let onlineCount = response.data.online
    let draftCount = response.data.draft
    if (previousStatus == STATUS_ENUM.ONLINE) {
      onlineCount--
      draftCount++
    } else {
      onlineCount++
      draftCount--
    }
    const paylaod = {
      online: onlineCount,
      draft: draftCount,
      all: response.data.all
    }
    response = await updateDocuments(COLLECTION_ID, UID, paylaod)
  }
  return response
}

const deleteContentCounts = async (contentType, state) => {
  const COLLECTION_ID =
    contentType == CONTENT_TYPE_ENUM.BLOG
      ? import.meta.env.VITE_COLLECTION_BLOG_COUNT
      : import.meta.env.VITE_COLLECTION_PROJECT_COUNT
  const UID = store.getters['auth/getUserId']
  let response = await getSingleDocument(COLLECTION_ID, UID)
  if (response.success) {
    const paylaod = {
      online: state == STATUS_ENUM.ONLINE ? response.data.online - 1 : response.data.online,
      draft: state == STATUS_ENUM.DRAFT ? response.data.draft - 1 : response.data.draft,
      all: response.data.all - 1
    }
    response = await updateDocuments(COLLECTION_ID, UID, paylaod)
  }
  return response
}

const createTotalItemContentCountDocumentForNewUser = async () => {
  const COLLECTION_ID_BLOG = import.meta.env.VITE_COLLECTION_BLOG_COUNT
  const COLLECTION_ID_PROJECT = import.meta.env.VITE_COLLECTION_PROJECT_COUNT
  const UID = store.getters['auth/getUserId']
  const paylaod = {
    online: 0,
    draft: 0,
    all: 0
  }
  const projectResp = middleWare(() =>
    databases.createDocument(DB_ID, COLLECTION_ID_PROJECT, UID, paylaod)
  )
  const blogResp = middleWare(() =>
    databases.createDocument(DB_ID, COLLECTION_ID_BLOG, UID, paylaod)
  )
  const ctaCount = createCTAQuerryCount()
  return Promise.all([projectResp, blogResp, ctaCount])
}

const getTotalItemContentCount = async (contentType) => {
  const COLLECTION_ID =
    contentType == CONTENT_TYPE_ENUM.BLOG
      ? import.meta.env.VITE_COLLECTION_BLOG_COUNT
      : import.meta.env.VITE_COLLECTION_PROJECT_COUNT
  const UID = store.getters['auth/getUserId']
  let response = await getSingleDocument(COLLECTION_ID, UID)
  return response
}

const createCTAQuerry = async (paylaod) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA
  const UID = store.getters['auth/getUserId']
  const finalPayload = {
    uid: UID,
    ...paylaod
  }
  let response = await createDocuments(COLLECTION_ID, finalPayload)
  if (response.success) {
    response = await getCTAQuerryCount()
    if (response.success) {
      const paylaod = { all: response.data.all + 1 }
      response = await editCTAQuerryCount(paylaod)
    }
  }
  return response
}

const getCTAQuerry = async (pageNo) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA
  const UID = store.getters['auth/getUserId']
  const LIMIT = import.meta.env.VITE_PAGINATION_LIMIT
  const OFFSET = (pageNo - 1) * LIMIT
  const QUERRY = [Query.equal('uid', [UID]), Query.limit(LIMIT), Query.offset(OFFSET)]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const deleteCTAQuerry = async (DOCUMENT_ID) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA
  let response = await deleteDocuments(COLLECTION_ID, DOCUMENT_ID)
  if (response.success) {
    response = await getCTAQuerryCount()
    if (response.success) {
      const paylaod = { all: response.data.all - 1 }
      response = await editCTAQuerryCount(paylaod)
    }
  }
  return response
}

const editCTAQuerry = async (DOCUMENT_ID, paylaod) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA
  const UID = store.getters['auth/getUserId']
  const finalPayload = {
    uid: UID,
    ...paylaod
  }
  const response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, finalPayload)
  return response
}

const createCTAQuerryCount = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA_COUNT
  const DOCUMENT_ID = store.getters['auth/getUserId']
  const paylaod = { all: 0 }
  const response = await middleWare(() =>
    databases.createDocument(DB_ID, COLLECTION_ID, DOCUMENT_ID, paylaod)
  )
  return response
}

const getCTAQuerryCount = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA_COUNT
  const DOCUMENT_ID = store.getters['auth/getUserId']
  const response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  return response
}

// const deleteCTAQuerryCount = async (DOCUMENT_ID) => {
//   const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA
//   const response = await deleteDocuments(COLLECTION_ID, DOCUMENT_ID)
//   return response
// }

const editCTAQuerryCount = async (paylaod) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_CTA_COUNT
  const DOCUMENT_ID = store.getters['auth/getUserId']
  const response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, paylaod)
  return response
}

export {
  getAccount,
  getAvatar,
  login,
  logout,
  signup,
  sendVerificationEmail,
  verifyEmail,
  sendPasswordRecoveryEmail,
  changePasswordUsingEmailLink,
  changePassword,
  getProjects,
  createProject,
  editProject,
  deleteProject,
  getBlogs,
  createBlog,
  deleteBlog,
  editBlog,
  getAllPortfolios,
  getActivePortfolio,
  getUserIdFromUserName,
  getProtfolioDocument,
  getUserNameFromUserId,
  getFileUrlBaseOnFileId,
  uploadFile,
  getFileUrlPostUpload,
  addTemplateToProfile,
  overrideTemplateData,
  deletePortfolio,
  toggleSiteActiveStatus,
  getProject,
  getBlog,
  updatePortfolio,
  updateUserSettings,
  checkUserNameExsists,
  createUserDetailsLink,
  getTotalItemContentCount,
  createTotalItemContentCountDocumentForNewUser,
  createCTAQuerry,
  getCTAQuerry,
  deleteCTAQuerry,
  editCTAQuerry,
  getCTAQuerryCount
}
