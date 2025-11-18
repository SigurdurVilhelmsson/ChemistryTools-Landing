/**
 * Teacher email whitelist
 * Teachers have access to all features including admin/editing tools
 * Students (anyone not on this list) have limited access
 *
 * Last updated: 2025-11-18
 * To add a teacher: Add email to array below
 */
export const TEACHER_EMAILS = [
  'sigurdurev@kvenno.is',
  // Add more teacher emails here
  // 'teacher2@kvenno.is',
  // 'teacher3@kvenno.is',
];

/**
 * Check if email belongs to a teacher
 * @param {string} email - User's email address
 * @returns {boolean} - True if teacher, false if student
 */
export const isTeacher = (email) => {
  if (!email) return false;
  return TEACHER_EMAILS.includes(email.toLowerCase().trim());
};

/**
 * Get user role based on email
 * @param {string} email - User's email address
 * @returns {'teacher' | 'student'} - User's role
 */
export const getUserRole = (email) => {
  return isTeacher(email) ? 'teacher' : 'student';
};
