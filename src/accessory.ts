import { Room } from './room';
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

  // Locating an accessory

  /**
   * The room containing the accessory.
   */
  room: Room | void;

  // Getting accessory state

  /**
   * A Boolean value indicating whether the accessory is blocked.
   */
  isBlocked: boolean;

  // Controlling accessory features

  /**
   * An array of services provided by the accessory.
   */
  services: Service[];

  // Getting manufacturer information

  /**
   * The manufacturer of the accessory.
   */
  manufacturer: string | void;

  /**
   * The model name of the accessory.
   */
  model: string | void;
}
