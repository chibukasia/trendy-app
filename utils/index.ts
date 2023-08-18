import { z } from 'zod'

export const isValidPassword = (password: string) => {
    const passwordSchema = z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50, { message: 'Password must be less than 50 characters long' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/,
      { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one of the following special characters: @ $ ! % * ? & .' }
    );
  
      try {
        const result = passwordSchema.safeParse(password)

        if (!result.success) {
            let errorMessage = result.error.issues[0].message;
            return { isValid: false, errorMessage };
        } else {
            return { isValid: true, errorMessage: '' }
        }
      } catch (e) {
        let errorMessage = "An error occurred. Please try again later";
        return { isValid: false, errorMessage }
      }
  }
  
  /**
   * @name isValidEmail
 * @param email 
   * @returns  {isValid:boolean, errorMessage: string}
   */
  export const isValidEmail = (email: string) => {
      const emailSchema = z
      .string()
      .email({ message: 'Please enter a valid email address' })
      .max(50, { message: 'Email must be less than 50 characters long' });
  
      try {
        const result = emailSchema.safeParse(email)

        if (!result.success) {
            let errorMessage = result.error.issues[0].message;
            return { isValid: false, errorMessage };
        } else {
            return { isValid: true, errorMessage: '' }
        }
      } catch (e) {
        let errorMessage = "An error occurred. Please try again later";
        return { isValid: false, errorMessage }
      }
}
