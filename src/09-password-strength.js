/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let criteriaCount = 0;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecial = false;

  if (typeof password !== "string" || password === "") return "weak";

  if (password.length >= 8) criteriaCount++;

  for (let i = 0; i < password.length; i++) {
    if (upper.includes(password[i])) hasUpperCase = true;
    if (lower.includes(password[i])) hasLowerCase = true;
    if (numbers.includes(password[i])) hasNumber = true;
    if (special.includes(password[i])) hasSpecial = true;
  }

  if (hasUpperCase) criteriaCount++;
  if (hasLowerCase) criteriaCount++;
  if (hasNumber) criteriaCount++;
  if (hasSpecial) criteriaCount++;

  if (criteriaCount <= 1) return "weak";
  else if (criteriaCount <= 3) return "medium";
  else if (criteriaCount == 4) return "strong";
  else if (criteriaCount >= 5) return "very strong";
}
