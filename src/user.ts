/**
 * A person in the home who may have access to control accessories and services in the home.
 */
export interface User {
  // Getting information about the user

  /**
   * The name of the user.
   */
  name: string;

  /**
   * A unique identifier for the user.
   */
  uniqueIdentifier: string;
}
