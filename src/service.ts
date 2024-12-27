import { Characteristic } from './characteristic';

/**
 * A controllable feature of an accessory, like a light attached to a garage door opener.
 */
export interface Service {
  // Getting service characteristics

  /**
   * An array of characteristics for the service.
   */
  characteristics: Characteristic[];

  // Getting the service type

  /**
   * The type of the service.
   */
  serviceType: string;
}
