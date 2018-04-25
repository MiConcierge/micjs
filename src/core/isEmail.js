/* eslint-disable no-useless-escape */
const EMAIL_REGEX = /^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i
/* eslint-enable no-useless-escape */

export default function isEmail (email) {
  return EMAIL_REGEX.test(email)
}
