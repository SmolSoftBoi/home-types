import { Service } from './service';

export interface Accessory {
  // Identifying accessories

  /**
   * The name of the accessory.
   */
  name: string;

  /**
   * A unique identifier for the accessory.
   */
  uniqueIdentifier: string;

  // Controlling accessory features

  /**
   * An array of services provided by the accessory.
   */
  services: Service[];
}
